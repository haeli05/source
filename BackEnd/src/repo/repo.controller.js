import * as _repo from './repo.util';
import * as gitlab from '../util/gitlab.controller';
import {sanitizeTags} from '../util/helpers.util';


/**
* NOTE: ONLY FOR TESTING!! getRepoByUser
*/
export function tester(req,res){
  let repoID = req.params.repoID;

  gitlab.getRepo(repoID)
  .then(msg => {
    res.status(200).json({message: 'success', result: msg});
  })
  .catch(err => {
    console.log(err + '$$$');
    res.status(400).json({message:"Failed Gitlab getRepo", error: err});
  });
}

/**
* Verifies a given user can access / modify said project
* @param {string} req.query.user - the user's mongoose id
* @param {string} req.query.project - the project's mongoose id
* @returns
*/
export function verify(req, res) {
  const user = req.query.user
  const project = req.query.project

  _repo.verify(user, project)
  .then((found)=>{
    if (found) {
      res.status(200).json();
      return
    }
    else {
      res.status(403).json();
      return
    }
  })
  .catch(err=>{
    res.status(501).json("unable to check db " + err);
  })
}

/**
* Vote on either an issue or a comment (upvote / downvote)
* @param {Number} req.params.up - 1 / 0  [1 = upvote, 0 = downvote]
* @param {id} req.params.id - the mongodb id for either the issue or the blob
* @param req.user - JWT of authenticated user
* @returns
*/
export function vote(req, res) {
  const up = req.params.up;
  const id = req.params.id;
  const user = req.user.id;

  _repo.vote(up, id, user)
  .then(i=>{
    res.status(200).json(i)
  })
  .catch(err=> {
    res.status(400).json('Failed to vote: '+err)
  });
}


/**
* Adds an idea to the list of referenced ideas of a given project
* @param  req.body.projectID - mongoose id of the repo
* @param  req.body.ideaID - mongoose id of the idea to add
* @param  req.user -  JWT payload of signed in user
* @throws
* @returns
*/
export function addIdea(req, res) {
  const projectID = req.body.projectID;
  const ideaID = req.body.ideaID;
  const userID = req.user.id;

  _repo.addIdea(projectID, ideaID, userID)
  .then(repo => {
    res.status(200).json(repo);
  })
  .catch(err => {
    res.status(400).json({message:"Failed add idea", error: err});
  });
}


/**
* Gets all repos
* @throws error json (message: 'failed to retrieve repos', error: "")
* @returns Promise with repos JSON
*/
export function getRepos(req,res){
  _repo.getRepos()
  .then(repos => {
    res.status(200).json(repos);
  })
  .catch(err => {
    res.status(400).json({message:"Failed to retrieve repos", error: err});
  });
}


/**
* Get a repo's raw file from Gitlab given the repo name and username
* @param  req.body.id - mongoose id of the repo
* @param  req.body.sha - sha of the repo
* @throws
* @returns raw Gitlab file for a repo
*/
export function getRaw(req,res){
  const id = req.params.id;
  const sha = req.params.sha;

  _repo.getRepoById(id)
  .then(repo => {
    return _repo.getRaw(repo.gitlabID, sha);
  })
  .then(rawFile => {
    res.status(200).json(rawFile);
  })
  .catch(err => {
    res.status(400).json({message:"Failed to retrieve raw Gitlab file", error: err}); // GITLAB errOR THROWS SHITTY JSON (CIRCULAR)
  });
}


// /**
// * gets a repo data (from Source and Gitlab) for a provided repo id
// * @param req.params.id - mongoose id
// * @throws
// * @returns gitlab repo data + Source mongodb data for the repo
// */
// export function getRepo(req,res){
//   const repoName = req.params.repo;
//   const repoUser = req.params.username;
//   _repo.getRepoData(repoUser,repoName)
//   .then(result =>{
//     const glrepo = result[0];
//     const repo = result[1];
//     res.status(200).json({'glrepo': glrepo, 'repo': repo});
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(400).json({message:"Failed to retrieve repo", error: err});
//   });
// }


