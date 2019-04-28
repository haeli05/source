let matrix = require('matrix-js-sdk');

export default class Chat{

  constructor(accessToken=false,username=false,deviceId=false,sync=false){
    //console.log("params",accessToken,username,deviceId,sync);
  if(!sync){
    this.url = `http://matrix.source.lol:8008`;
    this.empty_client = matrix.createClient({baseUrl:this.url});
    this.matrix={};
    this.access_token=accessToken;
    this.username=username;
    this.deviceId=deviceId;
    return;
  }else{
    this.url = `http://matrix.source.lol:8008`;
    this.empty_client = matrix.createClient({baseUrl:this.url});
    this.matrix={};
    this.access_token=accessToken;
    this.username=username;
    this.deviceId=deviceId;
    this.resync();
    }
  }

  /**
  * Function signs user into matrix server
  * @param {String} username - username of user
  * @param {String} password - password associated with user
  **/
  async login(username,password){

    let login_obj =  await this.empty_client.loginWithPassword(username,password)
      .catch( err => {
        //console.log("ERROR_LOGING_IN" , JSON.stringify(err) );
        return { msg:"ERROR_LOGING_IN" };
      } );

    this.access_token=login_obj.access_token;
    this.username = username;
    this.deviceId = login_obj.device_id;
    //console.log("\n\nthis\n\n",this);
    this.matrix = matrix.createClient( {
      baseUrl:this.url,
      userId: this.riot_name(this.username),
      accessToken:this.access_token,
      deviceId: this.device_id
    } );
    return this.matrix.startClient();
  }

  hydrate(username,accessToken,deviceId){
    this.username=username;
    this.access_token=accessToken;
    this.deviceId=deviceId;
    this.resync();
  }

  state(){
    return this.matrix.clientRunning;
  }

  /**
  * Function signs user out
  **/
  logout(){
    this.matrix.logout().catch( err => {
      //console.log("ERROR SIGNING OUT",JSON.stringify(err));
      return { msg:"ERROR_SIGNING_OUT" };
    } );

    this.matrix.stopClient();
    return;
  }

  /**
  * Function gets the list of rooms user is in, used in sidebar
  * @param {String} username - username of user
  *
  * @param {Array[{Room_name,Direct}]} - Array of rooms user is a part of, direct is true if room is only 2 people
  **/
  getRooms(){
    return this.matrix.getRooms().map(room => room.name);
  }

  /** Utility function to format a username for riot **/
  riot_name(username){
    return '@'+username+':source.lol';
  }

  /**
  * Funciton updates the state of the client
  * @param {String} state - State of client
  **/
  updateState(state){
    if(typeof(state)==="string") this.state = state;
    return;
  }
  /** Function resyncs the client when it falls out of state tree **/
  resync(){
    //console.log("resyncing chat",this.url,this.riot_name(this.username),this.access_token,this.deviceId);
    this.matrix = matrix.createClient( {
      baseUrl:this.url,
      userId: this.riot_name(this.username),
      accessToken:this.access_token,
      deviceId:this.deviceId
    } );

    //console.log("THIS CLINET",this);

    this.matrix.startClient().then(console.log);
    return;
}

}
// /**
// * Function sends a message for a user
// * @param {String} roomId - The room Id of posting room, or the username of the person to dm
// * @param {Object} content = The content of the message
// *
// * @returns {Bool} - Boolean denoting a successful sent message
// **/
// export function sendMessage(roomId, content, client){
// //move to front end
//
// /** Utility function to format a username for riot **/
// riot_name(username){
//   return '@'+username+':source.lol';
// }
//
// /**
// * function gets all rooms and their messages, used for main message view
// * @param {String} username - username of user
// *
// * @param {Object} - Nested object containing all the rooms as keys and their respective messages as values
// **/
// export function getMessages(username){
// //front end
// }

//Script for index.html on riot-web
/**
<script>

window.onmessage = function(e) {
  if ( e.origin !== "http://localhost:3000 || e.origin !== "http://manhattan.source.lol" "  ) {
    console.log("Rejected ",e);
    return;
  }
    //}
    //
    console.log("\n\n|EEEEEE",e);
    try{
      //var payload = JSON.parse(e.data);
      var payload = e.data;
        //alert("Hello");
        for(var key in payload ){
          console.log("key",key,payload[key])
          localStorage.setItem(key,payload[key]);

      }
      return;
   }catch(err){
     alert("ERROR MOFO");
     return;
   }

  }
  </script>
**/
