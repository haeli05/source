const mongoose =require('mongoose');
let User = require('../user');
let Repo = require('../repo')
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/testing1234';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;




let testtest = { project_name:"testetsetset",userName:"root",src_raised: 69, repoID:1 , star_count : 1, forks_count: 0 };
let hotstuff = { project_name:"hotstuff",userName:"root",src_raised: 31, repoID:2 , star_count : 1, forks_count :0};
let wilburright = { project_name:"wilburright",userName: "Carlos",src_raised: 20, repoID:3, star_count : 2,forks_count:0 };

let one = new Repo(testtest);
let two = new Repo(hotstuff);
let three = new Repo(wilburright);

one.save().then(repo => {console.log("repo",repo)});

two.save().then(repo => {console.log("repo",repo)});

three.save().then(repo => {console.log("repo",repo)});


let Admin  = {name:"Administrator",
username: "root",email: "jack@me.com", password: "hotstuff",
gitlabID: 1, gitlabToken: "Wsh9qPXexJb8k7gW5dmL",
totalSRC: 100,
Repositories:[1,2]
}


let c = {name:"c", username: "Carlos",email: "me@jack.com",
password: "hotstuff",gitlabID: 2,
gitlabToken: "Wsh9qPXexJb8k7gW5dmL",
totalSRC: 20,
Repositories:[3]
}


let a = new User(Admin);
let cr = new User(c);

console.log(Admin);
console.log(c);


a.save().then(count => {
  console.log("Admin",count.OwnerKey.PrivateKey);
})

cr.save().then(count => {
  console.log("c",count.ActiveKey.PublicKey);
})
