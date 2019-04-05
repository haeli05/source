import React from 'react';
import ReactDOM from 'react-dom';
// Material UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// Icons
import Icon from 'react-icons-kit';
import {basic_message} from 'react-icons-kit/linea/basic_message'
import {arrows_question} from 'react-icons-kit/linea/arrows_question'
import {arrows_plus} from 'react-icons-kit/linea/arrows_plus';
import {ecommerce_money} from 'react-icons-kit/linea/ecommerce_money'
import {basic_trashcan} from 'react-icons-kit/linea/basic_trashcan';
import {ic_call_merge} from 'react-icons-kit/md/ic_call_merge'
import DoneIcon from '@material-ui/icons/Done';
// Redux
import {connect} from 'react-redux'
import {fetchMergeRequests, newMergeRequest} from './../../../actions/repo.actions'
import {
  getMerges,
  getMergesStatus,
  getSubmitMerge,
  getSubmitMergeStatus,
  getBranches,
  getBranchesStatus} from './../../../reducers/repo.reducer';
// Components
import LoginPrompt from './../../global/components/loginPrompt.js';
import ReactQuillEditor from './../../global/components/reactQuillEditor';
import Chip from './../../global/components/chip.js';
// MISC
import ReactTimeAgo from 'react-time-ago';
import {Link} from 'react-router-dom';


