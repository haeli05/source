import axios from 'axios';
import {config} from '../config';

let url = config.gitlabURL;

let users = 'users';
let projects = 'projects'

let authorization = '?private_token='+config.gitlabToken;
let userAuth = '?private_token=';
//Function creates a new user in gitlab instance
// @returns the recipt as a promise to be used by user controller
export function newUser(info){
    return new Promise((resolve,reject) => {
      axios.post(`${url}/${users}${authorization}`,{
      email: info.email,
      username: info.username,
      name: info.name,
      password: info.password,
      skip_confirmation: true
    }).then(user => {
      resolve(user.data);
    }).catch(err => {
      console.log(`Error Creating User: ${info.username} UserObj: ${info}`,err.response.data);
      reject(err.response.data);
    })
  });
}

//Get a user's public data on Github
export function getUser(id){
    return new Promise((resolve,reject) => {
      axios.get(`${url}/${users}/${id}`)
      .then(user => {
        resolve(user.data);
      })
      .catch(err => {
        console.log(`Error Getting User: ${id}`,err.response.data);
        reject(err.response.data);
    })
  });
}

//Funciton creates a new imitation token of user
//@returns promise holding the recipt of token creation
export function createToken(name,id){
  return new Promise((resolve,reject) => {
    axios.post(`${url}/${users}/${id}/impersonation_tokens${authorization}`,{
      name: name, scopes: ['api']
    }).then(token => {
      resolve(token.data);
    }).catch(err =>{
      console.log(`Error Creating User Token for user: ${id}`,err.response.data);
      reject(err.response.data);
    })
  })
}

export async function getRepo(user,repo,parent_id="VOID"){
 return await axios.get(`http://git.source.lol:9999/repo/${user}/${repo}/${parent_id}`)
  .then(files=>{
    if(files===false) { return Promise.resolve("no tree") }
    return Promise.resolve(files.data);
  })
  .catch(err=>{
    console.log("FILES ERR",`User: ${user}\nRepo: ${repo}\nParent_id: ${parent_id}`,err.response.data);
    if (err.response.data.message==='Repository Uninitialized') {
      return  Promise.resolve('no tree');
    }
    else {
      return Promise.reject("ERROR Getting repo");
    }
  });

  //files = files.data;

  //let c = quickGet(files,id);

  //let finished = await Promise.all(c)



// function quickGet(files,id){
//   return files.map( (file)=>{
//       return axios.get(`${url}/${projects}/${id}/repository/commits?path=${file.path}`)
//         .then(commit=>{
//           file.commit_info= commit.data[0];
//           return file
//         });
//     });
}

export function getRaw(id,sha){
  return new Promise((resolve,reject) => {
    axios.get(`${url}/${projects}/${id}/repository/blobs/${sha}/raw`).then(res =>{
      resolve(res.data);
    }).catch(err => {
      console.log(`Error Getting Raw Blob: ${sha} For Project: ${id}`,err.response.data);
      reject(err.response.data)
    })
  })
}

export function newGroupProject(req){
  let auth = req.user.gitlabToken;
  return new Promise((resolve, reject) => {
    axios.post(`${url}/${projects}${userAuth}${auth}`,{
      name: req.body.name,
      description: req.body.description,
      import_url: req.body.import_url,
      visibility: 'public'
    }).then(prjct => {
      resolve(prjct.data);
    }).catch(err => {
      reject(err.response.data);
    });
  })
}

export function newProject(data){
  console.log(data);
  let auth = data.gitlabToken;
  return new Promise((resolve, reject) => {
    console.log("GL URL",`${url}/${projects}${userAuth}${auth}`);
    axios.post(`${url}/${projects}${userAuth}${auth}`,{
      name: data.name,
      description: data.description,
      import_url: data.import_url,
      visibility: 'public'
    }).then(prjct => {
      return resolve(prjct.data);
    }).catch(err => {
      console.log(`Error Creating Project: ${data}`,err.response.data);
      return reject(err.response.data)
    });
  })
}

//Function adds SSH key
export function addSSH(ssh, title, auth){
  return new Promise((resolve,reject) =>{
    axios.post(`${url}/user/keys${userAuth}${auth}`,{
      title: title,
      key: ssh
    }).then(result => {
      resolve(result.data);
    }).catch(err => {
      reject(err.response.data);
    })
  })
}

//Function deletes SSH key
export function deleteSSH(key, auth){
  return new Promise((resolve,reject) =>{
    axios.delete(`${url}/user/key/${key}${userAuth}${auth}`).then(result =>{
      resolve(result.data);
    }).catch(err=>{
      reject(err.response.data);
    })
  })
}
//Function Lists SSH key
export function listSSH(auth){
  return new Promise((resolve,reject) =>{
    axios.get(`${url}/user/keys${userAuth}${auth}`).then(result =>{
      resolve(result.data);
    }).catch(err =>{
      reject(err.response.data);
    })
  })
}

