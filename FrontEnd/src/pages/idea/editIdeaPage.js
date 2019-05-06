import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
// Icons
import Icon from 'react-icons-kit'
import { basic_trashcan } from 'react-icons-kit/linea/basic_trashcan'
// Redux
import { connect } from 'react-redux'
import { editIdea, fetchIdea } from './../../actions/ideas.actions'
import { getIdea, getFetchIdeaStatus, getIdeaSubmitStatus } from './../../reducers/ideas.reducer'
import { getUser } from './../../reducers/user.reducer'
// Components
import ReactQuillEditor from './../global/components/reactQuillEditor'

class NewIdeaPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ideaTitle: '',
      topics: [],
      text: '',
      newTopic: '',
      relevantProject: '',
      updated: false
    }
    this.props.dispatch(fetchIdea(this.props.match.params.idea))
    this.handleChange = this.handleChange.bind(this)
    this.handleAddTopic = this.handleAddTopic.bind(this)
    this.handleRemoveTopic = this.handleRemoveTopic.bind(this)
    this.addTopicClick = this.addTopicClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.submit = this.submit.bind(this)
    this.update = this.update.bind(this)
  }

  handleChange (target, e) {
    let change = {}
    change[target] = e.target.value
    this.setState(change)
  }

  handleAddTopic () {
    var newArray = this.state.topics.slice()
    var topic = this.state.newTopic
    // This removes any non alphabet letter and spaces
    // https://stackoverflow.com/a/22075070 <-- some witchcraft
    topic = topic.replace(/[^a-zA-Z ]/g, '')
    topic = topic.replace(/\s/g, '')
    this.setState({ newTopic: topic })
    if (newArray.includes(topic)) {
      alert('Topic already added')
    } else if (topic === '') {

    } else {
      newArray.push(topic)
      this.setState({ topics: newArray })
      this.setState({ newTopic: '' })
    }
  }

  handleRemoveTopic (topic) {
    var newArray = this.state.topics.slice()
    var topicIndex = newArray.indexOf(topic)
    newArray.splice(topicIndex, 1)
    this.setState({ topics: newArray })
  }

  addTopicClick () {
    this.setState({ addTopic: true })
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.handleAddTopic()
    }
  }

  submit (body, stringBody) {
    // get the body and stringBody from the quill component and
    // add them to the idea object to submit
    let idea = {
      tags: this.state.topics,
      body: body,
      stringBody: stringBody
    }
    this.props.dispatch(editIdea(idea, this.props.idea._id))
  }

  update () {
    this.setState({ ideaTitle: this.props.idea.title })
    this.setState({ topics: this.props.idea.tags })
    this.setState({ text: this.props.idea.body })
    this.setState({ updated: true })
  }

  render () {
    console.log(this.props)
    if (this.props.ideaStatus !== 'SUCCESS' && this.props.ideaSubmitStatus !== 'SUCCESS') {
      return (
        <div className='GenericLoading'>
          <CircularProgress color='primary' size={50} />
        </div>
      )
    } else if (this.props.user.id === this.props.idea.creator._id) {
      if (!this.state.updated) { this.update() };
      return (
        <div className='EditIdeaPage'>
          <div className='Body'>
            <div className='PageTitle'>
              <Typography variant='overline' variant='overline'>EDIT IDEA</Typography>
              <Typography variant='h4'>This idea is part of a project:</Typography>
              <TextField
                label='Relevant Project'
                value={this.state.relevantProject}
                type='string'
                onChange={(e) => { this.handleChange('relevantProject', e) }}
                onKeyPress={(e) => { this.handleKeyPress(e) }}
                margin='none'
              />
              <Typography variant='h2'>{this.state.ideaTitle}</Typography>
            </div>
            <ReactQuillEditor submit={this.submit} text={this.state.text} placeholder={'Great ideas can change the world...'} />
          </div>
          <div className='Sidebar'>
            <div className='Topics'>
              <List component='nav'>
                <ListSubheader>Topics Discussed</ListSubheader>
                {this.state.topics.map(topic => {
                  return (
                    <ListItem onClick={() => { this.handleRemoveTopic(topic) }} key={Math.random(0, 1000)} button>
                      {/* I use Math.random as a key here. This is obviously super bad so don't ever do this.
                      I promise I will replace this later on. */}
                      <Typography className='Topic'>{topic}</Typography>
                      <Icon icon={basic_trashcan} />
                    </ListItem>
                  )
                })}
                {(this.state.topics.length < 4) && (
                  <ListItem className='AddTopic'>
                    <TextField
                      label='New Topic'
                      value={this.state.newTopic}
                      type='string'
                      onChange={(e) => { this.handleChange('newTopic', e) }}
                      onKeyPress={(e) => { this.handleKeyPress(e) }}
                      margin='none'
                    />
                    <Button size='small' onClick={this.handleAddTopic} variant='outlined' fullWidth className='AddButton'>Add</Button>
                  </ListItem>
                )}
              </List>
            </div>
            <div className='RelatedProject' />
          </div>
        </div>
      )
    } else {
      return (
        <div className='EditForbidden'>
          <Typography variant='display4'>I'm sorry {this.props.user.username}, I'm afraid you can't do that</Typography>
          <Button variant='contained' color='primary' className='GoBack' onClick={() => { this.props.history.push(`/${this.props.match.params.user}/idea/${this.props.match.params.idea}`) }}>Go back</Button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    idea: getIdea(state),
    ideaStatus: getFetchIdeaStatus(state),
    ideaSubmitStatus: getIdeaSubmitStatus(state),
    user: getUser(state)
  }
}
export default connect(mapStateToProps)(NewIdeaPage)
