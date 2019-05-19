import React from 'react'
// Material UI
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
// SVG
import ReactSVG from 'react-svg'
import MessageBlob from './../../../assets/svg/messageblob.svg'
import WalletCoin from './../../../assets/svg/walletcoin.svg'
// Icons
import Icon from 'react-icons-kit'
import { basic_message } from 'react-icons-kit/linea/basic_message'
import { arrows_question } from 'react-icons-kit/linea/arrows_question'
import { arrows_plus } from 'react-icons-kit/linea/arrows_plus'
import { ecommerce_money } from 'react-icons-kit/linea/ecommerce_money'
import { basic_trashcan } from 'react-icons-kit/linea/basic_trashcan'
import { alertCircle } from 'react-icons-kit/feather/alertCircle'
// Redux
import { connect } from 'react-redux'
import { fetchIssues, newIssue } from './../../../actions/repo.actions'
import { getIssues, getIssuesStatus, getSubmitIssue, getSubmitIssueStatus } from './../../../reducers/repo.reducer'
// Components
import LoginPrompt from './../../global/components/loginPrompt.js'
import ReactQuillEditor from './../../global/components/reactQuillEditor'
import Chip from './../../global/components/chip.js'
// MISC
import ReactTimeAgo from 'react-time-ago'
import { Link } from 'react-router-dom'

