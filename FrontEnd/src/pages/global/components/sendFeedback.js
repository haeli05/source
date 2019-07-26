import React from 'react'
// Material UI
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
// Components
import ReactQuillEditor from './reactQuillEditor'
// MISC
import axios from 'axios'

export default class SendFeedback extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      email: '',
      emailError: false,
      emailErrorText: '',
      feedback: '',
      sent: false
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.submit = this.submit.bind(this)
  };

  handleTextChange (target, e) {
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
    if (this.state.email !== '' && this.state.email.includes('@') && this.state.email.includes('.')) {
      axios.post('/mail', { email: this.state.email })
      axios.post('/mail2', { email: this.state.email, feedback: text })
      this.setState({ sent: true })
    } else {
      this.setState({ emailError: true })
      this.setState({ emailErrorText: 'Must be valid email' })
    }
  };

  render () {
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
                1. How would you feel if you could no longer use the product?
                </Typography>
                <Typography variant='h5'>
                2. What type of people do you think would most benefit from Source?
                </Typography>
                <Typography variant='h5'>
                3. What is the main benefit you receive from Superhuman?
                </Typography>
                <Typography variant='h5'>
                4. How can we improve Superhuman for you?
                </Typography>
                <Typography variant='caption'>Notify us about bugs and give us your suggestions! Help improve Source!</Typography>
                <TextField
                  id='Email'
                  label='Email'
                  error={this.state.emailError}
                  helperText={this.state.emailErrorText}
                  value={this.state.email}
                  onChange={(event) => { this.handleTextChange('email', event) }}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
                <ReactQuillEditor placeholder='Please include details of what you were trying to do ...' submit={this.submit} cancel={this.toggleOpen} />
              </DialogContent>
            </div>
          </Dialog>
        )}
      </div>
    )
  }
}