/**
* gets a repo data (from Source and Gitlab) for a provided repo id
* @param req.params.repoID - mongoose id
* @throws
* @returns gitlab repo data + Source mongodb data for the repo
*/
export function getRepo(req,res){
  const repoID = req.params.repoID;
  const parent = req.params.parent;
  const user = req.params.user;
  _repo.getRepoData(user,repoID,parent)
  .then(proj =>{
    res.status(200).json(proj);
  })
  .catch(err => {
    res.status(400).json({message:"Failed to retrieve repo", error: err});
  });
}





/**
* Stars a given repo
* @param  req.body.id           -  mongoose id of the repo
* @param  req.body.recipient    -  recipient username for the action
* @param  req.user              -  JWT payload of signed in user
* @throws
* @returns success / fail
*/
export function handleStar(req,res){
  const id = req.body.id;
  const recipient = req.body.recipient !== undefined ? req.body.recipient : "recipient";
  const username = req.user.username;
  const EOSUsername = req.user.EOSUsername;

  _repo.handleStar(id, username, EOSUsername, recipient)
  .then(results => {
      const updatedUser = results[0];
      const updatedRepo = results[1];
      const cleanUser = _repo.cleanUser(updatedUser);

      res.status(200).json({message: "Completed Star Action", updatedRepo, cleanUser});
  })
  .catch(err => {
    res.status(400).json({message: "error starring the repo", error: err});
  });
}



/**
* Lists projects in a repo
* @param  req.body.id  -  mongoose id of the repo
* @throws
* @returns repositoriesData json
*/
export function listProjectRepos(req,res){
  const id = req.body.id;

  _repo.listProjectRepos(id)
  .then((repositoriesData) => {
    res.status(200).json(repositoriesData)
  })
  .catch((err) => {
    res.status(400).json({message: "error fetching project repos", error: err});
  });
}




  /**
  * Creates a new project on Gitlab, Mongoose, and EOS simultenously
  * @param req.body.name - name of the new project
  * @param req.body.description - description of the new project
  * @param req.body.import_url - import url for new project
  * @param req.user - JWT payload data for user creating the project
  * @throws
  * @returns {JSON} - the new project / rejection
  */
export function newProject(req,res){
  const name = req.body.name;
  const user = req.user;
  const description = req.body.description;
  const import_url = req.body.import_url !== '' ? req.body.import_url: undefined;

  _repo.newProject(name, description, import_url, user)
  .then(project => {
    res.status(200).json({message:'Project created successfully', project: project});
  })
  .catch(err => {
    res.status(400).json({message: "error creating project", error: err});
  });
}


/**
* sets roles, actions, compensations, and reputation for a given repo (by mongoose id)
* @param req.user               -   JWT payload of signed in user
* @param req.body.roleCount    -   # of roles to be created
* @param req.body.roleNames    -   [] array of names of roles in order
* @param req.body.actions       -   [[]] nested array of actions each role is allowed to take, in order
* @param req.body.compensations -   [[]] nested array of compensations for each action, for each role, in order
* @param req.body.reputations   -   [[]] nested array of reputations for each action, for each role, in order
* @param req.body.thresholds    -   [] array of threshold reputation points to get to a role, in order
* @param req.body.id            -   mongoose id for the repo being set
* @throws
* @returns {JSON} EOS transaction receipt / rejection
*/
export function setRepo(req, res) {
  const data = {
    username : req.user.username,
    role_count : req.body.roleCount,
    role_names : req.body.roleNames,
    actions : req.body.actions,
    compensations : req.body.compensations,
    reputations : req.body.reputations,
    thresholds : req.body.thresholds,
    id : req.body.id,
    EOSUsername: req.user.EOSUsername
  }

  _repo.setRepo(data, req.user.id)
  .then(rules => {
    res.status(200).json({message: "Project rules were set successfully", rules})
  })
  .catch(err => {
    res.status(400).json({message: "error setting up project rules", error: err});
  });
}


/**
* adds lables for issues... a-la Github (can only be set by creator of the repo)
* Limited to 20 labels per project
* @param req.user           -   JWT payload of signed in user
* @param req.body.labels    -   array of labels
* @param req.body.repoID    -   array of labels
* @throws
* @returns
*/
export function addLabels(req, res) {
  const labels = (req.body.labels == undefined) ? req.body.labels : sanitizeTags(req.body.labels);
  const user = req.user.id;
  const repoID = req.body.repoID;

  _repo.addLabels(repoID, user, labels)
  .then(labels => {
    res.status(200).json(labels)
  })
  .catch(err => {
    res.status(400).json({message: "error adding issue labels", error: err});
  });
}