class TabMergeRequests extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      newMergeName: '',
      newMergeNameError: false,
      newMergeNameErrorText: '',
      description: '',
      sourcebranch: '',
      targetbranch: '',
      branchError: false,
      loginPromptPopUp: false,
    }
    this.loginCheck=this.loginCheck.bind(this);
    this.closeLoginPrompt=this.closeLoginPrompt.bind(this);
    this.toggleOpen=this.toggleOpen.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.submitNewMergeRequest=this.submitNewMergeRequest.bind(this);
    if (this.props.mergesStatus===undefined || this.props.mergesStatus===false) {this.props.dispatch(fetchMergeRequests(this.props.repo.proj.gitlabID))}
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

  toggleOpen(){
    this.setState({open:!this.state.open})
  }

  handleTextChange(target, e){
    let change ={}
    change[target] = e.target.value
    this.setState(change)
  }

  handleChange(event) {
    if(event.target.name==="sourcebranch"&&event.target.value===this.state.targetbranch){
      this.setState({branchError:true})
    } else if(event.target.name==="targetbranch"&&event.target.value===this.state.sourcebranch){
      this.setState({branchError:true})
    } else {
      this.setState({branchError:false})
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewMergeRequest() {
    var error = false;
    if(this.state.newMergeName===""){
      this.setState({newMergeNameError:true})
      this.setState({newMergeNameErrorText:"Invalid merge request name"})
      error = true;
    } else {
      this.setState({newMergeNameError:false})
      this.setState({newMergeNameErrorText:""})
    }
    if(this.state.sourcebranch===this.state.targetbranch || this.state.targetbranch==="") {
      this.setState({branchError:true})
      error = true;
    } else {
      this.setState({branchError:false})
    }
    if(!error) {
      var mergeRequest = {
        gitlabID: this.props.repo.proj.gitlabID,
        title: this.state.newMergeName,
        source_branch: this.state.sourcebranch,
        target_branch: this.state.targetbranch,
        desc: this.state.description,
        asignee_id: undefined,
      }
      this.props.dispatch(newMergeRequest(mergeRequest))
    }
  }

  render() {
    return (
      <div className="TabMergeRequests">
        <div className="NewMergeButton">
          <LoginPrompt open={this.state.loginPromptPopUp} close={this.closeLoginPrompt}/>
          <Button variant="outlined" onClick={(e)=>{this.loginCheck(e,this.toggleOpen)}}><Icon icon={arrows_plus} size={20}/> New Merge Request</Button>
          <Dialog open={this.state.open} onClose={this.toggleOpen} maxWidth="sm">
            <DialogTitle>New Merge Request</DialogTitle>
            <DialogContent>
              {this.props.submitMergeStatus==="PENDING" && (
                <div className="GenericLinearLoading">
                  <LinearProgress color="secondary" variant="query" />
                </div>
              )}
              {this.props.submitMergeStatus==="SUCCESS" && (this.props.history.push(`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/mergerequest/${this.props.submitMerge.iid}`))}
              {(this.props.submitMergeStatus==="ERROR" || this.props.submitMergeStatus===false || this.props.submitMergeStatus===undefined) && (
                <div className="MergeDialog">
                  <TextField
                    label="New merge request name"
                    error={this.state.newMergeNameError}
                    value={this.state.newMergeName}
                    onChange={(event)=>{this.handleTextChange("newMergeName", event)}}
                    helperText={this.state.newMergeNameErrorText}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Description"
                    error={this.state.newMergeNameError}
                    value={this.state.description}
                    onChange={(event)=>{this.handleTextChange("description", event)}}
                    helperText={this.state.newMergeNameErrorText}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                  {this.props.branchesStatus==="PENDING" && (
                    <div className="GenericLinearLoading">
                      <LinearProgress color="secondary" variant="query" />
                    </div>
                  )}
                  {this.props.branchesStatus==="ERROR" && (
                    <div className="ContainedMessage">
                      <Typography variant="h4">An error occured while fetching branches</Typography>
                    </div>
                  )}
                  {this.props.branchesStatus==="SUCCESS" && (
                    <div className="BranchesInputs">
                      <FormControl margin="normal" variant="outlined" className="BranchInput" error={this.state.branchError}>
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
                      <FormControl margin="normal" variant="outlined" className="BranchInput" error={this.state.branchError}>
                        <InputLabel ref={ref => {this.targetbranchref = ReactDOM.findDOMNode(ref);}}>
                          Target Branch
                        </InputLabel>
                        <Select
                          value={this.state.targetbranch}
                          onChange={this.handleChange}
                          inputProps={{
                            name: 'targetbranch',
                          }}
                          input={
                            <OutlinedInput
                              labelWidth={this.targetbranchref ? this.targetbranchref.offsetWidth : 0}
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
                      <Button variant="contained" onClick={this.submitNewMergeRequest}>Submit</Button>
                    </div>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
        {this.props.mergesStatus==="PENDING" && (
          <div className="GenericLinearLoading">
            <LinearProgress color="secondary" variant="query" />
          </div>
        )}
        {this.props.mergesStatus==="ERROR" && (
          <div className="ContainedMessage">
            <Typography variant="h4">An error occured :(</Typography>
          </div>
        )}
        {this.props.mergesStatus==="SUCCESS" && (
          <div>
            {this.props.merges.length===0 && (
              <div className="ContainedMessage">
                <Typography variant="h4">No merge requests yet!</Typography>
              </div>
            )}
            {this.props.merges.lenght!==0 && (
              <List className="MergesList" component="nav">
                {this.props.merges.map((n,index) => {
                  return (
                    <ListItem component={Link} to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/mergerequest/${n.iid}`} key={n.iid}>
                      {n.state==="merged" && (
                        <ListItemIcon>
                          <DoneIcon/>
                        </ListItemIcon>
                      )}
                      {n.state!=="merged" && (
                        <ListItemIcon>
                          <Icon icon={ic_call_merge} size={25} />
                        </ListItemIcon>
                      )}
                      <ListItemText className="MergeText" primary={n.title} secondary={`${n.author.username} asking to merge ${n.source_branch} into ${n.target_branch}`}/>
                      <div className="MergeRequestDate">
                        <ReactTimeAgo locale="en">
                          {Date.parse(n.created_at)}
                        </ReactTimeAgo>
                      </div>
                    </ListItem>
                  );
                })}
              </List>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    merges: getMerges(state),
    mergesStatus: getMergesStatus(state),
    branches: getBranches(state),
    branchesStatus: getBranchesStatus(state),
    submitMerge: getSubmitMerge(state),
    submitMergeStatus: getSubmitMergeStatus(state),
  }
}

export default connect(mapStateToProps)(TabMergeRequests);
