import axios from 'axios'
import history from '../history'
import config from '../utils/config.js';

//messages actions
//ec2-35-153-131-45.compute-1.amazonaws.com
//// TODO: ADD A CONFIG FILE FOR ROUTES
export function requestMessages(){
  return{
  type: 'messages'
  status: 'pending'
  }
}

export function receiveMessages(status){
  return{
  type: 'messages'
  status: status
  }
}
