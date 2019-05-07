import React from 'react'
// Material UI
import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
// Redux
import { connect } from 'react-redux'
import { closeSnackBar } from './../../../actions/error.actions'
import { getErrorStatus } from './../../../reducers/error.reducer'
// Components
import ReactQuillEditor from './reactQuillEditor'
// MISC
import axios from 'axios'

class SnackBar extends React.Component {
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
    this.handleClose = this.handleClose.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleClose () {
    this.props.dispatch(closeSnackBar())
  }

  handleTextChange (target, e) {
    let change = {}
    change[target] = e.target.value
    this.setState(change)
  }

  toggleOpen () {
    this.props.dispatch(closeSnackBar())
    this.setState({ open: !this.state.open })
    this.setState({ sent: false })
    this.setState({ emailError: false })
    this.setState({ emailErrorText: '' })
  };

  submit (text, stringBody) {
    if (this.state.email !== '' && this.state.email.includes('@') && this.state.email.includes('.')) {
      axios.post('/mail', { email: this.state.email })
      axios.post('/mail2', { email: this.state.email, feedback: text, error: this.props.error.errorData })
      this.setState({ sent: true })
    } else {
      this.setState({ emailError: true })
      this.setState({ emailErrorText: 'Must be valid email' })
    }
  };

  render () {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          open={this.props.error.open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
          message={<span>ERROR: {this.props.error.errorMessage}</span>}
          action={<Button variant='contained' onClick={this.toggleOpen}>send report</Button>}
        />
        {this.state.sent && (
          <Dialog
            open={this.state.open}
            onClose={this.toggleOpen}
            aria-labelledby='form-dialog-title'
            maxWidth='sm'
          >
            <div className='SentSuccessfullyPopUp TextCenter'>
              <DialogTitle>Your error report was submitted! Thank you for helping us improve Source!</DialogTitle>
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
              <DialogTitle>Submit error feedback</DialogTitle>
              <DialogContent>
                <Typography variant='caption'>The full error message will be sent to us but please include any additional details</Typography>
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
                <ReactQuillEditor placeholder='Describe in detail how this error occured ...' submit={this.submit} cancel={this.toggleOpen} />
              </DialogContent>
            </div>
          </Dialog>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: getErrorStatus(state)
  }
}

export default connect(mapStateToProps)(SnackBar)
