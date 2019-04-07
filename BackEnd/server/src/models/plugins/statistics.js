
/**
* Search for a given text phrase in a  mongoDB collection. Employs the text index
* @param {String} phrase  - the text to search for
* @param {String} sorting - the sorting method ('trending' / 'popularity' / undefined = defaults to textScore)
* @param {String} project - limit the search to a specific project (only valid for issues search)
* @returns {[JSON]}  - an array of JSON objects for the documents in the collection searched
**/
export function searchTextPlugin(schema, options) {
  schema.statics.searchText = function(phrase, sorting, paginate, tags, project) {
    const query = {}
    let sortBy = {sort: { score: { $meta: "textScore" } }}
    if (phrase === '' || phrase === undefined) {
      sortBy.sort = {'date': -1};
    }
    if (tags != undefined && phrase != '') {
      query['$or'] = [{'$text': {'$search': phrase}}, {'tags': {'$in': tags}}];
    }
    else if (tags != undefined) {
      query.tags = {$in: tags}
    }
    else if (phrase != '') {
      query['$text'] = {$search: phrase }
    }
    if (project != undefined) {query.repoID = project}
    if (paginate != undefined) {query._id = {$gt: paginate}}
    if (sorting === 'popularity') {sortBy = {sort: {sorting: -1}}}
    if (sorting === 'trending') {sortBy = {sort: {'trending.score': -1}}}
    return this
    .find(
       query,
       { score: { $meta: "textScore" } },
       sortBy
    )
    .select('+trending +popularity')  //Consider removing
    .limit(50)
    .then(results => {
      return results;
    })
    .catch(err => {
      return err;
    })
  }
}


// /**
// * Decays trending score for documents in a collection which haven't had their trending score updated
// * in more than 12 hours. This function should run as a scheduled task every 12 hours to ensure the integrity
// * of the trending rating
// * @returns ...
// **/
// export function aggregateTrendingPlugin(schema, options) {
//   schema.statics.aggregateTrending = function() {
//     const MEAN_TIME = 100 * 60 * 60 * 12 //  # of milliseconds in 12 hours
//     const now = Date.now.setHours(Date.now.getHours() -12);
//
//     return this.aggregate([
//         {$match: {'trending.date' : {$lte : now}}},
//         {$project: {
//             trending: {
//                 $reduce: {
//                   input: [0, now],
//                   initialValue: { "$objectToArray": '$trending'},
//                   in: {
//                     score: {$add : ['$$this.score', {$multiply: ['$$value.score', {$exp: [{$divide: [{$subtract: [{$toDouble: '$$this.date'}, {$toDouble: '$$value.date'}]}, MEAN_TIME]}]}]}]},
//                     date: '$$this.date'
//                   }
//                 }
//             }
//         }
//     }])
//     .then((t) => {
//       return t;
//     })
//     .catch(err => {
//       return err;
//     });
//   }
// }



/**
* Decays trending score for documents in a collection which haven't had their trending score updated
* in more than 12 hours. This function should run as a scheduled task every 12 hours to ensure the integrity
* of the trending rating
* @returns ...
**/
export function aggregateTrendingPlugin(schema, options) {
  schema.statics.aggregateTrending = function() {
    const MEAN_TIME = 1000 * 60 * 60 * 12 //  # of milliseconds in 12 hours
    const now = (new Date().getTime() - (12 * 60 * 60 * 1000));

    return this.find({"trending.date" : {$lte : new Date(now)}}).select('+trending')
    .limit(100)
    .then((docs) => {
      const promises = [];
      for (let i=0;i<docs.length;i++) {
        const newTrend = docs[i].trending.score * (Math.pow(Math.E,(-((now - docs[i].trending.date.getTime()) / MEAN_TIME))));
        const tt = {
          score: newTrend,
          date: now
        }
        promises.push(this.findByIdAndUpdate(docs[i]._id, {trending: tt}));
      }
      return Promise.all(promises);
    })
    .catch(err => {
      return err;
    });
  }
}


