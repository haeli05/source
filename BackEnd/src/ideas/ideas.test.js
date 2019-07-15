// const Ideas =require('../models/ideas.js').Ideas;
// const IdeaBlob = require('../models/blob').IdeaBlob;


async function getIdea(_id) {
   const i = await Ideas.findById(_id)
   .populate({path: 'blobs'})
   .catch(err => {throw err});
   return i;
}

async function newIdea() {
  let idea, comment1, comment2, subcomment1, subcomment2, subcomment11;
  const i = {
    title: 'title',
    body: 'body',
    tags: ['tag1', 'tag2'],
    description: "woohoo",
    stringBody: 'stringBody',
    creator: '5b968155de64871a8ae95dad'
  }
  idea = await new Ideas(i).save().catch(err => {console.log(err)});
  // console.log(newIdea,'newIdea');
  let c1 = {
    children: [],
    user: '5b968155de64871a8ae95dad',
    ideaID: idea._id,
    body: 'c1',
  }
  let c2 = {
    children: [],
    user: '5b968155de64871a8ae95dad',
    ideaID: idea._id,
    body: 'c2',
  }
  comment1 = await new IdeaBlob(c1).save().catch(err => {console.log(err)});
  comment2 = await new IdeaBlob(c2).save().catch(err => {console.log(err)});
  const addComments = await Ideas.findByIdAndUpdate(idea._id, {$push: {blobs: [comment1._id, comment2._id]}}).catch(err => {throw err});

  let sc1 = {
    super: comment1._id,
    user: '5b968155de64871a8ae95dad',
    ideaID: idea._id,
    body: 'sc1',
  }
  let sc2 = {
    super: comment2._id,
    user: '5b968155de64871a8ae95dad',
    ideaID: idea._id,
    body: 'sc2',
  }
  subcomment1 = await new IdeaBlob(sc1).save().catch(err => {console.log(err)});
  subcomment2 = await new IdeaBlob(sc2).save().catch(err => {console.log(err)});

  const sc1Update = await IdeaBlob.findByIdAndUpdate(comment1._id, {$push: {children: subcomment1._id}})
    .catch(err => {console.log(err)});
  const sc2Update = await IdeaBlob.findByIdAndUpdate(comment2._id, {$push: {children: subcomment2._id}})
    .catch(err => {console.log(err)});

  let sc11 = {
    super: subcomment1._id,
    user: '5b968155de64871a8ae95dad',
    ideaID: idea._id,
    body: 'sc11',
  }
  subcomment11 = await new IdeaBlob(sc11).save().catch(err => {console.log(err)});

  const populatedIdea = await getIdea(idea._id)
    .catch(err => {console.log('fetch: ',err)});
  console.log('final: ',populatedIdea);
}



// newIdea();
