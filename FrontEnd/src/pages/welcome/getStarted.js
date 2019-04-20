import React, { Component } from 'react';
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

// Components
import JoinQueue from './components/joinQueue';
import PayButton from '../payments/payButton';
import ReactSVG from 'react-svg';
// MISC
import logo from './img/logo.png';
import MessageBlob from '../../assets/svg/messageblob.svg';
import Letter from '../../assets/svg/letter.svg';


class GetStarted extends Component {
  constructor(props){
    super(props);
    this.state={
      Mission1: "MissionHiddenStart",
      Mission2: "MissionHiddenStart",
      controller: null,
      lastKeys: [],
      username: '',
    }
    this.listenScrollEvent=this.listenScrollEvent.bind(this);
    this.conditionallyAnimate=this.conditionallyAnimate.bind(this);
    this.animate=this.animate.bind(this);
    this.handleChangeSignUp=this.handleChangeSignUp.bind(this);
  }

  componentDidMount(){
  }

  conditionallyAnimate() {

  }

  animate(controller) {

  }

  componentWillUnmount(){

  }

  _handleKeyDown(event){
    var keyArray = this.state.lastKeys
    keyArray.push(event.keyCode)
    if (keyArray.length===11){
      keyArray.shift()
    }
    this.setState({lastKeys:keyArray})
    var a = keyArray.join()
    var b = [38,38,40,40,37,39,37,39,65,66].join()
    if(a===b){
      alert("Carlos sucks major donkey balls")
    }
  }

  listenScrollEvent() {
  }

  handleChangeSignUp(e){
    this.setState({username:e.target.value});
  }

  render() {
    return (
      <div className="GetStarted">
        <div className="Section">

          <Grid container spacing={24}>
            <Grid item xs={5}>
              <div className="GetStartedLabel">
                <Typography className="GetStartedTitle" color="textPrimary" variant="h1">
                Get <br/>Started
                </Typography>
                  <Typography variant="h4">The platform is currently under construction.<br/><br/>
                  Follow our progress&nbsp;
                  <Link component={RouterLink} to="/#todo">
                  here.
                  </Link>
                  <br/>
                  <br/>
                  Please reach out if you need immediate technical assistance, or want to list a project.</Typography>
                  <Fab
                  variant="extended"
                  size="large"
                  color="primary"
                  aria-label="Spectrum Chat"
                  className="Button"
                  href="https://spectrum.chat/sourcenetwork-io?tab=posts"
                  >
                  <ReactSVG src={MessageBlob} className="ReactSVGIcon Icon25 LeftIcon"/>
                  Chat
                  </Fab>
                  <Fab
                  variant="extended"
                  size="large"
                  color="secondary"
                  className="Button"
                  href="mailto:source@sourcenetwork.io"
                  >
                    <ReactSVG src={Letter} className="ReactSVGIcon Icon25 LeftIcon Letter"/>
                  Email
                  </Fab>
              </div>
            </Grid>
            <Grid item xs={7}>
            <div className="Form">
            <Typography className="Mission" variant="h6" color="textPrimary">
            Fill up this form for general enquiries, we will reply as soon as possible.
            </Typography>


            <TextField
            fullWidth
              label="Email"
              type="email"
              onChange={this.handleChangeSignUp}
              margin="wide"
              variant="outlined"
              className="ContactInputName"
            />


            <TextField
            fullWidth
              multiline
              rows="13"
              rowsMax="13"
              label="Message"
              multiline
              type="email"
              onChange={this.handleChangeSignUp}
              margin="normal"
              variant="outlined"
              className="ContactInputMessage"
            />

            <Button
            variant="outlined"
            size="large"
            aria-label="Submit"
            className="Button"
            >
            Submit
            </Button>
            </div>
            </Grid>
          </Grid>

        </div>

      </div>
    );
  }
}

export default GetStarted;
