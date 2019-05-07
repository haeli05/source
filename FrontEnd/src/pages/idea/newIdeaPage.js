import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
// Icons
import Icon from 'react-icons-kit'
import { basic_trashcan } from 'react-icons-kit/linea/basic_trashcan'
// Redux
import { connect } from 'react-redux'
import { newIdea } from './../../actions/ideas.actions'
import { getIdeaSubmitStatus } from './../../reducers/ideas.reducer'
import { getUser } from './../../reducers/user.reducer'
// Components
import YouMustBeLoggedInPage from './../global/youMustBeLoggedInPage'
import ReactQuillEditor from './../global/components/reactQuillEditor'
import Chip from './../global/components/chip.js'

class NewIdeaPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ideaTitle: '',
      ideaTitleError: false,
      ideaTitleErrorText: '',
      topics: [],
      newTopic: '',
      relevantProject: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddTopic = this.handleAddTopic.bind(this)
    this.handleRemoveTopic = this.handleRemoveTopic.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.submit = this.submit.bind(this)
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
    topic = topic.toLowerCase()
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

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.handleAddTopic()
    }
  }

  submit (body, stringBody) {
    // get the body and stringBody from the quill component and
    // add them to the idea object to submit
    if (this.state.ideaTitle === '') {
      this.setState({ ideaTitleError: true })
      this.setState({ ideaTitleErrorText: 'Invalid idea title' })
    } else {
      this.setState({ ideaTitleError: false })
      this.setState({ ideaTitleErrorText: '' })
      let idea = this.state
      idea.body = body
      idea.stringBody = stringBody
      this.props.dispatch(newIdea(idea))
    }
  }

  render () {
    if (this.props.user.username === false || this.props.user.username === undefined) {
      return (
        <YouMustBeLoggedInPage {...this.props} />
      )
    }
    if (this.props.submitStatus === 'PENDING') {
      return (
        <div className='GenericLoading'>
          <CircularProgress color='primary' size={50} />
        </div>
      )
    } else {
      return (
        <div className='NewIdeaPage'>
          <div className='Body'>
            <div className='PageTitle'>
              <Typography variant='overline'>NEW IDEA</Typography>
              <TextField
                label='Idea Title'
                error={this.state.ideaTitleError}
                helperText={this.state.ideaTitleErrorText}
                value={this.state.ideaTitle}
                onChange={(e) => { this.handleChange('ideaTitle', e) }}
                margin='normal'
                fullWidth
                variant='outlined'
                autoFocus
              />
            </div>
            <ReactQuillEditor submit={this.submit} placeholder={'What do you think?'} />
          </div>
          <div className='NewIdeaSidebar'>
            <div className='Topics'>
              <Typography className='TopicsDiscussedTitle' variant='subtitle1'>Topics Discussed</Typography>
              {this.state.topics.map(topic => {
                return (
                  <div className='TopicDiv' key={Math.random(0, 1000)}>
                    {/* I use Math.random as a key here. This is obviously super bad so don't ever do this.
                  I promise I will replace this later on. */}
                    <Chip {...this.props} label={topic} />
                    <Icon className='RemoveIcon' icon={basic_trashcan} onClick={() => { this.handleRemoveTopic(topic) }} />
                  </div>
                )
              })}
              {(this.state.topics.length < 4) && (
                <div className='AddTopic'>
                  <TextField
                    label='New Topic'
                    value={this.state.newTopic}
                    type='string'
                    onChange={(e) => { this.handleChange('newTopic', e) }}
                    onKeyPress={(e) => { this.handleKeyPress(e) }}
                    variant='outlined'
                    margin='none'
                  />
                  <Button size='small' onClick={this.handleAddTopic} variant='outlined' fullWidth className='AddButton'>+ Topic</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    submitStatus: getIdeaSubmitStatus(state),
    user: getUser(state)
  }
}
export default connect(mapStateToProps)(NewIdeaPage)
