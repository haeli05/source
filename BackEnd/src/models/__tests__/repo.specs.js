const mongoose =require('mongoose');
var mongoDB = 'mongodb://localhost/source';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