class TabIssues extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      bounty: 0,
      tags: [],
      newTag: '',
      open: false,
      issueCountSet: false,
      loginPromptPopUp: false
    }
    this.loginCheck = this.loginCheck.bind(this)
    this.closeLoginPrompt = this.closeLoginPrompt.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeBounty = this.handleChangeBounty.bind(this)
    this.handleAddTag = this.handleAddTag.bind(this)
    this.handleRemoveTag = this.handleRemoveTag.bind(this)
    this.handleChangeTag = this.handleChangeTag.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleOpenClose = this.handleOpenClose.bind(this)
    this.submit = this.submit.bind(this)
    if (this.props.issuesStatus === undefined || this.props.issuesStatus === false) { this.props.dispatch(fetchIssues(this.props.match.params.projectID)) }
  }

  loginCheck (e, callback) {
    if (this.props.user.username === false) {
      e.preventDefault()
      this.setState({ loginPromptPopUp: true })
    } else {
      return callback()
    }
  }

  closeLoginPrompt () {
    this.setState({ loginPromptPopUp: false })
  }

  newIssue () {
    this.setState({ open: false })
    this.props.dispatch(newIssue(this.state.NewIssueName, this.state.Description, this.props.repoID, this.props.user, this.state.Bounty, Date.now()))
  }

  handleChangeTitle (e) {
    this.setState({ title: e.target.value })
  }

  handleChangeBounty (e) {
    var format = /[0-9]/
    if (format.test(e.target.value)) {
      this.setState({ bounty: e.target.value })
    } else if (this.state.bounty < 10 && e.target.value === '') {
      this.setState({ bounty: 0 })
    }
  }

  handleAddTag () {
    var newArray = this.state.tags.slice()
    var tag = this.state.newTag
    // This removes any non alphabet letter and spaces
    // https://stackoverflow.com/a/22075070 <-- some witchcraft
    tag = tag.replace(/[^a-zA-Z ]/g, '')
    tag = tag.replace(/\s/g, '')
    tag = tag.toLowerCase()
    this.setState({ newTag: tag })
    if (newArray.includes(tag)) {
      alert('Tag already added')
    } else if (tag === '') {

    } else {
      newArray.push(tag)
      this.setState({ tags: newArray })
      this.setState({ newTag: '' })
    }
  }

  handleRemoveTag (tag) {
    var newArray = this.state.tags.slice()
    var tagIndex = newArray.indexOf(tag)
    newArray.splice(tagIndex, 1)
    this.setState({ tags: newArray })
  }

  handleChangeTag (e) {
    this.setState({ newTag: e.target.value })
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.handleAddTag()
    }
  }

  handleOpenClose () {
    this.setState({ open: !this.state.open })
  };

  submit (body, stringBody) {
    if (this.state.title !== '') {
      var issue = {
        title: this.state.title,
        bounty: this.state.bounty,
        repoID: this.props.match.params.projectID,
        tags: this.state.tags,
        body: body,
        stringBody: stringBody
      }
      this.props.dispatch(newIssue(issue))
    }
  }

  render () {
    if (this.state.issueCountSet === false && this.props.issuesStatus === 'SUCCESS') {
      this.props.setIssueCount(this.props.issues.length)
    }
    if (this.state.issueCountSet === false && this.props.issuesStatus === 'ERROR') {
      this.props.setIssueCount('ERROR')
    }
    return (
      <div className='TabIssues'>
        <div className='NewIssueButton'>
          <LoginPrompt open={this.state.loginPromptPopUp} close={this.closeLoginPrompt} />
          <Button variant='outlined' onClick={(e) => { this.loginCheck(e, this.handleOpenClose) }}><Icon icon={arrows_plus} size={20} /> New Issue</Button>
          <Dialog open={this.state.open} onClose={this.handleOpenClose} maxWidth='md'>
            <DialogTitle>New Issue</DialogTitle>
            <DialogContent>
              {this.props.issueSubmitStatus === 'PENDING' && (
                <div className='GenericLinearLoading'>
                  <LinearProgress color='secondary' variant='query' />
                </div>
              )}
              {this.props.issueSubmitStatus === 'SUCCESS' && (this.props.history.push(`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/issue/${this.props.issueSubmit._id}`))}
              {(this.props.issueSubmitStatus === 'ERROR' || this.props.issueSubmitStatus === false || this.props.issueSubmitStatus === undefined) && (
                <div className='IssueDialog'>
                  <div className='IssueDialogLeft'>
                    <TextField
                      id='issuename-input'
                      label='New issue name'
                      value={this.state.title}
                      onChange={this.handleChangeTitle}
                      fullWidth
                      variant='outlined'
                      margin='normal'
                    />
                    <ReactQuillEditor submit={this.submit} placeholder='Issue description ...' />
                  </div>
                  <div className='IssueDialogRight'>
                    <TextField
                      id='bounty-input'
                      label='Bounty'
                      type='number'
                      inputProps={{ min: '0' }}
                      value={this.state.bounty}
                      onChange={this.handleChangeBounty}
                      onKeyPress={(e) => { this.handleKeyPress(e) }}
                      fullWidth
                      variant='outlined'
                      margin='normal'
                    />
                    <div className='Tags'>
                      <Typography className='TagsDiscussedTitle' variant='subtitle1'>Tags</Typography>
                      {this.state.tags.map(tag => {
                        return (
                          <div className='TagDiv' key={Math.random(0, 1000)}>
                            {/* I use Math.random as a key here. This is obviously super bad so don't ever do this.
                            I promise I will replace this later on. */}
                            <Chip {...this.props} label={tag} />
                            <Icon className='RemoveIcon' icon={basic_trashcan} onClick={() => { this.handleRemoveTag(tag) }} />
                          </div>
                        )
                      })}
                      {(this.state.tags.length < 4) && (
                        <div className='AddTag'>
                          <TextField
                            label='New Tag'
                            value={this.state.newTag}
                            type='string'
                            onChange={this.handleChangeTag}
                            onKeyPress={(e) => { this.handleKeyPress(e) }}
                            variant='outlined'
                            margin='none'
                          />
                          <Button size='small' onClick={this.handleAddTag} variant='outlined' fullWidth className='AddButton'>+ Tag</Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
        {this.props.issuesStatus === 'PENDING' && (
          <div className='GenericLinearLoading'>
            <LinearProgress color='secondary' variant='query' />
          </div>
        )}
        {this.props.issuesStatus === 'ERROR' && (
          <div className='ContainedMessage'>
            <Typography variant='h4'>An eror occured :(</Typography>
          </div>
        )}
        {this.props.issuesStatus === 'SUCCESS' && (
          <div>
            {this.props.issues.length === 0 && (
              <div className='ContainedMessage'>
                <Typography variant='h4'>No issues created yet!</Typography>
              </div>
            )}
            {this.props.issues.length !== 0 && (
              <List className='IssuesList' component='nav'>
                {this.props.issues.map((n, index) => {
                  return (
                    <ListItem component={Link} to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}/issue/${n._id}`} className='IssueList' key={n._id}>
                      <ListItemIcon>
                        <Icon icon={alertCircle} size={20} />
                      </ListItemIcon>
                      <ListItemText className='IssueText' primary={n.title} secondary={`Opened by ${n.creator.username}`} />
                      <div className='IssueOpenedDate'>
                        <ReactTimeAgo locale='en'>
                          {Date.parse(n.date)}
                        </ReactTimeAgo>
                      </div>
                      {n.bounty > 0 && (
                        <div className='IssueBounty'>
                          <ListItemIcon>
                            <ReactSVG src={WalletCoin} className='Icon25' />
                          </ListItemIcon>
                          <Typography variant='body1'>{n.bounty}</Typography>
                        </div>
                      )}
                      <ListItemIcon>
                        <ReactSVG src={MessageBlob} className='Icon25' />
                      </ListItemIcon>
                      <Typography variant='body1'>{n.blobs.length - 1}</Typography>
                    </ListItem>
                  )
                })}
              </List>
            )}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    issues: getIssues(state),
    issuesStatus: getIssuesStatus(state),
    issueSubmit: getSubmitIssue(state),
    issueSubmitStatus: getSubmitIssueStatus(state)
  }
}

export default connect(mapStateToProps)(TabIssues)
