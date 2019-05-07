import React, { Component } from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
// MISC
import { Link } from 'react-router-dom'

class LoginPrompt extends Component {
  render () {
    return (
      <Dialog onClose={this.props.close} open={this.props.open}>
        <div className='YouMustBeLoggedInDialog'>
          <Typography variant='h3'>You must be logged in</Typography>
          <div className='MustBeActions'>
            <Button variant='contained' color='primary' component={Link} to='/login'>Login</Button>
            <Typography variant='body1' className='MustBeActionsSeperator'>or</Typography>
            <Button variant='contained' color='primary' component={Link} to='/createaccount'>Register</Button>
          </div>
        </div>
      </Dialog>
    )
  }
}

export default LoginPrompt
