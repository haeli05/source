import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
// SVG
import ReactSVG from 'react-svg'
import Edit from './../../assets/svg/edit.svg'
// Redux
import { connect } from 'react-redux'
import { fetchIdea, deleteIdea, commentIdea } from './../../actions/ideas.actions'
import { getIdea, getFetchIdeaStatus, getCommentSubmitStatus } from './../../reducers/ideas.reducer'
import { getUser } from './../../reducers/user.reducer'
// Components
import Comment from './../global/components/comment'
import MajorActionButtons from './../global/components/majorActionButtons'
import { DeleteButton } from './../global/components/majorActionButtons'
import VoteButtons from './../global/components/voteButtons'
import Chip from './../global/components/chip'
import ErrorPage from './../global/errorPage'
import ReactQuillEditor from './../global/components/reactQuillEditor'
import PersonChip from './../global/components/personChip'
// MISC
import { Link } from 'react-router-dom'

class IdeaPage extends React.Component {
  constructor (props) {
    super(props)
    this.props.dispatch(fetchIdea(this.props.match.params.idea))
    this.deleteIdea = this.deleteIdea.bind(this)
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
  }

  deleteIdea () {
    this.props.dispatch(deleteIdea(this.props.match.params.idea))
  }

  handleSubmitComment (body, stringBody) {
    this.props.dispatch(commentIdea(body, stringBody, this.props.idea._id))
  }

  render () {
    console.log(this.props)
    if (this.props.commentSubmitStatus === 'SUCCESS') {
      this.props.dispatch(fetchIdea(this.props.match.params.idea))
    }
    if (this.props.ideaStatus === 'ERROR') {
      return (
        <ErrorPage history={this.props.history} />
      )
    }
    if (this.props.ideaStatus === 'SUCCESS') {
      return (
        <div className='IdeaPage RootMargins'>
          <div className='IdeaPageInner'>
            <div className='IdeaPageTop'>
              <div className='VoteButtonsDiv'>
                <VoteButtons id={this.props.idea._id} votes={this.props.idea.upvotes} user={this.props.user} type='idea' />
              </div>
              <div className='MajorActionButtonsDiv'>
                <MajorActionButtons {...this.props} type='idea' id={this.props.idea._id} title={this.props.idea.title} url={window.location.href} />
              </div>
            </div>
            <div className='PageTitle'>
              <div className='OverlineAndButtons'>
                <Typography variant='overline'>IDEA by {this.props.idea.creator.username}</Typography>
              </div>
              <Typography variant='h2'>{this.props.idea.title}</Typography>
            </div>
            <div className='Content'>
              <div className='Body'>
                <div className='IdeaDiv'>
                  <div className='TheIdeaItself UserQuillContent' dangerouslySetInnerHTML={{ __html: this.props.idea.body }} />
                  <div className='RowBelow'>
                    <PersonChip {...this.props} size='large' date={this.props.idea.date} id={this.props.idea.creator._id} />
                    <div className='Topics'>
                      {this.props.idea.tags.map(tag => (
                        <div key={tag} className='IdeaChip'>
                          <Chip {...this.props} label={tag} />
                        </div>
                      ))}
                    </div>
                    {this.props.user.id === this.props.idea.creator._id && (
                      <div className='CreatorActions'>
                        <Button variant='fab' mini className='EditButton' component={Link} to={`/${this.props.match.params.user}/idea/${this.props.idea._id}/edit`}><ReactSVG src={Edit} className='ReactSVGIcon' /></Button>
                        <DeleteButton delete={this.deleteIdea} />
                      </div>
                    )}
                  </div>
                </div>
                <div className='Discussion'>
                  {this.props.idea.blobs.map(comment => {
                    return (
                      <Comment {...this.props} comment={comment[0]} childComments={comment[1]} type='ideacomment' key={comment[0]._id} />
                    )
                  })}
                  {(this.props.user.token !== false && this.props.user.token !== undefined) && (
                    <div>
                      {this.props.commentSubmitStatus !== 'PENDING' && (
                        <div className='AddComment'>
                          <ReactQuillEditor placeholder='Share your thoughts ...' submit={this.handleSubmitComment} />
                        </div>
                      )}
                      {this.props.commentSubmitStatus === 'PENDING' && (
                        <div className='AddComment'>
                          <div className='GenericLinearLoading'>
                            <LinearProgress color='secondary' />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {(this.props.user.token === false || this.props.user.token === undefined) && (
                    <div className='SignInToComment LinkUnderline'>
                      <Typography className='Pointer' variant='body1' component={Link} to='/login'>Sign in to join the discussion!</Typography>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='GenericLoading'>
          <CircularProgress color='primary' size={50} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    idea: getIdea(state),
    user: getUser(state),
    ideaStatus: getFetchIdeaStatus(state),
    commentSubmitStatus: getCommentSubmitStatus(state)
  }
}

export default connect(mapStateToProps)(IdeaPage)
