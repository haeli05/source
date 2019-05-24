//Messaging w Rocket.chat
//Types: DM, Groups, Public Rooms

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {ShareButton} from '../global/components/majorActionButtons.js';
import MessageCard from './components/messageCard.js';
import {connect} from 'react-redux';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: "24px" }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function sendMessage(username,accessToken,deviceId){
  // let obj ={
  //   mx_user_id: "@"+username+":source.lol",
  //   mx_is_url:"https://matrix.org",
  //   mx_hs_url:"https://matrix.source.lol",
  //   mx_access_token:accessToken,
  //   carlos: true,
  //   mx_device_id:deviceId,
  //   notifications_hidden:true,
  //   mx_is_guest:false
  // };
  //
  // let data = obj;
  // window.onload = function() {
  //   if(document.getElementsByTagName('iframe')!==null){
  //     var win = document.getElementsByTagName('iframe')[0].contentWindow;
  //     win.postMessage(data, "*");
  //   }
  // };
}


class Messages extends Component {
  constructor(props) {
    super(props);
    let chat = localStorage.getItem("chat");
    if(chat!==null && chat!==false) { this.props.dispatch( refreshChat() ); }
    let route = this.props.match.params;
    let roomId = (route.id!=="_") ? route.id : false;
    this.state = {
      currentTab: 0,
      header: "New",
      search: "",
      filterTags: [],
      roomId: roomId
    }
    this.handleTabChange=this.handleTabChange.bind(this);
    this.goNew=this.goNew.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

componentDidMount(){
   if(this.props.user!==null && this.props.user!==undefined && this.props.user !== false){
     let chat = JSON.retrocycle(JSON.parse(localStorage.getItem("chat"))).client;
     var script= document.createElement('script');
     script.src = sendMessage(chat.username,chat.access_token,chat.deviceId);
     document.body.appendChild(script);
   }
 }


  handleTabChange(tabNum) {
    if (tabNum === 0) {
      this.setState({ currentTab: 0 });
      this.setState({ header: "Unread" });
    }
    else if (tabNum === 1) {
      this.setState({ currentTab: 1 });
      this.setState({ header: "Groups" });
    }
    else if (tabNum === 2) {
      this.setState({ currentTab: 2 });
      this.setState({ header: "All" });
    }
  }

  goNew(){
    this.props.history.push("/newMessage");
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
    <div>
      <div className="messages" style={{width:"100%", height:"100vh"}}>


      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.token,
    chat: state.chat.client
  }
}


export default connect(mapStateToProps)(Messages);
