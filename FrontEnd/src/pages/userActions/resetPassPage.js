import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import config from './../../utils/config.js';
import history from '../../history';

class ResetPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            newPassword1: '',
            newPassword2: '',
            mismatch: false
        }
    }

    handleChange = (target, evt) => {
        if (target==='password1') {
            this.setState({newPassword1: evt.target.value})
        } else {
            this.setState({newPassword2: evt.target.value})
        }
    }

    handleSubmit = () => {
        if (this.state.newPassword1 === this.state.newPassword2) {
            this.setState({mismatch: false})
            //send post request
            axios.post(`${config.production_url}/api/user/updatepass`, {token: this.props.match.params.token, newPassword: this.state.newPassword1})
            history.push('/login')
        } else {
            this.setState({mismatch: true})
        }
    }

    render() {
        return (
            <div id='resetPassPage' className='LoginPage'>
                <Typography variant="display3">Reset Password</Typography>
                <div className='Form'>
                    <TextField
                        id='password1-input'
                        label='New Password'
                        type='password'
                        value={this.state.newPassword1}
                        onChange={(evt)=>{this.handleChange('password1', evt)}}
                        variant="outlined"
                    />
                    <TextField
                      style={{marginTop:"16px"}}
                        id='password2-input'
                        label='Confirm Password'
                        type='password'
                        value={this.state.newPassword2}
                        onChange={(evt)=>{this.handleChange('password2', evt)}}
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary" className="SubmitButton" onClick={this.handleSubmit}>Submit</Button>
                    {this.state.mismatch ? <Typography variant="caption" className="passwordAlert Recovery">Passwords Do Not Match</Typography> : null }
                </div>
            </div>
        )
    }
}

export default ResetPassword
