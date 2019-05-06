import React from 'react'
// Material UI
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
// Icon
import Icon from 'react-icons-kit'
import { arrows_hamburger1 } from 'react-icons-kit/linea/arrows_hamburger1'
import { ecommerce_wallet } from 'react-icons-kit/linea/ecommerce_wallet'
import { basic_lightbulb } from 'react-icons-kit/linea/basic_lightbulb'
import { basic_gear } from 'react-icons-kit/linea/basic_gear'
import { arrows_plus } from 'react-icons-kit/linea/arrows_plus'
import { basic_notebook } from 'react-icons-kit/linea/basic_notebook'
import { arrows_remove } from 'react-icons-kit/linea/arrows_remove'
import { arrows_exclamation } from 'react-icons-kit/linea/arrows_exclamation'
import { basic_message } from 'react-icons-kit/linea/basic_message'
import { music_bell } from 'react-icons-kit/linea/music_bell'
// Redux
import { connect } from 'react-redux'
import { getUser } from './../../../reducers/user.reducer'
import { signOut } from './../../../actions/user.actions'
import { chatSignOut } from './../../../actions/chat.actions.js'
// Components
import JoinQueueButton from './joinQueue'
import Search from './search.js'
import NotificationBanner from './NotificationBanner'
import MessageBanner from './../../messages/components/messageBanner.js'
import ChatPopUp from './../../messages/components/chatPopUp'
// MISC
import logo from './../img/logo.png'
import ReactPullToRefresh from 'react-pull-to-refresh'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

{ /*
//livechat
import {ChatList} from '@livechat/ui-kit';
import {ChatListItem} from '@livechat/ui-kit';
import {Column} from '@livechat/ui-kit';
import {Row} from '@livechat/ui-kit';
import {Title} from '@livechat/ui-kit';
import {Subtitle} from '@livechat/ui-kit';
*/ }

class MenuAppBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false,
      token: undefined,
      currentTab: this.initiateCurrentPosition(),
      drawer: false,
      truth: JSON.parse(sessionStorage.getItem('alpha')),
      hideNav: false,
      prevYOffset: 0,
      navbar: 'Navbar',
      drawerTab: 0,
      positionChecked: false,
      notifications: 0,
      chatDrawers: []
    }
    this.llogout = this.llogout.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.handleDrawerTab = this.handleDrawerTab.bind(this)
    this.hideNav = this.hideNav.bind(this)
    this.showNav = this.showNav.bind(this)
    this.listenScrollEvent = this.listenScrollEvent.bind(this)
    this.checkPosition = this.checkPosition.bind(this)
    this.initiateCurrentPosition = this.initiateCurrentPosition.bind(this)
    this.goToRoom = this.goToRoom.bind(this)
    this.handlePullRefresh = this.handlePullRefresh.bind(this)
    this.props.history.listen((location, action) => {
      this.checkPosition()
    })
  };

  handleDrawerTab (index) {
    this.setState({ drawerTab: index })
  }

  toggleDrawer (side, open) {
    this.setState({
      [side]: open
    })
  }

  handleLogout () {
    this.setState({ token: false })
  };

  llogout () {
    window.location = `/`
    this.props.dispatch(signOut())
    this.props.dispatch(chatSignOut())
  }

  checkLoggedIn () {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user === null || user === undefined) {
      this.setState({ token: false })
    } else {
      this.setState({ token: user.authToken })
    }
  }

  handleTabChange (tabNum) {
    this.setState({ currentTab: tabNum })
  };

  hideNav () {
    this.setState({ hideNav: true })
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  showNav () {
    this.setState({ hideNav: false })
    this.setState({ navbar: 'Navbar' })
    window.removeEventListener('scroll', this.listenScrollEvent)
  }

  listenScrollEvent () {
    if (this.state.prevYOffset < window.pageYOffset && this.state.navbar === 'Navbar') {
      this.setState({ navbar: 'NavbarHidden' })
      this.setState({ prevYOffset: window.pageYOffset })
    } else if (this.state.prevYOffset >= window.pageYOffset && this.state.navbar === 'NavbarHidden') {
      this.setState({ navbar: 'Navbar' })
      this.setState({ prevYOffset: window.pageYOffset })
    } else {
      this.setState({ prevYOffset: window.pageYOffset })
    }
  }

  checkPosition () {
    if (window.location.href.includes('explore/ideas') || window.location.href.includes('/idea/') || window.location.href.includes('/newidea')) {
      this.setState({ currentTab: 0 })
    } else if (window.location.href.includes('explore/projects') || window.location.href.includes('/project/') || window.location.href.includes('/newproject')) {
      this.setState({ currentTab: 1 })
    } else if (window.location.href.includes('explore/people') || window.location.href.includes('/profile') || window.location.href.includes('/login') || window.location.href.includes('/createaccount')) {
      this.setState({ currentTab: 2 })
    } else if (window.location.href.includes('explore/apps')) {
      this.setState({ currentTab: 3 })
    } else { this.setState({ currentTab: -1 }) }
  }

  initiateCurrentPosition () {
    if (window.location.href.includes('explore/ideas') || window.location.href.includes('/idea/') || window.location.href.includes('/newidea')) {
      return 0
    } else if (window.location.href.includes('explore/projects') || window.location.href.includes('/project/') || window.location.href.includes('/newproject')) {
      return 1
    } else if (window.location.href.includes('explore/people') || window.location.href.includes('/profile') || window.location.href.includes('/login') || window.location.href.includes('/createaccount')) {
      return 2
    } else if (window.location.href.includes('explore/apps')) {
      return 3
    }
  }

  handlePullRefresh () {

  }

  goToRoom (username, roomId) {
    if (roomId) window.location = `/${username}/messages/${roomId}`
    else window.location = `/${username}/messages/_`
  }

  render () {
    const { classes } = this.props
    if (this.props.history.location.pathname === '/' && this.state.hideNav === false) {
      this.hideNav()
    } else if (this.props.history.location.pathname === '/' && this.state.hideNav === true) {
    } else if (this.state.hideNav === true) { this.showNav() }
    if (this.props.logout) return <Redirect to='/' />
    return (
      <div>
        <div className={this.state.navbar}>
          <AppBar className='AppBar' position='static' elevation={3}>
            <Toolbar>
              <div className='Logo'>
                <Link to='/' className='NavbarTitle'>
                  <img className='LogoImage' src={logo} alt='source' />
                </Link>
              </div>
              <div className='Tabs'>
                <Tabs value={this.state.currentTab}>
                  <Tab label='Ideas' component={Link} to='/explore/ideas' onClick={() => this.handleTabChange(0)} />
                  <Tab label='Projects' component={Link} to='/explore/projects' onClick={() => this.handleTabChange(1)} />
                  <Tab label='People' component={Link} to='/explore/people' onClick={() => this.handleTabChange(2)} />
                  <Tab label='Apps' style={{ display: 'none' }} component={Link} to='/explore/apps' onClick={() => this.handleTabChange(3)} />
                </Tabs>
              </div>
              <Search {...this.props} />
              <div className='Right'>
                {(this.props.token !== false && this.props.token !== undefined) && (
                  <div>
                    <IconButton onClick={() => this.toggleDrawer('right', true)}>
                      {(this.state.notifications !== 0) &&
                      <Badge badgeContent={this.state.notifications} color='error'>
                        <Icon icon={arrows_hamburger1} size={25} color='inherit' />
                      </Badge>
                      }
                      {(this.state.notifications === 0) &&
                      <Icon icon={arrows_hamburger1} size={25} color='inherit' />
                      }
                    </IconButton>
                    <Drawer anchor='right' open={this.state.right} onClose={() => this.toggleDrawer('right', false)}>
                      <div
                        className='DrawerRight'
                        tabIndex={0}
                        role='button'
                        onKeyDown={() => this.toggleDrawer('right', false)}
                      >
                        <div className='DrawerRight'>
                          <div className='ProfileSection'>
                            <Avatar className='Avatar' component={Link} to={`/${this.props.user.id}/profile`}>{this.props.username[0]}</Avatar>
                            <div className='UserInfo'>
                              <Typography variant='title' className='Username' component={Link} to={`/${this.props.user.id}/profile`}>{this.props.username}</Typography>
                            </div>
                          </div>
                          <div className='QuickControlls'>
                            <Button variant='fab' className='MainButton' onClick={() => this.handleDrawerTab(0)}><Icon icon={music_bell} size={20} /></Button>
                            <Button variant='fab' className='MainButton' onClick={() => this.handleDrawerTab(1)}><Icon icon={basic_message} size={20} /></Button>
                            <Button variant='fab' className='MainButton' onClick={() => this.handleDrawerTab(2)}><Icon icon={basic_gear} size={20} /></Button>
                          </div>
                          <Divider />
                          {(this.state.drawerTab === 0) &&
                            <ReactPullToRefresh
                              onRefresh={this.handlePullRefresh}
                            >
                              <NotificationBanner {...this.props} />
                            </ReactPullToRefresh>
                          }
                          {(this.state.drawerTab === 1) &&
                          <ReactPullToRefresh
                            onRefresh={this.handlePullRefresh}
                          />
                          }
                          {(this.state.drawerTab === 2) && <div className='Settings'>

                            <List component='nav'>

                              <ListItem button disabled>
                                <ListItemIcon>
                                  <Icon icon={basic_notebook} size={25} />
                                </ListItemIcon>
                                <ListItemText primary='Projects' />
                              </ListItem>
                              <ListItem button disabled>
                                <ListItemIcon>
                                  <Icon icon={arrows_exclamation} size={25} />
                                </ListItemIcon>
                                <ListItemText primary='Groups' />
                              </ListItem>
                              <ListItem button component={Link} to={`/${this.props.username}/wallet`}>
                                <ListItemIcon>
                                  <Icon icon={ecommerce_wallet} size={25} />
                                </ListItemIcon>
                                <ListItemText primary='Wallet' />
                              </ListItem>
                              <ListItem button disabled>
                                <ListItemIcon>
                                  <Icon icon={basic_gear} size={25} />
                                </ListItemIcon>
                                <ListItemText primary='Account Settings' />
                              </ListItem>
                              <ListItem button onClick={this.llogout}>
                                <ListItemIcon>
                                  <Icon icon={arrows_remove} size={25} />
                                </ListItemIcon>
                                <ListItemText primary='Logout' />
                              </ListItem>
                            </List>
                          </div>}
                        </div>
                      </div>
                    </Drawer>
                  </div>
                )}
                {(this.props.token === false || this.props.token === undefined) && (
                  <div className='Actions'>
                    <Button className='NavbarButton' component={Link} to={{ pathname: '/login', state: { from: window.location.pathname } }}>Login</Button>
                    <Button className='NavbarButton' component={Link} to='/createaccount'>Register</Button>
                  </div>
                )}
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.signedInUser.token,
    username: state.user.signedInUser.username,
    logout: state.user.signOutStatus,
    chat: state.chat.client.matrix,
    user: getUser(state)
  }
}

export default connect(mapStateToProps)(MenuAppBar)
