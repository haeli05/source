import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';


export default class Guidelines extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="StdSection">
        <Typography variant='overline'>DOCUMENTATION</Typography>
        <Typography variant='h1'>source</Typography>
        <Typography variant='subtitle'>GUIDELINES</Typography>
        <br /> <br />
        We work best when developers and project managers can collaborate productively.
        <br />
        This document outlines the general guidelines intended to help projects and developers work together effectively, and resolve conflicts should they arise.
        <br /><br />
        <br /><br />
        <Typography variant='h3'>Contribution Guidelines</Typography>
        <br />
        <Typography variant="h4">For Project Managers:</Typography>
        1. Specify the scope of tasks, and rewards associated clearly<br />
        2. Respond to interested parties clearly. Be respectful of their time.<br />
        3. Follow up on work in progress to clarify performative standards that need to be met
        <br /><br />

        <Typography variant="h4">For Developers:</Typography>
        1. Discuss the scope of your work with the project manager<br />
        2. Start your own branch and complete the task while meeting performative standards agreed upon prior<br />
        3. Submit a Pull Request when finished
        <br /><br />
        <br /><br />

        <Typography variant="h3">Dispute Resolution</Typography>
        We generally side with the project if the issue is one of quality. (Doesn't compile, poor documentation etc.)
        <br />
        <br />
        <br />
        <br />

        <Typography variant="subtitle2">
        Interested in contributing to our development? Look up our TODOs and reach out to us directly.
        </Typography>
        <br />
        <br />
        <Typography variant="overline">Contact</Typography>

        Twitter:<Link href={"https://www.twitter.com/source_platform"} color="inherit" variant="body2">@source_platform</Link>
        <br />
        Email: <Link href={"mailto:source@sourcenetwork.io"} color="inherit" variant="body2">source@sourcenetwork.io</Link>
        <br />
        Telegram: <Link href={"https://t.me/joinchat/EbiqAxL2g2baSz4fulFeHg"} color="inherit" variant="body2">https://t.me/joinchat/EbiqAxL2g2baSz4fulFeHg</Link>
      </div>
    )
  }
  }
