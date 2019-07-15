// const Ideas =require('../models/ideas.js').Ideas;
// const IdeaBlob = require('../models/blob').IdeaBlob;
// const Repo = require('../models/repo');
const mongoose = require('mongoose');
const config = require('../config');

const stats = {
  newIdea : 40,
  newBlob: 80,
  upvoteIdea: 70,
  downvoteIdea: -70,
  upvoteBlob: 15,
  downvoteBlob: -15
}

/**
* Query server for batches of ideas. Default to 50 ideas at a time, need to specify last idea seen for PAGINATION
* can include filteration by tag
* @param limit - # of ideas to returns
* @param last - mongoose id of last idea displayed on the page
* @returns void
*/
export function getAll(limit, last, tag){
  return new Promise((resolve, reject) => {
    let query= {}
    if (tag != null) {query.tags = tag};
    if (mongoose.Types.ObjectId.isValid(last)) {query._id = {$lt: last}};

    Ideas
    .find(query)
    .sort({date: -1})
    .limit(limit)
    .populate({path : 'creator', select:'_id name username avatar'})
    .then(data => {
      if (data == null) {
        reject('No ideas found');
      }
      else {
        resolve(data);
      }
    })
    .catch(err => {
      reject(['Mongoose',err]);
    });
  })
}


/**
* Votes ( up, down) an idea
* @param {String}   which - idea / blob
* @param {String}   up - 1 / 0
* @param {ObjectID} id - Mongoose ID of the idea
* @param {ObjectID} user - Mongoose ID of the user voting
* @returns {JSON} voted project
*/
export async function vote(which, up, id, user) {
  if (up == undefined || id ==undefined) {throw 'Missing some request parameters'}
  let obj = {};
  if (which === 'idea') {
    const vote = (up === '1') ? stats.upvoteIdea : stats.downvoteIdea;
    obj = await Ideas.vote(user, id, up, 'ideas').catch(err => {throw err});
    await Ideas.addStats(id, vote).catch(err => {throw err});
  }
  else {
    const vote = (up === '1') ? stats.upvoteBlob : stats.downvoteBlob;
    obj = await IdeaBlob.vote(user, id, up, 'ideaBlob').catch(err => {throw err});
    await Ideas.addStats(id, vote).catch(err => {throw err});
  }
  return obj;
}



/**
* Get a single idea + blobs based on its mongoose id
* @param id - mongoose id of the idea
* @returns void
*/
export async function getIdea(id){
    if(!mongoose.Types.ObjectId.isValid(id)) {throw ('Specified idea ID is invalid')}

    const idea = await Ideas.findById(id)
      .catch(err => {throw (err);})
    if (idea == null) {throw 'idea does not exist'}

    //populate blobs recursively
    if (idea.blobs[1]!==undefined) {
      const blobs = await populateBlobs(idea.blobs[1]);
      console.log('blobs', blobs)
      idea.blobs = (blobs===undefined) ? [] : blobs;
    }
    return idea
}


function populateBlobs(nestedArray) {
  async function p(blobs) {
    // console.log('blobs now: ', blobs)
    if (blobs.length == 0) {return}
    let tmp = [];
    for (let i = 0; i < blobs.length; i++) {
      tmp.push(blobs[i][0]);
    }
    const level = await IdeaBlob.find({'_id': {$in: tmp}}).catch(err => {console.log('find err:',err)});
    for (let j = 0; j < level.length; j++) {
      blobs[j][0] = level[j];
      if (blobs[j][1]) {
        blobs[j][1] = await p(blobs[j][1])
      }
    }
    return blobs;
  }
  return p(nestedArray);
}


