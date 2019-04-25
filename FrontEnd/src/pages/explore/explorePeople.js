import React, { Component } from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

// SVG
import ReactSVG from 'react-svg';

import RightBracket from './../../assets/svg/rightbracket.svg';
import LeftBracket from './../../assets/svg/leftbracket.svg';

// Components
import PersonCard from './components/personCard';
import {ShareButton} from '../global/components/majorActionButtons.js';

import TopicBar from './components/topicBar.js';
import PopUp from '../global/components/PopUp.js';
// Redux
import {connect} from 'react-redux'
import {fetchPeople} from './../../actions/people.actions'
import {getPeopleStatus,getPeople} from './../../reducers/people.reducer';
import {getUser} from './../../reducers/user.reducer';
// MISC
import PropTypes from 'prop-types';



class ExplorePeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      sort: "trending",
      loginPromptPopUp: false,
      topics: undefined,
      limit: 50,
      last: [undefined],
      pages: [1]
    }
    this.props.dispatch(fetchPeople(this.state.limit, undefined, undefined, 'trending'));
    this.handleTabChange=this.handleTabChange.bind(this);
    this.handlePagination=this.handlePagination.bind(this);
  }

  handleTabChange(tab) {
    this.setState({currentTab:tab});
    this.setState({last:[undefined]})
    this.setState({pages:[1]})
    if (tab===0){
      this.setState({sort:"trending"})
      this.props.dispatch(fetchPeople(this.state.limit, undefined, undefined, 'trending'))
    } else if (tab===1){
      this.setState({sort:"trending"})
      this.props.dispatch(fetchPeople(this.state.limit, undefined, undefined, 'trending'))
    } else {
      this.setState({sort:"no"})
      this.props.dispatch(fetchPeople(this.state.limit, undefined, undefined, undefined))
    }
  }

  handlePagination(page){
    if (page==="next"){
      var lastID = this.props.people[this.props.people.length - 1]._id
      this.state.last.push(lastID)
      this.state.pages.push(this.state.pages[this.state.pages.length - 1] + 1)
      this.props.dispatch(fetchPeople(this.state.limit, this.state.topic, lastID, this.state.sort))
    } else if (page==="back") {
      var lastID = this.state.last[this.state.last.length - 2]
      this.state.last.pop()
      this.state.pages.pop()
      this.props.dispatch(fetchPeople(this.state.limit, this.state.topic, lastID, this.state.sort))
    } else {
      var lastID = this.state.last[page-1]
      this.state.last.length = page
      this.state.pages.length = page
      this.props.dispatch(fetchPeople(this.state.limit, this.state.topic, lastID, this.state.sort))
    }
  }

  render() {
    console.log(this.props,this.state)
    return (
      <div className="ExplorePeople ExplorePage RootMargins">
        <div className="PageTitle">
          <div className="OverlineAndButtons">
            <Typography variant="overline" className="Hidden">EXPLORE</Typography>
            <div className="OverlineButtons">
              <ShareButton {...this.props} url={window.location.href} />
            </div>
          </div>
          <PopUp />
          <Typography variant="h2">Explore</Typography>
        </div>
        <div className="Body">
          <div className="Content">
            <div className="ExploreTabs">
              <Tabs value={this.state.currentTab} indicatorColor="primary">
                <Tab label="Related" onClick={()=>this.handleTabChange(0)} />
                <Tab label="Trending" onClick={()=>this.handleTabChange(1)} />
                <Tab label="Organizations" disabled/>
              </Tabs>
            </div>
            {(this.props.peopleStatus==="PENDING") && (
              <div className="GenericLinearLoading">
                <LinearProgress color="secondary" variant="query" />
              </div>
            )}
            {(this.props.peopleStatus==="ERROR") && (
              <div className="ContainedMessage">
                <Typography variant="h3">An error occured :(</Typography>
              </div>
            )}
            {(this.props.peopleStatus==="SUCCESS") && (
              <div>
                {this.props.people.map(person => {
                  return (
                    <div key={person._id}>
                      {(person.username!==undefined) && (<PersonCard content={person} {...this.props}/>)}
                    </div>
                  );
                })}
                <div className="Flex AlignCenter PaginationDiv">
                  {(this.state.last.length > 1) && (
                    <IconButton className="PaginationButtonLeft" onClick={() => this.handlePagination("back")} >
                      <ReactSVG src={LeftBracket} className="PaginationButtonIcon"/>
                    </IconButton>
                  )}
                  <div className="Flex">
                    {this.state.pages.map(page=>{
                      return (
                        <Typography key={page} className="LinkUnderline PaginationPageNumber" variant="subtitle1" onClick={() => this.handlePagination(page)}>{page}</Typography>
                      )
                    })}
                  </div>
                  {(this.props.people.length!==0) && (
                    <IconButton className="PaginationButtonRight" onClick={() => this.handlePagination("next")} >
                      <ReactSVG src={RightBracket} className="PaginationButtonIcon"/>
                    </IconButton>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="Sidebar">
            <div>
              <Button fullWidth variant="contained" color="primary" disabled>+ Organization </Button>
            </div>
            <div className="SidebarTopics">
              <TopicBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state) =>{
  return{
    user: getUser(state),
    people: getPeople(state),
    peopleStatus: getPeopleStatus(state)
  }
}
export default connect(mapStateToProps)(ExplorePeople);
