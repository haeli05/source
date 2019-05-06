// Banner Notifications
import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ReactSVG from 'react-svg'
import WalletCoin from './../../../assets/svg/walletcoin.svg'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Dialog from '@material-ui/core/Dialog'
import Cross from './../../../assets/svg/cross.svg'
import Card from '@material-ui/core/Card'
import Fade from '@material-ui/core/Fade'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Image from './../img/logo.png'

class NotificationCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.dismiss = this.dismiss.bind(this)
  }

  dismiss () {

  }

  render () {
    return (
      <Card >
        <div className='classDetails'>
          <CardContent>
            <div className='Header'>
              <Typography variant='body1'>Work in progress</Typography>
              <IconButton onClick={this.handleClose} className='CloseButton'>
                <ReactSVG src={Cross} className='ReactSVGIcon SmallIcon Cross' />
              </IconButton>
            </div>
            <div>
              <Typography variant='caption'>
                 Notifications coming soon
              </Typography>
              <Typography variant='subtitle2'>
                 Coming soon
                 (Help us out @Source)
              </Typography>
            </div>
          </CardContent>
        </div>
        <CardMedia
          className='Image'
          title='NotificationImage'
        />
      </Card>
    )
  }
}

class NotificationBanner extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      title: (this.props.title) ? this.props.title : 'Error',
      message: (this.props.message) ? this.props.message : 'Unknown Error, please provide feedback'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick () {
    this.setState({ open: true })
  }
  handleClose () {
    this.setState({ open: false })
  }

  render () {
    return (
      <div className='Notifications'>
        <NotificationCard />
      </div>
    )
  }
}

export default NotificationBanner
