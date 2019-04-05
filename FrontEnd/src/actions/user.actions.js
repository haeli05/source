import axios from 'axios'
import history from '../history'
import config from '../utils/config.js';
import {addError} from './error.actions.js';
import {saveStateUser} from './../utils/rehydrate';


//ec2-35-153-131-45.compute-1.amazonaws.com
//// TODO: ADD A CONFIG FILE FOR ROUTES
export function logout(){
  localStorage.removeItem("user");
  return (dispatch) => {
      dispatch(signOut());
  }
}

/* ======================= LOGIN / LOGOUT / NEW USER ======================= */

// New user
export function newUser(data){
  return (dispatch)=>{
    dispatch(addNewUserStatus("PENDING"));
    axios.post(`${config.production_url}/api/user/new`,data)
    .then(res => {
      return dispatch(addSignIn(res.data))
    }).catch(err=>{
      if(err.response.data.error==="Incorrect invite code") {
        return dispatch(addNewUserStatus('invite_code_error'))
      } else {
        dispatch(addError(err))
        return dispatch(addNewUserStatus('ERROR'))
      }
    })
  }
};
export function addNewUserStatus(status){
  return {
    type: 'NEW_USER_STATUS',
    status: status
  }
}


// Check if username is available
export function checkUsernameAvailability(username){
  return (dispatch)=>{
    dispatch(addUsernameAvailabilityStatus("PENDING"));
    axios.get(`${config.production_url}/api/user/name/${username}`)
    .then(res => {
      if (res.data===false) {
        return dispatch(addUsernameAvailability("yes"))
      } else {
        return dispatch(addUsernameAvailability("no"))
      }
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addUsernameAvailabilityStatus('ERROR'))
    })
  }
}
export function addUsernameAvailability(data){
  return {
    type: 'USERNAME_AVAILABILITY',
    data: data,
  }
}
export function addUsernameAvailabilityStatus(status){
  return {
    type: 'USERNAME_AVAILABILITY_STATUS',
    status: status,
  }
}


// Sign In
export function signIn(data){
  return (dispatch) => {
    dispatch(addSignInStatus("PENDING"));
    axios.post(`${config.production_url}/api/user/login`,data)
    .then(res => {
      return dispatch(addSignIn(res.data));
    }).catch(err=>{
      dispatch(addError(err))
      return dispatch(addSignInStatus('ERROR'))
    })
  }
}
export function addSignIn(user_data) {
  return{
    type: 'SIGN_IN',
    token: user_data.token,
    username: user_data.user.username,
    email: user_data.user.email,
    id: user_data.user._id,
    user: user_data.user,
    aws: user_data.aws
  }
}
export function addSignInStatus(status){
  return {
    type: 'SIGN_IN_STATUS',
    status: status
  }
}


// Sign Out
export function signOut(){
  localStorage.removeItem("user");
  return (dispatch) => {
      dispatch(addSignOut());
  }
}
export function addSignOut(){
  return{
    type: "SIGN_OUT",
  }
}


/* ================================ ACTIONS ================================ */

// Upload profile image (3 steps: create form and submit => get new tokens => add both to profile)
export function uploadProfilePicture(image){
  let user = localStorage.getItem(`user`);
  let token = JSON.parse(user).token;
  let awsurl = JSON.parse(user).aws.url;
  let awskey = JSON.parse(user).aws.key;
  let policy = JSON.parse(user).aws.policy;
  let algorithm = JSON.parse(user).aws["x-amz-algorithm"];
  let credential = JSON.parse(user).aws["x-amz-credential"];
  let date = JSON.parse(user).aws["x-amz-date"];
  let signature = JSON.parse(user).aws["x-amz-signature"];
  return (dispatch) => {
    dispatch(addUploadProfilePictureStatus('PENDING'))
    // Step 1: Create form and submit
    var imageForm = new FormData();
    imageForm.set('key',awskey);
    imageForm.set('policy',policy);
    imageForm.set('x-amz-algorithm',algorithm);
    imageForm.set('x-amz-credential',credential);
    imageForm.set('x-amz-date',date);
    imageForm.set('x-amz-signature',signature);
    imageForm.set('file',image);

    axios.post(awsurl, imageForm, {headers: {
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
    }})
    .then(res=>{
      dispatch(addUploadProfilePictureStatus('SUCCESS'))
      return dispatch(newAvatar())
    })
    .catch(err=>{
      dispatch(addError(err))
      return dispatch(addUploadProfilePictureStatus('ERROR'))
    });
  }
}
export function addUploadProfilePictureStatus(status){
  return {
    type: 'UPLOAD_PROFILE_PICTURE_STATUS',
    status: status,
  }
}


// Add profile picture url to user object and get new AWS tokens
export function newAvatar(){
  let token = JSON.parse(localStorage.getItem("user")).token;
  let key = JSON.parse(localStorage.getItem("user")).aws.key;
  let url = JSON.parse(localStorage.getItem("user")).aws.url;

  return (dispatch) => {
    dispatch(addAvatarStatus('PENDING'))
    axios.post(`${config.production_url}/api/user/addAvatar`,{
      'url': url,
      'key': key,
      token
    })
    .then(res => {
      var fullURL = url + '/' + key;
      dispatch(addAvatar(fullURL))
      return dispatch(getNewAWS())
    })
    .catch(err => {
      dispatch(addError(err))
      return dispatch(addAvatarStatus('ERROR'))
    })
  }
}
export function addAvatar(data){
  return {
    type: 'AVATAR',
    data: data
  }
}
export function addAvatarStatus(status){
  return {
    type: 'AVATAR_STATUS',
    status: status
  }
}


