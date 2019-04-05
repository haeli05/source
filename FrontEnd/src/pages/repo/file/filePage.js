import React, { Component } from 'react';
// Material UI
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
// Icons
import Icon from 'react-icons-kit';
import {ic_delete} from 'react-icons-kit/md/ic_delete';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import {ic_history} from 'react-icons-kit/md/ic_history';
import {ic_insert_drive_file} from 'react-icons-kit/md/ic_insert_drive_file'
// Components
import MajorActionButtons from './../../global/components/majorActionButtons';
import ErrorPage from './../../global/errorPage';
import SettingsButton from './../../global/components/settingsButton';
// Redux
import {connect} from 'react-redux'
import {fetchRepo, fetchFile} from './../../../actions/repo.actions'
import {getRepo, getRepoStatus, getFile, getFileStatus} from './../../../reducers/repo.reducer';
import {getUser} from './../../../reducers/user.reducer';
// MISC
import {Link} from 'react-router-dom';


class FilePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      breadCrumbs: [],
      breadCrumbsIdentified: false,
    }
    this.identifyBreadCrumbs=this.identifyBreadCrumbs.bind(this);
    this.props.dispatch(fetchFile(this.props.match.params.projectID,this.props.match.params.id))
    this.identifyBreadCrumbs()
  }

  identifyBreadCrumbs(){
    if(this.props.match.params[0]!==undefined){
      var splat = this.props.match.params[0].split('/')
      var breadCrumbs = []
      for(var i = 0; i < splat.length; i++){
        if(i===0 || i%2===0){
          var link = splat.slice(0,i+2)
          breadCrumbs.push({id:splat[i],tree:splat[i+1],link:link.join("/")})
        }
      }
      this.setState({breadCrumbsIdentified:true})
      this.setState({breadCrumbs:breadCrumbs})
    }
  }

  mouseDown(index){
    var currentUrl = window.location.href
    if(currentUrl.includes('?lines=')){
      var linesIndex = currentUrl.indexOf('?lines=')
      var newUrl = currentUrl.substring(0,linesIndex)
      window.history.pushState({}, null, `${newUrl}?lines=${index}-`)
    } else {
      window.history.pushState({}, null, `${window.location.href}?lines=${index}-`)
    }
  }

  mouseUp(index){
    var currentUrl = window.location.href
    if(currentUrl.includes('?lines=')){
      window.history.pushState({}, null, `${window.location.href}${index}`)
    } else {
      return
    }
  }

  render() {
    if (this.state.breadCrumbsIdentified===false) {this.identifyBreadCrumbs()}
    if (this.props.repoStatus===undefined || this.props.repoStatus===false) {this.props.dispatch(fetchRepo(this.props.match.params.user,this.props.match.params.projectID,"VOID"))}
    if (this.props.fileStatus===undefined || this.props.fileStatus===false) {this.props.dispatch(fetchFile(this.props.match.params.projectID,this.props.match.params.id))}
    if (this.props.repoStatus==="ERROR") {return (<ErrorPage history={this.props.history}/>)}
    if (this.props.repoStatus==="SUCCESS") {
      return (
        <div className="FilePage RootMargins">
          <div className="PageTitle">
            <div className="OverlineAndButtons">
              <Typography variant="overline">PROJECT by {this.props.match.params.user}</Typography>
              <div className="OverlineButtons">
                {this.props.user.id===this.props.repo.proj.creator._id && (
                  <div className="SingleOverlineButtonDiv">
                    <SettingsButton type="project" {...this.props}/>
                  </div>
                )}
                <MajorActionButtons {...this.props} title={this.props.repo.proj.project_name} url={window.location.href}/>
              </div>
            </div>
            <div className="Title">
              <Typography variant="h4" className="ProjectName LinkUnderline" component={Link} to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}`}>{this.props.repo.proj.project_name}</Typography>
              {this.state.breadCrumbs.map(tree=>{
                return(
                  <div className="Flex">
                    <Typography variant="h4" className="Separator">/</Typography>
                    <Typography variant="h4" className="TreeName LinkUnderline" component={Link} to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/tree/${tree.link}`}>{tree.tree}</Typography>
                  </div>
                )
              })}
              <Typography variant="h4" className="Separator">/</Typography>
              <Typography variant="h4" className="FileName">{this.props.match.params.file}</Typography>
            </div>
          </div>
          <div className="Info">
            <Paper elevation={0}>
              <div className="Header">
                <div className="Contributors">
                  <Typography variant="body1">Contributors: coming soon</Typography>
                </div>
                <div className="Actions">
                  <Button color="primary" disabled><Icon icon={ic_insert_drive_file}/>Raw</Button>
                  <Button color="primary" disabled><Icon icon={ic_history}/>History</Button>
                  <Button color="primary" disabled><Icon icon={ic_mode_edit}/>Edit</Button>
                  <Button color="primary" disabled><Icon icon={ic_delete}/>Delete</Button>
                </div>
              </div>
              {this.props.fileStatus==="PENDING" && (
                <div className="GenericLinearLoading">
                  <LinearProgress color="secondary" variant="query" />
                </div>
              )}
              {this.props.fileStatus==="ERROR" && (
                <div></div>
              )}
              {this.props.fileStatus==="SUCCESS" && (
                <div className="FileContents">
                  {this.props.file.split("\n").map((line, index)=>{
                    return <code onMouseDown={()=>{this.mouseDown(index)}} onMouseUp={()=>{this.mouseUp(index)}} id={index}>{line}</code>
                  })}
                </div>
              )}
            </Paper>
          </div>
        </div>
      )
    }
    return(<div className="GenericLoading"><CircularProgress size={50} color="primary"/></div>)
  }
}


const mapStateToProps=(state)=>{
  return {
    repo: getRepo(state),
    repoStatus: getRepoStatus(state),
    file: getFile(state),
    fileStatus: getFileStatus(state),
    user: getUser(state),
  }
}

export default connect(mapStateToProps)(FilePage);
