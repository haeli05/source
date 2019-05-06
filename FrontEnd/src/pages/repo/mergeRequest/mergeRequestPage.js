import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// Material UI
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
// SVG
import ReactSVG from 'react-svg'
import Simpleclock from './../../../assets/svg/simpleclock.svg'
// Components
import MajorActionButtons from './../../global/components/majorActionButtons'
import ErrorPage from './../../global/errorPage'
import Chip from './../../global/components/chip'
import SettingsButton from './../../global/components/settingsButton'
// Redux
import { connect } from 'react-redux'
import { fetchRepo, fetchMergeRequest, acceptOrDeleteMergeRequest } from './../../../actions/repo.actions'
import {
  getRepo,
  getRepoStatus,
  getMerge,
  getMergeStatus,
  getAcceptDeleteMerge,
  getAceeptDeleteMergeStatus } from './../../../reducers/repo.reducer'
import { getUser } from './../../../reducers/user.reducer'
// MISC
import ReactTimeAgo from 'react-time-ago'
import { Link } from 'react-router-dom'

class MergeRequestPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commitMsg: '',
      commitMsgError: false,
      commitMsgErrorText: '',
      accept: false
    }
    if (this.props.repoStatus === undefined || this.props.repoStatus === false) { this.props.dispatch(fetchRepo(this.props.match.params.user, this.props.match.params.projectID, 'VOID')) }
    if (this.props.repoStatus === 'SUCCESS' && (this.props.mergeStatus === undefined || this.props.mergeStatus === false)) { this.props.dispatch(fetchMergeRequest(this.props.repo.proj.gitlabID, this.props.match.params.id)) }
    this.acceptToggle = this.acceptToggle.bind(this)
    this.acceptMergeRequest = this.acceptMergeRequest.bind(this)
    this.deleteMergeRequest = this.deleteMergeRequest.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  acceptToggle () {
    this.setState({ accept: !this.state.accept })
  }

  acceptMergeRequest () {
    if (this.state.commitMsg === '') {
      this.setState({ commitMsgError: true })
      this.setState({ commitMsgErrorText: 'Commit message is required' })
    } else {
      var data = {
        type: 'accept',
        gitlabID: this.props.repo.proj.gitlabID,
        id: this.props.match.params.id,
        commitMsg: this.state.commitMsg
      }
      this.props.dispatch(acceptOrDeleteMergeRequest(data))
    }
  }

  deleteMergeRequest () {
    var data = {
      type: 'delete',
      gitlabID: this.props.repo.proj.gitlabID,
      id: this.props.match.params.id
    }
    this.props.dispatch(acceptOrDeleteMergeRequest(data))
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleTextChange (target, e) {
    let change = {}
    change[target] = e.target.value
    this.setState(change)
  }

  render () {
    if (this.props.acceptDeleteMergeStatus === 'SUCCESS') {
      window.location = `/${this.props.match.params.user}/project/${this.props.match.params.projectID}`
    }
    if (this.props.repoStatus === undefined || this.props.repoStatus === false) { this.props.dispatch(fetchRepo(this.props.match.params.user, this.props.match.params.projectID, 'VOID')) }
    if (this.props.repoStatus === 'ERROR') { return (<ErrorPage history={this.props.history} />) }
    if (this.props.repoStatus === 'SUCCESS') {
      if (this.props.mergeStatus === undefined || this.props.mergeStatus === false) { this.props.dispatch(fetchMergeRequest(this.props.repo.proj.gitlabID, this.props.match.params.id)) }
      return (
        <div className='RootMargins MergeRequestPage'>
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
              <Typography variant='display4' className='ProjectName' component={Link} to={`/${this.props.match.params.user}/project/${this.props.match.params.projectID}`}>{this.props.repo.proj.project_name}</Typography>
            </div>
          </div>
          {this.props.mergeStatus === 'PENDING' && (
            <div className='GenericLinearLoading'>
              <LinearProgress color='secondary' variant='query' />
            </div>
          )}
          {this.props.mergeStatus === 'ERROR' && (
            <div />
          )}
          {this.props.mergeStatus === 'SUCCESS' && (
            <Paper className='MergeRequestPagePaper' elevation={0}>
              <div className='Flex JustifyBetween AlignCenter'>
                <div className='Flex AlignBaseline'>
                  <Typography variant='h4'>{this.props.merge.title}</Typography>
                  <Typography className='LinkUnderline MergeAuthor' variant='body1' component={Link} to={`/${this.props.merge.author.username}/profile`}>{this.props.merge.author.username}</Typography>
                  <Typography variant='body1'>requested to merge {this.props.merge.source_branch} into {this.props.merge.target_branch}</Typography>
                  <div className='When'>
                    <ReactSVG src={Simpleclock} className='ReactSVGIcon ClockIcon' />
                    <ReactTimeAgo locale='en'>
                      {Date.parse(this.props.merge.created_at)}
                    </ReactTimeAgo>
                  </div>
                </div>
                {this.props.user.id === this.props.repo.proj.creator._id && (
                  <div>
                    {this.props.acceptDeleteMergeStatus === 'PENDING' && (
                      <div className='GenericLinearLoading'>
                        <LinearProgress color='secondary' variant='query' />
                      </div>
                    )}
                    {(this.props.acceptDeleteMergeStatus === 'ERROR' || this.props.acceptDeleteMergeStatus === false || this.props.acceptDeleteMergeStatus === undefined) && (
                      <div>
                        {this.props.merge.state !== 'merged' && (
                          <div>
                            {this.state.accept && (
                              <div className='Flex AlignCenter'>
                                <Button variant='outlined' className='MergeRequestActionButton' onClick={this.acceptMergeRequest}>Accept</Button>
                                <Button variant='outlined' className='MergeRequestActionButton' onClick={this.acceptToggle}>Cancel</Button>
                                <TextField
                                  label='Commit Message'
                                  error={this.state.commitMsgError}
                                  value={this.state.commitMsg}
                                  onChange={(event) => { this.handleTextChange('commitMsg', event) }}
                                  helperText={this.state.commitMsgErrorText}
                                  fullWidth
                                  margin='normal'
                                  variant='outlined'
                                />
                              </div>
                            )}
                            {!this.state.accept && (
                              <div className='Flex'>
                                <Button variant='outlined' className='MergeRequestActionButton' onClick={this.acceptToggle}>Accept</Button>
                                <Button variant='outlined' className='MergeRequestActionButton' onClick={this.deleteMergeRequest}>Deny</Button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {this.props.merge.state === 'merged' && (
                  <Typography variant='subtitle1'>This request has been merged</Typography>
                )}
              </div>
              <div className='MergeRequestDescription'>
                <Typography variant='body1'>{this.props.merge.description}</Typography>
              </div>
            </Paper>
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
    merge: getMerge(state),
    mergeStatus: getMergeStatus(state),
    acceptDeleteMerge: getAcceptDeleteMerge(state),
    acceptDeleteMergeStatus: getAceeptDeleteMergeStatus(state),
    user: getUser(state)
  }
}
export default connect(mapStateToProps)(MergeRequestPage)
