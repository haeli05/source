import React, { Component } from 'react'
// Material UI
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Tooltip from '@material-ui/core/Tooltip'
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'
// Icons
import Icon from 'react-icons-kit'
import { ecommerce_money } from 'react-icons-kit/linea/ecommerce_money'
import { arrows_question } from 'react-icons-kit/linea/arrows_question'
import { basic_settings } from 'react-icons-kit/linea/basic_settings'
// SVG
import ReactSVG from 'react-svg'
import circlebrackets from './../../assets/svg/circlebrackets.svg'
import forks from './../../assets/svg/forks.svg'
// Components
import EmptyRepoMessage from './components/emptyRepoMessage'
import TabAbout from './components/tabAbout'
import TabFiles from './components/tabFiles'
import TabIssues from './components/tabIssues'
import TabTasks from './components/tabTasks'
import TabMergeRequests from './components/tabMergeRequests'
import TabContracts from './components/tabContracts'
import SettingsButton from './../global/components/settingsButton'
import ErrorPage from './../global/errorPage'
import VoteButtons from './../global/components/voteButtons'
import MajorActionButtons from './../global/components/majorActionButtons'
// Redux
import { connect } from 'react-redux'
import {
  fetchRepo,
  fetchFile,
  fetchCommits,
  starProject,
  fetchBalance } from './../../actions/repo.actions'
import {
  getRepo,
  getRepoStatus,
  getFile,
  getFileStatus,
  getCommits,
  getCommitsStatus,
  getStarStatus,
  getBalance,
  getBalanceStatus } from './../../reducers/repo.reducer'
import { getUser } from './../../reducers/user.reducer'
// MISC
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'

// import Eos from 'eosjs';
let eosConfig = {
  httpEndpoint: 'http://ec2-34-227-77-165.compute-1.amazonaws.com:8888'
}

// let eos = Eos(eosConfig);

// eslint-disable-next-line
// const e = async (repo) => {return await eos.getTableRows(true,repo,repo,"metatable")
//   .then(rows=>{return rows.rows}).catch(err=>{
//     return [{running_balance:0}]
//   })
// }

class RepoPage extends Component {
  constructor (props) {
    super(props)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.identifyReadMe = this.identifyReadMe.bind(this)
    this.handleStar = this.handleStar.bind(this)
    this.setIssueCount = this.setIssueCount.bind(this)
    this.props.dispatch(fetchRepo(this.props.match.params.user, this.props.match.params.projectID, 'VOID'))
    this.goToRoom = this.goToRoom.bind(this)
    this.state = {
      value: 1,
      readmeID: null,
      issueCount: undefined
    }
  }

  handleTabChange (event, value) {
    this.setState({ value })
  };

  identifyReadMe () {
    if (this.props.repo.tree !== 'no tree' && this.props.repo.tree !== undefined) {
      let readme = this.props.repo.tree.find((file) => { return file.name.toLowerCase() === 'readme.md' })
      if (readme !== undefined) {
        this.setState({ readmeID: readme.oid })
        this.props.dispatch(fetchFile(this.props.repo.proj._id, readme.oid))
      }
    }
  }

  handleStar (e) {
    e.preventDefault()
    if (this.props.user.token === false || this.props.user.token === undefined) {
      alert('Please sign in or sign up to star a repository')
    } else {
      // this.props.dispatch(starHandle(this.props.id,this.props.user.token,this.props.cid));
    }
  }

  setIssueCount (count) {
    this.setState({ issueCount: count })
  }

  goToRoom () {
    let chat = this.props.repo.proj.chat_url
    if (this.props.repo !== false && chat !== undefined) window.location = `/guest/messages/${chat}`
    else return
  }

