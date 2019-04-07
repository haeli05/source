import User from '../models/user';
import * as _storage from './storage.util';



/**
* Authenticates a user and sends a pre-signed POST
* For the user to do an in-browser image upload to S3
* @param req.user - JWT of authenticated user
* @returns {JOSN} Pre-signed POST
**/
export async function awsToken(req,res){
  if (req.user == undefined) {res.status(400).send('Failed to authenticate user'); return;}
  const awsObj = await _storage.awsToken().catch(err => {res.status(400).send(err); return;})
  res.status(200).send(awsObj);
}