/**
* Get a single idea + blobs based on its mongoose id
* Can tie idea to a project the user owns
* @param {Object} i - object representing a document for Idea mongoose model
* @returns void
*/
export async function newIdea(i, project, stringBody) {
  if (!mongoose.Types.ObjectId.isValid(i.creator)) {return Promise.reject('Creator ID provided for the idea is invalid')}
  if (!mongoose.Types.ObjectId.isValid(project) && project != undefined) {return Promise.reject('Project ID provided for the idea is invalid')}
  let newIdea = new Ideas(i);
  //check that the project exists and that the user owns it
  if (project != undefined) {
    let prj = await Repo.findById(project)
          .catch(err => {return Promise.reject(['Mongoose', err])});
    if (prj == null) {return Promise.reject('Specified project does not exist');}
    else if (prj.creator != i.creator) {return Promise.reject('Can\'t reference a project you don\'t own')}
    else {
      newIdea.project.push(prj._id);
      await Promise.all([
        newIdea.save(),
        Repo.findByIdAndUpdate(project, {$push: {idea: newIdea._id}})
      ])
          .catch(err => {return Promise.reject(err)});
    }
  }
  else {
    await newIdea.save()
          .catch(err => {return Promise.reject(['Mongoose', err])});
  }

  await Promise.all([
    Ideas.updateText(newIdea._id, stringBody),
    Ideas.addStats(newIdea._id, stats.newIdea)
  ])
    .catch(err => {return Promise.reject(['Mongoose', err])});
  return newIdea;
}


/**
* Check that a given idea was created by a given user
* @param id - mongoose id for the idea
* @param user - mongoose id for the user
* @returns {promise} reject / resolve
*/
function checkIdea(id, user) {
  if (!mongoose.Types.ObjectId.isValid(id))  {reject('Idea ID is invalid')}

  return new Promise((resolve, reject) => {
    Ideas
      .findById(id)
      .then(result => {
        if (result == null) {
          reject('Idea not found');
        }
        if (result.creator._id == user) {
          resolve('Checked user successfully');
        }
        else {
          reject('You cannot alter this idea')
        }
      })
      .catch(err => {
        reject(['Mongoose', err]);
      })
  });
}


/**
* Check that a given blob was created by a given user
* @param id - mongoose id for the blob
* @param user - mongoose id for the user
* @returns {promise} reject / resolve
*/
function checkBlob(id, user) {
  if (!mongoose.Types.ObjectId.isValid(id))  {reject('Comment ID is invalid')}

  return new Promise((resolve, reject) => {
    IdeaBlob
      .findById(id)
      .then(result => {
        if (result == null) {
          reject('Comment not found');
        }
        if (result.deleted == true) {
          resolve("deleted");
        }
        if (result.user._id == user) {
          resolve('Checked user successfully');
        }
        else {
          reject('You cannot alter this comment')
        }
      })
      .catch(err => {
        reject(['Mongoose', err]);
      })
  });
}

/**
* Delete an idea
* @param id - mongoose id for the idea
* @param user - mongoose id for the user deleting the idea
* @returns {promise} reject / resolve
*/
export function deleteIdea(id, user) {
  return new Promise((resolve,reject) => {
    if (!mongoose.Types.ObjectId.isValid(id))  {reject('Idea ID is invalid')}

    checkIdea(id, user)
      .then(check => {
        console.log(check);
        return Ideas.remove({_id: id})
      })
      .then(result=>{
        console.log('deleted!');
          resolve(result);
      })
      .catch(err => {
        reject(['Mongoose', err]);
      });
  });
}



/**
* Delete an idea
* @param ideaID - mongoose id for the idea the blob belongs to
* @param blobID - mongoose id for the blob  to remove
* @param user - mongoose id for the user deleting the idea
* @returns {promise} reject / resolve
*/
export async function deleteBlob(ideaID, blobID, user) {
    if (!mongoose.Types.ObjectId.isValid(ideaID))  {throw ('Idea ID is invalid')}
    if (!mongoose.Types.ObjectId.isValid(blobID))  {throw ('Blob ID is invalid')}

    const check = await checkBlob(blobID, user).catch(err => {throw err + ' checkBlob'})
    const blob = await IdeaBlob.findByIdAndUpdate(blobID, {body: "deleted", deleted: true})
        .catch(err => {throw err});

    return blob;
}

