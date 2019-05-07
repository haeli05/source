import React from 'react'
// Material UI
import Button from '@material-ui/core/Button'
import DoneIcon from '@material-ui/icons/Done'
import AddIcon from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import Popper from '@material-ui/core/Popper'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
// SVG
import ReactSVG from 'react-svg'
import Minus from './../../../assets/svg/minus.svg'
import Share from './../../../assets/svg/share.svg'
import Messages from './../../../assets/svg/messages.svg'
import WalletCoin from './../../../assets/svg/walletcoin.svg'
import Bin from './../../../assets/svg/bin.svg'
// Icons
import { Icon } from 'react-icons-kit'
import { arrows_remove } from 'react-icons-kit/linea/arrows_remove'
// Components
import PayButton from './../../payments/payButton'
import LoginPrompt from './loginPrompt.js'
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  VKShareButton,
  RedditShareButton,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  VKIcon,
  RedditIcon
} from 'react-share'
// Redux
import { connect } from 'react-redux'
import { followPerson, followTopic } from './../../../actions/user.actions'
import { getFollowPersonId, getFollowPersonStatus } from './../../../reducers/user.reducer'

/* ============================= Follow Button ============================= */

class FollowButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      following: (this.props.user.user === false) ? false : this.props.user.user.following.includes(this.props.id),
      hovering: false,
      loginPromptPopUp: false,
      updated: false
    }
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.handleFollowClick = this.handleFollowClick.bind(this)
    this.renderFollowing = this.renderFollowing.bind(this)
    this.closeLoginPrompt = this.closeLoginPrompt.bind(this)
  }

  componentDidUpdate () {
    if (this.props.followPersonStatus === 'ERROR' && !this.state.updated) {
      this.setState({ following: !this.state.following })
      this.setState({ updated: true })
    }
  }

  mouseEnter () {
    if (!this.state.hovering) {
      this.setState({ hovering: true })
    }
  }

  mouseLeave () {
    if (this.state.hovering) {
      this.setState({ hovering: false })
    }
  }

  handleFollowClick () {
    if (this.props.user.username !== false && this.props.user.username !== undefined) {
      if (this.props.type === 'person') {
        this.props.dispatch(followPerson(this.props.id))
        this.setState({ following: !this.state.following })
        this.setState({ updated: false })
      } else if (this.props.type === 'idea' || this.props.type === 'issue' || this.props.type === 'project') {
        this.props.dispatch(followTopic(this.props.id, this.props.type))
        this.setState({ following: !this.state.following })
        this.setState({ updated: false })
      }
    } else {
      this.setState({ loginPromptPopUp: true })
    }
  }

  closeLoginPrompt () {
    this.setState({ loginPromptPopUp: false })
  }

  renderFollowing () {
    if (this.state.following) {
      if (this.state.hovering) {
        return (<ReactSVG src={Minus} className='ReactSVGIcon Minus' />)
      } else {
        return (<DoneIcon />)
      }
    } else {
      return (<AddIcon />)
    }
  }

  render () {
    return (
      <div className='FollowButton'>
        <LoginPrompt open={this.state.loginPromptPopUp} close={this.closeLoginPrompt} />
        <Button className='FollowButtonItself' variant='fab' mini onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.handleFollowClick}>
          {this.renderFollowing()}
        </Button>
      </div>
    )
  }
}

export { FollowButton }

/* ============================= Support Button ============================= */

class SupportButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleSupport = this.toggleSupport.bind(this)
  }

  toggleSupport () {
    this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <div className='SupportButton'>
        <Button variant='fab' mini onClick={this.toggleSupport}>
          <ReactSVG src={WalletCoin} className='ReactSVGIcon WalletCoin' />
        </Button>
        <Dialog onClose={this.toggleSupport} open={this.state.open} maxWidth='sm'>
          <div className='SupportDialog'>
            <div className='SupportDialogHeader'>
              <Typography variant='headline'>Support {this.props.title}:</Typography>
              <Button variant='fab' mini onClick={this.toggleSupport} className='CloseButton'>
                <Icon icon={arrows_remove} size={20} />
              </Button>
            </div>
            <div className='SupportDialogBody'>
              <PayButton {...this.props} />
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

export { SupportButton }

/* ============================= Message Button ============================= */

class MessageButton extends React.Component {
  render () {
    return (
      <div className='MessageButton' onClick={this.props.goToRoom}>
        <Button variant='fab' className='MessageButton' mini>
          <ReactSVG src={Messages} className='ReactSVGIcon Messages' />
        </Button>
      </div>
    )
  }
}

export { MessageButton }

/* ============================== Share Button ============================== */

class ShareButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      title: (this.props.title !== undefined) ? this.props.title : 'Source | Build Something Great',
      url: (this.props.url !== undefined) ? this.props.url : window.location.href
    }
    this.handleClick = this.handleClick.bind(this)
    this.getShareButtonClassName = this.getShareButtonClassName.bind(this)
  }

  handleClick () {
    this.setState({ open: !this.state.open })
  }

  getShareButtonClassName () {
    if (this.props.mini === true) {
      return 'ShareButtonMini'
    } else {
      return 'ShareButton'
    }
  }

  render () {
    return (
      <div className={this.getShareButtonClassName()}>
        {!this.state.open && (
          <Button variant='fab' className='MainButton' mini onClick={this.handleClick}>
            <ReactSVG src={Share} className='ShareIcon' />
          </Button>
        )}
        {this.state.open && (
          <Button variant='fab' className='MainButton' mini onClick={this.handleClick}><Icon icon={arrows_remove} size={20} /></Button>
        )}
        {this.state.open && (
          <ClickAwayListener onClickAway={this.handleClick}>
            <Grow in={this.state.open}>
              <Paper className='ShareIcons' elevation={0}>
                <FacebookShareButton className='SocialButtonLast' url={this.state.url} quote={this.state.title} hashtag='Source'><FacebookIcon round size={32} /></FacebookShareButton>
                <TwitterShareButton className='SocialButton' url={this.state.url} title={this.state.title} via='Source_platform' hashtags={['Source']}><TwitterIcon round size={32} /></TwitterShareButton>
                <LinkedinShareButton className='SocialButton' url={this.state.url} title={this.state.title} ><LinkedinIcon round size={32} /></LinkedinShareButton>
                <TelegramShareButton className='SocialButton' url={this.state.url} title={this.state.title}><TelegramIcon round size={32} /></TelegramShareButton>
                <VKShareButton className='SocialButton' url={this.state.url} title={this.state.title}><VKIcon round size={32} /></VKShareButton>
                <RedditShareButton className='SocialButton' url={this.state.url} title={this.state.title}><RedditIcon round size={32} /></RedditShareButton>
                <WhatsappShareButton className='SocialButton' url={this.state.url} title={this.state.title}><WhatsappIcon round size={32} /></WhatsappShareButton>
                <EmailShareButton className='SocialButton' url={this.state.url} subject={this.state.title}><EmailIcon round size={32} /></EmailShareButton>
              </Paper>
            </Grow>
          </ClickAwayListener>
        )}
      </div>
    )
  }
}

export { ShareButton }

/* ============================= Delete Button ============================= */

class DeleteButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.confirmDelete = this.confirmDelete.bind(this)
  }

  toggleOpen () {
    this.setState({ open: !this.state.open })
  }

  confirmDelete () {
    if (this.props.delete !== undefined) {
      this.props.delete()
    }
  }

  render () {
    if (this.props.mini === true) {
      return (
        <div className='DeleteButtonMini'>
          <Button
            buttonRef={node => {
              this.anchorEl = node
            }}
            variant='fab'
            mini
            className='DeleteButton'
            onClick={this.toggleOpen}
          >
            <ReactSVG src={Bin} className='ReactSVGIcon BinIcon' />
          </Button>
          <Popper open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id='menu-list-grow'
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper elevation={0} className='DeleteConfirmationMenu'>
                  <ClickAwayListener onClickAway={this.toggleOpen}>
                    <MenuList>
                      <MenuItem onClick={this.confirmDelete} style={{ color: 'white' }}>Confirm Delete</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      )
    }
    return (
      <div className='DeleteButtonRoot'>
        <Button
          buttonRef={node => {
            this.anchorEl = node
          }}
          variant='fab'
          mini
          className='DeleteButton'
          onClick={this.toggleOpen}
        >
          <ReactSVG src={Bin} className='ReactSVGIcon BinIcon' />
        </Button>
        <Popper open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id='menu-list-grow'
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper elevation={0} className='DeleteConfirmationMenu'>
                <ClickAwayListener onClickAway={this.toggleOpen}>
                  <MenuList>
                    <MenuItem onClick={this.confirmDelete} style={{ color: 'white' }}>Confirm Delete</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    )
  }
}

export { DeleteButton }

class MajorActionButtons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orientation: (this.props.orientation === 'horizontal') ? 'MajorActionButtonsHorizontal' : 'MajorActionButtonsVertical'
    }
  }
  render () {
    if (this.props.user.id !== this.props.id) {
      return (
        <div className={this.state.orientation}>
          <div className='MajorActionButtonDiv'>
            <FollowButton {...this.props} id={this.props.id} type={this.props.type} />
          </div>
          <div className='MajorActionButtonDiv'>
            <SupportButton {...this.props} />
          </div>
          <div className='MajorActionButtonDiv'>
            <MessageButton {...this.props} goToRoom={this.props.goToRoom} />
          </div>
          <div className='MajorActionButtonDiv'>
            <ShareButton {...this.props} title={this.props.title} url={this.props.url} />
          </div>
        </div>
      )
    } else {
      return (
        <div className={this.state.orientation}>
          <div className='MajorActionButtonDiv'>
            <ShareButton {...this.props} title={this.props.title} url={this.props.url} />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    followPersonID: getFollowPersonId(state),
    followPersonStatus: getFollowPersonStatus(state)
  }
}

export default connect(mapStateToProps)(MajorActionButtons)
