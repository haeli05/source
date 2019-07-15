import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Material UI
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
// Components
import LoginPrompt from './loginPrompt'
// Redux
import { connect } from 'react-redux'
import { followTag } from './../../../actions/user.actions'

class GlobalChip extends Component {
  constructor (props) {
    super(props)
    this.state = {
      following: false,
      classNames: 'Tag',
      tooltipTitle: 'Follow',
      loginPromptPopUp: false
    }
    this.handleFollow = this.handleFollow.bind(this)
    this.closeLoginPrompt = this.closeLoginPrompt.bind(this)
  }

  componentDidMount () {
    if (this.props.user == undefined) {
      return
    } else if (this.props.user.user !== false && this.props.user.user !== undefined) {
      if (this.props.user.user.tags !== undefined && this.props.user.user.tags !== false) {
        var isFollowing = this.props.user.user.tags.includes(this.props.label)
        if (isFollowing) {
          this.setState({ following: true })
          this.setState({ classNames: 'Tag TagFollowing' })
          this.setState({ tooltipTitle: 'Unfollow' })
        }
      }
    }
  }

  handleFollow () {
    if (this.props.user == undefined) {
      this.setState({ loginPromptPopUp: true })
      return
    } else if (this.props.user.username !== false) {
      this.props.dispatch(followTag(this.props.label))
      this.setState({ following: !this.state.following })
      if (this.state.following) {
        this.setState({ classNames: 'Tag' })
        this.setState({ tooltipTitle: 'Follow' })
      } else {
        this.setState({ classNames: 'Tag TagFollowing' })
        this.setState({ tooltipTitle: 'Unfollow' })
      }
    } else {
      this.setState({ loginPromptPopUp: true })
    }
  }

  closeLoginPrompt () {
    this.setState({ loginPromptPopUp: false })
  }

  render () {
    return (
      <div>
        <LoginPrompt open={this.state.loginPromptPopUp} close={this.closeLoginPrompt} />
        <Tooltip TransitionComponent={Zoom} title={this.state.tooltipTitle} placement='top'>
          <div className={this.state.classNames} onClick={this.handleFollow}>
            <Typography variant='body2' className='TagLabel'>{this.props.label}</Typography>
          </div>
        </Tooltip>
      </div>
    )
  }
}

GlobalChip.defaultProps = {
  label: "undefined"
}

GlobalChip.propTypes = {
  label: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}


export default connect(mapStateToProps)(GlobalChip)
