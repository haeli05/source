import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// Material UI
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Dialog from '@material-ui/core/Dialog'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
// Icon
import { Icon } from 'react-icons-kit'
import { arrows_remove } from 'react-icons-kit/linea/arrows_remove'
// Redux
import { connect } from 'react-redux'
import { searchRequest } from './../../../actions/search.actions'
import { getSearchResults, getSearchResultsStatus } from './../../../reducers/search.reducer'
// Components
import IdeaCard from './../../explore/components/ideaCard'
import ProjectCard from './../../explore/components/repoCard'
import PersonCard from './../../explore/components/personCard'

class SearchResults extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0,
      tag: '',
      sort: 'newest'
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleSortChange = this.handleSortChange.bind(this)
  }

  handleClose () {
    this.props.onClose()
    this.setState({ sort: 'newest' })
  };

  handleTabChange (event, value) {
    this.setState({ value })
  };

  handleTextChange (target, e) {
    let change = {}
    change[target] = e.target.value
    this.setState(change)
  }

  handleKeyPress (e) {
    if (e.key === 'Enter' && this.state.tag !== '') {
      if (this.state.sort === 'newest') {
        this.props.searchRequest(undefined, undefined, [this.state.tag])
      } else {
        this.props.searchRequest(undefined, this.state.sort, [this.state.tag])
      }
    } else if (e.key === 'Enter' && this.state.tag === '') {
      if (this.state.sort === 'newest') {
        this.props.searchRequest(undefined, undefined, undefined)
      } else {
        this.props.searchRequest(undefined, this.state.sort, undefined)
      }
    }
  }

  handleSortChange (event) {
    this.setState({ [event.target.name]: event.target.value })
    if (event.target.value !== this.state.sort) {
      if (this.state.sort === 'newest') {
        if (this.state.tag === '') { this.props.searchRequest(undefined, undefined, undefined) } else { this.props.searchRequest(undefined, undefined, [this.state.tag]) }
      } else {
        if (this.state.tag === '') { this.props.searchRequest(undefined, this.state.sort, undefined) } else { this.props.searchRequest(undefined, this.state.sort, [this.state.tag]) }
      }
    }
  };

  render () {
    return (
      <Dialog onClose={this.handleClose} open={this.props.open} maxWidth='md'>
        <Paper className='SearchResults' elevation={0}>
          <div className='SearchResultsHeader'>
            {(this.props.username !== undefined && this.props.username !== false) && (
              <Typography variant='headline'>Your results, {this.props.username}:</Typography>
            )}
            {(this.props.username === undefined || this.props.username === false) && (
              <Typography variant='headline'>Your results:</Typography>
            )}
            <Button variant='fab' mini onClick={this.handleClose} className='CloseButton'>
              <Icon icon={arrows_remove} size={20} />
            </Button>
          </div>
          <div className='SearchTabAndSort'>
            <AppBar className='SearchResultsTabs' position='static' elevation={0} color='primary'>
              <Tabs value={this.state.value} onChange={this.handleTabChange} indicatorColor='primary'>
                <Tab label='All' />
                <Tab label='Ideas' />
                <Tab label='Projects' />
                <Tab label='People' />
              </Tabs>
            </AppBar>
            <div className='Flex'>
              <FormControl variant='outlined' className='FilterByTagInput'>
                <InputLabel ref={ref => { this.tagref = ReactDOM.findDOMNode(ref) }}>
                  Tag Filter
                </InputLabel>
                <OutlinedInput
                  value={this.state.tag}
                  onChange={(event) => { this.handleTextChange('tag', event) }}
                  onKeyPress={(e) => { this.handleKeyPress(e) }}
                  labelWidth={this.tagref ? this.tagref.offsetWidth : 0}
                />
              </FormControl>
              <FormControl variant='outlined'>
                <InputLabel ref={ref => { this.sortbyref = ReactDOM.findDOMNode(ref) }}>
                  Sort by
                </InputLabel>
                <Select
                  value={this.state.sort}
                  onChange={this.handleSortChange}
                  inputProps={{
                    name: 'sort'
                  }}
                  input={
                    <OutlinedInput
                      labelWidth={this.sortbyref ? this.sortbyref.offsetWidth : 0}
                    />
                  }
                >
                  <MenuItem value={'newest'}>newest</MenuItem>
                  <MenuItem value={'trending'}>trending</MenuItem>
                  <MenuItem value={'popularity'}>popularity</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {this.props.searchResultsStatus === 'PENDING' && (
            <div className='GenericLinearLoading'><LinearProgress color='secondary' variant='query' /></div>
          )}
          {this.props.searchResultsStatus === 'ERROR' && (
            <div> error </div>
          )}
          {this.props.searchResultsStatus === 'SUCCESS' && (
            <div className='SearchResultsBody'>
              {this.state.value === 0 && (
                <div>
                  {(this.props.searchResults.ideas.length === 0 && this.props.searchResults.projects.length === 0 && this.props.searchResults.users.length === 0) && (
                    <div className='NoResults'><Typography variant='title'>No results matched your query</Typography></div>
                  )}
                  <Typography variant='subtitle1'>Ideas</Typography>
                  {this.props.searchResults.ideas
                    .filter(idea => idea.creator !== null)
                    .map(idea => {
                      return (<IdeaCard {...this.props} idea={idea} key={idea._id} />)
                    })
                  })}
                  <Typography variant='subtitle1'>Projects</Typography>
                  {this.props.searchResults.projects.map(project => {
                    return (<ProjectCard {...this.props} content={project} key={project._id} />)
                  })}
                  <Typography variant='subtitle1'>People</Typography>
                  {this.props.searchResults.users.map(user => {
                    return (<PersonCard {...this.props} content={user} key={user._id} />)
                  })}
                </div>
              )}
              {this.state.value === 1 && (
                <div>
                  {this.props.searchResults.ideas.length === 0 && (
                    <div className='NoResults'><Typography variant='title'>No ideas matched your query</Typography></div>
                  )}
                  {this.props.searchResults.ideas
                    .filter(idea => idea.creator !== null)
                    .map(idea => {
                      return (<IdeaCard {...this.props} idea={idea} key={idea._id} />)
                    })
                  })}
                </div>
              )}
              {this.state.value === 2 && (
                <div>
                  {this.props.searchResults.projects.length === 0 && (
                    <div className='NoResults'><Typography variant='title'>No projects matched your query</Typography></div>
                  )}
                  {this.props.searchResults.projects.map(project => {
                    return (<ProjectCard {...this.props} content={project} key={project._id} />)
                  })}
                </div>
              )}
              {this.state.value === 3 && (
                <div>
                  {this.props.searchResults.users.length === 0 && (
                    <div className='NoResults'><Typography variant='title'>No users matched your query</Typography></div>
                  )}
                  {this.props.searchResults.users.map(user => {
                    return (<PersonCard {...this.props} content={user} key={user._id} />)
                  })}
                </div>
              )}
            </div>
          )}
        </Paper>
      </Dialog>
    )
  }
}

const SearchResultsDialog = SearchResults

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showResults: false,
      search: '',
      postSearch: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.searchRequest = this.searchRequest.bind(this)
  }

  handleClose () {
    this.setState({ showResults: false })
  }

  handleChange (e) {
    this.setState({ search: e.target.value })
  }

  searchRequest (e, sort, tags) {
    if (e !== undefined) {
      e.preventDefault()
    }
    const query = {
      text: this.state.search,
      tags: tags
    }
    if (query.text !== '') {
      this.setState({ showResults: true })
      this.props.dispatch(searchRequest(query, 111, sort))
    }
  }

  render () {
    return (
      <div>
        <div className='NavSearch'>
          <form id='demo-2' onSubmit={(e) => { this.searchRequest(e, undefined, undefined) }}>
            <input type='search' name='search' value={this.state.search} onChange={this.handleChange} placeholder='SEARCH' />
          </form>
        </div>
        <SearchResultsDialog
          open={this.state.showResults}
          onClose={this.handleClose}
          searchRequest={this.searchRequest}
          {...this.props}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: getSearchResults(state),
    searchResultsStatus: getSearchResultsStatus(state)
  }
}

export default connect(mapStateToProps)(Search)
