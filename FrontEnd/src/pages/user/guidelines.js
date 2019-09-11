import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'



export default class Guidelines extends Component {
  constructor (props) {
  }
  render () {
    return (
      <div className="Section">
      <Typography variant='h1'>Guidelines</Typography>

      source connects developers to projects and tasks. We work best when both parties can collaborate productively.<br />
      This document outlines the general guidelines intended to help projects and developers work together effectively, and resolve conflicts should they arise.
      <br /><br />

      <Typography variant="h4">For Project Managers:</Typography>
      1. Specify the scope of tasks, and rewards associated clearly
      2. Respond to interested parties clearly. Be respectful of their time.
      3. Follow up on work in progress to clarify performative standards that need to be met


      <Typography variant="h4">For Developers:</Typography>
      1. Discuss the scope of your work with the project manager
      2. Start your own branch and complete the task while meeting performative standards agreed upon prior
      3. Submit a Pull Request when finished


      <Typography variant="h3">Dispute Resolution</Typography>
      We generally side with the project if the issue is one of quality. (Doesn't compile, poor documentation etc.)
      <br />
      <br />

      <Typography variant="subtitle1">Interested in contributing to our development? Look up our TODOs and reach out to us directly.</Typography>

      <Typography variant="h4">Contact</Typography>
      Twitter: @source_platform
      <br />
      Email: source@sourcenetwork.io
      <br />
      Telegram: https://t.me/joinchat/EbiqAxL2g2baSz4fulFeHg
    )
  }
  }
