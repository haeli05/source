// Banner Notifications
import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ReactSVG from 'react-svg'
import Typography from '@material-ui/core/Typography'
import Cross from './../../../assets/svg/cross.svg'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

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
