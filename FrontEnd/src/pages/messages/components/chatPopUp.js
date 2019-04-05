//chat pop up
//does not include content render


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ReactSVG from 'react-svg';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import {connect} from 'react-redux';
import ChatWindow from './chatWindow';


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

class ChatPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      isUpdating: false,
      expand: false,
    }
    this.handleTabChange=this.handleTabChange.bind(this);
    this.goNew=this.goNew.bind(this);
    this.handleChange=this.handleChange.bind(this);
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

  toggleExpand(){
    if(this.state.expand){
    this.setState({expand: false});
  }else{
    this.setState({expand: true});
  }
  }

  render() {
    return (
    <div className="ChatWindow">
        <div className="ChatHeader" onClick={() => {this.setState({expand: !this.state.expand})}}>
          <Typography variant='body2'>Chat is here</Typography>
        </div>
        {(this.state.expand) &&
        (<div className="ChatBody">
        <ChatWindow />
        </div>)}
    </div>
    );
  }
}


export default ChatPopUp;
