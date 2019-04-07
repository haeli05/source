// import User from '../user';
import Upvote from '../upvotes';
import mongoose from 'mongoose';
import User from '../user';



/**
* A static method to vote on any model that has an upvotes field.
* Uses the User model to keep track of which topics a user has voted on already (User.voted)
* Allows for upvote, downvote, and unvote
* Requires schema to have field 'upvotes'
* @param {Mongoose ObjectID}  userID      - Mongoose ID for user voting
* @param {Mongoose ObjectID}  id  - the mongoose id of object voted on
* @param {Mongoose ObjectID}  up  -  1 = upvote / 0 = downvote
* @returns [object, user]
**/
export function votePlugin(schema, options) {
  schema.statics.vote = async function(userID, id, up, model) {
    if (userID == undefined || id == undefined || up ==undefined) {throw 'Missing params'}
    if (up != '1' && up != '0') {throw 'invalid vote character'}
    if (!mongoose.Types.ObjectId.isValid(userID)) {throw 'Invalid user ID'}
    if (!mongoose.Types.ObjectId.isValid(id)) {throw 'Invalid object ID'}
    const _key = userID + id; //TODO verify this works
    let inc = (up === '1') ? 1 : -1;
    const query = {$inc : {upvotes: 0}}

    const [checkThis, checkVote] = await Promise.all([
      this.findById(id),
      Upvote.findOne({key: _key})
    ])
      .catch(err => {console.log(err, '^^^^');throw err});
    if (checkThis == null) {throw 'Cannot vote for non-existing'}

    //user hasn't upvoted / downvoted yet
    if (checkVote == null || checkVote.vote == 0) {
      query['$inc']['upvotes'] = inc;
    }
    //user has upvoted the thang
    else if (checkVote.vote > 0) {
      if (inc < 0) {
        query['$inc']['upvotes'] = inc;
      }
      else {
        inc = 1;
      }
    }
    //user has downvoted the thang
    else {
      if (inc > 0) {
        query['$inc']['upvotes'] = inc;
      }
      else {
        inc = -1;
      }
    }
    await User.findByIdAndUpdate(userID, {$pull: {voted: {id: id}}}, {new: true}).catch(err => {throw err});

    let [obj, user, upvote] = await Promise.all([
      this.findByIdAndUpdate(id, query, {new: true}),
      Upvote.findOneAndUpdate(_key, {key: _key, userId: userID, objectId: id, onModel: model, vote: inc}, {upsert: true, new: true})
    ])
      .catch(err => {console.log(err, '%%%');throw err});
    return obj;
  }
}
