import React, { Component } from 'react'
// Material UI
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'
import TextField from '@material-ui/core/TextField'
// SVG
import ReactSVG from 'react-svg'
import Simpleclock from './../../../assets/svg/simpleclock.svg'
// Components
import MajorActionButtons from './../../global/components/majorActionButtons'
import Comment from './../../global/components/comment'
import ErrorPage from './../../global/errorPage'
import Chip from './../../global/components/chip'
import ReactQuillEditor from './../../global/components/reactQuillEditor'
import SettingsButton from './../../global/components/settingsButton'
// Redux
import { connect } from 'react-redux'
import { fetchRepo, fetchIssue, commentIssue } from './../../../actions/repo.actions'
import { getRepo, getRepoStatus, getIssue, getIssueStatus, getIssueCommentStatus } from './../../../reducers/repo.reducer'
import { getUser } from './../../../reducers/user.reducer'
// MISC
import ReactTimeAgo from 'react-time-ago'
import { Link } from 'react-router-dom'

class IssuePage extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
    if (this.props.repoStatus !== 'SUCCESS') {
      this.props.dispatch(fetchRepo(this.props.match.params.user, this.props.match.params.projectID, 'VOID'))
    }
  }

  submit (body, stringBody) {
    var comment = {
      body: body,
      stringBody: stringBody
    }
    this.props.dispatch(commentIssue(comment, this.props.match.params.id))
  }

  render () {
    if (this.props.repoStatus === undefined || this.props.repoStatus === false) { this.props.dispatch(fetchRepo(this.props.match.params.user, this.props.match.params.projectID, 'VOID')) }
    if (this.props.issueStatus === undefined || this.props.issueStatus === false) { this.props.dispatch(fetchIssue(this.props.match.params.id)) }
    if (this.props.repoStatus === 'ERROR') { return (<ErrorPage history={this.props.history} />) }
    if (this.props.repoStatus === 'SUCCESS') {
      return (
        <div className='RootMargins IssuePage'>
          <div className='PageTitle'>
            <div className='OverlineAndButtons'>
              <Typography variant='overline'>PROJECT by {this.props.match.params.user}</Typography>
              <div className='OverlineButtons'>
                {this.props.user.id === this.props.repo.proj.creator._id && (
                  <div className='SingleOverlineButtonDiv'>
                    <SettingsButton type='project' {...this.props} />
                  </div>
                )}
                <MajorActionButtons {...this.props} title={this.props.repo.proj.project_name} url={window.location.href} />
              </div>
            </div>
            <div className='Title'>
              <Typography variant='display4' className='ProjectName' component={Link} to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}`} >{this.props.repo.proj.project_name}</Typography>
            </div>
          </div>
          {this.props.issueStatus === 'PENDING' && (
            <div className='GenericLinearLoading'>
              <LinearProgress color='secondary' variant='query' />
            </div>
          )}
          {this.props.issueStatus === 'ERROR' && (
            <div />
          )}
          {this.props.issueStatus === 'SUCCESS' && (
            <div>
              <Paper className='IssuePagePaper' elevation={0}>
                <div className='IssueHeader'>
                  <div className='IssueDetails'>
                    <Typography className='IssueTitle' variant='h4'>{this.props.issue.title}</Typography>
                    <Typography className='IssueAuthor' variant='body1' component={Link} to={`/${this.props.issue.creator.username}/profile`}>{this.props.issue.creator.username}</Typography>
                    <div className='When'>
                      <ReactSVG src={Simpleclock} className='ReactSVGIcon ClockIcon' />
                      <ReactTimeAgo locale='en'>
                        {Date.parse(this.props.issue.date)}
                      </ReactTimeAgo>
                    </div>
                  </div>
                  {this.props.user.id === this.props.repo.proj.creator._id && (
                    <div className='IssueActions'>
                      <Button variant='outlined' className='IssueActionButton' onClick={this.Close}>Close</Button>
                    </div>
                  )}
                </div>
                <div className='IssueBody' dangerouslySetInnerHTML={{ __html: this.props.issue.blobs[0].body }} />
                <div className='Flex'>
                  {this.props.issue.tags.map(tag => (
                    <div key={tag} className='IdeaChip'>
                      <Chip {...this.props} label={tag} />
                    </div>
                  ))}
                </div>
              </Paper>
              {this.props.issue.blobs.map((comment, index) => {
                if (index > 0) {
                  return (
                    <Comment {...this.props} comment={comment} type='issuecomment' key={comment._id} />
                  )
                }
              })}
              {(this.props.user.token !== false && this.props.user.token !== undefined) && (
                <div className='SignInToComment'>
                  {this.props.issueCommentStatus === 'PENDING' && (
                    <div className='GenericLinearLoading'>
                      <LinearProgress color='secondary' />
                    </div>
                  )}
                  {this.props.issueCommentStatus !== 'PENDING' && (
                    <ReactQuillEditor placeholder='Share your thoughts ...' submit={this.submit} />
                  )}
                </div>
              )}
              {(this.props.user.token === false || this.props.user.token === undefined) && (
                <div className='SignInToComment'>
                  <Typography className='LinkUnderline' variant='body1' component={Link} to='/login'>Sign in to join the discussion!</Typography>
                </div>
              )}
            </div>
          )}
        </div>
      )
    }
    return (<div className='GenericLoading'><CircularProgress size={50} color='primary' /></div>)
  }
}

const mapStateToProps = (state) => {
  return {
    repo: getRepo(state),
    repoStatus: getRepoStatus(state),
    issue: getIssue(state),
    issueStatus: getIssueStatus(state),
    user: getUser(state),
    issueCommentStatus: getIssueCommentStatus(state)
  }
}
export default connect(mapStateToProps)(IssuePage)