/**
* Creates new branch
* GL api = projects/:id/repository/branches
* @param {json} req - The request object from the front-end
**/
export function newBranch(req){
  //let auth = req.body.auth;
  let id = req.body.gitlabID;
  let branch_name = req.body.branch;
  let ref_name = req.body.ref;
  return new Promise((resolve,reject)=>{
  axios.post(`${url}/projects/${id}/repository/branches${authorization}`,{
    branch: branch_name,
    ref: ref_name
  }).then(branch=>{
    resolve(branch.data);
  }).catch(err=>{
    reject(err.response.data);
  })
});
}

/**
* Deletes existing branch
** Gl api = projects/:id/repository/branches/:branch
* @param {json} req - The request object from the front-end
**/
export function delBranch(req){
  let auth = req.body.auth;
  let id = req.body.gitlabID;
  let branch = req.body.branch;
  return new Promise((resolve,reject)=>{
    axios.delete(`${url}/projects/${id}/repository/branches/${branch}${userAuth}${auth}`)
    .then(result =>{
      resolve(result.data);
    }).catch(err => {
      reject(err.response.data);
    });
  });
}

/**
* lists all branches
* gl api = projects/:id/repository/branches
* To-do Create branches from spcific branches that are not master
* @param {json} req - The request object from the front-end
* @return {json} branches.data - the json branches data from gl server
* @throws {json} err - json error object from gl server
**/
export function getBranches(user,repo){
  return new Promise((resolve,reject)=>{
    axios.get(`http://git.source.lol:9999/branch/${user}/${repo}/`).then(branches=>{
      resolve(branches.data);
    }).catch(err=>{
      reject(err.response.data);
    });
  });
}

/**
* gets a specific branch
* gl api = projects/:id/repository/branches/:branch
* @param {json} req - The request object from the front-end
* @return {json} branch.data - the json branch data from gl server
* @throws {json} err - json error object from gl server
**/
export function getBranch(user,repo,branch){
  return new Promise((resolve,reject)=>{
    axios.get(`http://git.source.lol:9999/branch/${user}/${repo}/${branch}`).then(branch=>{
      resolve(branch.data);
    })
    .catch(err=>{
      reject(err.response.data);
    })
  });
}

/**
* Function creates merge request
* GL api = POST /projects/:id/merge_requests
* @param {JSON} info - object containing all the information from request
* @throws {JSON} Err - Error created from gl
**/
export function newMerge(info){
  console.log("INFO",info);
  return new Promise((resolve,reject)=>{
    axios.post(`${url}/projects/${info.repoID}/merge_requests${userAuth}${info.auth}`,{
      target_branch: info.tb,
      source_branch: info.sb,
      title: info.t,
      description: info.desc
    }).then(pull=>{
      resolve(pull.data);
    }).catch(err=>{
      console.log(`ERROR Creating Merge Request on Repository: ${info.repoID}`,err.response.data);
      reject(err.response.data);
    })
  });
}

/**
* Function approves merge request
* GL api = PUT /projects/:id/merge_requests/:merge_request_iid/merge
* @param {json} req - Request json from front-end
* @throws {json} Err - Error created from gl
* If it has some conflicts and can not be merged - you'll get a 405 and the error message 'Branch cannot be merged'
* If merge request is already merged or closed - you'll get a 406 and the error message 'Method Not Allowed'
* If the sha parameter is passed and does not match the HEAD of the source - you'll get a 409 and the error message 'SHA does not match HEAD of source branch'
* If you don't have permissions to accept this merge request - you'll get a 401
**/
export function approveM(repoID,mergeID,auth){
  console.log(repoID,mergeID,auth);
  return new Promise((resolve,reject)=>{
    axios.put(`${url}/projects/${repoID}/merge_requests/${mergeID}/merge${userAuth}${auth}`)
    .then(result =>{
      resolve(result.data);
    })
    .catch(err=>{
      console.log(`ERROR Accepting Merge Request: ${mergeID} in Repo: ${repoID}`,err.response.data);
      reject(err.response.data);
    });
  })
}

// export function approveP(req){
//   let auth = req.body.auth;
//   let id = req.body.id;
//   let m_id = req.body.m_id;
//
//   return axios.put(`${url}/projects/${id}/merge_requests/${m_id}/merge${authorization}`);
// }

