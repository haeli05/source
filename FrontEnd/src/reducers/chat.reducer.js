const initialState={
  client: false
};

const ChatReducer = ( state = initialState , action )=>{
  switch( action.type ){
    case 'STATE_LOAD_CHAT':{
      return {
        client: action.client
      }
    }
    case 'SAVING_CLIENT':{
      return {
        client: action.client
      }
    }

   case 'SIGN_OUT':{
     return { client: false }
   }

   case 'UPDATE_CLIENT':{
     return{
       client: action.client
     }
   }

   case 'REFRESHING_CLIENT':{
     return{
       client: action.client
     }
   }

   default: return state;
  }
}

export const getClient = state => state.chat.client;

export default ChatReducer;
