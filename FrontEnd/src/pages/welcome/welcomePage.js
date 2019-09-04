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
import HammerScrew from '../../assets/svg/hammer_screwdriver_2.svg'
import Anchor from '../../assets/svg/anchor.svg'
import Comment from '../../assets/svg/comment.svg'
import RightBracket from './../../assets/svg/rightbracket.svg'
import CircleTick from './../../assets/svg/circletick.svg'
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
            <Grid container spacing={12}>
              <Grid item sm={12} md={7}>
                <Typography className='Mission' color='textPrimary' variant='h1'>
                  The Decentralized<br/>
                  Tech Incubator
                </Typography>
                <Typography className='TagLine' color='textPrimary' variant='h4' style={{marginLeft:"12px", marginTop:"16px"}}>
                  Find your distributed dev team
                </Typography>
              </Grid>
              <Grid item sm={12} md={5}>
                <Typography className='Mission WhatIsSource' style={{ marginTop: '0em' }} variant='h4' color='textPrimary'>
                Connect with a community of <br />
                 <div style={{ display: 'inline' }} id='whatissource' />
                 <br />
                 anytime, anywhere, any price
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
          </div>
        </div>
        <div className='Quote'>
          <div className="Body">
            <div className="ballimage">
                <img className='ToolBall' src={toolball} alt='toolball' />
            </div>
            <div className='text'>
            <Typography variant='h3'>Problem</Typography>
            <Typography variant='h4' >Building software is complicated.</Typography>
              <br />
                  <Typography variant='subtitle1' paragraph>"Companies across the board report the availability of software engineers and just the ability to do things with software as being as big or even bigger a constraint  on their progress as access to capital"
                  <br /><br /> - Patrick Collison, Cofounder/CEO@Stripe</Typography>
              <Typography variant='h3'>Solution</Typography>
              <Typography variant='h4' >Let developers come to you.</Typography>


              <div className='JoinMailing'>
                <ReactSVG src={Anchor} className='ReactSVGIcon Icon25' />
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
        <Typography className='SectionTitle' variant='h2' color="inherit">How it works</Typography>

        <Typography className='SectionSubTitle' variant='h4' style={{ color: 'white' }}>Onboard your projects,<br /> Assign your tasks to our community. <br /> Get your projects built on demand, instantly.
        </Typography>

        <Grid container spacing={8}>
          <Grid item sm={12} md={6}>
            <div className='Description' >
              <Typography variant='h5' paragraph >
                  Our community of developers, technology professionals, and consultants support your projects from ideation to implementation.
              </Typography>
              <Typography variant='body' paragraph style={{ textAlign: 'left' }}>
                <ul>
                  <li>Share your ideas and Projects</li>
                  <li>Receive actionable insight, feedback and contributions.</li>
                  <li>Get matched with contributors</li>
                </ul>
                    We partnered with devshops, technology providers and training institutions to ensure a high quality of contributions.
                <br />
                    Less time spent on logistics means more time spent on what matters:
                <br /><br />
                <b>Building the product.</b>
              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <Fade in>
              <img className='DevImage2' src={developerImage2} alt='developers' />
            </Fade>
          </Grid>
        </Grid>
        <Typography variant='h4' paragraph className='SectionSubTitle'>
                  While enabling community driven implementation and funding
        </Typography>
        <Grid container spacing={6}>
          <Grid item sm={6} md={3}>
            <Fade in>
              <img className='DevImage' src={developerImage} alt='developers' />
            </Fade>
          </Grid>
          <Grid item sm={6} md={5}>
            <div className='Description'>
              <Typography variant='h5' paragraph >
                    Open Source Collaboration + Crowdfunding + Monetized Tasks
              </Typography>
                    Projects are broken down into subtasks, which can be delegated to the community or our specialist partners.
              <br /><br />
                    How to monetize your skills:
              <ol>
                <li>Find a task relevant to your skillset</li>
                <li>Work with the project manager to deliver</li>
                <li>???</li>
                <li>Profit. Get paid in cash or Crypto.</li>
              </ol>
            </div>
          </Grid>
        </Grid>



          </div>
          <div className='Section Section3'>
          <Typography className='SectionTitle' variant='h3' >Pricing</Typography>
          <br />
          <Typography variant='h4' >Pay as much as you want,</Typography>
          <Typography variant='h4' >or nothing at all!</Typography>
          <div classname="board">
            <div classname="column">
              <Typography variant="h5">Free</Typography>
              <Typography variant="overline">Cost:</Typography>

              <Typography variant="caption">Nothing</Typography>
              <Typography variant="body">•  Be your own project manager.</Typography>
              <Typography variant="body">•  Connect with our community</Typography>
              <Typography variant="body">•  Find Volunteers for your tasks</Typography>
            </div>
            <div classname="column">
            <Typography variant="h5">Maintainence</Typography>
            <Typography variant="overline">Cost:</Typography>
            <Typography variant="caption">$1000/mo</Typography>
            <Typography variant="body">•  Get a project manager who will keep track of necessary tasks for your project</Typography>
            <Typography variant="body">•  Connect with our community</Typography>
            <Typography variant="body">•  Additional costs for your tasks</Typography>
            </div>
            <div classname="column">
            <Typography variant="h5">Bespoke</Typography>
            <Typography variant="overline">Cost:</Typography>
            <Typography variant="caption">Varies according to your needs</Typography>
            <Typography variant="body">•  Work with our team directly</Typography>
            <Typography variant="body">•  Connect with our community</Typography>
            <Typography variant="body">•  Tailored End-to-End development solutions for your project</Typography>
            </div>
          </div>
            <Typography variant='overline2'>Have a project you want to list or need help with?</Typography>
            <br />
            <Typography variant='h4'>Let us know!</Typography>
            <br />
            <Fab
              variant='extended'
              size='large'
              color='primary'
              className='TodoButton'
              href='/getstarted'
            >
              <ReactSVG src={Comment} className='ReactSVGIcon Icon25 LeftIcon' />
          Contact Us
            </Fab>
          </div>



      </div>
    )
  }
}

export default WelcomePage
