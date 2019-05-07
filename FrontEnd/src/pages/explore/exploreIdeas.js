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
import RightBracket from './../../assets/svg/rightbracket.svg'
import LeftBracket from './../../assets/svg/leftbracket.svg'
// Components
import Idea from './components/ideaCard'
import { ShareButton } from '../global/components/majorActionButtons.js'
import TopicBar from './components/topicBar.js'
import LoginPrompt from '../global/components/loginPrompt.js'
import PopUp from '../global/components/PopUp.js'
// Redux
import { connect } from 'react-redux'
import { fetchIdeas } from './../../actions/ideas.actions'
import { getIdeas, getFetchIdeasStatus } from './../../reducers/ideas.reducer'
import { getUser } from './../../reducers/user.reducer'
// MISC
import { Link } from 'react-router-dom'

class ExploreIdeas extends Component {
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
    this.props.dispatch(fetchIdeas(this.state.limit, undefined, undefined, 'trending'))
    this.handleTabChange = this.handleTabChange.bind(this)
    this.loginCheck = this.loginCheck.bind(this)
    this.closeLoginPrompt = this.closeLoginPrompt.bind(this)
    this.getTopics = this.getTopics.bind(this)
  }

  loginCheck (e) {
    if (this.props.user.username === false) {
      e.preventDefault()
      this.setState({ loginPromptPopUp: true })
    } else {

    }
  }

  handleTabChange (tab) {
    this.setState({ currentTab: tab })
    this.setState({ last: [undefined] })
    this.setState({ pages: [1] })
    if (tab === 0) {
      this.setState({ sort: 'trending' })
      this.props.dispatch(fetchIdeas(this.state.limit, undefined, undefined, 'trending'))
    } else if (tab === 1) {
      this.setState({ sort: 'trending' })
      this.props.dispatch(fetchIdeas(this.state.limit, undefined, undefined, 'trending'))
    } else {
      this.setState({ sort: 'no' })
      this.props.dispatch(fetchIdeas(this.state.limit, undefined, undefined, undefined))
    }
  }

  handlePagination (page) {
    if (page === 'next') {
      let lastID = this.props.ideas[this.props.ideas.length - 1]._id
      this.state.last.push(lastID)
      this.state.pages.push(this.state.pages[this.state.pages.length - 1] + 1)
      this.props.dispatch(fetchIdeas(this.state.limit, this.state.topic, lastID, this.state.sort))
    } else if (page === 'back') {
      let lastID = this.state.last[this.state.last.length - 2]
      this.state.last.pop()
      this.state.pages.pop()
      this.props.dispatch(fetchIdeas(this.state.limit, this.state.topic, lastID, this.state.sort))
    } else {
      let lastID = this.state.last[page - 1]
      const { last, pages } = this.state
      last.length = page
      pages.length = page
      this.setState({ last, pages })
      this.props.dispatch(fetchIdeas(this.state.limit, this.state.topic, lastID, this.state.sort))
    }
  }

  closeLoginPrompt () {
    this.setState({ loginPromptPopUp: false })
  }

  getTopics () {
    var topics = []
    for (var i = 0; i < this.props.ideas.length; i++) {
      var ideaTopics = this.props.ideas[i].tags
      for (var j = 0; j < ideaTopics.length; j++) {
        if (!topics.includes(ideaTopics[j])) {
          topics.push(ideaTopics[j])
        }
      }
    }
    topics = topics.sort()
    this.setState({ topics: topics })
  }

  render () {
    console.log(this.props)
    if (this.props.ideasStatus === 'SUCCESS' && this.state.topics === undefined) {
      this.getTopics()
    }
    return (
      <div className='ExploreIdeas ExplorePage RootMargins'>
        <div className='PageTitle'>
          <div className='OverlineAndButtons'>
            <PopUp />
            <Typography variant='overline' className='Hidden'>EXPLORE</Typography>
            <div className='OverlineButtons'>
              <ShareButton {...this.props} url={window.location.href} />
            </div>
          </div>
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
              </Tabs>
            </div>

            {this.props.ideasStatus === 'PENDING' && (
              <div className='GenericLinearLoading'>
                <LinearProgress color='secondary' variant='query' />
              </div>
            )}
            {this.props.ideasStatus === 'ERROR' && (
              <div className='ContainedMessage'>
                <Typography variant='h3'>An error occured :(</Typography>
              </div>
            )}
            {this.props.ideasStatus === 'SUCCESS' && (
              <div>
                { this.props.ideas.filter(idea => idea.creator !== null && idea.creator.username !== null)
                  .map(idea => {
                    return (
                      <Idea idea={idea} {...this.props} key={idea._id} className='IdeaCard' />
                    )
                  })
                }
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
                  {(this.props.ideas.length !== 0) && (
                    <IconButton className='PaginationButtonRight' onClick={() => this.handlePagination('next')} >
                      <ReactSVG src={RightBracket} className='PaginationButtonIcon' />
                    </IconButton>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className='Sidebar'>
            <div>
              <Button fullWidth variant='contained' color='primary' component={Link} to='/newidea' onClick={(e) => this.loginCheck(e)}>+ Idea </Button>
            </div>
            <div className='SidebarTopics'>
              <TopicBar {...this.props} topics={this.state.topics} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ideas: getIdeas(state),
    ideasStatus: getFetchIdeasStatus(state),
    user: getUser(state)
  }
}
export default connect(mapStateToProps)(ExploreIdeas)
