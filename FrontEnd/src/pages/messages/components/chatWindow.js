//chat window component
//Takes props of username/channel Name
//Rendered in both messenger and pop up


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      content:[],
      isUpdating: false,
      expand: true,
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
    this.setState({expand: !this.state.expand});
  }

  render() {
    return (
    <div className="ChatWindow">
      <Paper>
        <div className="ChatHeader" >
          <Typography>Chat is here</Typography>

        </div>
        <div className="ChatBody">

        </div>
        <div className="ChatFooter">
        </div>
      </Paper>
    </div>
    );
  }
}


export default Messages;