/**
* Get a project's token balance
* @param req.params.id          -   mongoose id for project
* @throws
* @returns
*/
export function getBalance(req,res) {
  const id = req.params.id;
  let repoName;
  _repo.getRepoById(id)
  .then(repo => {
    let cid = repo.cid;
    repoName = repo.project_name;
    return _repo.getBalance(cid);
  })
  .then(balance => {
    res.status(200).json('Balance of '+ repoName+': ' +balance);
  })
  .catch(err => {
    res.status(400).json({message: "error getting project balance", error: err});
  })
}



/**
* UNIMPLEMENTED
* @throws
* @returns
*/
export function listProjectFiles(req,res){

}



/**
* creates a new branch on Gitlab
* @param req.body.gitlabID         -   gitlab ID of project
* @param req.body.branch         -   new branch name
* @param req.body.ref          -   ref name
* @throws
* @returns
*/
export function newBranch(req,res){
  _repo.newBranch(req)
  .then(branch=>{
    res.status(200).json({message: "New Branch Created", branch});
  })
  .catch(err => {
    res.status(400).json({message:"Failed to create new branch", error:err});
  });
}



/**
* Deletes a branch on Gitlab
* @param req.body.gitlabID         -   gitlab ID of project
* @param req.body.branch         -   new branch name
* @param req.body.auth          -   auth
* @throws
* @returns
*/
export function delBranch(req,res){
  _repo.delBranch(req)
  .then(result => {
    res.status(200).json({message: "Deleted Branch", result});
  })
  .catch((err) => {
    res.status(400).json({message:"Failed to delete branch", error:err});
  })
}



/**
* Lists all branches for a given project, from Gitlab
* @param req.body.gitlabID         -   gitlab ID of project
* @throws
* @returns
*/
export function getBranches(req,res){
  let username = req.params.username;
  let repo = req.params.repo;
  _repo.getBranches(username,repo)
  .then(branches=>{
    res.status(200).json({message: "Branches found", branches});
  })
  .catch((err) => {
    res.status(400).json({message:"Failed to retrieve branches", error:err});
  });
}


/**
* Gets a specific branch from gitlab
* @param req.body.gitlabID         -   gitlab ID of project
* @param req.body.branch           -  branch name
* @throws
* @returns
*/
export function getBranch(req,res){
  let username = req.params.username;
  let repo = req.params.repo;
  let branch = req.params.branch;
  _repo.getBranch(username,repo,branch)
  .then(branch => {
    res.status(200).json({message: "Branch found", branch});
  })
  .catch((err) => {
    res.status(400).json({message:"Failed to retrieve branch", error:err});
  });
}




/**
* Create a pull request
* @param req.body.auth
* @param req.body.gitlabID
* @param req.body.title
* @param req.body.source_branch
* @param req.body.target_branch
* @param req.body.asignee_id
* @param req.body.desc
* @throws
* @returns
**/
export function newMerge(req,res){
  let info = {
    repoID : req.params.repoID,
    userID : req.user.id,
    t : req.body.title,
    sb : req.body.source_branch,
    tb : req.body.target_branch,
    desc : req.body.desc
  }

  if( info.sb===undefined || info.tb===undefined || info.t===undefined || info.repoID===undefined )
  res.status(400).json({message:"Missing One or More Required Fields [target/source branch,title,ID]"});

  _repo.newMerge(info)
  .then(pull => {
    res.status(200).json({message: "Made new pull request", pull});
  })
  .catch((err) => {
    res.status(400).json({message:"Failed to make pull request", error:err});
  });
}




/**
* Function deletes pull request
* @param req.body.auth;
* @param req.body.gitlabID;
* @param req.body.m_id
* @throws {json} err - error from Gitlab
**/
export function deleteM(req,res){
  let repoID = req.params.repoID;
  let mergeID = req.params.mergeID;
  let user = req.user.id;
  _repo.deleteM(repoID,mergeID,user)
  .then(result => {
    res.status(200).json({message: "Pull request deleted", result});
  })
  .catch((err) => {
    res.status(400).json({message:"Failed to delete pull request", error:err});
  });
}


