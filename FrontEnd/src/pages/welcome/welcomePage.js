import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Fade from '@material-ui/core/Fade';
// Components
import JoinQueue from './components/joinQueue';
import PayButton from '../payments/payButton';
import ReactSVG from 'react-svg';

import { ShareButton, MessageButton, SupportButton } from './../global/components/majorActionButtons';

// MISC
import logo from './img/logo.png';
import developerImage from './img/devImage.png';
import WalletCoin from '../../assets/svg/walletcoin.svg';
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
      .type(`Seeking Ruby Engineers for a smart contract platform`)
      .pause()
      .delete()
      .type("急需区块链工程师，自己开发太慢了！")
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
      .type("Software Engineers required. I'm building a blockchain for grandmothers and non-techies!")
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
          .type(`developer`)
          .pause()
          .delete()
          .type(`engineer`)
          .pause()
          .delete()
          .type(`designer`)
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
      alert("Carlos sucks major donkey balls")
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

          <Grid container spacing={18}>
            <Grid item xs={6}>
            <Typography className="Mission" color="textPrimary" variant="h1">
            The Internet's <br/>Tech Incubator
            </Typography>
            </Grid>
            <Grid item xs={6}>

                    <Typography className="Mission" variant="h4" color="textPrimary">
                    Source connects <div style={{display:"inline"}} id="whatissource"/> <br/>to your digital projects.
                    </Typography>
                  <Button variant="outlined" className="GetStarted" component={Link} to="/getstarted">
                  Get started
                  </Button>

            </Grid>
            <Grid item xs={6}>
            <div className="JoinMailing">
              <TextField
                label="Sign up for email updates"
                type="email"
                onChange={this.handleChangeSignUp}
                margin="wide"
                variant="outlined"
                className="SignUpInput"
              />
              <Button variant="outlined" className="SignUpButton" component={Link} to={{pathname:"/createaccount", state:{username:this.state.username}}}>Sign Up</Button>
            </div>
            </Grid>
            <Grid item xs={6}>
                  <div className="WhatIsSource">
                    <Typography variant="h4">If you're a <div style={{display:"inline"}} id="audience" />,<br/> source lets you monetize your skills.</Typography>
                    <Button variant="outlined">
                    Get Started
                    </Button>
                  </div>
            </Grid>
          </Grid>
          <Typography variant="body">Want to get paid for your skills today?</Typography>
          <Button variant="outlined">
          Help us build the beta
          </Button>
          </div>
        </div>
        <div className="Quote">

          <Typography className="SectionTagline" variant="h5" paragraph={true}>"Companies across the board report the availability of software engineers and just the ability to do things with software as being as big or even bigger a constraint  on their progress as access to capital" <br/><br/> - Patrick Collison, CEO @ Stripe</Typography>
        </div>
        <div className="Section Section2">
          <Typography variant="h4" className="TypingDiv"><div id="typeElement"/></Typography>
          <Typography className="SectionTitle" variant="h3">Can building technology be as simple as writing a blog post?</Typography>
          <br/>
          <Typography variant="h4">We think so.</Typography>
          <br/>
          <Typography variant="h4">Because the best developers are already online, <br/><br/> you just need their <b>attention.</b></Typography>
          <Typography variant="h5" paragraph={true} style={{color:"white"}}>
          Find developers for your projects
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Typography variant="h5" paragraph={true} style={{textAlign:"left"}}>
              Source is a platform with technology professionals, development shops, and Computer Science graduates
              <br/>
              designed to help build your <div id="CustProjects"/>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Fade in={true}>
                <img className="DevImage" src={developerImage} alt="developers"/>
              </Fade>
            </Grid>
          </Grid>
          <br/>
        </div>
        <div className="Section Section3">
        <Typography className="SectionTitle" variant="h3">How it works</Typography>
        <Typography variant="h5" paragraph={true} style={{color:"white", textAlign:"left"}}>
                <br/>
                <br/>
                1. Describe your idea or scope your project.
                <br/>
                2. Determine your price points for individual features
                <br/>
                3. Our community of talent delivers
                <br/>
        <br />
          </Typography>
        <br/>
        <Typography className="SectionTitle" variant="h3">Next level Crowdsourcing</Typography>
        <Typography variant="h6" paragraph={true} style={{color:"white"}}>
            Meet Talent, Monetize your skills/community engagement?
        </Typography>
          <Typography variant="h5" paragraph={true} style={{color:"white"}}>
        <br />
        1. Find tasks relevant to your skillset.
        <br/>
        2. Work with the team, deliver the goods.
        <br/>
        3. ???
        <br/>
        4. Profit.
        </Typography>
        </div>
        <div className="Section Section5">

          Help us build the beta!
          <Typography variant="h2" className="SectionTitle">source</Typography>
          <Typography variant="h4" className="SectionTitle">The Internet's Tech Incubator. </Typography>
          <Grid container spacing={4}>
            <Grid item xs={6}>
            <Typography variant="overline2" className="SectionTitle">Support this project</Typography>
            <PayButton />
            </Grid>
            <Grid item xs={6}>
              <div className="MajorActionButtonsHorizontal">
                <div className="MajorActionButtonDiv">
                  <MessageButton {...this.props} goToRoom={this.props.goToRoom}/>
                </div>
                <div className="MajorActionButtonDiv">
                  <ShareButton {...this.props} title={this.props.title} url={this.props.url}/>
                </div>
              </div>
            </Grid>
          </Grid>
          <Typography className="Scope" variant="body" paragraph={true}>
          <b>Scope:</b>
          Source is designed to facilitate discussion, collaboration and crowdsourcing to build the internet's most exciting projects.

          Our stack combines a react front end with modular backend components.



          Components:

          Ideas includes a social-blog like text area to discuss, well, ideas and potential projects
          Functionality: Comments (Done)

          The Project component hosts a project's files, its contributors, task boards and displays links for crowdfunding.

          Git-hosting(Needs work), Payment()

          People: Social integration, allows users to filter their site experience based on relevant skills, while also allowing project managers to track and find contributors.

          <b>How to Contribute:</b>
          To donate: Use the Pay button above

          Suggestions: Use the email feedback or use spectrum

          Skills: Check the todo list and message us on telegram or spectrum if you want to take over the development for a component. We pay for good work.
          </Typography>

          <Board />
        </div>

      </div>
    );
  }
}

export default WelcomePage;
