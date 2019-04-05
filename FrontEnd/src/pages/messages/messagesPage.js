//Messages PAGES
//
//Types: DM, Groups, Public Rooms

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import {basic_lightbulb} from 'react-icons-kit/linea/basic_lightbulb';
import Icon from 'react-icons-kit';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';

import MessageCard from './components/messageCard.js';



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
      currentTab: 0,
      header: "New",
      messages: [],
    }
    this.handleTabChange=this.handleTabChange.bind(this);
    this.goNew=this.goNew.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleTabChange(tabNum) {
    if (tabNum === 0) {
      this.setState({ currentTab: 0 });
      this.setState({ header: "New" });
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
      <div className="PageTitle">
        <div className="OverlineAndButtons">
          <Typography variant="overline">MESSAGES</Typography>
          <div className="UtilityButtons">

          </div>
      </div>
      <Typography variant="display4">{this.state.header}</Typography>
    </div>
    <div className="Body">
      <div className="Content">
        <div className="ExploreIdeaTabs">
          <Tabs value={this.state.currentTab} indicatorColor="primary">
            <Tab label="New" onClick={()=>this.handleTabChange(0)}/>
            <Tab label="Groups" onClick={()=>this.handleTabChange(1)}/>
            <Tab label="All" onClick={()=>this.handleTabChange(2)}/>
          </Tabs>
        </div>

        {this.props.ideas===false && (
          <div className="GenericLinearLoading">
            <LinearProgress color="secondary" variant="query" />
          </div>
        )}
        {this.state.currentTab === 0 &&
          <div>
          </div>}
          <div>
          <Paper style={{maxWidth:"250px"}}>
            <Typography variant="h6" style={{backgroundColor:"$Dark"}}>
              Message Box
            </Typography>
            <Typography variant="subtitle1">
              Message Body
            </Typography>
          </Paper>
          </div>


      </div>
    </div>
    </div>
    );
  }
}


export default Messages;
