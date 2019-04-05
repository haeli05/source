import React, { Component } from 'react';
// Material UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
// Redux
import { connect } from 'react-redux';
import {newRepo} from './../../actions/repo.actions'
import {getNewRepo, getNewRepoStatus} from './../../reducers/repo.reducer'
import {getUser} from './../../reducers/user.reducer';
// Components
import YouMustBeLoggedInPage from './../global/youMustBeLoggedInPage';

class NewRepoPage extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      nameError: false,
      nameErrorText: "",
      description: "",
      import_url: ""
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(target, e){
    let change ={}
    change[target] = e.target.value
    this.setState(change)
  }

  handleSubmit(){
    if (this.state.name !== '') {
      this.setState({nameError:false})
      this.setState({nameErrorText:""})
      var newRepoInfo = {
        name: this.state.name,
        description: this.state.description,
        import_url: (this.state.import_url==="") ? undefined : this.state.import_url,
      }
      this.props.dispatch(newRepo(newRepoInfo));
    } else {
      this.setState({nameError:true})
      this.setState({nameErrorText:"Project name is required"})
    }
  }

  render() {
    if (this.props.user.username === false || this.props.user.username === undefined) {
      return (
        <YouMustBeLoggedInPage {...this.props}/>
      )
    }
    if (this.props.newRepoStatus==="PENDING") {
      return (<div className="GenericLoading"><CircularProgress color="primary" size={50} /></div>)
    }
    if (this.props.newRepoStatus==="SUCCESS") {
      this.props.history.push(`/${this.props.newRepo.creator_name}/project/${this.props.newRepo._id}`)
    }
    return (
      <div className="NewRepoPage">
        <Typography variant="display4">New Project</Typography>
        <div className="Form">
          <TextField
            autoFocus
            label="Project Name"
            error={this.state.nameError}
            helperText={this.state.nameErrorText}
            value={this.state.name}
            onChange={(e)=>{this.handleChange("name", e)}}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Project Description"
            value={this.state.description}
            onChange={(e)=>{this.handleChange("description", e)}}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Import URL (optional)"
            value={this.state.import_url}
            onChange={(e)=>{this.handleChange("import_url", e)}}
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" color="primary" className="SubmitButton" onClick={this.handleSubmit}>Create Project</Button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    newRepo: getNewRepo(state),
    newRepoStatus: getNewRepoStatus(state),
    user: getUser(state),
  }
}

export default connect(mapStateToProps)(NewRepoPage);
