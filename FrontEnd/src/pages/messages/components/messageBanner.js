// MessageBanner for Navbar
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
import Avatar from '@material-ui/core/Avatar'
import Cross from './../../../assets/svg/cross.svg'
import Card from '@material-ui/core/Card'
import Fade from '@material-ui/core/Fade'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

class MessagesCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
  }

  render () {
    return (
      <div onClick={() => { this.props.goToRoom(this.props.user, this.props.id) }}>
        <div className='MessagesBanner'>
          <Avatar className='MessagesAvatar'>image</Avatar>

          <div className='Header'>
            <Typography variant='subtitle2'>
              {this.props.roomName}
            </Typography>
            <IconButton onClick={this.handleClose} className='CloseButton'>
              <ReactSVG src={Cross} className='ReactSVGIcon SmallIcon Cross' />
            </IconButton>
          </div>
          <div>
            <Typography variant='body2'>
          Latest:
            </Typography>
          </div>

        </div>
      </div>
    )
  }
}

class MessagesCardError extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
  }

  render () {
    return (
      <Card >
        <div className='classDetails'>
          <CardContent>
            <div>
              <Typography variant='title'>
                {this.props.error}
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }
}

class MessageBanner extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      title: (this.props.title) ? this.props.title : 'Error',
      message: (this.props.message) ? this.props.message : 'Unknown Error, please provide feedback',
      rooms: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount () {
    if (this.props.matrix !== undefined && this.props.matrix !== false) this.setState({ rooms: this.props.matrix.getRooms() })
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
        { this.state.rooms !== false && (

          this.state.rooms.map(room => {
            return <MessagesCard className='MessagesCard'
              key={room.summary.roomId} roomName={room.name}
              goToRoom={this.props.goToRoom} id={room.summary.roomId}
              user={this.props.user}
            />
          })

        )}
        {
          (this.state.rooms !== false && this.state.rooms.length === 0) && (
            <MessagesCardError error="You're not part of any rooms. Join rooms by clicking on the Messages Button!" />
          )
        }
        {
          this.state.rooms === false && (
            <MessagesCardError error='Error Getting rooms please refresh page to view rooms' />
          )
        }
      </div>
    )
  }
}

export default MessageBanner