// /**
// * Handles adding to the trending score (by decaying it and then incrementing it)
// * As well as incrementing the total popularity score
// * This is done for a given document in a collection
// * for decay function inspiration: https://moz.com/blog/reddit-stumbleupon-delicious-and-hacker-news-algorithms-exposed
// * https://stackoverflow.com/questions/787496/what-is-the-best-way-to-compute-trending-topics-or-tags
// *
// * @param {Mongoose ObjectID}  id      - Mongoose ID for the document in the collection to add stats for
// * @param {Number}             points  - the stat points the action deserves
// * @returns ...
// **/
// export function addStatsPlugin(schema, options){
//   schema.statics.addStats = function(id, points) {
//   const MEAN_TIME = 100 * 60 * 60 * 12 //  # of milliseconds in 12 hours
//   const now = Date.now;
//
//     return this.aggregate([
//           {$match : {'_id': id}},
//           {$project: {
//               trending: {
//                   $reduce: {
//                     input: [],
//                     initialValue: { "$objectToArray": '$trending'},
//                     in: {
//                       score: {$add : [points, {$multiply: ['$$value.score', {$exp: [{$divide: [{$subtract: [{$toDouble: now}, {$toDouble: '$$value.date'}]}, MEAN_TIME]}]}]}]},
//                       date: now
//                     }
//                   }
//               },
//               popularity: {
//                 $add : ['$popularity', points]
//               }
//           }
//       }])
//     .then(t => {
//       return t;
//     })
//     .catch(err => {
//       return err;
//     });
//   }
// }




/**
* Handles adding to the trending score (by decaying it and then incrementing it)
* As well as incrementing the total popularity score
* This is done for a given document in a collection
* for decay function inspiration: https://moz.com/blog/reddit-stumbleupon-delicious-and-hacker-news-algorithms-exposed
* https://stackoverflow.com/questions/787496/what-is-the-best-way-to-compute-trending-topics-or-tags
*
* @param {Mongoose ObjectID}  id      - Mongoose ID for the document in the collection to add stats for
* @param {Number}             points  - the stat points the action deserves
* @returns ...
**/
export function addStatsPlugin(schema, options){
  schema.statics.addStats = function(id, points) {
  const MEAN_TIME = 1000 * 60 * 60 * 12; //  # of milliseconds in 12 hours

  return this.findById(id).select('+trending')
  .then( doc => {
    if (points == undefined) {return doc}
    const prevTrend = doc.trending;
    const now = Date.now();
    if (now < prevTrend) {return;}
    const newTrend = points + (prevTrend.score * (Math.pow(Math.E,(-((now - prevTrend.date.getTime()) / MEAN_TIME)))));
    const update = {
      score: newTrend,
      date: now
    }
    return this.findByIdAndUpdate(id, {trending: update, $inc : {popularity: points}}, {new: true});
  })
  .catch(err => {
    return err;
  });
  }
}

// { $convert: { input: now, to: "double" } }, { $convert: { input: '$$value.date', to: "double" } }

/**
* Adds text to a special MongoDB field called `search`.
* `search` field is used as a text index for search purposes.
* Used in Issues model to add blob texts together for indexing.
* @param {Mongoose ObjectID}  id      - Mongoose ID for the document in the collection to add stats for
* @param {Number}             text  - the text to add
* @returns ...
**/
// export function addTextPlugin(schema, options) {
//   schema.statics.addText = function(id, text) {
//     return this.aggregate([
//         {$match : {_id: id}},
//         {$project: {
//             search: {
//               $concat: ["$search", " ", "text"]
//             }
//         }
//     }
//   ])
//     .then(t => {
//       return t;
//     })
//     .catch(err => {
//       return err;
//     });
//   }
// }


/**
* Adds text to a special MongoDB field called `search`.
* `search` field is used as a text index for search purposes.
* Used in Issues model to add blob texts together for indexing.
* @param {Mongoose ObjectID}  id      - Mongoose ID for the document in the collection to add stats for
* @param {Number}             text  - the text to add
* @returns ...
**/
export function addTextPlugin(schema, options) {
  schema.statics.updateText = function(id, text, update) {
    return this.findById(id)
    .select('+search')
    .then( doc => {
      if (update == undefined) {update = {}}
      if (text == undefined) {text = ''}
      update.search = doc.search + ' ' + text;
      return this.findByIdAndUpdate(id, update, {new: true});
    })
    .catch(err => {
      return err;
    });
  }
}
