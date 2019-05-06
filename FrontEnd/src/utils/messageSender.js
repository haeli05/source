//Message sender
class MessageSender {
  constructor (email, message) {
      this.email: email,
      this.message: message,
      this.emailError: false,
      this.emailErrorMessage: '',
      this.sent: false
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
}
