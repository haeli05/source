import matrix from 'matrix-js-sdk';

const opts={
  baseUrl:"http://matrix.source.lol:8008"
}
const client= matrix.createClient(opts);

/**
* Function creates a new user on the source matrix server
* @param {Object} info - email, password, username, name
*
* @returns {String} - access_token
**/
export async function newUser(info){
    let user =  await client.register(info.username,info.password,info.name+"ID",{"type": "m.login.dummy"},{email:false})
      .catch(err=>{
        console.log("Matrix Error",err);
        return Promise.reject(err);
      });

    return Promise.resolve(user);
}

/**
* Function creates a new room on the source matrix server
**/
export async function newRoom(room_name,user_token,username){
  let user_opts = userOpts(user_token,username);
  let tempClient = await matrix.createClient(user_opts);

  let started = tempClient.startClient();
  if ( started === undefined) { return Promise.resolve("Could not login to matrix"); }

  let room_alias = room_name.split(' ').join('_')

  let room_opts = {
    room_alias_name: room_alias,
    visibility: 'public',
    invite:[],
    name: room_name,
    topic: ''
  }

  let room = await tempClient.createRoom(room_opts)
    .catch(err => {
      console.log(`Error Creating Room for: ${room_name} by User: ${username}`,err);
      return Promise.reject(err.data);
     })
  tempClient.stopClient();
  return Promise.resolve(room);
}

const userOpts = (access_token,username) => {
  return {
    accessToken:access_token,
    userId: `@${username}:source.lol`,
    baseUrl: opts.baseUrl,
    deviceId: 'server'
  }
}

export async function login(username,password){
  let user = await client.loginWithPassword(username,password)
    .catch(err=>{
      console.log("ERROR_LOGING_IN" , JSON.stringify(err) );
      return Promise.resolve("ERROR_LOGING_IN");
    });

  return Promise.resolve(user);
}
