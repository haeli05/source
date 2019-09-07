//@haeli05
//Sidebar to nav.
//Appears when loggedIn
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactPullToRefresh from 'react-pull-to-refresh'
import Drawer from '@material-ui/core/Drawer'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// Components
import NotificationBanner from './NotificationBanner'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

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

class SideBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: this.props.open,
      drawerTab: 0,
    }
    this.handleDrawerTab = this.handleDrawerTab.bind(this)
  }

  handleDrawerTab (index) {
    this.setState({ drawerTab: index })
  }

  toggleDrawer (side, open) {
    this.setState({
      [side]: open
    })
  }

  render () {
    return (
      <Drawer anchor='right' open={this.props.open} onClose={() => this.toggleDrawer('right', false)}>
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
    )
  }
}

export default SideBar
