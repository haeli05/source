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
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
//Icons
import Icon from '@material-ui/core/Icon'
import { ic_done } from 'react-icons-kit/md/ic_done'
import { ic_not_interested } from 'react-icons-kit/md/ic_not_interested'
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
import devImage3 from './img/dev3.png'
import BW from './img/bw.png'
import Table from './img/table.gif'
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
// Redux
import { connect } from 'react-redux'
import { newUser, checkUsernameAvailability } from './../../actions/user.actions'
import { getUser, getUsernameAvailability, getUsernameAvailabilityStatus, getNewUserStatus, getSignInStatus } from './../../reducers/user.reducer'


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
      SubscribeEmail: '',
      SubscribeEmailError: false,
      SubscribeEmailErrorMessage: '',
      sent: false,
      name: '',
      nameError: false,
      nameErrorText: '',
      username: '',
      usernameError: false,
      usernameErrorText: '',
      password: '',
      passwordError: false,
      passwordErrorText: '',
      passConfirm: '',
      passConfirmError: false,
      passConfirmErrorText: '',
      email: '',
      emailError: false,
      emailErrorText: '',
      token: '',
      tokenError: false,
      tokenErrorText: ''
    }
    window.Intercom('boot', {
      app_id: 'f5is3sx5'
    })
    this.subscribeSubmit = this.subscribeSubmit.bind(this)
    this.handleChangeSubscribe = this.handleChangeSubscribe.bind(this)
    this.usernameAvailabilityCheck = this.usernameAvailabilityCheck.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.testName = this.testName.bind(this)
    this.testEmail = this.testEmail.bind(this)
    this.testPassword = this.testPassword.bind(this)
    this.testPassConfirm = this.testPassConfirm.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.redirect = this.redirect.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this._handleKeyDown.bind(this))
    if (this.props.location.state !== undefined) {
      if (this.props.location.state.username !== undefined) {
        this.setState({ username: this.props.location.state.username })
      }
    }
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
      .type(`  engineers`)
      .pause()
      .delete()
      .type(` technology professionals`)
      .pause()
      .delete()
      .type(` software developers`)
      .pause()
      .delete()
      .type(` product managers`)
      .pause()
      .delete()
      .type(` data analyst`)
      .pause()
      .delete()
      .type(` designers`)
      .pause()
      .delete()
      .type(` project manager`)
      .pause()
      .delete()
      .type(` consultants`)
      .pause()
      .delete()
      .type(` investors`)
      .pause()
      .delete()
      .type(` fans`)
      .pause()
      .delete()
  }

  // intercom(){
  //   window.intercomSettings = {
  //     app_id: "f5is3sx5"
  //   };
  //   (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/f5is3sx5';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
  // }


  componentDidUpdate () {
    if (this.props.newUserStatus === 'invite_code_error' && this.state.tokenError === false) {
      this.setState({ tokenError: true })
      this.setState({ tokenErrorText: 'Incorrect invite code' })
    }
    if (this.state.usernameError === true && this.state.usernameErrorText === 'Invalid username') {

    } else {
      if (this.props.usernameAvailability === 'no' && this.state.usernameError === false) {
        this.setState({ usernameError: true })
        this.setState({ usernameErrorText: 'Username not available' })
      } else if (this.props.usernameAvailability === 'yes' && this.state.usernameError === true) {
        this.setState({ usernameError: false })
        this.setState({ usernameErrorText: '' })
      }
    }
  }

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

  handleChangeSubscribe (e) {
    this.setState({ SubscribeEmail: e.target.value })
    this.setState({ SubscribeEmailError: false })
    this.setState({ SubscribeEmailErrorMessage: '' })
  }

  subscribeSubmit () {
    this.setState({ SubscribeEmailError: false })
    this.setState({ SubscribeEmailErrorMessage: '' })
    if (this.state.SubscribeEmail !== '' && this.state.SubscribeEmail.includes('@') && this.state.SubscribeEmail.includes('.')) {
      axios.post(`${config.production_url}/subscribe`, {
        email: this.state.SubscribeEmail
      }).then(res => {
        this.setState({ sent: true })
        ReactGA.event({
          category: 'SignUp',
          action: 'Signed Up for Mailing List'
        })
      }).catch(err => {
        this.setState({ SubscribeEmailError: true })
        this.setState({ SubscribeEmailErrorMessage: 'There was an internal error. Please try again.' })
      })
    } else {
      this.setState({ SubscribeEmailError: true })
      this.setState({ SubscribeEmailErrorMessage: 'Please provide a valid email' })
    }
  }


    usernameAvailabilityCheck (username) {
      this.props.dispatch(checkUsernameAvailability(username))
    }

    handleChange (target, e) {
      let change = {}
      change[target] = e.target.value
      this.setState(change)
      if (change.username !== undefined && change.username !== '' && change.username.length > 3) {
        var validUsername = this.testUsername(change.username)
        if (validUsername) {
          this.usernameAvailabilityCheck(change.username)
        } else {
          this.setState({ usernameError: true })
        }
      }
    }

    testName () {
      var format = /[^-a-zA-Z0-9_'.]/
      var specialCharacters = format.test(this.state.name)
      if (this.state.name.length < 4 || this.state.name.length > 12 || specialCharacters) {
        this.setState({ nameError: true })
        this.setState({ nameErrorText: 'Invalid name' })
      } else {
        this.setState({ nameError: false })
        this.setState({ nameErrorText: '' })
        return true
      }
    }

    testUsername (username) {
      if (username !== undefined) {
        var format = /[^-a-zA-Z0-9_'.]/
        var specialCharacters = format.test(username)
        if (username.length < 4 || username.length > 12 || specialCharacters) {
          this.setState({ usernameError: true })
          this.setState({ usernameErrorText: 'Invalid username' })
        } else {
          this.setState({ usernameError: false })
          this.setState({ usernameErrorText: '' })
          return true
        }
      } else {
        var format = /[^-a-zA-Z0-9_'.]/
        var specialCharacters = format.test(this.state.username)
        if (this.state.username.length < 4 || this.state.username.length > 12 || specialCharacters) {
          this.setState({ usernameError: true })
          this.setState({ usernameErrorText: 'Invalid username' })
        } else {
          this.setState({ usernameError: false })
          this.setState({ usernameErrorText: '' })
          return true
        }
      }
    }

    testEmail () {
      if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
        this.setState({ emailError: true })
        this.setState({ emailErrorText: 'Must be a valid email' })
      } else {
        this.setState({ emailError: false })
        this.setState({ emailErrorText: '' })
        return true
      }
    }

    testPassword () {
      if (!this.testNumber(this.state.password) || this.state.password.length < 8) {
        this.setState({ passwordError: true })
        this.setState({ passwordErrorText: 'Password must contain at least 1 digit and be at least 8 characters long' })
      } else {
        this.setState({ passwordError: false })
        this.setState({ passwordErrorText: '' })
        return true
      }
    }

    testNumber (toTest) {
      return /\d/.test(toTest)
    }

    testPassConfirm () {
      if (this.state.password !== this.state.passConfirm) {
        this.setState({ passConfirmError: true })
        this.setState({ passConfirmErrorText: 'Passwords must match' })
      } else {
        this.setState({ passConfirmError: false })
        this.setState({ passConfirmErrorText: '' })
        return true
      }
    }

    testToken () {
      if (this.state.token === '') {
        this.setState({ tokenError: true })
        this.setState({ tokenErrorText: 'Invite code is required' })
      } else {
        this.setState({ tokenError: false })
        this.setState({ tokenErrorText: '' })
        return true
      }
    }

    handleSubmit () {
      var validUsername = this.testUsername()
      var validName = this.testName()
      var validEmail = this.testEmail()
      var validPassword = this.testPassword()
      var validPassConfirm = this.testPassConfirm()
      var validToken = this.testToken()
      if (validUsername && validName && validEmail && validPassword && validPassConfirm && validToken) {
        var userData = {
          username: this.state.username,
          email: this.state.email,
          name: this.state.name,
          password: this.state.password,
          invitecode: this.state.token
        }
        this.props.dispatch(newUser(userData))
      }
    }

    handleKeyPress (e) {
      if (e.key === 'Enter') {
        this.handleSubmit()
      }
    }

    redirect () {
      this.props.history.push(`${this.props.user.user._id}/profile`)
    }

  render () {
    return (
      <div className='WelcomePage'>
        <Helmet>
          <title>source | The Decentralized Tech Incubator</title>
          <meta name='keywords' content='decentralized, tech incubator, developers, software, programming, open source, blockchain, crowdfunding' />
          <meta
            name='description'
            content='Find developers for your projects'
          />
        </Helmet>
        <div className='Hero'>
          <div className='WelcomeSignUp'>
            <Grid container
            spacing={6}
            justify="flex-start"
            alignItems="center"
            >
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="overline" style={{marginLeft:"3px"}}>
                  Welcome To
                </Typography>
                <Typography className='Mission' color='textPrimary' variant='h1'>
                The Decentralized <br />Tech Incubator
                </Typography>

                <br/>
                <Typography color='textPrimary' variant='subtitle1' style={{marginLeft:"3px"}}>
                Find your distributed dev team, on demand
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={5} style={{alignItems:"center"}} className="Form Vertical">
              <Typography variant="h4">
              Create a New Account
              </Typography>
              <Typography color='textPrimary' variant='subtitle2' style={{marginLeft:"3px", textAlign:"Left"}}>
              Connect with <div id="whatissource" style={{display:"inline"}} />
              </Typography>

              {this.props.newUserStatus === 'PENDING' && (
                <div className='Vertical'>
                  <LinearProgress size={50} color='secondary' />
                </div>
              )}
              {(this.props.newUserStatus !== 'PENDING') && (
                <div className='Vertical' style={{width:"100%"}}>
                <div>
                  <TextField
                    label='Username'
                    error={this.state.usernameError}
                    value={this.state.username}
                    onChange={(e) => { this.handleChange('username', e) }}
                    helperText={this.state.usernameErrorText}
                    fullWidth
                    margin='normal'
                    variant='outlined'
                  />
                    <div className='UsernameAvailabilityCheck' style={{width:"100%"}}>
                      {this.props.usernameAvailabilityStatus === 'PENDING' && (
                        <CircularProgress size={20} color='primary' />
                      )}
                      {this.props.usernameAvailabilityStatus === 'ERROR' && (
                        <Typography variant='body1'>There was an error checking for this username's availability :(</Typography>
                      )}
                      {this.props.usernameAvailabilityStatus === 'SUCCESS' && (
                        <div>
                          {this.props.usernameAvailability === 'yes' && (
                            <Icon icon={ic_done} size={20} />
                          )}
                          {this.props.usernameAvailability === 'no' && (
                            <Icon icon={ic_not_interested} size={20} />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <TextField
                    label='Display Name'
                    error={this.state.nameError}
                    value={this.state.name}
                    onChange={(e) => { this.handleChange('name', e) }}
                    helperText={this.state.nameErrorText}
                    fullWidth
                    margin='normal'
                    variant='outlined'
                  />
                  <TextField
                    label='Email'
                    error={this.state.SignUpEmailError}
                    value={this.state.SignUpEmail}
                    onChange={(e) => { this.handleChange('email', e) }}
                    helperText={this.state.SignUpEmailErrorText}
                    fullWidth
                    margin='normal'
                    variant='outlined'
                  />
                  <TextField
                    type='password'
                    label='Password'
                    error={this.state.passwordError}
                    value={this.state.password}
                    onChange={(e) => { this.handleChange('password', e) }}
                    helperText={this.state.passwordErrorText}
                    fullWidth
                    margin='normal'
                    variant='outlined'
                  />
                  <TextField
                    type='password'
                    label='Confirm Password'
                    error={this.state.passConfirmError}
                    value={this.state.passConfirm}
                    onChange={(e) => { this.handleChange('passConfirm', e) }}
                    helperText={this.state.passConfirmErrorText}
                    fullWidth
                    margin='normal'
                    variant='outlined'
                  />
                  <Button variant='contained' color='primary' className='SubmitButton' onClick={this.handleSubmit}>Sign Up</Button>
                  <Typography variant='caption' component={Link} to='/login' className='TextCenter LinkUnderline' >Already have an account? Login</Typography>
                </div>
              )}
              </Grid>
            </Grid>


          </div>
        </div>
        <div className='Quote'>
          <Grid
          container
          justify="flex-start"
          alignItems="center"
          spacing={2}
           className="Body">
            <Grid item xs={12} md={4} lg={4} className="ballimage">
                <img className='ToolBall' src={toolball} alt='toolball' />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className='text'>
                <Typography variant='h3' color="textPrimary" style={{textAlign:"Left"}}>Solving Tech's Biggest Problem</Typography>
                <br />
                <Typography variant='body1' color="textPrimary">Building software is difficult.

                Finding the right team for your project can be a complicated process.
                </Typography>
                <br />
                <Typography variant='body2' paragraph quote style={{marginLeft:"14px"}}>"Companies across the board report the availability of software engineers and just the ability to do things with software as being as big or even bigger a constraint  on their progress as access to capital"
                <br /><br /> - Patrick Collison, Cofounder/CEO@Stripe</Typography>

                <Typography paragraph variant='body1'>
                Many organizations aren't functioning at their best because they don't have the right team.
                <br /><br />
                But we noticed that most teams do work more efficiently in environments where experts and potential team members are easily available, such as during hackathons or incubators.
                So we set out to build a virtual environment - A Decentralized Tech Incubator - to help you get feedback for your ideas, find collaborators, and supercharge your development process.
                <br />
                <br/>
                Sign up to connect with developers, experts, and project managers instantly.
                <br />
                <br />
                We can't wait to see what you build.
                </Typography>
              <div className='JoinMailing' style={{marginBottom:"7vh"}}>
                <ReactSVG src={Announce} className='ReactSVGIcon Icon25' />
                <TextField
                  label='Subscribe for email updates'
                  type='email'
                  onChange={this.handleChangeSubscribe}
                  variant='outlined'
                  className='SignUpInput'
                  error={this.state.SubscribeEmailError}
                  style={{color:"black"}}
                />
                {(!this.state.sent) && (
                  <Tooltip title={this.state.SubscribeEmailErrorMessage}>
                    <Button variant='outlined' onClick={this.subscribeSubmit}>Subscribe</Button>
                  </Tooltip>
                )}
                {(this.state.sent) && (
                  <Typography variant='subtitle1' className='Success'>
                    <ReactSVG src={CircleTick} className='ReactSVGIcon Icon25 MarginRight10' />
                      Thank you. We will keep in touch
                  </Typography>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
        <div className='Section Section2'>
          <Typography className='SectionTagline' variant='h2' color="textPrimary">How It Works</Typography>
          <Typography variant='h4' color="textPrimary" style={{marginTop:"2vh", marginBottom:"7vh"}}>The Process</Typography>
                  <Grid
                  container
                  justify="center"
                  alignItems="flex-start"
                  spacing={0}
                  style={{marginBottom:"14vh"}}
                  >
                    <Grid item sm={12} md={4} className="Vertical">
                      <ReactSVG src={Level} className='ReactSVGIcon Icon50 CircleBorder' style={{marginBottom:"2vh"}} />
                      <Typography variant='subtitle1'>
                      1. Scope your Project
                      </Typography>
                    </Grid>
                    <Grid item sm={12} md={4} className="Vertical">
                      <ReactSVG src={Edit} className='ReactSVGIcon Icon50 CircleBorder' style={{marginBottom:"2vh"}} />
                      <Typography variant='subtitle1'>
                      2. Specify your Tasks
                      </Typography>
                    </Grid>
                    <Grid item sm={12} md={4} className="Vertical">
                      <ReactSVG src={WorkMan} className='ReactSVGIcon Icon50 CircleBorder' style={{marginBottom:"2vh"}} />
                      <Typography variant='subtitle1'>
                      3. Work with Collaborators
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="subtitle2" style={{marginBottom:"2vh"}}>
                  Read the Contribution Guidelines
                  </Typography>
                  <Button variant='outlined'  component={Link} to='/guidelines' style={{marginBottom:"19vh"}}>
                    Guidelines
                  </Button>
          <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}>
          <Grid item xs={12} sm={12} md={7} >
            <div className='Description' >
              <Typography variant='h4' style={{ textAlign: 'left', marginBottom:"14px" }}>
                A plug and play paradigm for software development
              </Typography>
              <Typography variant='body1' paragraph style={{ textAlign: 'left' }}>
                We bring an open source inspired, Agile development based, internationally distributed approach to building software.
                Only pay for what you need.
                <br /><br />
                Building your project starts with specifying what you need.
                <br /> <br />
                Who are the key team members? Do you need a project manager? When is it due? What is the tech stack?
                Do you have a budget?(Or are you seeking volunteers?) How can we best help you? What are the tasks that needs to get done?
                <br /><br />
                We match our talent pool to your projects and tasks, based on their interests and skills.
                User profiles allow you to identify who you're working with, their prior work, and their reputation.
                <br /><br />
                Hire developers only for the tasks you need help with.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Fade in>
              <img className="BW" src={BW} alt='developers' />
            </Fade>
          </Grid>
        </Grid>
        <Grid container
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
        style={{marginTop:"7vh"}}>
          <Grid item xs={12}sm={12} md={5} lg={5}>
          <Fade in>
            <img className='Table' src={Table} alt='developers' />
          </Fade>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} style={{textAlign:"left"}} xs>
            <Typography variant="h4" style={{marginBottom:"14px"}}>Project management and support on demand</Typography>
            <Typography variant="body1">
            Get matched with a project manager (Or play that role yourself).<br />
            Consult with our team or community of experts for any other issues.
            <br /><br />
            1. Project management <br />
            Don't know where to start or how to scope your project? Read our user guide or contact us to get professional help.
            Our team is ready to help you where you are. From initial scoping, to contractual tasks, or completing a major product feature.
            <br /><br />
            2. Task delegation <br />
            Fill out task cards to seamlessly delegate your work to one of your team members or the wider community.
            <br /><br />
            3. Feedback and Support <br />
            Pen an idea post, and get feedback.
            </Typography>
          </Grid>
        </Grid>

        <Grid container
        justify="center"
        alignItems="flex-start"
        spacing={2}
        style={{marginTop:"7vh"}}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className='Description' style={{textAlign:"left", marginLeft:"7px"}}>
            <Typography variant='h4' paragraph className='SectionSubTitle' >
            Scale flexibly with Developers-as-a-Service
            </Typography>
            We partnered with devshops, technology providers and training institutions from all around the world to ensure
            paid tasks are completed at the highest standards.
            <br />
            <br />
            Project managers ensure you only pay for work you're satisfied with.
            <br />
            <br />
            Scale your team quickly with a few clicks! Have your pick of our global talent pool. Our development partners come from countries including the USA, Canada, China India, Ukraine.
            <br /><br />
            Our wider community of users and freelancers come from all around the world. so you can scale quickly according to your needs.

            </div>
          </Grid>
          <Grid item xs={3}>
            <Fade in>
              <img className='DevImage' src={devImage3} alt='developers' />
            </Fade>
          </Grid>
          <Grid item xs={3}>
            <Fade in>
              <img className='DevImage' src={developerImage} alt='developers' />
            </Fade>
          </Grid>
        </Grid>
        <div style={{textAlign:"center", marginTop: "7vh"}}>
        <Typography variant='caption'>Have a project you want our help with?</Typography>
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

          <div className='Section3 Section'>
          <Typography className='SectionTitle' variant='h2' style={{marginBottom:"7vh"}}>Pricing</Typography>
          <br />
          <Typography variant='h4'>Pay as much as you need, or nothing at all!</Typography>
          <br /><br /><br />
          <Grid container
          spacing={4}
          direction="row"
          justify="center"
          alignItems="flex-start"
          >
            <Grid item xs={12} sm={12} md={4} className="Vertical">
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
            <Grid item xs={12} sm={12} md={4} className="Vertical">
              <Typography variant="h5">Maintainence</Typography>
              <Typography variant="overline">Cost:</Typography>
              <Typography variant="subtitle1">$1000/mo</Typography>
              <ul style={{textAlign:"left"}}>
                <li>
                <Typography variant="body">Get a project manager to perform necessary maintainence tasks for your project</Typography>
                </li>
                <li>
                <Typography variant="body">Connect with our community</Typography>
                </li>
                <li>
                <Typography variant="body">Additional costs for additional tasks</Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className="Vertical">
              <Typography variant="h5">Bespoke</Typography>
              <Typography variant="overline">Cost:</Typography>
              <Typography variant="subtitle1">Varies</Typography>
              <ul style={{textAlign:"left"}}>
                <li>
              <Typography variant="body">Work with our team directly</Typography>
                </li>
                <li>
              <Typography variant="body">Connect with our broader community of developers and tech solutions providers</Typography>
                </li>
                <li>
              <Typography variant="body">Tailored End-to-End solutions for your project</Typography>
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
