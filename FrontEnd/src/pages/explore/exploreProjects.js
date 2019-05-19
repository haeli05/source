import React, { Component } from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
// SVG
import ReactSVG from 'react-svg'
import Projects from './../../assets/svg/projects.svg'
import RightBracket from './../../assets/svg/rightbracket.svg'
import LeftBracket from './../../assets/svg/leftbracket.svg'
// Redux
import { connect } from 'react-redux'
import { fetchRepos } from './../../actions/repo.actions'
import { getRepos, getReposStatus } from './../../reducers/repo.reducer'
import { getUser } from './../../reducers/user.reducer'
// MISC
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Components
import RepoCard from './components/repoCard'
import { ShareButton } from '../global/components/majorActionButtons.js'
import TopicBar from './components/topicBar.js'
import LoginPrompt from '../global/components/loginPrompt.js'
import PopUp from '../global/components/PopUp.js'

class ExploreProjects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTab: 0,
      sort: 'trending',
      loginPromptPopUp: false,
      topics: undefined,
      limit: 50,
      last: [undefined],
      pages: [1]
    }
    this.props.dispatch(fetchRepos(this.state.limit, undefined, undefined, 'trending'))
    this.handlePagination = this.handlePagination.bind(this)
    this.loginCheck = this.loginCheck.bind(this)
    this.closeLoginPrompt = this.closeLoginPrompt.bind(this)
  }

  handleTabChange (tab) {
    this.setState({ currentTab: tab })
    this.setState({ last: [undefined] })
    this.setState({ pages: [1] })
    if (tab === 0) {
      this.setState({ sort: 'trending' })
      this.props.dispatch(fetchRepos(this.state.limit, undefined, undefined, 'trending'))
    } else if (tab === 1) {
      this.setState({ sort: 'trending' })
      this.props.dispatch(fetchRepos(this.state.limit, undefined, undefined, 'trending'))
    } else {
      this.setState({ sort: 'no' })
      this.props.dispatch(fetchRepos(this.state.limit, undefined, undefined, undefined))
    }
  }

  handlePagination (page) {
    if (page === 'next') {
      var lastID = this.props.repos[this.props.repos.length - 1]._id
      this.state.last.push(lastID)
      this.state.pages.push(this.state.pages[this.state.pages.length - 1] + 1)
      this.props.dispatch(fetchRepos(this.state.limit, this.state.topic, lastID, this.state.sort))
    } else if (page === 'back') {
      var lastID = this.state.last[this.state.last.length - 2]
      this.state.last.pop()
      this.state.pages.pop()
      this.props.dispatch(fetchRepos(this.state.limit, this.state.topic, lastID, this.state.sort))
    } else {
      var lastID = this.state.last[page - 1]
      this.state.last.length = page
      this.state.pages.length = page
      this.props.dispatch(fetchRepos(this.state.limit, this.state.topic, lastID, this.state.sort))
    }
  }

  loginCheck (e) {
    if (this.props.user.username === false) {
      e.preventDefault()
      this.setState({ loginPromptPopUp: true })
    } else {

    }
  }

  closeLoginPrompt () {
    this.setState({ loginPromptPopUp: false })
  }

  render () {
    return (
      <div className='ExploreProjects ExplorePage RootMargins'>
        <div className='PageTitle'>
          <div className='OverlineAndButtons'>
            <Typography variant='overline' className='Hidden'>EXPLORE</Typography>
            <div className='OverlineButtons'>
              <ShareButton {...this.props} url={window.location.href} />
            </div>
          </div>
          <PopUp />
          <Typography variant='h2'>Explore</Typography>
        </div>
        <LoginPrompt open={this.state.loginPromptPopUp} close={this.closeLoginPrompt} />
        <div className='Body'>
          <div className='Content'>
            <div className='ExploreTabs'>
              <Tabs value={this.state.currentTab} indicatorColor='primary'>
                <Tab label='Recommended' onClick={() => this.handleTabChange(0)} />
                <Tab label='Trending' onClick={() => this.handleTabChange(1)} />
                <Tab label='New' onClick={() => this.handleTabChange(2)} />
                <Tab label='Tasks' onClick={() => this.handleTabChange(3)} />
              </Tabs>
            </div>
            <div className='ExploreRow'>
              {this.props.reposStatus === 'PENDING' && (
                <div className='GenericLinearLoading'>
                  <LinearProgress color='secondary' variant='query' />
                </div>
              )}
              {this.props.reposStatus === 'ERROR' && (
                <div className='ContainedMessage'>
                  <Typography variant='h3'>An error occured :(</Typography>
                </div>
              )}
              {this.props.reposStatus === 'SUCCESS' && (
                <div>
                  {this.props.repos.map(repo => {
                    return (
                      <RepoCard content={repo} {...this.props} key={repo._id} />
                    )
                  })}
                  <div className='Flex AlignCenter PaginationDiv'>
                    {(this.state.last.length > 1) && (
                      <IconButton className='PaginationButtonLeft' onClick={() => this.handlePagination('back')} >
                        <ReactSVG src={LeftBracket} className='PaginationButtonIcon' />
                      </IconButton>
                    )}
                    <div className='Flex'>
                      {this.state.pages.map(page => {
                        return (
                          <Typography key={page} className='LinkUnderline PaginationPageNumber' variant='subtitle1' onClick={() => this.handlePagination(page)}>{page}</Typography>
                        )
                      })}
                    </div>
                    {(this.props.repos.length !== 0) && (
                      <IconButton className='PaginationButtonRight' onClick={() => this.handlePagination('next')} >
                        <ReactSVG src={RightBracket} className='PaginationButtonIcon' />
                      </IconButton>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='Sidebar'>
            <Button fullWidth variant='contained' color='primary' component={Link} to='/newproject' onClick={(e) => this.loginCheck(e)}>+ Project</Button>
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
    repos: getRepos(state),
    reposStatus: getReposStatus(state),
    user: getUser(state)
  }
}
export default connect(mapStateToProps)(ExploreProjects)
