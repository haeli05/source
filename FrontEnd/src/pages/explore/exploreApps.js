import React, { Component } from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
// Components
import { ShareButton } from '../global/components/majorActionButtons.js'
import AppCard from './components/appCard.js'
import TopicBar from './components/topicBar.js'
// Redux
import { connect } from 'react-redux'
import { fetchUsers } from './../../actions/people.actions'
import { getPeopleStatus, getPeople } from './../../reducers/people.reducer'
import { getUser } from './../../reducers/user.reducer'
// SVG
import ReactSVG from 'react-svg'
import { group } from '../../assets/svg/people.svg'

class ExploreApps extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTab: 0
    }
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange (tabNum) {
    this.setState({ currentTab: tabNum })
  };

  render () {
    return (
      <div className='ExploreApps RootMargins ExplorePage'>
        <div className='PageTitle'>
          <div className='OverlineAndButtons'>
            <Typography variant='overline' className='Hidden'>EXPLORE</Typography>
            <div className='OverlineButtons'>
              <ShareButton {...this.props} url={window.location.href} />
            </div>
          </div>
        
        </div>
        <div className='Body'>
          <div className='Content'>
            <div className='ExploreTabs'>
              <Tabs value={this.state.currentTab} indicatorColor='primary'>
                <Tab label='Related' onClick={() => this.handleTabChange(0)} />
                <Tab label='New' onClick={() => this.handleTabChange(1)} />
                <Tab label='Popular' onClick={() => this.handleTabChange(2)} />
                <Tab label='Organizations' onClick={() => this.handleTabChange(3)} />
              </Tabs>
            </div>
            <div className='AppCards'>
              <AppCard title='QuantStamp' price='$500-$20000' description='Smart Contract Audits' merchant='Quantstamp' url='app/quantstamp' />
              <AppCard image='https://airdrops.io/wp-content/uploads/2018/04/sentinel-logo.jpg' title='Sentinel' price='$5' description='SentinelVPN' merchant='Sentinel' />
              {(this.props.peopleStatus === 'PENDING') && (
                <div className='GenericLinearLoading'>
                  <LinearProgress color='secondary' variant='query' />
                </div>
              )}
              {(this.props.peopleStatus === 'ERROR') && (
                <div>
                  {/*
                  TODO: ADD an error message here
                  */}
                </div>
              )}
              {(this.props.peopleStatus === 'SUCCESS') && (
                <div />
              )}
            </div>
          </div>
          <div className='Sidebar'>
            <div>
              <Button fullWidth variant='contained' color='primary' disabled>+ Sell</Button>
            </div>
            <div className='SidebarTopics'>
              <TopicBar />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // user: getUser(state),
    // people: getPeople(state),
    // peopleStatus: getPeopleStatus(state)
  }
}
export default connect(mapStateToProps)(ExploreApps)
