import React, { Component } from 'react';
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// Components
import JoinQueue from './components/joinQueue';
// MISC
import logo from './img/logo.png';
import {Link} from 'react-router-dom';
import Board from './../workflow/Board';

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
      username: '',
    }
    this.listenScrollEvent=this.listenScrollEvent.bind(this);
    this.conditionallyAnimate=this.conditionallyAnimate.bind(this);
    this.animate=this.animate.bind(this);
    this.handleChangeSignUp=this.handleChangeSignUp.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this._handleKeyDown.bind(this));
    const element = document.querySelector('#typeElement')
    function callback (text) {
      element.textContent = text
    }
    const options = {
      typeSpeed: 50,
      deleteSpeed: 10,
      pauseDuration: 1600,
      repeat: true
    }
    malarkey(callback, options)
      .type(`Hey guys, let's build a decentralized collaboration platform!`)
      .pause()
      .delete()
      .type(`Help needed for my project: Vault. It's an IKEv2 server that is deployable anywhere.`)
      .pause()
      .delete()
      .type("区块链上的项目开发平台")
      .pause()
      .delete()
      .type(`Seeking developers! We are building a TCR based POS/POA/POW hybrid blockchain with AI and Quantum proof hashgraph consensus algorithms for everyone's IOT device that will cure cancer and bring world peace.`)
      .pause()
      .delete()
      .type(`Checkout Catnip: Tinder for CryptoKitties! Meow!`)
      .pause()
      .delete()
      .type(`Ich suche developers die mir mit ein iOS app helfen können`)
      .pause()
      .delete()
      .type("Let's build a city in the sky and name it Columbia!!")
      .pause()
      .delete()
      .type("I'm building a blockchain for grandmothers and non-techies!")
      .pause()
      .delete()
      .type("My name is Andrew Ryan, let's build a city under the sea!")
      .pause()
      .delete()
      .type(`Such wow, much platform, very technology. Wow. Amazing. Much amaze`)
      .pause()
      .delete()

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
        .type(`social collaboration platform`)
        .pause()
        .delete()
        .type(`distributed incubator`)
        .pause()
        .delete()
        .type(`decentralized hackathon`)
        .pause()
        .delete()
        .type(`open workplace`)
        .pause()
        .delete()

        const element2 = document.querySelector('#audience')
        function callback2 (text) {
          element2.textContent = text
        }
        const options2 = {
          typeSpeed: 80,
          deleteSpeed: 15,
          pauseDuration: 1900,
          repeat: true
        }
        malarkey(callback2, options2)
          .type(`developers`)
          .pause()
          .delete()
          .type(`entrepreneurs`)
          .pause()
          .delete()
          .type(`designers`)
          .pause()
          .delete()
          .type(`businesses`)
          .pause()
          .delete()
          .type(`you`)
          .pause()
          .delete()


    window.addEventListener('scroll', this.listenScrollEvent);
    window.addEventListener("resize",this.conditionallyAnimate,false);
    this.conditionallyAnimate();
  }

  conditionallyAnimate() {
    if (window.innerWidth > 1100) {
      if (!this.state.controller) {
        const controller = new ScrollMagic.Controller({
          globalSceneOptions: { triggerHook: "onLeave" }
        });
        this.setState({ controller }, () => {
          this.animate(controller);
        });
      }
    }
    else {
      if (this.state.controller) { this.state.controller.destroy() }
      this.setState({ controller: null });
    }
  }

  animate(controller) {
    // Logo
    var logo = new ScrollMagic.Scene({triggerElement:"#Magic", duration: 800, offset: -100})
    // pins the element for the the scene's duration
    logo.setPin("#Magic");
    // assign the scene to the controller
    logo.addTo(controller);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.listenScrollEvent);
    window.removeEventListener("resize",this.conditionallyAnimate,false);
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
      alert("carlos sucks major donkey balls")
    }
  }

  listenScrollEvent() {
    // Make the mission statements appear at certain times
    if (window.pageYOffset > 300) {this.setState({Mission1:"Mission"});}
    else {this.setState({Mission1:"MissionHidden"})}
    if (window.pageYOffset > 600) {this.setState({Mission2:"Mission"})}
    else {this.setState({Mission2:"MissionHidden"})}
  }

  handleChangeSignUp(e){
    this.setState({username:e.target.value});
  }

  render() {
    return (
      <div className="WelcomePage">
        <div className="Hero">
          <div className="WelcomeLogo">
            <Typography className="Header" variant="caption">Welcome to</Typography>
            <img src={logo} alt="source"/>
          </div>
          <div className="WelcomeSignUp">
            <Typography className="Mission" color="textPrimary" variant="h3">
            Our mission is to unleash the creativity of the internet.
            </Typography>
            <div className="WhatIsSource">
              <Typography className="Mission" variant="h4" color="textSecondary">
              Source is a <div style={{display:"inline"}} id="whatissource"/>
              </Typography>
            </div>
            <div className="JoinNow">
              <TextField
                label="Username"
                type="username"
                onChange={this.handleChangeSignUp}
                margin="normal"
                variant="outlined"
                className="SignUpInput"
              />
              <Button variant="contained" color="primary" className="JoinButton" component={Link} to={{pathname:"/createaccount", state:{username:this.state.username}}}>Join Now</Button>
            </div>

          </div>
        </div>
        <div className="Section Section2">
          <Typography variant="h1" className="SectionTitle">Just build it</Typography>
          <Typography variant="h4" className="TypingDiv" color="textSecondary"><div id="typeElement"/></Typography>
          <Typography className="SectionTagline" variant="h4">Discuss ideas, build projects, and connect to those who matter.</Typography>
          <div className="WelcomeButton">
            <Button variant="contained" color="primary" size="large" component={Link} to="/explore/ideas">Explore Ideas</Button>
          </div>
        </div>
        <div className="Section Section3">
          <Typography className="SectionTitle" variant="h1">The Internet is your Incubator</Typography>
          <Typography className="SectionTitle" variant="h3" color="textSecondary">Find <div style={{display:"inline"}} id="audience" /></Typography>
          <Typography className="SectionTagline" variant="h4">Connect with collaborators, and receive funding and support.</Typography>
          <div className="WelcomeButton">
            <Button variant="contained" size="large" component={Link} to="/explore/people">Find People</Button>
          </div>
        </div>
        <div className="Section Section5">
          <Typography variant="h1" className="SectionTitle">Build something great</Typography>
          <Typography variant="h3" className="SectionTitle">Your ideas can change the world</Typography>
          <div className="WelcomeButton">
            <Button variant="contained" color="primary" size="large" component={Link} to="/explore/projects">Discover Projects</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