  render () {
    if (this.props.repoStatus === 'ERROR') { return (<ErrorPage history={this.props.history} />) }
    if (this.props.repoStatus === 'SUCCESS') {
      // if (this.props.balanceStatus===undefined) {this.props.dispatch(fetchBalance(this.props.match.params.projectID))}
      if (this.state.readmeID === null) { this.identifyReadMe() }
      if (this.props.readmeStatus === undefined && this.props.repo.tree !== 'no tree') { this.identifyReadMe() } else {
        return (
          <div className='RepoPage RootMargins'>
            <div className='PageTitle'>
              <div className='OverlineAndButtons'>
                <Typography variant='overline'>PROJECT by {this.props.match.params.user}</Typography>
                <div className='OverlineButtons'>
                  {this.props.user.id === this.props.repo.proj.creator._id && (
                    <div className='SingleOverlineButtonDiv'>
                      <SettingsButton type='project' {...this.props} />
                    </div>
                  )}
                  <MajorActionButtons {...this.props} goToRoom={this.goToRoom} title={this.props.repo.proj.project_name} url={window.location.href} />
                </div>
              </div>
              <Typography variant='h2'>{this.props.repo.proj.project_name}</Typography>
              <div className='VoteButtonsDiv'>
                <VoteButtons id={this.props.repo.proj._id} votes={this.props.repo.upvotes} user={this.props.user} type='project' />
              </div>
            </div>
            {this.props.repo.tree === 'no tree' && (
              <div className='Tabs'>
                <AppBar position='static' elevation={0} color='primary'>
                  <Tabs value={this.state.value} onChange={this.handleTabChange} fullWidth indicatorColor='primary'>
                    <Tab label='About' />
                    <Tab label='Files' />
                    <Tab label='Issues' />
                    <Tab label='Wiki' />
                    <Tab label='Merge Requests' />
                  </Tabs>
                </AppBar>
                <SwipeableViews index={this.state.value} onChangeIndex={this.handleTabChange} animateHeight>
                  <TabAbout issueCount={this.state.issueCount} {...this.props} />
                  <EmptyRepoMessage {...this.props} />
                  <EmptyRepoMessage {...this.props} />
                  <EmptyRepoMessage {...this.props} />
                  <EmptyRepoMessage {...this.props} />
                </SwipeableViews>
              </div>
            )}
            {this.props.repo.tree !== 'no tree' && (
              <div>
                <div className='Tabs'>
                  <Card className='Card' elevation={0}>
                    <AppBar position='static' elevation={0} color='primary'>
                      <Tabs value={this.state.value} onChange={this.handleTabChange} fullWidth indicatorColor='primary'>
                        <Tab label='About' />
                        <Tab label='Files' />
                        <Tab label='Issues' />
                        <Tab label='Tasks' />
                        <Tab label='Wiki' disabled />
                        <Tab label='Merge Requests' />
                      </Tabs>
                    </AppBar>
                    {this.state.value === 0 && (
                      <TabAbout issueCount={this.state.issueCount} {...this.props} />
                    )}
                    {this.state.value === 1 && (
                      <TabFiles {...this.props} />
                    )}
                    {this.state.value === 2 && (
                      <TabIssues setIssueCount={this.setIssueCount} {...this.props} />
                    )}
                    {this.state.value === 3 && (
                      <TabTasks {...this.props} />
                    )}
                    {this.state.value === 4 && (
                      <div>wiki</div>
                    )}
                    {this.state.value === 5 && (
                      <TabMergeRequests {...this.props} />
                    )}
                  </Card>
                </div>
                {(this.state.value === 1) && (
                  <Paper className='ReadMeMD' elevation={0}>
                    {this.props.readmeStatus === 'PENDING' && (
                      <div className='GenericLinearLoading'>
                        <LinearProgress color='secondary' variant='query' />
                      </div>
                    )}
                    {this.props.readmeStatus === 'ERROR' && (
                      <div />
                    )}
                    {this.state.readmeID === undefined && (
                      <div>
                        <Typography variant='h3'>no readme file found</Typography>
                      </div>
                    )}
                    {this.props.readmeStatus === 'SUCCESS' && (
                      <Markdown
                        escapeHtml
                        source={this.props.readme}
                      />
                    )}
                  </Paper>
                )}
              </div>
            )}
          </div>
        )
      }
    }
    return (<div className='GenericLoading'><CircularProgress color='primary' size={50} /></div>)
  }
}

const mapStateToProps = (state) => {
  return {
    repo: getRepo(state),
    repoStatus: getRepoStatus(state),
    starStatus: getStarStatus(state),
    balance: getBalance(state),
    balanceStatus: getBalanceStatus(state),
    readme: getFile(state),
    readmeStatus: getFileStatus(state),
    user: getUser(state)
  }
}

export default connect(mapStateToProps)(RepoPage)
