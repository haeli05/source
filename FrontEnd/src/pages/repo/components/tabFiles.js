import React from 'react';
import ReactDOM from 'react-dom';
// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// Icons
import Icon from 'react-icons-kit';
import {arrows_plus} from 'react-icons-kit/linea/arrows_plus';
import {basic_folder} from 'react-icons-kit/linea/basic_folder';
import {basic_sheet} from 'react-icons-kit/linea/basic_sheet';
import {basic_elaboration_cloud_download} from 'react-icons-kit/linea/basic_elaboration_cloud_download'
// SVG
import ReactSVG from 'react-svg';
import CodeFork from './../../../assets/svg/codefork.svg';
import File from './../../../assets/svg/file.svg';
import Folder from './../../../assets/svg/folder.svg';
// Components
import LoginPrompt from './../../global/components/loginPrompt.js';
// Redux
import {connect} from 'react-redux'
import {fetchBranches, fetchBranch, newBranch, forkRepo} from './../../../actions/repo.actions';
import {getBranches, getBranchesStatus, getBranch, getBranchStatus, getSubmitBranchStatus,getFork,getForkStatus} from './../../../reducers/repo.reducer'
import {getUser} from './../../../reducers/user.reducer';
// MISC
import ReactTimeAgo from 'react-time-ago';
import {Link} from 'react-router-dom';



