import React from 'react'
// Material UI
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// Components
import ReactQuillEditor from './reactQuillEditor'
// MISC
import axios from 'axios'
import config from '../../../utils/config.js'

export default class SendFeedback extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      email: '',
      satisfaction: '',
      beneficiaries: '',
      benefit:'',
      improvements:'',
      emailError: false,
      emailErrorText: '',
      sent: false
    }
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.submit = this.submit.bind(this)
  };

  handleFeedbackChange (target, e) {
    let change = {}
    change[target] = e.target.value
    this.setState(change)
  }

  toggleOpen () {
    this.setState({ open: !this.state.open })
    this.setState({ sent: false })
    this.setState({ emailError: false })
    this.setState({ emailErrorText: '' })
  };

  submit (text, stringBody) {
    var feedback = `
1. How would you feel if you could no longer use the product?
${this.state.satisfaction}

2. What type of people do you think would most benefit from Source?
${this.state.beneficiaries}

3. What is the main benefit you receive from Source?
${this.state.benefit}

4. How can we improve Source for you?
${this.state.improvements}

5. Notify us about bugs and give us your suggestions! Help improve Source!
${stringBody}
    `
    if (this.state.email !== '' && this.state.email.includes('@') && this.state.email.includes('.')) {
      axios.post(`${config.production_url}/feedback/`, {
        email: this.state.email,
        feedback: feedback
      })
      this.setState({ sent: true })
    } else {
      this.setState({ emailError: true })
      this.setState({ emailErrorText: 'Must be valid email' })
    }
  };

  render () {
    var value
    return (
      <div className='SendFeedback'>
        <Button className='MainButton' variant='outlined' size='small' onClick={this.toggleOpen}>Feedback</Button>
        {this.state.sent && (
          <Dialog
            open={this.state.open}
            onClose={this.toggleOpen}
            aria-labelledby='form-dialog-title'
            maxWidth='sm'
          >
            <div className='SentSuccessfullyPopUp TextCenter'>
              <DialogTitle>Thank you for your Message</DialogTitle>
              <div className='Action'>
                <Button className='CloseButton' onClick={this.toggleOpen} variant='contained' color='primary'>Close</Button>
              </div>
            </div>
          </Dialog>
        )}
        {!this.state.sent && (
          <Dialog
            open={this.state.open}
            onClose={this.toggleOpen}
            aria-labelledby='form-dialog-title'
            maxWidth='md'
          >
            <div className='FeedbackPopUpForm'>
              <DialogTitle>Bugs & Feedback</DialogTitle>
              <DialogContent>
              <Typography variant='h5'>
                What's Your Email:
              </Typography>
                <TextField
                  id='Email'
                  label='Email'
                  error={this.state.emailError}
                  helperText={this.state.emailErrorText}
                  value={this.state.email}
                  onChange={(event) => { this.handleFeedbackChange('email', event) }}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
                <Typography variant='h5'>
                  1. How would you feel if you could no longer use the product?
                </Typography>
                <RadioGroup
                    aria-label="satisfaction"
                    name="satisfaction"
                    value={this.state.satisfaction}
                    onChange={(event) => { this.handleFeedbackChange('satisfaction', event) }}
                  >
                    <FormControlLabel value="Dont Care" control={<Radio />} label="Don't Care" />
                    <FormControlLabel value="Slightly Dissapointed" control={<Radio />} label="Slightly Dissapointed" />
                    <FormControlLabel value="Very Dissapointed" control={<Radio />} label="Very dissapointed" />
                  </RadioGroup>
                <Typography variant='h5'>
                  2. What type of people do you think would most benefit from Source?
                </Typography>
                <TextField
                  id='Email'
                  label='Who would benefit?'
                  value={this.state.beneficiaries}
                  onChange={(event) => { this.handleFeedbackChange('beneficiaries', event) }}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
                <Typography variant='h5'>
                  3. What is the main benefit you receive from Source?
                </Typography>
                <TextField
                  id='Email'
                  label='Your main benefit'
                  value={this.state.benefit}
                  onChange={(event) => { this.handleFeedbackChange('benefit', event) }}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
                <Typography variant='h5'>
                  4. How can we improve Source for you?
                </Typography>
                <TextField
                  id='improve'
                  label='Improvements'
                  value={this.state.improvements}
                  onChange={(event) => { this.handleFeedbackChange('improvements', event) }}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
                <Typography variant='h5'>
                  5. Notify us about bugs and give us your suggestions! Help improve Source!
                </Typography>
                <ReactQuillEditor placeholder='Please include details of what you were trying to do ...' submit={this.submit} cancel={this.toggleOpen} />
              </DialogContent>
            </div>
          </Dialog>
        )}
      </div>
    )
  }
}