/**
* Function deletes a merge request
* GL api = DELETE /projects/:id/merge_requests/:merge_request_iid;
* @param {json} req - Request json from front-end
* @throws {json} Err - Error created from gl
**/
export function deleteP(req){
  let auth = req.body.auth;
  let id = req.body.gitlabID;
  let m_id= req.body.m_id;
  return new Promise((resolve,reject)=>{
    axios.delete(`${url}/projects/${id}/merge_requests/${m_id}${userAuth}${auth}`).then(
      result =>{
        resolve(result.data);
      }).catch(err =>{
        reject(err.response.data);
      });
  });
}

/**
* Function lists merge requests for a given project
* GET /projects/:id/merge_requests
* @param {json} req - Request json from front-end
* @throws {json} Err - Error from Gitlab
**/
export function listMerges(repoID){
  return new Promise((resolve,reject)=>{
    axios.get(`${url}/projects/${repoID}/merge_requests`).then(
      reqs => {
        resolve(reqs.data);
      }).catch(err=>{
        console.log("Error Listing Merges [gitlab]:",err.response.data);
        reject(err.response.data);
      });
  });
}

/**
* Updates Merge Request
* @param {json} req - Request json from front-end
* @throws {json} Err - Error from Gitlab
* PUT /projects/:id/merge_requests/:merge_request_iid
**/
export function updateMerge(info){
  return new Promise((resolve,reject)=>{
    axios.put(`${url}/projects/${info.repoID}/merge_requests/${info.mergeID}${userAuth}${info.auth}`,{
      title: info.t,
      description: info.desc,
      state_event: info.state
    }).then(result=>{
        resolve(result.data);
      }).catch(err=>{
        console.log(`ERROR Updating Merge: ${info.mergeID} for Repo: ${info.repoID}`,err.response.data);
        reject(err.response.data.message);
    })
  });
}

export function closeMerge(info){
  return new Promise((resolve,reject)=>{
    axios.put(`${url}/projects/${info.repoID}/merge_requests/${info.mergeID}${userAuth}${info.auth}`,{
      state_event: 'close'
    }).then(result=>{
        resolve(result.data);
      }).catch(err=>{
        console.log(`ERROR Updating Merge: ${info.mergeID} for Repo: ${info.repoID}`,err.response.data);
        reject(err.response.data.message);
    })
  });
}


export function deleteM(repoID,mergeID,auth){
  return new Promise((resolve,reject)=>{
    axios.delete(`${url}/projects/${repoID}/merge_requests/${mergeID}${userAuth}${auth}`)
    .then(result=>{ resolve(result.data); })
      .catch(err=>{
        console.log(`ERROR Updating Merge: ${info.mergeID} for Repo: ${info.repoID}`,err.response.data);
        reject(err.response.data.message);
    });
  })
}

/**
* Updates Merge Request
* @param {json} req - Request json from front-end
* @throws {json} Err - Error from Gitlab
* @returns Boolean if username or email are in use
* GET /users?username=:username
**/
export function checkUsername(username){
  return new Promise((resolve,reject) =>{
      axios.get(`${url}/users?username=${username}`).then(check=>{
        console.log(check.data);
      if(check.data==false) resolve(true);
      else reject(false);
    })
  });
}

/**
* Funciton retrieves commits for a given repo
* @param {int} id - ID of repo
* @throws {JSON} err - Error object
* @returns {JSON} data - JSON of commits
**/
export function getCommits(id){
  return new Promise((resolve,reject) =>{
      axios.get(`${url}/projects/${id}/repository/commits`).then(commits=>{
      resolve(commits.data);
    }).catch(err=>{
      console.log("ERROR with GL Commmtis",err.response.data);
      reject(err.response.data.message)
    })
  });
}

/**
* Function retrieves a single merge for a given repository
* @param {Int} repoID - ID associated with the repository
* @param {Int} mergeID - ID associated with the merge request
* @returns {JSON} data - JSON of merge requests
**/
export function getMerge(repoID,mergeID){
  return new Promise(( resolve,reject ) => {
    axios.get(`${url}/projects/${repoID}/merge_requests/${mergeID}`)
      .then(merge => { resolve(merge.data) })
      .catch(err => {
        console.log(`ERROR Getting Merge Request: ${mergeID} for repo: ${repoID}`,err.response.data);
        reject(err.response.data.message);
      });
  });
}

/**
 * Function forks an existing repository to a new one
 * @param {Str} repoId - ID associated with the repository
 * @param {Str} authToken - Token associated with the user
 */
// POST to gitlab /projects/:id/fork
export async function forkRepo(repoId, authToken) {
    let fork = await axios.post(`${url}/projects/${repoId}/fork${userAuth}${authToken}`)
      .catch(err => {
        console.log(`ERROR Creating Fork of Repo: ${repoId} for user token: ${authToken}`, err.response.data);
        return Promise.reject(err.response.data.message);
      });
    return Promise.resolve(fork.data);
}
