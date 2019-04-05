import React, { Component } from 'react';
// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
// Icons
import Icon from 'react-icons-kit';
import {basic_folder} from 'react-icons-kit/linea/basic_folder';
import {basic_sheet} from 'react-icons-kit/linea/basic_sheet';
// SVG
import ReactSVG from 'react-svg';
import File from './../../../assets/svg/file.svg';
import Folder from './../../../assets/svg/folder.svg';
// Components
import MajorActionButtons from './../../global/components/majorActionButtons';
import ErrorPage from './../../global/errorPage';
import SettingsButton from './../../global/components/settingsButton';
// Redux
import {connect} from 'react-redux'
import {fetchRepo, clearRepoState} from './../../../actions/repo.actions'
import {getRepo, getRepoStatus} from './../../../reducers/repo.reducer';
import {getUser} from './../../../reducers/user.reducer';
// MISC
import ReactTimeAgo from 'react-time-ago';
import {Link} from 'react-router-dom';


class TreePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      breadCrumbs: [],
      breadCrumbsIdentified: false,
    }
    this.identifyBreadCrumbs=this.identifyBreadCrumbs.bind(this);
    this.props.dispatch(fetchRepo(this.props.match.params.user,this.props.match.params.projectID,this.props.match.params.id))
    this.identifyBreadCrumbs()
    this.props.history.listen((location, action) => {
      this.setState({breadCrumbs:[]})
      this.setState({breadCrumbsIdentified:false})
      this.props.dispatch(clearRepoState())
    });
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

  render() {
    if (this.props.repoStatus===false || this.props.repoStatus===undefined) {
      this.props.dispatch(fetchRepo(this.props.match.params.user,this.props.match.params.projectID,this.props.match.params.id))
    }
    if (this.state.breadCrumbsIdentified===false) {this.identifyBreadCrumbs()}
    if (this.props.repoStatus==="ERROR") {return (<ErrorPage history={this.props.history}/>)}
    if (this.props.repoStatus==="SUCCESS") {
      return (
        <div className="TreePage RootMargins">
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
              <Typography variant="h4" className="TreeName">{this.props.match.params.tree}</Typography>
            </div>
          </div>
          <Paper className="TreePageContent" elevation={0}>
            {this.props.repo.tree === "no tree" && (
              <Typography variant="h2" className="TextCenter">This folder is empty</Typography>
            )}
            {this.props.repo.tree !== "no tree" && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>File Name</TableCell>
                    <TableCell>Last Commit</TableCell>
                    <TableCell>By</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.repo.tree.sort((a,b)=>(a.blob_type < b.blob_type)).map(n => {
                    let date = n.time * 1000;
                    return (
                      <TableRow key={n.oid} className="TableRow">
                        {n.blob_type==="blob"&&(
                          <TableCell className="FileNameCell" scope="row">
                            {this.props.match.params[0]!==undefined && (
                              <Link className="FileNameCellDiv LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/file/${this.props.match.params[0]}/${this.props.match.params.id}/${this.props.match.params.tree}/${n.oid}/${n.name}`} >
                                <ReactSVG src={File} className="FileIcon"/>
                                {n.name}
                              </Link>
                            )}
                            {this.props.match.params[0]===undefined && (
                              <Link className="FileNameCellDiv LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/file/${this.props.match.params.id}/${this.props.match.params.tree}/${n.oid}/${n.name}`} >
                                <ReactSVG src={File} className="FileIcon"/>
                                {n.name}
                              </Link>
                            )}
                          </TableCell>
                        )}
                        {n.blob_type==="tree"&&(
                          <TableCell className="FileNameCell" scope="row">
                            {this.props.match.params[0]!==undefined && (
                              <Link className="FileNameCellDiv LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/tree/${this.props.match.params[0]}/${this.props.match.params.id}/${this.props.match.params.tree}/${n.oid}/${n.name}`} >
                                <ReactSVG src={Folder} className="FolderIcon"/>
                                {n.name}
                              </Link>
                            )}
                            {this.props.match.params[0]===undefined && (
                              <Link className="FileNameCellDiv LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/tree/${this.props.match.params.id}/${this.props.match.params.tree}/${n.oid}/${n.name}`} >
                                <ReactSVG src={Folder} className="FolderIcon"/>
                                {n.name}
                              </Link>
                            )}
                          </TableCell>
                        )}
                        {n.msg.length>45 && (
                          <TableCell className="FileLastCommitCell">
                            <Link className="LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/commit/${n.commit}`}>
                              {n.msg.substring(0,45)+"..."}
                            </Link>
                          </TableCell>
                        )}
                        {n.msg.length<=45 && (
                          <TableCell className="FileLastCommitCell">
                            <Link className="LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/commit/${n.commit}`}>
                              {n.msg}
                            </Link>
                          </TableCell>
                        )}
                        <TableCell className="FileAuthorCell">
                          <Link className="LinkUnderline" to={`/${n.author}/profile`}>
                            {n.author}
                          </Link>
                        </TableCell>
                        <TableCell className="FileDateCell">
                          <ReactTimeAgo locale="en">
                            {date}
                          </ReactTimeAgo>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </Paper>
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
    user: getUser(state),
  }
}

export default connect(mapStateToProps)(TreePage);