/**
* Create a new blob
* @param {JSON} blob - mongoose model for a new IdeaBlob
* @returns {promise} reject / resolve
*/
export async function newBlob(blob, stringBody){
  if (!mongoose.Types.ObjectId.isValid(blob.ideaID))  {return Promise.reject('Idea ID for the blob is invalid')}
  if (blob.nest != undefined) {
    if (!mongoose.Types.ObjectId.isValid(blob.nest))  {return Promise.reject('Idea ID for the nested blob is invalid')}
  }

  const idea = await Ideas.findById(blob.ideaID)
              .catch(err => {return Promise.reject(['Mongoose',err])});
  if (idea == null) {return Promise.reject('The idea posted for does not exist')}

  const newBlob = new IdeaBlob(blob);

  const addBlob = _addBlob(idea.blobs, newBlob._id, idea._id, blob.nest);

  return Promise.all([
    Ideas.updateText(blob.ideaID, stringBody),
    newBlob.save(),
    Ideas.addStats(blob.ideaID, stats.newBlob),
    addBlob
  ])
}

function _addBlob(newBlobs, blobId, ideaId, nest) {
  return new Promise((resolve, reject) => {
    if (nest) {
      newBlobs = blobRecurse(newBlobs, nest, blobId)
    }
    else {
      if (newBlobs[1]) {
        newBlobs[1].push([blobId]);
      }
      else {
        newBlobs.push('')
        newBlobs.push([[blobId]])
      }
    }

    Ideas.findByIdAndUpdate(ideaId, {$set: {blobs: newBlobs}})
    .then(_idea => {resolve(_idea)})
    .catch(err=>{reject('Setting new blobs field error: '+err)});
    }
  );
}

//NOT memoized recursive function that looks for the blob to nest under
function blobRecurse(blobs, nest, blobId) {
  const memo = Array.from(blobs)
  function r(blobs, nest, blobId) {

    // if(memo[0] == 1) {continue};

    if (blobs[0].toString() === nest) {
      // memo[0] = 1;
      if (blobs[1]) {
        blobs[1].push([blobId]);
      }
      else {
        blobs.push([[blobId]])
      }
    }
    else if (blobs[1]) {
      for (let i = 0; i < blobs[1].length; i++) {
          // memo[0] = 1;
          blobs[1][i] = r(blobs[1][i], nest, blobId);
      }
    }
    return blobs
  }

  return r(blobs, nest, blobId);
}

/**
* Edit an idea
* @param id - mongoose id for the idea for editing
* @param user - mongoose id for user editing the idea
* @param body - the content to change for the idea
* @param stringBody - body as pure string
* @param {String array} tags - new array of tags for the idea
* @returns {promise} reject / resolve
*/
export async function editIdea(id, user, body, tags, stringBody) {
  await checkIdea(id, user)
        .catch(err => {return Promise.reject(err)});

  const update = {$set:{}}
  if (body != null) {update['$set'].body = body}
  if (tags != null) {update['$set'].tags = tags}
  update.edited = true;

  const edited = await Ideas.updateText(id, stringBody, update)
            .catch(err => {return Promise.reject(err)});

  return edited;
}


/**
* Edit a blob
* @param id - mongoose id for the blob for editing
* @param user - mongoose id for user editing the blob
* @param body - the content to change for the blob
* @param stringBody - body as pure string
* @returns {promise} reject / resolve
*/
export async function editBlob(id, user, body, stringBody){
  const update = {$set:{}}
  if (body != null) {update['$set'].body = body;}
  else {return Promise.reject('Nothing to update');}
  console.log(update, '--update', id, user);
  const check = await checkBlob(id, user)
        .catch(err => {return Promise.reject(err)});
  if (check === "deleted") {
    throw "Cannot edit deleted comment";
  }
  update.edited = true;
  const blob = await IdeaBlob.findByIdAndUpdate(id, update, {new:true})
        .catch(err => {return Promise.reject(['Mongoose', err])});

  const idea = await Ideas.updateText(blob.ideaID, stringBody)
        .catch(err => {return Promise.reject(['Mongoose', err])});

  return blob;
}