/**
* Function approves a pull request (merge)
* @param {json} req - Request json from front-end
* @param {json} res - Response json to send from front-send
* @throws {json} err - error from Gitlab
**/
export function approveM(req,res){
  let repoID = req.params.repoID;
  let mergeID = req.params.mergeID;
  let commitMsg = req.body.msg;
  let user = req.user.id;

  _repo.approveM(repoID,mergeID,commitMsg,user)
    .then(result => {
      res.status(200).json({ message: "Merge Request Approved", result });
    })
    .catch(err =>{
      res.status(400).json({ message:"Failed to Approve Merge Request", error : err });
    });
}




/**
* Function lists merge requests for a given project
* @param req.params.gitlabID - gitlab id of the project
* @throws {json} err - error from Gitlab
**/
export function listMerges(req,res){
  let repoID = req.params.repoID;
  _repo.listMerges(repoID)
  .then(merges => {
    res.status(200).json({message: "List of merges found", merges});
  })
  .catch((err) => {
    res.status(400).json({message:"Failed to retrieve merges", error:err});
  });
}

/**
* Function gets a specific merge request
* @param req.params.gitlabID - gitlab id of the project
* @param req.params.mergeID  - ID of the gitlab merge
* @throws {json} err - error from Gitlab
**/
export function getMerge(req,res){
  let repoID = req.params.repoID;
  let mergeID = req.params.mergeID;

  _repo.getMerge(repoID,mergeID)
  .then(merges => {
    res.status(200).json({message: "Merges found", merges});
  })
  .catch((err) => {
    res.status(400).json({message:"Failed to retrieve merge", error:err});
  });
}

/**
* Update Merge Request
* @param req.body.auth;
* @param req.body.gitlabID;
* @param req.body.m_id;
* @param req.body.title;
* @param req.body.aid;
* @param req.body.desc;
* @throws {json} err - error from Gitlab
**/
export function updateMerge(req,res){
  const info = {
    repoID : req.params.repoID,
    mergeID:req.params.mergeID,
    t : req.body.title,
    desc : req.body.desc,
    user: req.user.id,
    state: (req.body.reopen) ? "reopen": ""
  }
  _repo.updateMerge(info)
  .then(merge => {
    res.status(200).json({message: "Updated merge", merge});
  })
  .catch((err) => {
    res.status(400).json({message:"Failed to update merge", error:err});
  });
}

export function closeMerge(req,res){
  const info = {
    repoID : req.params.repoID,
    mergeID:req.params.mergeID,
  }
  _repo.closeMerge(info)
  .then(merge => {
    res.status(200).json({message: "Updated merge", merge});
  })
  .catch((err) => {
    res.status(400).json({message:"Failed to update merge", error:err});
  });
}


/** TODO: Gitlab function isn't implemented!
* Gets a specific pull request from gitlab
* @param req.body.gitlabID         -   gitlab ID of project
* @param req.body.branch           -  branch name
* @throws
* @returns
*/
export function getPull(req,res){
  gitlab.getPull(req).then(pull=>{
    console.log("Get Pull Requests created");
    res.json({
      message: "Pull Requests goten"
    })
  }).catch(err =>{
    console.log(err.response.data);
    res.status(400).json({message:'Failed to get pull', error:err});
  })
}


/** TODO: Gitlab function isn't implemented!
* Function gets single merge requests for a given project
* @param {json} req - Request json from front-end
* @param {json} res - Response json to send from front-send
* @throws {json} err - error from Gitlab
**/
export function getSinglePull(req,res){
  gitlab.getSinglePull(req).then(reqs=>{
    console.log("Single Pull Request found");
    res.json({
      message: "Request Found",
      reqs
    });
  }).catch(err=>{
    console.log(err.response.data);
    res.status(400).json({message:'Failed to get single pull' ,error:err});
  })
}

export function getCommits(req,res){
  let id = req.params.id;
  _repo.getCommits(id)
    .then(Data=>{
      res.json({
        message: "Commits Found",
        Data
      });
    })
    .catch(err=>{
      res.status(400).json({message:'Failed to get commits' ,error:err});
    })
}

export function forkRepo(req, res) {
  const repoId = req.params.repoId;
  const userId = req.user.id;
  console.log("controller",repoId,userId)
  _repo.fork_repo(repoId, userId)
    .then(data => {
      res.status(200).json({ message: 'forked successfully', data });
    })
    .catch(error => {
      res.status(400).json({ error, message: 'fork failure' });
    });
}
