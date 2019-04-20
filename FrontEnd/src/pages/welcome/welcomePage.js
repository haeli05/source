import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
// Components
import JoinQueue from './components/joinQueue';
import PayButton from '../payments/payButton';
import ReactSVG from 'react-svg';
import axios from 'axios';
import { ShareButton, MessageButton, SupportButton } from './../global/components/majorActionButtons';

// MISC
import logo from './img/logo.png';
import developerImage from './img/devs.jpg';
import developerImage2 from './img/dev2.jpg';
import HammerScrew from '../../assets/svg/hammer_screwdriver_2.svg';
import Comment from '../../assets/svg/comment.svg';
import Board from './../workflow/Board';
import RightBracket from './../../assets/svg/rightbracket.svg';

import { PayPalButton } from "react-paypal-button-v2";

const malarkey = require('malarkey');
const ScrollMagic = require("scrollmagic");

class WelcomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      Mission1: "MissionHiddenStart",
      Mission2: "MissionHiddenStart",
      controller: null,
      lastKeys: [],
      SignUpEmail: '',
      emailError: false,
      emailErrorMessage: '',
      sent: false
    }

    this.handleChangeSignUp=this.handleChangeSignUp.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this._handleKeyDown.bind(this));

      const element1 = document.querySelector('#whatissource')
      function callback1 (text) {
        element1.textContent = text
      }
      const options1 = {
        typeSpeed: 70,
        deleteSpeed: 20,
        pauseDuration: 1800,
        repeat: true
      }
      malarkey(callback1, options1)
        .type(`blockchain engineers`)
        .pause()
        .delete()
        .type(`technology professionals`)
        .pause()
        .delete()
        .type(`software developers`)
        .pause()
        .delete()
        .type(`product managers`)
        .pause()
        .delete()
        .type(`designers`)
        .pause()
        .delete()
        .type(`backers`)
        .pause()
        .delete()
        .type(`investors`)
        .pause()
        .delete()
        .type(`fans`)
        .pause()
        .delete()


          const element3 = document.querySelector('#CustProjects')
          function callback3 (text) {
            element3.textContent = text
          }
          const options3 = {
            typeSpeed: 80,
            deleteSpeed: 15,
            pauseDuration: 1900,
            repeat: true
          }
          malarkey(callback3, options3)
            .type(`Blockchain project`)
            .pause()
            .delete()
            .type(`Web app`)
            .pause()
            .delete()
            .type(`iOS app`)
            .pause()
            .delete()
            .type(`Android app`)
            .pause()
            .delete()
            .type(`bespoke software`)
            .pause()
            .delete()

  }


  componentWillUnmount(){

    document.removeEventListener("keydown", this._handleKeyDown.bind(this));
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


  handleChangeSignUp(e){
    this.setState({SignUpEmail:e.target.value});
  }

  SignUpSubmit(text, stringBody){
    if ( this.state.SignUpEmail!=="" && this.state.SignUpEmail.includes("@") && this.state.SignUpEmail.includes(".")){
      axios.post('/mail',{email:this.state.SignUpEmail});
      axios.post('/mail2',{email:this.state.SignUpEmail,feedback:this.state.SignUpEmail});
      this.setState({sent:true});
    } else {
      this.setState({emailError:true});
      this.setState({emailErrorMessage:"Please provide a valid email"});
    }
  };

  render() {
    return (
      <div className="WelcomePage">
        <div className="Hero">
          <div className="WelcomeSignUp">

          <Grid container spacing={10}>
            <Grid item xs={6}>
            <Typography className="Mission" color="textPrimary" variant="h1">
            The Internet's <br/>Tech Incubator
            </Typography>
            </Grid>
            <Grid item xs={6}>
                    <Typography className="Mission WhatIsSource" style={{marginTop:"0em"}} variant="h4" color="textPrimary">
                    Source finds <div style={{display:"inline"}} id="whatissource"/>
                    <br/>for your digital projects, while helping them monetize their skills.
                    </Typography>
                  <Button variant="outlined" style={{align:"left"}} className="GetStarted" component={Link} to="/getstarted">
                  Get started
                  </Button>
            </Grid>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
          <div className="GetPaid">
          <Typography variant="body">Want to get paid today?</Typography>
          <Fab
          variant="extended"
          size="large"

          className="TodoButton"
          href="#todo"
          >
            <ReactSVG src={HammerScrew} className="ReactSVGIcon Icon25 LeftIcon"/>
          Help us build the beta!
          </Fab>
          </div>
          </div>
        </div>
        <div className="Quote">
          <Typography variant="h5" paragraph={true}>"Companies across the board report the availability of software engineers and just the ability to do things with software as being as big or even bigger a constraint  on their progress as access to capital" <br/><br/> - Patrick Collison, CEO @ Stripe</Typography>
          <div className="JoinMailing">
            <TextField
              label="Sign up for email updates"
              type="email"
              onChange={this.handleChangeSignUp}
              margin="wide"
              variant="outlined"
              className="SignUpInput"
              error={this.state.emailError}
            />
             <Tooltip title={this.state.emailErrorMessage}>
              <Button variant="outlined" className="SignUpButton"  onClick={this.SignUpSubmit}>Sign Up</Button>
            </Tooltip>
          </div>
        </div>
        <div className="Section Section2">
          <Typography className="SectionTitle" variant="h3" style={{color:"white"}}>Can building technology be as simple as writing a blog post?</Typography>
          <br/>
          <Typography variant="h4" style={{color:"white"}}>We think so.</Typography>
          <br/>
          <Typography variant="h4" style={{color:"white"}}>Because the best developers are already online, <br/><br/> you just need their <b>attention.</b></Typography>

        </div>
        <div className="Section Section3">
        <Typography className="SectionTitle" variant="h2">How it works</Typography>
        <Typography className="SectionSubTitle" variant="h4">Source is building a sharing economy to simplify tech development</Typography>

                  <Grid container spacing={8}>
                    <Grid item xs={6}>
                    <div className="Description">
                    <Typography variant="h5" paragraph={true} >
                    Our community of developers, technology professionals, and consultants support your projects from ideation to implementation.
                    </Typography>
                      <Typography variant="body" paragraph={true} style={{textAlign:"left"}}>

                      <ul>
                      <li>Share your ideas and Projects</li>
                      <li>Receive actionable insight, feedback and contributions.</li>
                      <li>Get matched with contributors</li>
                      </ul>
                      <br/>
                      <br/>
                      Less time spent on logistics means more time spent on what matters: <b>building the product.</b>
                      </Typography>

                    </div>
                    </Grid>

                    <Grid item xs={6}>
                    <Fade in={true}>
                      <img className="DevImage2" src={developerImage2} alt="developers"/>
                    </Fade>
                    </Grid>
                    </Grid>
                    <Typography variant="h4" paragraph={true} className="SectionSubTitle">
                    While enabling community driven implementation and funding
                    </Typography>
                  <Grid container spacing={6}>
                    <Grid item xs={4} sm={3}>
                      <Fade in={true}>
                        <img className="DevImage" src={developerImage} alt="developers"/>
                      </Fade>
                    </Grid>
                    <Grid item xs={8} sm={8}>
                    <div className="Description">
                      <Typography variant="h5" paragraph={true} >
                      Open Source style collaboration + Crowdfunding + Monetized Tasks
                      </Typography>
                      Public and private projects are broken down into subtasks, that can be matched to anyone.

                      Monetize your skills, get paid in cash or crypto
                      <ol>
                      <li>Find a task relevant to your skillset</li>
                      <li>Work with the project manager to deliver</li>
                      <li>???</li>
                      <li>Profit.</li>
                      </ol>
                      </div>
                    </Grid>
                </Grid>
        <br/>
        <Typography variant="overline2">Have a project you need help with?</Typography>
        <br/>
        <Fab
        variant="extended"
        size="large"
        color="primary"
        className="TodoButton"
        href="/getstarted"
        >
          <ReactSVG src={Comment} className="ReactSVGIcon Icon25 LeftIcon"/>
        Contact Us
        </Fab>
        </div>
        <div className="Section Section5" id="todo">
          Help us build the beta!
          <Typography variant="h2" className="SectionTitle">source</Typography>
          <Typography variant="h4" className="SectionTitle">The Internet's Tech Incubator. </Typography>

            <div className="Subheading">
            <Typography variant="overline2" className="SectionTitle">Support this project:  </Typography>
            <PayButton />
              <div className="MajorActionButtonsHorizontal">
                <div className="MajorActionButtonDiv">
                  <MessageButton {...this.props} goToRoom={this.props.goToRoom}/>
                </div>
                <div className="MajorActionButtonDiv">
                  <ShareButton {...this.props} title={this.props.title} url={this.props.url}/>
                </div>
              </div>
            </div>

          <Typography className="Scope" variant="body" paragraph={true}>
          <b>Scope:</b>
          Our stack combines a react front end with modular backend components, designed to facilitate discussion, collaboration and crowdsourcing for projects.
          <br/>
          <b>Components:</b>
          <br/><br/>
          Ideas includes a social-blog like text area to discuss, well, ideas and potential projects
          Functionality: Comments (Done)

          The Project component hosts a project's files, its contributors, task boards and displays links for crowdfunding.

          Git-hosting(Needs work), Payment()

          People: Social integration, allows users to filter their site experience based on relevant skills, while also allowing project managers to track and find contributors.

          <b>Interested in Contributing?</b>
          To donate: Use the Pay button above<br/>
          Suggestions: Use the email feedback or use spectrum<br/>
          <br/><br/>
          Submit pull requests to: https://github.com/haeli05/source
          <br/><br/>
          Important!!
          Please reach out to discuss your implementation first before starting work.
          We will not pay for code that do not fit our criteria.

          Skills: Check the todo list and message us on telegram or spectrum if you want to take over the development for a component. We pay for good work.
          </Typography>

          <Board boardTitle="To Do" description="Features in development. Payment as listed" />
        </div>

      </div>
    );
  }
}

export default WelcomePage;
