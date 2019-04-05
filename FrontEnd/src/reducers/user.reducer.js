const initialState = {
  // Basic user actions
  newUserStatus: false,
  usernameAvailability: false,
  usernameAvailabilityStatus: false,
  signInStatus: false,
  signOutStatus: false,
  // Profile picture actions
  uploadProfilePictureStatus: false,
  avatarStatus: false,
  awsStatus: false,
  updateUserStatus: false,
  // The signed in user data
  signedInUser: {
    token: false,
    id: false,
    username: false,
    email: false,
    aws: false,
    user: false,
  },
  // Follow actions
  followPersonId: false,
  followPersonStatus: false,
  currentFollowingStatus: false,
};

const user = (state=initialState,action) => {
  switch (action.type) {
/* =========================== Basic user actions =========================== */
    case 'NEW_USER_STATUS':
      return Object.assign({}, state, {
        newUserStatus: action.status,
      })
    case 'USERNAME_AVAILABILITY':
      return Object.assign({}, state, {
        usernameAvailability: action.data,
        usernameAvailabilityStatus: 'SUCCESS',
      })
    case 'USERNAME_AVAILABILITY_STATUS':
      return Object.assign({}, state, {
        usernameAvailability: false,
        usernameAvailabilityStatus: action.status,
      })
    case 'SIGN_IN':
      return Object.assign({}, state, {
        signInStatus: 'SUCCESS',
        signOutStatus: false,
        signedInUser: {
          token: action.token,
          id: action.id,
          username: action.username,
          email: action.email,
          aws: action.aws,
          user: action.user,
        }
      })
    case 'SIGN_IN_STATUS':
      return Object.assign({}, state, {
        signInStatus: action.status,
      })
    case 'SIGN_OUT':
      return Object.assign({}, state, {
        newUserStatus: false,
        usernameAvailability: false,
        usernameAvailabilityStatus: false,
        signInStatus: false,
        signOutStatus: true,
        signedInUser: {
          token: false,
          id: false,
          username: false,
          email: false,
          aws: false,
          user: false,
        }
      })
    case 'STATE_LOAD_USER':
      return Object.assign({}, state, {
        newUserStatus: false,
        usernameAvailability: false,
        usernameAvailabilityStatus: false,
        signInStatus: (action.token===false) ? false : 'SUCCESS',
        signOutStatus: false,
        signedInUser: {
          token: action.token,
          id: action.id,
          username: action.username,
          email: action.email,
          aws: action.aws,
          user: action.user,
        }
      })
    case 'STATE_SAVE_USER':
      return Object.assign({}, state, {
        newUserStatus: false,
        usernameAvailability: false,
        usernameAvailabilityStatus: false,
        signInStatus: (action.token===false) ? false : 'SUCCESS',
        signOutStatus: false,
        signedInUser: {
          token: action.token,
          id: action.id,
          username: action.username,
          email: action.email,
          aws: action.aws,
          user: action.user,
        }
      })
/* ======================== Profile picture actions ======================== */
    case 'UPLOAD_PROFILE_PICTURE_STATUS':
      return Object.assign({}, state, {
        uploadProfilePictureStatus: action.status
      })
    case 'AVATAR':
      var signedInUserCopy = state.signedInUser
      signedInUserCopy.user.avatar = action.data
      return Object.assign({}, state, {
        avatarStatus: 'SUCCESS',
        signedInUser: signedInUserCopy,
      })
    case 'AVATAR_STATUS':
      return Object.assign({}, state, {
        avatarStatus: action.status
      })
    case 'AWS':
      var signedInUserCopy = state.signedInUser
      signedInUserCopy.aws = action.data
      return Object.assign({}, state, {
        awsStatus: 'SUCCESS',
        signedInUser: signedInUserCopy,
      })
    case 'AWS_STATUS':
      return Object.assign({}, state, {
        awsStatus: action.status
      })
    case 'UPDATE_USER':
      var signedInUserCopy = state.signedInUser
      signedInUserCopy.user = action.data
      return Object.assign({}, state, {
        updateUserStatus: 'SUCCESS',
        signedInUser: signedInUserCopy,
      })
    case 'UPDATE_USER_STATUS':
      return Object.assign({}, state, {
        updateUserStatus: action.status
      })
/* ============================= Follow actions ============================= */
    case 'FOLLOW_PERSON':
      // Push or removed the person's id to the signed in user's following array
      var newUser = state.signedInUser.user
      if(newUser.following.includes(action.id)){
        var index = newUser.following.indexOf(action.id);
        newUser.following.splice(index,1);
      } else {
        newUser.following.push(action.id)
      }
      return Object.assign({}, state, {
        followPersonId: action.id,
        followPersonStatus: 'SUCCESS',
        signedInUser: {
          token: state.signedInUser.token,
          id: state.signedInUser.id,
          username: state.signedInUser.username,
          email: state.signedInUser.email,
          aws: state.signedInUser.aws,
          user: newUser,
        }
      })
    case 'FOLLOW_PERSON_STATUS':
      return Object.assign({}, state, {
        followPersonId: action.id,
        followPersonStatus: action.status,
      })
    case 'CURRENT_FOLLOWING':
      if (action.isOwn) {
        let newUser = state.signedInUser.user
        newUser.following = action.data
        return Object.assign({}, state, {
          currentFollowingStatus: 'SUCCESS',
          signedInUser: {
            token: state.signedInUser.token,
            id: state.signedInUser.id,
            username: state.signedInUser.username,
            email: state.signedInUser.email,
            aws: state.signedInUser.aws,
            user: newUser,
          }
        })
      } else {
        return Object.assign({}, state, {
          currentFollowing: action.data,
          currentFollowingStatus: 'SUCCESS',
        })
      }
    case 'CURRENT_FOLLOWING_STATUS':
      return Object.assign({}, state, {
        currentFollowing: false,
        currentFollowingStatus: action.status,
      })
    case 'FOLLOW_TAG':
      var isInArray = state.signedInUser.user.tags.indexOf(action.data)
      if (isInArray===-1){
        var signedInUserCopy = state.signedInUser
        signedInUserCopy.user.tags.push(action.data)
        return Object.assign({}, state, {
          signedInUser: signedInUserCopy
        })
      } else {
        var signedInUserCopy = state.signedInUser
        signedInUserCopy.user.tags.splice(isInArray,1)
        return Object.assign({}, state, {
          signedInUser: signedInUserCopy
        })
      }
/* =============================== Vote action ============================= */
    case 'ADD_VOTE':
      // Check if voted id is already in array
      var isInVoted = state.signedInUser.user.voted.find(votedArray => votedArray.id === action.id)
      // Creat a copy of the signed in user object
      var signedInUserCopy = state.signedInUser
      // If vote doesn't exist, push to the array
      if(isInVoted===undefined){
        signedInUserCopy.user.voted.push({
          id: action.id,
          onModel: action.onModel,
          which: action.up
        })
      } else {
        // Else get the index and check if the vote needs to be changed or removed
        var index = signedInUserCopy.user.voted.indexOf(isInVoted)
        if(isInVoted.which === action.up) {
          signedInUserCopy.user.voted.splice(index, 1)
        } else {
          signedInUserCopy.user.voted[index].up = action.up
        }
      }
      return Object.assign({}, state, {
        signedInUser: signedInUserCopy
      })
    default: return state;
  }
}


// Get the signed in user's data
export const getUser = state => state.user.signedInUser;
// Basic user actions
export const getNewUserStatus = state => state.user.newUserStatus;
export const getUsernameAvailability = state => state.user.usernameAvailability;
export const getUsernameAvailabilityStatus = state => state.user.usernameAvailabilityStatus;
export const getSignInStatus = state => state.user.signInStatus;
export const getSignOutStatus = state => state.user.signOutStatus;
// Profile picture actions
export const getUploadProfilePictureStatus = state => state.user.uploadProfilePictureStatus;
export const getAvatarStatus = state => state.user.avatarStatus;
export const getAWSStatus = state => state.user.awsStatus;
// Update profile actions
export const getUpdateUserStatus = state => state.user.updateUserStatus;
// Follow actions
export const getFollowPersonId = state => state.user.followPersonId;
export const getFollowPersonStatus = state => state.user.followPersonStatus;
export const getCurrentFollowing = state => state.user.currentFollowing;
export const getCurrentFollowingStatus = state => state.user.currentFollowingStatus;
export default user;
