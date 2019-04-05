import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

export default class JoinQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: '',
      emailError: false,
      emailErrorText: "",
      subscribed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
    this.handleClickOpen=this.handleClickOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
  };

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  handleChange(e) {
    this.setState({ email: e.target.value });
  };

  handleSubmit() {
    if (this.state.email.includes("@") && this.state.email.includes(".")) {
      axios.post('/mail',{
        email:this.state.email
      });
      this.setState({ subscribed: true });
      this.setState({emailError:false})
      this.setState({emailErrorText:""})
      this.setState({email:""})
    } else {
      this.setState({emailError:true})
      this.setState({emailErrorText:"Must be valid email"})
    }
  };

  handleKeyPress(e){
    if(e.key === 'Enter'){
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className="JoinQueue">
        <Button variant="contained" color="primary" size="large" onClick={this.handleClickOpen}>Join Queue</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        {!this.state.subscribed && (
          <div className="JoinQueuePopUp">
            <div className="Title">
              <Typography variant="display3">Join Queue</Typography>
            </div>
            <div className="Body">
              <Typography variant="body1">Join the queue to create an account once sign ups are open!</Typography>
              <TextField
                id="email-input"
                label="Email"
                fullWidth
                error={this.state.emailError}
                helperText={this.state.emailErrorText}
                value={this.state.email}
                onChange={this.handleChange}
                onKeyPress={(e)=>{this.handleKeyPress(e)}}
                margin="normal"
                variant="outlined"
              />
            </div>
              <div className="Actions">
                <div className="CancelButton">
                  <Button onClick={this.handleClose} color="secondary">Cancel</Button>
                </div>
                <Button onClick={this.handleSubmit} color="primary" >Subscribe</Button>
              </div>
            </div>
          )}
          {this.state.subscribed && (
            <div className="SuccessPopUp">
              <div className="Thanks">
                <Typography variant="display2">Thank you for joining the queue!</Typography>
              </div>
              <div className="CloseButton">
                <Button onClick={this.handleClose} variant="contained" color="primary">Close</Button>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    );
  }
}