class TabFiles extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      forkMenuAnchorEl: null,
      newBranchOpen: false,
      link: "SSH",
      copied: "copy",
      branch: "master",
      newBranchName: "",
      newBranchNameError: false,
      newBranchNameErrorText: '',
      sourcebranch: "master",
      loginPromptPopUp: false,
      forkConfirm: false,
    }
    this.loginCheck=this.loginCheck.bind(this)
    this.closeLoginPrompt=this.closeLoginPrompt.bind(this)
    this.forkMenuOpen=this.forkMenuOpen.bind(this)
    this.forkMenuClose=this.forkMenuClose.bind(this)
    this.handleNewBranchOpenClose=this.handleNewBranchOpenClose.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleTextChange=this.handleTextChange.bind(this)
    this.copy=this.copy.bind(this)
    this.resetCopy=this.resetCopy.bind(this)
    this.resetCopy2=this.resetCopy2.bind(this)
    this.submitNewBranch=this.submitNewBranch.bind(this)
    this.forkToggle=this.forkToggle.bind(this)
    this.forkConfirm=this.forkConfirm.bind(this)
  }

  loginCheck(e, callback){
    if(this.props.user.username===false){
      e.preventDefault();
      this.setState({loginPromptPopUp:true});
    } else {
      return callback()
    }
  }

  closeLoginPrompt() {
    this.setState({loginPromptPopUp:false})
  }

  forkMenuOpen(event) {
    this.setState({forkMenuAnchorEl: event.currentTarget});
  }

  forkMenuClose() {
    this.setState({forkMenuAnchorEl:null})
  }

  handleNewBranchOpenClose() {
    this.setState({newBranchOpen:!this.state.newBranchOpen})
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    if(event.target.name==="branch" && event.target.value!==this.state.branch) {
      this.props.dispatch(fetchBranch(this.props.match.params.user,this.props.repo.proj.project_name,event.target.value))
    }
  };

  handleTextChange(target, e){
    let change ={}
    change[target] = e.target.value
    this.setState(change)
  }

  copy(toCopy) {
    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = toCopy;
    inp.setSelectionRange(0,-1);
    document.execCommand('copy');
    inp.remove();
    this.setState({copied:"copied!"});
  }

  resetCopy() {
    window.setTimeout(this.resetCopy2, 200);
  }

  resetCopy2() {
    this.setState({copied:"copy"})
  }

  submitNewBranch() {
    if(this.state.newBranchName==="") {
      this.setState({newBranchNameError:true})
      this.setState({newBranchNameErrorText:"Invalid branch name"})
    } else if (this.state.newBranchName.includes(" ")) {
      this.setState({newBranchNameError:true})
      this.setState({newBranchNameErrorText:"Invalid branch name"})
    } else {
      this.props.dispatch(newBranch(this.props.repo.proj.gitlabID,this.state.newBranchName,this.state.sourcebranch))
    }
  }

  forkToggle(){
    this.setState({forkConfirm:!this.state.forkConfirm})
  }

  forkConfirm(){
    this.props.dispatch(forkRepo(this.props.repo.proj.gitlabID))
  }

  render() {
    console.log(this.props)
    if(this.props.branchesStatus===false || this.props.branchesStatus===undefined || this.props.submitBranchStatus==="SUCCESS") {
      this.props.dispatch(fetchBranches(this.props.match.params.user,this.props.repo.proj.project_name))
    }

    const { forkMenuAnchorEl } = this.state;
    return (
      <div className="TabFiles">
        <div className="FilesHeaderActions">
          <LoginPrompt open={this.state.loginPromptPopUp} close={this.closeLoginPrompt}/>
          <div className="BranchMenu">
            {this.props.branchesStatus==="PENDING" && (
              <CircularProgress color="primary" size={20}/>
            )}
            {this.props.branchesStatus==="ERROR" && (
              <div>
                <Typography variant="subtitle1">branches error</Typography>
              </div>
            )}
            {this.props.branchesStatus==="SUCCESS" && (
              <div className="BranchMenuInner">
                <FormControl variant="outlined">
                  <InputLabel ref={ref => {this.branchref = ReactDOM.findDOMNode(ref);}}>
                    Branch
                  </InputLabel>
                  <Select
                    value={this.state.branch}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'branch',
                    }}
                    input={
                      <OutlinedInput
                        labelWidth={this.branchref ? this.branchref.offsetWidth : 0}
                      />
                    }
                  >
                    {this.props.branches.branches.map(branch => {
                      return (
                        <MenuItem key={branch} value={branch}>{branch}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
                <Button className="NewBranchButton" variant="outlined" onClick={(e)=>{this.loginCheck(e,this.handleNewBranchOpenClose)}}><Icon icon={arrows_plus} size={20}/> New Branch</Button>
                <Dialog open={this.state.newBranchOpen} onClose={this.handleNewBranchOpenClose}>
                  <DialogTitle>New Branch</DialogTitle>
                  <DialogContent>
                    {this.props.submitBranchStatus==="PENDING" && (
                      <div className="GenericLinearLoading">
                        <LinearProgress color="secondary" variant="query" />
                      </div>
                    )}
                    {this.props.submitBranchStatus==="SUCCESS" && (
                      this.handleNewBranchOpenClose(),
                      this.props.dispatch(fetchBranches(this.props.repo.proj.gitlabID))
                    )}
                    {(this.props.submitBranchStatus==="ERROR" || this.props.submitBranchStatus===false || this.props.submitBranchStatus===undefined) && (
                      <div className="NewBranchDialog">
                        <TextField
                          label="New Branch Name"
                          error={this.state.newBranchNameError}
                          value={this.state.newBranchName}
                          onChange={(event)=>{this.handleTextChange("newBranchName", event)}}
                          helperText={this.state.newBranchNameErrorText}
                          fullWidth
                          variant="outlined"
                        />
                        <div className="SourceBranch">
                          <FormControl variant="outlined" className="SourceBranchInput" margin="normal">
                            <InputLabel ref={ref => {this.sourcebranchref = ReactDOM.findDOMNode(ref);}}>
                              Source Branch
                            </InputLabel>
                            <Select
                              value={this.state.sourcebranch}
                              onChange={this.handleChange}
                              inputProps={{
                                name: 'sourcebranch',
                              }}
                              input={
                                <OutlinedInput
                                  labelWidth={this.sourcebranchref ? this.sourcebranchref.offsetWidth : 0}
                                />
                              }
                            >
                              {this.props.branches.branches.map(branch => {
                                return (
                                  <MenuItem key={branch} value={branch}>{branch}</MenuItem>
                                )
                              })}
                            </Select>
                          </FormControl>
                          <Button variant="contained" onClick={this.submitNewBranch}>Submit</Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
          <div className="ForkAndDownload">
            <div className="ForkMenu MarginRight10">
              {!this.state.forkConfirm && (
                <Button variant="outlined" onClick={(e)=>{this.loginCheck(e,this.forkToggle)}}><ReactSVG src={CodeFork} className="CodeForkIcon"/></Button>
              )}
              {this.state.forkConfirm && (
                <ClickAwayListener onClickAway={this.forkToggle}>
                  <div className="Flex">
                    <div className="MarginRight10">
                      <Button variant="outlined" onClick={this.forkConfirm}>Confirm Fork</Button>
                    </div>
                    <Button variant="outlined" onClick={this.forkToggle}>Cancel</Button>
                  </div>
                </ClickAwayListener>
              )}
            </div>
            <div className="DownloadMenu">
              <Button variant="outlined" onClick={this.forkMenuOpen}>
                <Icon icon={basic_elaboration_cloud_download} size={20}/>
              </Button>
              <Menu anchorEl={forkMenuAnchorEl} open={Boolean(forkMenuAnchorEl)} onClose={this.forkMenuClose}>
                <MenuItem>
                  <div className="GitLinkDiv">
                    <FormControl className="GitLink">
                      <Select
                        value={this.state.link}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'link',
                        }}
                      >
                        <MenuItem value={"SSH"}>SSH</MenuItem>
                        <MenuItem value={"HTTPS"}>HTTPS</MenuItem>
                      </Select>
                    </FormControl>
                    {(this.state.link === "SSH") && (
                      <Tooltip title={this.state.copied} placement="top">
                        <pre className="GitLinkPre" onClick={()=>this.copy(this.props.repo.proj.ssh_url)} onMouseLeave={this.resetCopy}>{this.props.repo.proj.ssh_url}</pre>
                      </Tooltip>
                    )}
                    {(this.state.link === "HTTPS") && (
                      <Tooltip title={this.state.copied} placement="top">
                        <pre className="GitLinkPre" onClick={()=>this.copy(this.props.repo.proj.http_url)} onMouseLeave={this.resetCopy}>{this.props.repo.proj.http_url}</pre>
                      </Tooltip>
                    )}
                  </div>
                </MenuItem>
                <MenuItem onClick={this.forkMenuClose}>Download as zip</MenuItem>
                <MenuItem onClick={this.forkMenuClose}>Download as tar</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        {this.props.branchStatus==="PENDING" && (
          <div className="GenericLinearLoading">
            <LinearProgress color="secondary" variant="query" />
          </div>
        )}
        {this.props.branchStatus==="ERROR" && (
          <div></div>
        )}
        {this.props.branchStatus==="SUCCESS" && (
          <div>
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
                          <Link className="FileNameCellDiv LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/file/${n.oid}/${n.name}`} >
                            <ReactSVG src={File} className="FileIcon"/>
                            {n.name}
                          </Link>
                        </TableCell>
                      )}
                      {n.blob_type==="tree"&&(
                        <TableCell className="FileNameCell" scope="row">
                          <Link className="FileNameCellDiv LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/tree/${n.oid}/${n.name}`} >
                            <ReactSVG src={Folder} className="FolderIcon"/>
                            {n.name}
                          </Link>
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
          </div>
        )}
        {(this.props.branchStatus===false || this.props.branchStatus===undefined) && (
          <div>
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
                  if (n.blob_type==="blob" || n.blob_type==="tree"){
                    return (
                      <TableRow key={n.oid} className="TableRow">
                        {n.blob_type==="blob"&&(
                          <TableCell className="FileNameCell" scope="row">
                            <Link className="FileNameCellDiv LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/file/${n.oid}/${n.name}`} >
                              <ReactSVG src={File} className="FileIcon"/>
                              {n.name}
                            </Link>
                          </TableCell>
                        )}
                        {n.blob_type==="tree"&&(
                          <TableCell className="FileNameCell" scope="row">
                            <Link className="FileNameCellDiv LinkUnderline" to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/tree/${n.oid}/${n.name}`} >
                              <ReactSVG src={Folder} className="FolderIcon"/>
                              {n.name}
                            </Link>
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
                  }
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    branches: getBranches(state),
    branchesStatus: getBranchesStatus(state),
    branch: getBranch(state),
    branchStatus: getBranchStatus(state),
    submitBranchStatus: getSubmitBranchStatus(state),
    fork: getFork(state),
    forkStatus: getForkStatus(state),
    user: getUser(state),
  }
}


export default connect(mapStateToProps)(TabFiles);
