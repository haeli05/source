import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'



export default class Guidelines extends Component {
  constructor (props) {
  }
  render () {
    return (
      <div className="Section">
      <Typography variant='h1'>Guidelines</Typography>

      This document outlines the general rules intended to help

      <Typography variant='h2'>Project management</Typography>
      <Typography variant='body1' paragraph>
      What to do

      </Typography>
      </div>
    )
  }
  }
