import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import Fade from '@material-ui/core/Fade'
import List from '@material-ui/core/List'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar';
// Components
import JoinQueue from './components/joinQueue'
import PayButton from '../payments/payButton'
import ReactSVG from 'react-svg'
import axios from 'axios'
import { ShareButton, MessageButton, SupportButton } from './../global/components/majorActionButtons'

// MISC
import logo from './img/logo.gif'
import developerImage from './img/devs.jpg'
import developerImage2 from './img/dev2.jpg'
import toolball from './img/toolball.jpg'
import Lucas from './img/Lucas.png'
import HammerScrew from '../../assets/svg/hammer_screwdriver_2.svg'
import Announce from '../../assets/svg/announce.svg'
import Level from '../../assets/svg/level.svg'
import Edit from '../../assets/svg/edit.svg'
import Comment from '../../assets/svg/comment.svg'
import RightBracket from './../../assets/svg/rightbracket.svg'
import CircleTick from './../../assets/svg/circletick.svg'
import WorkMan from './../../assets/svg/workman.svg'
import config from '../../utils/config.js'
import { PayPalButton } from 'react-paypal-button-v2'


// Analytics

import ReactGA from 'react-ga'

const malarkey = require('malarkey')
const ScrollMagic = require('scrollmagic')

class WelcomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      controller: null,
      lastKeys: [],
      SignUpEmail: '',
      emailError: false,
      emailErrorMessage: '',
      sent: false
    }
    window.Intercom('boot', {
      app_id: 'f5is3sx5'
    })
    this.SignUpSubmit = this.SignUpSubmit.bind(this)
    this.handleChangeSignUp = this.handleChangeSignUp.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this._handleKeyDown.bind(this))

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
      .type(`smart contract programmers`)
      .pause()
      .delete()
      .type(`designers`)
      .pause()
      .delete()
      .type(`backers`)
      .pause()
      .delete()
      .type(`consultants`)
      .pause()
      .delete()
      .type(`investors`)
      .pause()
      .delete()
      .type(`fans`)
      .pause()
      .delete()
  }

  // intercom(){
  //   window.intercomSettings = {
  //     app_id: "f5is3sx5"
  //   };
  //   (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/f5is3sx5';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
  // }

  componentWillUnmount () {
    document.removeEventListener('keydown', this._handleKeyDown.bind(this))
  }

  _handleKeyDown (event) {
    var keyArray = this.state.lastKeys
    keyArray.push(event.keyCode)
    if (keyArray.length === 11) {
      keyArray.shift()
    }
    this.setState({ lastKeys: keyArray })
    var a = keyArray.join()
    var b = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65].join()
    if (a === b) {
      alert(':D')
    }
  }

  handleChangeSignUp (e) {
    this.setState({ SignUpEmail: e.target.value })
    this.setState({ emailError: false })
    this.setState({ emailErrorMessage: '' })
  }

  SignUpSubmit () {
    this.setState({ emailError: false })
    this.setState({ emailErrorMessage: '' })
    if (this.state.SignUpEmail !== '' && this.state.SignUpEmail.includes('@') && this.state.SignUpEmail.includes('.')) {
      axios.post(`${config.production_url}/subscribe`, {
        email: this.state.SignUpEmail
      }).then(res => {
        this.setState({ sent: true })
        ReactGA.event({
          category: 'SignUp',
          action: 'Signed Up for Mailing List'
        })
      }).catch(err => {
        this.setState({ emailError: true })
        this.setState({ emailErrorMessage: 'There was an internal error. Please try again.' })
      })
    } else {
      this.setState({ emailError: true })
      this.setState({ emailErrorMessage: 'Please provide a valid email' })
    }
  };

  render () {
    return (
      <div className='WelcomePage'>
        <Helmet>
          <title>source | The Decentralized Tech Incubator</title>
          <meta name='keywords' content='decentralized, tech incubator, developers,programming,open source, blockchain, crowdfunding' />
          <meta
            name='description'
            content='Find developers for your projects'
          />
        </Helmet>
        <div className='Hero'>
          <div className='WelcomeSignUp'>
            <Grid container
            spacing={12}
            justify="center"
            alignItems="center">
              <Grid item sm={12} md={7}>
                <Typography variant="overline" style={{marginLeft:"3px"}}>
                  Welcome To
                </Typography>
                <Typography className='Mission' color='textPrimary' variant='h1'>
                The Decentralized <br />Tech Incubator
                </Typography>
                <Typography className='TagLine' color='textPrimary' variant='h4' style={{marginLeft:"3px", marginTop:"16px"}}>
                Find your distributed dev team
                </Typography>
              </Grid>
              <Grid item sm={12} md={5}>
                <Typography className='Mission WhatIsSource' style={{ marginTop: '0em' }} variant='h4' color='textPrimary'>
                Connect with a community of <br />
                 <div style={{ display: 'inline' }} id='whatissource' />
                 <br />
                 to build your project
                </Typography>
                <Button variant='outlined' className='GetStarted' component={Link} to='/getstarted'>
                  Get started
                </Button>
                <br />
                <Typography className='Mission WhatIsSource' variant='h4' color='textPrimary'>
                  Are you a developer? Sign up to get paid instantly.
                </Typography>
                <Button variant='contained' color='primary' className='GetStarted' href='#todo'>
                  Register
                </Button>
              </Grid>
            </Grid>

            <div style={{textAlign:"center", marginTop: "22vh"}}>
            <Typography variant='caption'>Have a project you need help with?</Typography>
              <br />
                <Fab
                  variant='extended'
                  size='large'
                  color='secondary'
                  className='TodoButton'
                  href='/getstarted'
                >
                  <ReactSVG src={Comment} className='ReactSVGIcon Icon25 LeftIcon' />
              Contact Us
            </Fab>
            </div>
          </div>
        </div>
        <div className='Quote'>

          <div className="Body">
            <div className="ballimage">
                <img className='ToolBall' src={toolball} alt='toolball' />
            </div>
            <div className='text'>
                <Typography variant='h3' color="textPrimary">Solving Tech's Biggest Problem</Typography>
                <br />
                <Typography variant='body1' color="textPrimary">Building software is difficult.</Typography>
                <br />
                <Typography variant='body2' paragraph quote style={{marginLeft:"14px"}}>"Companies across the board report the availability of software engineers and just the ability to do things with software as being as big or even bigger a constraint  on their progress as access to capital"
                <br /><br /> - Patrick Collison, Cofounder/CEO@Stripe</Typography>

                <Typography paragraph variant='body1'>
                But we noticed that many teams can work more efficiently in environments where experts and potential team members are easily available, such as hackathons or incubators.
                So we set out to build a virtual environment - A Decentralized Tech Incubator - to help you supercharge your development process.
                <br /><br />

                <br/>
                Sign up to connect with developers, experts, and project managers instantly.
                </Typography>
              <div className='JoinMailing'>
                <ReactSVG src={Announce} className='ReactSVGIcon Icon25' />
                <TextField
                  label='Sign up for email updates'
                  type='email'
                  onChange={this.handleChangeSignUp}
                  variant='outlined'
                  className='SignUpInput'
                  error={this.state.emailError}
                />
                {(!this.state.sent) && (
                  <Tooltip title={this.state.emailErrorMessage}>
                    <Button variant='outlined' onClick={this.SignUpSubmit}>Sign Up</Button>
                  </Tooltip>
                )}
                {(this.state.sent) && (
                  <Typography variant='h4' className='Success'>
                    <ReactSVG src={CircleTick} className='ReactSVGIcon Icon25 MarginRight10' />
                      Thank you. We will keep in touch
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='Section Section2'>
        <Typography className='SectionTagline' variant='h2' color="textPrimary">How It Works</Typography>
        <Grid
        container
        justify="center"
        alignItems="center"
        spacing={1}>
          <Grid item sm={2} md={4} className="Vertical">
            <ReactSVG src={Level} className='ReactSVGIcon Icon50' />
            <Typography variant='subtitle1'>
            1. Onboard your projects
            </Typography>
          </Grid>
          <Grid item sm={2} md={4} className="Vertical">
            <ReactSVG src={Edit} className='ReactSVGIcon Icon50' />
            <Typography variant='subtitle1'>
            2. Specify your tasks
            </Typography>
          </Grid>
          <Grid item sm={2} md={4} className="Vertical">
            <ReactSVG src={WorkMan} className='ReactSVGIcon Icon50' />
            <Typography variant='subtitle1'>
            3. Build with community
            </Typography>
          </Grid>
        </Grid>

        <Grid
        container
        justify="center"
        alignItems="center"
        spacing={8}>
          <Grid item sm={12} md={6}>
            <div className='Description' >
              <Typography variant='h3' paragraph >
                  A plug and play paradigm for software development
              </Typography>
              <Avatar alt="Lucas" src={Lucas} className="BigAvatar" />
              <Typography variant='h6' paragraph style={{ textAlign: 'left' }}>
                <ul>
                  <li>Work with a Project Manager to scope out your tasks</li>
                  <li>Publish tasks and set price points</li>
                  <li>Only pay when you or your project manager is satisfied with the result.</li>
                </ul>

              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <Fade in>
              <img className='DevImage2' src={developerImage2} alt='developers' />
            </Fade>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={6} md={3}>
            <Fade in>
              <img className='DevImage' src={developerImage} alt='developers' />
            </Fade>
          </Grid>
          <Grid item sm={6} md={5}>
            <div className='Description'>
            <Typography variant='h3' paragraph className='SectionSubTitle'>
                      Introducing: Developers-as-a-Service
            </Typography>
            We partnered with devshops, technology providers and training institutions globally to ensure <br />
            Paid tasks are delivered at top quality.
            <br />
            <br />
            Our partners can fulfill your requirements at varying price points.

            </div>
          </Grid>
        </Grid>
        <Typography variant="h2">How We Operate</Typography>
        <Grid container spacing={2}>
          <Grid item sm={4} md={4} className="Vertical">
          <Typography variant="h4">Trust</Typography>


          </Grid>
          <Grid item sm={4} md={4} className="Vertical">
          <Typography variant="h4">Clarity</Typography>

            Tasks and deliverables are
          </Grid>
          <Grid item sm={4} md={4} className="Vertical">
          <Typography variant="h4">Accountability</Typography>


          </Grid>
        </Grid>
          </div>
          <div className='Section Section3'>
          <Typography className='SectionTitle' variant='h3' >Pricing</Typography>
          <br />
          <Typography variant='h4' >Pay as much as you want,</Typography>
          <Typography variant='h4' >or nothing at all!</Typography>
          <Grid container >
            <Grid item sm={4} md={4} className="Vertical">
              <Typography variant="h5">Free</Typography>
              <Typography variant="overline">Cost:</Typography>

              <Typography variant="subtitle1">Nothing</Typography>
              <ul style={{textAlign:"left"}}>
                <li>
                <Typography variant="body">Be your own project manager.</Typography>
                </li>
                <li>
                <Typography variant="body">Connect with our community</Typography>
                </li>
                <li>
                <Typography variant="body">Find Volunteers for your tasks</Typography>
                </li>
              </ul>
            </Grid>
            <Grid item sm={4} md={4} className="Vertical">
              <Typography variant="h5">Maintainence</Typography>
              <Typography variant="overline">Cost:</Typography>
              <Typography variant="subtitle1">$1000/mo</Typography>
              <ul style={{textAlign:"left"}}>
                <li>
                <Typography variant="body">Get a project manager who will keep track of necessary tasks for your project</Typography>
                </li>
                <li>
                <Typography variant="body">Connect with our community</Typography>
                </li>
                <li>
                <Typography variant="body">Additional costs for your tasks</Typography>
                </li>
              </ul>
            </Grid>
            <Grid item sm={4} md={4} className="Vertical">
              <Typography variant="h5">Bespoke</Typography>
              <Typography variant="overline">Cost:</Typography>
              <Typography variant="subtitle1">Varies</Typography>
              <ul style={{textAlign:"left"}}>
                <li>
              <Typography variant="body">Work with our team directly</Typography>
                </li>
                <li>
              <Typography variant="body">Connect with our community</Typography>
                </li>
                <li>
              <Typography variant="body">Tailored End-to-End development solutions for your project</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>


          </div>



      </div>
    )
  }
}

export default WelcomePage
