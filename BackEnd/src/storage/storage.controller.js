import User from '../models/user';
import * as _storage from './storage.util';



/**
* Authenticates a user and sends a pre-signed POST
* For the user to do an in-browser image upload to S3
* @param req.user - JWT of authenticated user
* @returns {JOSN} Pre-signed POST
**/

export async function upload(req,res){
  //if (req.user == undefined) {res.status(400).json('Failed to authenticate user'); return;}
  _storage.upload(req)
}
