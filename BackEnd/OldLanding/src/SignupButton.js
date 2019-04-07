import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';

export default class SignUpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: '',
      subscribed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = () => {
    axios.post('/mail',{
      email:this.state.email
    });
    this.setState({ subscribed: true });
  };

  handleKeyPress(e){
    if(e.key === 'Enter'){
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className="SignUpButtonDiv" style={{width:"45%"}}>
        <Button size="large" variant="outlined" color="inherit" onClick={this.handleClickOpen}>Subscribe</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        {!this.state.subscribed && (
          <div>
            <div className="title">
              <h2 style={{marginLeft:"24px"}}>Sign Up</h2>
            </div>
            <div className="SignUpButtonContent" style={{paddingLeft:"24px", paddingRight:"24px"}}>
              <p>
                Subscribe to be notified as soon as the whitepaper and alpha are available.
              </p>
              <TextField
                id="email-input"
                label="Email"
                fullWidth
                value={this.state.email}
                onChange={this.handleChange}
                onKeyPress={(e)=>{this.handleKeyPress(e)}}
                margin="normal"
              />
            </div>
              <div className="SignUpButtonActions" style={{paddingLeft:"24px", paddingRight:"24px", paddingTop:"10px", display:"flex", justifyContent:"flex-end", paddingBottom:"24px"}}>
                <div className="CancelButton">
                  <Button onClick={this.handleClose} color="secondary" >
                    Cancel
                  </Button>
                </div>
                <Button onClick={this.handleSubmit} color="primary" >
                  Subscribe
                </Button>
              </div>
            </div>
          )}
          {this.state.subscribed && (
            <div className="subscribedSuccessfully" style={{padding:"25px"}}>
              <div className="thanks">
                <h2>Thank you for subscribing to Source!</h2>
              </div>
              <div className="CloseButton" style={{display:"flex", justifyContent:"center"}}>
                <Button onClick={this.handleClose} variant="raised" >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    );
  }
}
