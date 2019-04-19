import React, { Component } from 'react';
// Material UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
// Icons
import Icon from 'react-icons-kit';
import {ic_done} from 'react-icons-kit/md/ic_done';
import {ic_not_interested} from 'react-icons-kit/md/ic_not_interested'
// Components
import {Link} from 'react-router-dom';
import PopUp from '../global/components/PopUp';
// Redux
import {connect} from 'react-redux';
import {newUser, checkUsernameAvailability} from './../../actions/user.actions';
import {getUser, getUsernameAvailability, getUsernameAvailabilityStatus, getNewUserStatus, getSignInStatus} from './../../reducers/user.reducer';

class CreateAccountPage extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      nameError: false,
      nameErrorText: "",
      username:"",
      usernameError: false,
      usernameErrorText: "",
      password:"",
      passwordError: false,
      passwordErrorText: "",
      passConfirm:"",
      passConfirmError: false,
      passConfirmErrorText: "",
      email:"",
      emailError: false,
      emailErrorText: "",
      token:"",
      tokenError:false,
      tokenErrorText:"",
    }
    this.usernameAvailabilityCheck=this.usernameAvailabilityCheck.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.testName=this.testName.bind(this);
    this.testEmail=this.testEmail.bind(this);
    this.testPassword=this.testPassword.bind(this);
    this.testPassConfirm=this.testPassConfirm.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.redirect=this.redirect.bind(this);
  }

  componentDidMount(){
    if(this.props.location.state!==undefined){
      if(this.props.location.state.username!==undefined){
        this.setState({username:this.props.location.state.username})
      }
    }
  }

  componentDidUpdate(){
    if(this.props.newUserStatus==="invite_code_error" && this.state.tokenError===false) {
      this.setState({tokenError:true})
      this.setState({tokenErrorText:"Incorrect invite code"})
    }
    if(this.state.usernameError===true && this.state.usernameErrorText==="Invalid username") {
      return
    } else {
      if(this.props.usernameAvailability==="no" && this.state.usernameError===false) {
        this.setState({usernameError:true})
        this.setState({usernameErrorText:"Username not available"})
      } else if(this.props.usernameAvailability==="yes" && this.state.usernameError===true) {
        this.setState({usernameError:false})
        this.setState({usernameErrorText:""})
      }
    }
  }

  usernameAvailabilityCheck(username){
    this.props.dispatch(checkUsernameAvailability(username))
  }

  handleChange(target, e){
    let change ={}
    change[target] = e.target.value
    this.setState(change)
    if(change.username!==undefined && change.username!=="" && change.username.length > 3){
      var validUsername = this.testUsername(change.username)
      if(validUsername) {
        this.usernameAvailabilityCheck(change.username)
      } else {
        this.setState({usernameError:true})
      }
    }
  }

  testName() {
    var format = /[^-a-zA-Z0-9_'.]/;
    var specialCharacters = format.test(this.state.name);
    if (this.state.name.length < 4 || this.state.name.length > 12 || specialCharacters) {
      this.setState({nameError:true})
      this.setState({nameErrorText:"Invalid name"})
    } else {
      this.setState({nameError:false})
      this.setState({nameErrorText:""})
      return true
    }
  }

  testUsername(username) {
    if(username!==undefined) {
      var format = /[^-a-zA-Z0-9_'.]/;
      var specialCharacters = format.test(username);
      if (username.length < 4 || username.length > 12 || specialCharacters) {
        this.setState({usernameError:true})
        this.setState({usernameErrorText:"Invalid username"})
      } else {
        this.setState({usernameError:false})
        this.setState({usernameErrorText:""})
        return true
      }
    } else {
      var format = /[^-a-zA-Z0-9_'.]/;
      var specialCharacters = format.test(this.state.username);
      if (this.state.username.length < 4 || this.state.username.length > 12 || specialCharacters) {
        this.setState({usernameError:true})
        this.setState({usernameErrorText:"Invalid username"})
      } else {
        this.setState({usernameError:false})
        this.setState({usernameErrorText:""})
        return true
      }
    }
  }

  testEmail() {
    if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
      this.setState({emailError:true})
      this.setState({emailErrorText:"Must be a valid email"})
    } else {
      this.setState({emailError:false})
      this.setState({emailErrorText:""})
      return true
    }
  }

  testPassword() {
    if (!this.testNumber(this.state.password) || this.state.password.length < 8) {
      this.setState({passwordError:true})
      this.setState({passwordErrorText:"Password must contain at least 1 digit and be at least 8 characters long"})
    } else {
      this.setState({passwordError:false})
      this.setState({passwordErrorText:""})
      return true
    }
  }

  testNumber(toTest) {
    return /\d/.test(toTest);
  }

  testPassConfirm() {
    if (this.state.password!==this.state.passConfirm){
      this.setState({passConfirmError:true})
      this.setState({passConfirmErrorText:"Passwords must match"})
    } else {
      this.setState({passConfirmError:false})
      this.setState({passConfirmErrorText:""})
      return true
    }
  }

  testToken() {
    if (this.state.token===""){
      this.setState({tokenError:true})
      this.setState({tokenErrorText:"Invite code is required"})
    } else {
      this.setState({tokenError:false})
      this.setState({tokenErrorText:""})
      return true
    }
  }

  handleSubmit(){
    var validUsername = this.testUsername();
    var validName = this.testName();
    var validEmail = this.testEmail();
    var validPassword = this.testPassword();
    var validPassConfirm = this.testPassConfirm();
    var validToken = this.testToken();
    if (validUsername && validName && validEmail && validPassword && validPassConfirm && validToken) {
      var userData = {
        username: this.state.username,
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
        invitecode: this.state.token
      }
      this.props.dispatch(newUser(userData));
    }
  }

  handleKeyPress(e){
    if(e.key === 'Enter'){
      this.handleSubmit();
    }
  }

  redirect(){
    this.props.history.push(`${this.props.user.user._id}/profile`)
  }

  render() {
    if(this.props.signInStatus==="SUCCESS"){
      this.redirect()
    }
    return (
      <div className="CreateAccountPage">
      <PopUp />
        <Typography variant="display3">Create Account</Typography>
        {this.props.newUserStatus==="PENDING" && (
          <div className="Form">
            <LinearProgress size={50} color="secondary"/>
          </div>
        )}
        {(this.props.newUserStatus!=="PENDING") && (
          <div className="Form">
            <div className="UsernameInputDiv">
              <TextField
                className="UsernameInput"
                autoFocus
                label="Username"
                error={this.state.usernameError}
                value={this.state.username}
                onChange={(e)=>{this.handleChange("username", e)}}
                helperText={this.state.usernameErrorText}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <div className="UsernameAvailabilityCheck">
                {this.props.usernameAvailabilityStatus==="PENDING" && (
                  <CircularProgress size={20} color="primary"/>
                )}
                {this.props.usernameAvailabilityStatus==="ERROR" && (
                  <Typography variant="body1">There was an error checking for this username's availability :(</Typography>
                )}
                {this.props.usernameAvailabilityStatus==="SUCCESS" && (
                  <div>
                    {this.props.usernameAvailability==="yes" && (
                      <Icon icon={ic_done} size={20}/>
                    )}
                    {this.props.usernameAvailability==="no" && (
                      <Icon icon={ic_not_interested} size={20}/>
                    )}
                  </div>
                )}
              </div>
            </div>
            <TextField
              label="Display Name"
              error={this.state.nameError}
              value={this.state.name}
              onChange={(e)=>{this.handleChange("name", e)}}
              helperText={this.state.nameErrorText}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              error={this.state.emailError}
              value={this.state.email}
              onChange={(e)=>{this.handleChange("email", e)}}
              helperText={this.state.emailErrorText}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="password"
              label="Password"
              error={this.state.passwordError}
              value={this.state.password}
              onChange={(e)=>{this.handleChange("password", e)}}
              helperText={this.state.passwordErrorText}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="password"
              label="Confirm Password"
              error={this.state.passConfirmError}
              value={this.state.passConfirm}
              onChange={(e)=>{this.handleChange("passConfirm", e)}}
              helperText={this.state.passConfirmErrorText}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Invite code"
              error={this.state.tokenError}
              value={this.state.token}
              onChange={(e)=>{this.handleChange("token", e)}}
              helperText={this.state.tokenErrorText}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button variant="contained" color="primary" className="SubmitButton" onClick={this.handleSubmit}>Sign Up</Button>
            <Typography variant="caption" component={Link} to="/login" className="TextCenter LinkUnderline" >Already have an account? Login</Typography>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    user: getUser(state),
    usernameAvailability: getUsernameAvailability(state),
    usernameAvailabilityStatus: getUsernameAvailabilityStatus(state),
    newUserStatus: getNewUserStatus(state),
    signInStatus: getSignInStatus(state),
  }
}
export default connect(mapStateToProps)(CreateAccountPage);