// Get new AWS tokens
export function getNewAWS(){
  let token = JSON.parse(localStorage.getItem("user")).token;
  return (dispatch) => {
    dispatch(addAWSStatus('PENDING'))
    axios.post(`${config.production_url}/api/storage/getToken`,{
      token
    })
    .then(res => {
      return dispatch(addAWS(res.data))
    })
    .catch(err => {
      dispatch(addError(err))
      return dispatch(addAWSStatus('ERROR'))
    })
  }
}
export function addAWS(data){
  return{
    type: 'AWS',
    data: data
  }
}
export function addAWSStatus(status){
  return{
    type: 'AWS_STATUS',
    status: status
  }
}


// Update user's info
export function updateUser(details){
  let user = localStorage.getItem(`user`);
  let token = JSON.parse(user).token
  return (dispatch) => {
    dispatch(addUpdateUserStatus('PENDING'))
    axios.post(`${config.production_url}/api/user/update`,{
      name: details.name,
      bio: details.bio,
      location: details.location,
      website: details.website,
      description: details.description,
      skills: details.skills,
      social: details.social,
      token
    })
    .then(res => {
      return dispatch(addUpdateUser(res.data))
    })
    .catch(err => {
      dispatch(addError(err))
      return dispatch(addUpdateUserStatus('ERROR'))
    })
  }
}
export function addUpdateUser(data){
  return {
    type: 'UPDATE_USER',
    data
  }
}
export function addUpdateUserStatus(status){
  return {
    type: 'UPDATE_USER_STATUS',
    status
  }
}


/* ============================= FOLLOW ACTIONS ============================= */

// Follow person
export function followPerson(id){
  let user = localStorage.getItem(`user`);
  let token = JSON.parse(user).token
  return (dispatch) => {
    dispatch(addFollowPersonStatus(id,'PENDING'))
    axios.post(`${config.production_url}/api/user/follow`,{
      toFollow: id,
      token
    })
    .then(res=>{
      return dispatch(addFollowPerson(id))
    })
    .catch(err=>{
      dispatch(addError(err))
      return dispatch(addFollowPersonStatus(id,'ERROR'))
    })
  }
}
export function addFollowPerson(id){
  return {
    type: 'FOLLOW_PERSON',
    id: id
  }
}
export function addFollowPersonStatus(id,status){
  return {
    type: 'FOLLOW_PERSON_STATUS',
    id: id,
    status: status
  }
}


// Fetch the current people a user is following
export function fetchCurrentFollowing(id){
  let user = localStorage.getItem(`user`);
  let currentSignedInId = JSON.parse(user).id
  return (dispatch) => {
    dispatch(addCurrentFollowingStatus('PENDING'))
    axios.get(`${config.production_url}/api/user/${id}/following`)
    .then(res=>{
      console.log('were at res')
      if(id===currentSignedInId) {
        console.log("is own", res.data)
        return dispatch(addCurrentFollowing(res.data.following, true))
      } else {
        console.log("is not own", res.data)
        return dispatch(addCurrentFollowing(res.data.following, false))
      }
    })
    .catch(err=>{
      dispatch(addError(err))
      return dispatch(addCurrentFollowingStatus('ERROR'))
    })
  }
}
export function addCurrentFollowing(data, isOwn){
  return{
    type: 'CURRENT_FOLLOWING',
    data: data,
    isOwn: isOwn
  }
}
export function addCurrentFollowingStatus(status){
  return{
    type: 'CURRENT_FOLLOWING_STATUS',
    status: status
  }
}


// Follow tag
export function followTag(tag){
  let user = localStorage.getItem(`user`);
  let token = JSON.parse(user).token
  return (dispatch) => {
    axios.post(`${config.production_url}/api/user/followTags`,{
      tags: [tag],
      token
    })
    .then(res=>{
      return dispatch(addFollowTag(tag))
    })
    .catch(err=>{
      return dispatch(addError(err))
    })
  }
}
export function addFollowTag(data){
  return{
    type: 'FOLLOW_TAG',
    data: data
  }
}


// Follow topic
export function followTopic(id,type){
  let user = localStorage.getItem(`user`);
  let token = JSON.parse(user).token
  return (dispatch) => {
    axios.post(`${config.production_url}/api/user/followTopic`,{
      id,
      type,
      token
    })
    .then(res=>{
      console.log(res)
      return dispatch(addFollowTopic(res.data))
    })
    .catch(err=>{
      console.log(err.response)
      return dispatch(addError(err))
    })
  }
}
export function addFollowTopic(data){
  return{
    type: 'FOLLOW_TOPIC',
    data: data
  }
}


// Add or remove vote to user object
export function addVoteToUserObject(onModel,id,up){
  return{
    type: 'ADD_VOTE',
    onModel,
    id,
    up
  }
}




// NOTE: OLD

/*


export function handleStar(user,id,repo_id,src_percentage){
  return (dispatch) => {
    return (`user/${id}/star`,'post',{"repo_id":repo_id,"src_percentage": src_percentage}).then(res => {
      dispatch(fetchUsers(res));
    });
  }
}

export function inviteCodeCheck(invite){
  return (dispatch)=>{
    axios.post(`${config.production_url}/api/user/new`,data).then(res => {
      if(!res.data.error){
        return dispatch(login(
          res.data.token,res.data.user.username,
          res.data.user.email,res.data.user._id,res.data.user.name))
      }else{
        console.log("error creating user",res.Data.error);
        alert(res.data.error)
      }
      else {
        alert("Incorrect invite code");
        return dispatch(addInviteCode(res.data.result));
      }
    }).catch(err=>{console.log("Error",err); alert("Incorrect invite code")});
  }
}

export function addInviteCode(good){
  return {
    type: "GOOD_BINARY_HUMAN",
    good
  }
}

*/
