//Exchange pages
import TradingViewWidget from 'react-tradingview-widget';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {basic_lightbulb} from 'react-icons-kit/linea/basic_lightbulb';
import Icon from 'react-icons-kit';
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
      currentTab: 0,
      header: "New",
      search: "",
      filterTags: [],
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

  render() {
    return (
    <div>
      <div className="header">
        <Typography>EXCHANGE</Typography>
        <Typography variant="display4">Trade</Typography>
      </div>
        <Tabs value={this.state.currentTab} indicatorColor="primary">
          <Tab label="Unread" onClick={()=>this.handleTabChange(0)}/>
          <Tab label="Groups" onClick={()=>this.handleTabChange(1)}/>
          <Tab label="All" disabled/>
        </Tabs>
      
        <div className="pairs">
         <TradingViewWidget symbol="BTCUSD" />
        </div>
    </div>
  );
  }
}


export default Messages;
