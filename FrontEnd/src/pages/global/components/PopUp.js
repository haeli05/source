// Popup for Beta
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { Icon } from 'react-icons-kit'
import { arrows_remove } from 'react-icons-kit/linea/arrows_remove'

class PopUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      display: true
    }
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose () {
    this.setState({ display: false })
  }
  render () {
    return (
      <div>
        {this.state.display &&
        (<Paper className='PopUp' >
          <div className='Head'>
            <Button variant='fab' mini onClick={this.handleClose} className='CloseButton'>
              <Icon icon={arrows_remove} size={25} />
            </Button>
          </div>
          <Typography variant='h4'>
          We are currently in development.
            <br />
            <br />

          </Typography>
          <Typography variant='subtitle'>
            More features will become available over time.
            <br />
            <br />
          Login and Registration is disabled until database migration completes.
            <br />
            <br />
          Contribute to our development <a href='/#todo'>here.</a>
            <br />
            <br />
          Please report bugs with the Feedback button on the bottom left.
          </Typography>
        </Paper>
        )}
      </div>
    )
  }
}

export default PopUp
