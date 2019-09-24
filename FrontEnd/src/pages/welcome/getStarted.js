import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Tooltip from '@material-ui/core/Tooltip'

// Components
import JoinQueue from './components/joinQueue'
import PayButton from '../payments/payButton'

// MISC
import ReactSVG from 'react-svg'
import ReactGA from 'react-ga'
import axios from 'axios'
import MessageBlob from '../../assets/svg/messageblob.svg'
import Letter from '../../assets/svg/letter.svg'
import CircleTick from './../../assets/svg/circletick.svg'
import config from '../../utils/config.js'

class GetStarted extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      message: '',
      emailError: false,
      emailErrorMessage: '',
      sent: false
    }
    this.MessageSubmit = this.MessageSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
  }

  MessageSubmit () {
    if (this.state.email !== '' && this.state.email.includes('@') && this.state.email.includes('.') && this.state.feedback !== '') {
      axios.post(`${config.production_url}/feedback`, {
        email: this.state.email,
        feedback: this.state.message
      }).then(res => {
        this.setState({ sent: true })
        ReactGA.event({
          category: 'Enquiry',
          action: 'Sent an Enquiry'
        })
      })
        .catch(err => {
          this.setState({ emailError: true })
          this.setState({ emailErrorMessage: 'There was an internal error. Please try again.' })
        })
    } else {
      this.setState({ emailError: true })
      this.setState({ emailErrorMessage: 'Please provide a valid email' })
    }
  };

  handleChangeMessage (e) {
    this.setState({ message: e.target.value })
  }
  handleChangeEmail (e) {
    this.setState({ email: e.target.value })
  }

  render () {
    return (
      <div className='GetStarted'>
        <Helmet>
          <title>Get Started | source</title>
          <meta name='keywords' content='developers,programming,open source, blockchain, crowdfunding' />
          <meta
            name='description'
            content='Find developers for your projects'
          />
        </Helmet>
        <div className='Section'>
          <Grid container spacing={24}>
            <Grid item sm={12} md={5}>
              <div className='GetStartedLabel'>
                <Typography className='GetStartedTitle' color='textPrimary' variant='h1'>
                Get Started
                </Typography>
                <Typography variant='h4'>Please reach out if you need immediate assistance.<br /><br />
                  Contact:
                  <Link component={RouterLink} to='/#todo'>
                  here.
                  </Link>
                  <br />
                  <br />
                  </Typography>
                <div className='GetStartedFabContainer'>
                  <Fab
                    variant='extended'
                    size='large'
                    color='primary'
                    aria-label='Spectrum Chat'
                    className='Button'
                    href='https://spectrum.chat/sourcenetwork-io?tab=posts'
                  >
                    <ReactSVG src={MessageBlob} className='ReactSVGIcon Icon25 LeftIcon' />
                    Chat
                  </Fab>
                  <Fab
                    variant='extended'
                    size='large'
                    color='secondary'
                    className='Button'
                    href='mailto:source@sourcenetwork.io'
                  >
                    <ReactSVG src={Letter} className='ReactSVGIcon Icon25 LeftIcon Letter' />
                    Email
                  </Fab>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={5}>
              <div className='Form'>
                <Typography className='Mission' variant='h5' color='textPrimary'>
            Fill up this form for general enquiries, we will reply as soon as possible.
                </Typography>
                <TextField
                  fullWidth
                  label='Email'
                  type='email'
                  onChange={this.handleChangeEmail}
                  margin='wide'
                  variant='outlined'
                  className='ContactInputName'
                  error={this.state.emailError}
                />

                <TextField
                  fullWidth
                  multiline
                  rows='13'
                  rowsMax='13'
                  label='Message'
                  multiline
                  type='email'
                  onChange={this.handleChangeMessage}
                  margin='normal'
                  variant='outlined'
                  className='ContactInputMessage'
                />
                {(!this.state.sent) && (
                  <Tooltip title={this.state.emailErrorMessage}>
                    <Button
                      variant='outlined'
                      size='large'
                      aria-label='Submit'
                      className='Button'
                      onClick={this.MessageSubmit}
                    >
               Submit
                    </Button>
                  </Tooltip>
                )}
                {(this.state.sent) && (
                  <Typography variant='subtitle1' className='Success'>
                    <ReactSVG src={CircleTick} className='ReactSVGIcon Icon25 MarginRight10' />
                  Thank you. We will be in touch shortly
                  </Typography>

                )}
              </div>
            </Grid>
          </Grid>

        </div>

      </div>
    )
  }
}

export default GetStarted
