import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import config from './../../utils/config.js';

class RequestNewPass extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            isSent: false
        }
    }

    handleChange = (evt) => {
        this.setState({email: evt.target.value})
    }

    handleSubmit = () => {
        this.setState({isSent: true})
        axios.post(`${config.production_url}/api/user/resetpass`, {email: this.state.email});
    }

    render() {
        return (
            <div id='requestNewPassPage' className='LoginPage'>
                <Typography variant="display3">Reset Password</Typography>
                <div className='Form'>
                    <TextField
                        id='email-input'
                        label='Email Address'
                        value={this.state.email}
                        onChange={(evt)=>{this.handleChange(evt)}}
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary" className="SubmitButton" onClick={this.handleSubmit}>Submit</Button>
                    {this.state.isSent ? <Typography variant="caption" className="ResetEmailSent Recovery">Check your email for instructions to update your password and access your account.</Typography> : null }
                </div>
            </div>
        )
    }
}

export default RequestNewPass
