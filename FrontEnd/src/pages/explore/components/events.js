//Events

import React, { Component } from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
// Icons
import Icon from 'react-icons-kit';

// Components
import Idea from './components/ideaCard';
import {ShareButton} from '../global/components/majorActionButtons.js';
import TopicBar from './components/topicBar.js';
import LoginPrompt from '../global/components/loginPrompt.js';
// Redux
import {connect} from 'react-redux';

// MISC
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.loginCheck=this.loginCheck.bind(this);
    this.closeLoginPrompt=this.closeLoginPrompt.bind(this);
    this.getTopics=this.getTopics.bind(this);
  }

  loginCheck(e){
    if(this.props.user.username===false){
      e.preventDefault();
      this.setState({loginPromptPopUp:true});
    } else {
      return
    }
  }

  handleTabChange(tabNum) {
    this.setState({currentTab:tabNum});
  }

  closeLoginPrompt() {
    this.setState({loginPromptPopUp:false})
  }

  getTopics(){
    var topics = [];
    for (var i=0; i < this.props.ideas.length; i++){
      var ideaTopics = this.props.ideas[i].tags
      for (var j=0; j < ideaTopics.length; j++){
        if (!topics.includes(ideaTopics[j])) {
          topics.push(ideaTopics[j])
        }
      }
    }
    topics = topics.sort()
    this.setState({topics:topics})
  }

  render() {
    if(this.props.ideasStatus==="SUCCESS" && this.state.topics===undefined) {
      this.getTopics()
    }
    return (
      <div className="ExploreIdeas ExplorePage RootMargins">

        <LoginPrompt open={this.state.loginPromptPopUp} close={this.closeLoginPrompt}/>
        <div className="Body">
          <div className="Content">
            Here are some events
          </div>
          <div className="Sidebar">
            <div>

            </div>
            <div className="SidebarTopics">
              <TopicBar {...this.props} topics={this.state.topics}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state) =>{
  return{

  }
}
export default connect(mapStateToProps)(Events);