// //just for testing purposes
// function wrandom() {
//   var text = "";
//   var possible = "abcdefghijklmnopqrstuvwxyz12345";
//
//   for (var i = 0; i < 3; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//
//   return text;
// }
//
//
// //***TEST newIdea***
// for (let i =0; i< 100; i++) {
//   let tt = wrandom();
//   let cc = wrandom();
//   let z = {
//     title: 'Here is' + tt,
//     creator: '5b968155de64871a8ae95dad' ,
//     body: 'look, ' + wrandom() + ' it is ' + wrandom()
//   }
//   newIdea(z, undefined, 'james').then(result => {console.log(result)}).catch(err => {console.log(err)});
// }




//***Test getIdea
// for (let i =0; i< 1; i++) {
//   let id = '5ba2840dd8ca47449deb6e10';
//   setTimeout(() =>{getIdea(id).then(result => {console.log(result)}).catch(err => {console.log(err)})}, 2000);
// }



//*****Test getAll
// for (let i =0; i< 1; i++) {
//   let id = '5b747f3023cbe463b4312c26';
//   setTimeout(() =>{getAll(1000).then(result => {console.log(result)}).catch(err => {console.log(err)})}, 2000);
// }


//*****Test deleteIdea
// for (let i =0; i< 1; i++) {
//   let id = '5b747f3023cbe463b4312c26';
//   setTimeout(() =>{deleteIdea('5b747de2eb3b96639a694b78','5b4e51faa80cab5f701b82b7').then(result => {console.log(result)}).catch(err => {console.log(err)})}, 2000);
// }



//idea id: 5b747f3023cbe463b4312c27
//user id: 5b68e0ea4f51671f93128f51
//*****Test newBlob
// for (let i =0; i< 1; i++) {
//   let blob = {
//     ideaID: '5ba2840dd8ca47449deb6e10',
//     body:  wrandom() + ' ' + wrandom() + ' '+ wrandom() + ' '+ wrandom() + ' '+ wrandom() + ' '+ wrandom(),
//     user: '5b747f3023cbe463b4312c27',
//     // nest: '5bd2e90b4a19be317eb2240c'
//   }
//   newBlob(blob, 'shula is crazy').then(result => {console.log(result)}).catch(err => {console.log(err)});
// }

// Ideas.findById('5ba2840dd8ca47449deb6e10').then(i => {console.log(i.blobs)})


//*****Test getAll 2
// for (let i =0; i< 1; i++) {
//   let id = '5b73b859f9a69c5f6f2f80ef';
//   setTimeout(() =>{getAll(50,'0', 'c++').then(result => {console.log(result)}).catch(err => {console.log('error!',err)})}, 2000);
// }


//***Test editBlob
// for (let i =0; i< 1; i++) {
//   let id = '5b68e0ea4f51671f93128f51';
//   setTimeout(() =>{editBlob(id,'5b74905009795e65f20154fa', 'bring bananas').then(result => {console.log(result)}).catch(err => {console.log('error!',err)})}, 2000);
// }


// ***Test editIdea
// for (let i =0; i< 1; i++) {
//   let id = '5ba2854c75163044acf8058a';
//   setTimeout(() =>{editIdea(id,'5b968155de64871a8ae95dad', 'bring bananas', ['c++', 'java']).then(result => {console.log(result)}).catch(err => {console.log('error!',err)})}, 2000);
// }


// Ideas.updateText('5b968193de64871a8ae95dae', 'mr putin, put down the dildo')
// .then((x) => {
//   return Ideas.findById('5b968193de64871a8ae95dae')
//   .select('+search')
// })
// .then(y => {
//   console.log(y);
// })
// .catch(err => {
//   console.log(err);
// })

// Ideas.addStats('5b968193de64871a8ae95dae', 50)
// .then((x) => {
//   return Ideas.findById('5b968193de64871a8ae95dae')
//   // .select('+trending')
// })
// .then(y => {
//   console.log(y);
// })
// .catch(err => {
//   console.log(err);
// })


//NOTE: test vote
// vote('idea', '0', '5ba90dcf39192689296df61a', '5b968141de64871a8ae95dac')
// .then(r => {console.log(r)})
// .catch(e => {console.log(e)});
