import React, { Component } from 'react';
// Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
// Components
import Chip from './../global/components/chip';
import MajorActionButtons from './../global/components/majorActionButtons'
import SettingsButton from './../global/components/settingsButton';
import PayButton from './../payments/payButton';
import ErrorPage from './../global/errorPage';
import ThoughtCard from './../global/components/thoughtCard';
import ReactQuillEditor from './../global/components/reactQuillEditor';
// Icons
import Icon from 'react-icons-kit';
import {basic_settings} from 'react-icons-kit/linea/basic_settings';
// SVG
import Write from './../../assets/svg/write.svg';
import ReactSVG from 'react-svg'
// MISC
import { SocialIcon } from 'react-social-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import {fetchPerson} from './../../actions/people.actions';
import {getPerson, getPersonStatus} from './../../reducers/people.reducer';
import {updateUser} from './../../actions/user.actions';
import {getUser, getUpdateUserStatus} from './../../reducers/user.reducer';



class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      editBio: false,
    }
    this.editBioToggle=this.editBioToggle.bind(this);
    this.submitBioEdit=this.submitBioEdit.bind(this);
    this.handleTabChange=this.handleTabChange.bind(this);
    this.props.dispatch(fetchPerson(this.props.match.params.user))
  }

  editBioToggle(){
    this.setState({editBio:!this.state.editBio})
  }

  submitBioEdit(body, string) {
    this.props.dispatch(updateUser({bio:body}))
  }

  handleTabChange(event, value)  {
    this.setState({value});
  };

  render() {
    if(this.props.personStatus==="PENDING" || this.props.personStatus===false) {
      return (<div className="GenericLoading"><CircularProgress color="primary" size={50} /></div>)
    }
    if(this.props.personStatus==="ERROR") {
      return (<ErrorPage {...this.props}/>)
    }
    else return (
      <div className="UserPage">
        <div className="UserProfileLeft">
          <Avatar className="Avatar" src={this.props.person.avatar}/>
          <div className="NameDiv">
            <Typography variant="subtitle1">@{this.props.person.username}</Typography>
          </div>
          <div className="DescriptionDiv">
            <Typography variant="subtitle1">{this.props.person.description}</Typography>
          </div>
          <div className="SkillsDiv">
            <Typography variant="overline">SKILLS</Typography>
            <div className="ChipsDiv">
              {this.props.person.skills.map(skill=>{
                if(skill!==""){
                  return(
                    <div key={skill} className="IndividualChip">
                      <Chip {...this.props} label={skill}/>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className="SocialDiv">
            {this.props.person.social.map(social=>{
              return(
                <div key={social} className="MarginRight10">
                  <SocialIcon style={{height:30,width:30}} url={social} />
                </div>
              )
            })}
          </div>
          <div className="WebsiteDiv">
            <a href={this.props.person.website}>
              <Typography variant="subtitle2">{this.props.person.website}</Typography>
            </a>
          </div>
        </div>
        <div className="UserProfileRight">
          <div className="PageTitle">
            <div className="OverlineAndButtons">
              <Typography variant="overline">USER</Typography>
              <div className="Flex">
                {this.props.user.id===this.props.match.params.user && (
                  <SettingsButton {...this.props} type="profile"/>
                )}
                <MajorActionButtons {...this.props} orientation="horizontal" title={this.props.person.username} url={window.location.href} type="person" id={this.props.person._id}/>
              </div>
            </div>
            <Typography variant="h1">{this.props.person.name}</Typography>
          </div>
            <AppBar position="static" elevation={0} >
              <Tabs value={this.state.value} onChange={this.handleTabChange} fullWidth>
                <Tab label="About" />
                <Tab label="Activity" />
                <Tab label="Contributions" />
              </Tabs>
            </AppBar>
            <SwipeableViews index={this.state.value} onChangeIndex={this.handleTabChange}>
              <div className="UserTabAbout">
                {this.state.editBio && (
                  <ReactQuillEditor placeholder="Tell us about yourself..." text={this.props.person.bio} submit={this.submitBioEdit} cancel={this.editBioToggle}/>
                )}
                {!this.state.editBio && (
                  <div>
                    {this.props.person.bio===undefined && (
                      <div className="ContainedMessage">
                        <Typography variant="h4">This user hasn't filled out a bio yet</Typography>
                      </div>
                    )}
                    <div dangerouslySetInnerHTML={{__html:this.props.person.bio}} />
                    {this.props.user.id===this.props.person._id && (
                      <Button variant="fab" mini className="EditButton" onClick={this.editBioToggle}><ReactSVG src={Write} className="ReactSVGIcon"/></Button>
                    )}
                  </div>
                )}
              </div>
              <div className="UserTabActivity">
                <Typography variant="overline">Recent</Typography>
                <ThoughtCard {...this.props} person={this.props.person}/>
                <Typography variant="title">Featured Ideas:</Typography>
                <Typography variant="title">Featured Projects:</Typography>
              </div>
              <div className="UserTabContributions">

              </div>
            </SwipeableViews>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    person: getPerson(state),
    personStatus: getPersonStatus(state)
  }
}


export default connect(mapStateToProps)(UserPage);
