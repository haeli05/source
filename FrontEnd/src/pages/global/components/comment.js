import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import LinearProgress from '@material-ui/core/LinearProgress'
// SVG
import ReactSVG from 'react-svg'
import Reply from './../../../assets/svg/reply.svg'
import Minus from './../../../assets/icon-pack-1/MINUS.svg'
import Plus from './../../../assets/icon-pack-1/PLUS.svg'
import Pencil from './../../../assets/svg/pencil.svg'
import Simpleclock from './../../../assets/svg/simple_clock.svg'
import Cross from './../../../assets/svg/cross.svg'
import Write from './../../../assets/svg/write.svg'
import Edit from './../../../assets/svg/edit.svg'
import Bin from './../../../assets/svg/bin.svg'
// Components
import ChildComment from './comment.js'
import { ShareButton } from './../../global/components/majorActionButtons'
import { DeleteButton } from './../../global/components/majorActionButtons'
import VoteButtons from './../../global/components/voteButtons'
import ReactQuillEditor from './../../global/components/reactQuillEditor'
import PersonChip from './personChip.js'
// MISC
import ReactTimeAgo from 'react-time-ago'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { commentIdea, editComment, deleteComment } from './../../../actions/ideas.actions'
import { getCommentSubmitStatus } from './../../../reducers/ideas.reducer'
import { editCommentIssue, deleteCommentIssue } from './../../../actions/repo.actions'
import { getIssueCommentStatus } from './../../../reducers/repo.reducer'

class Comment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reply: false,
      edit: false,
      areyousure: false,
      url: `${window.location.href}#${this.props.comment._id}`,
      minimised: false
    }
    this.editComment = this.editComment.bind(this)
    this.submit = this.submit.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.no = this.no.bind(this)
    this.handleMinimise = this.handleMinimise.bind(this)
    this.replyComment = this.replyComment.bind(this)
    this.submitReplyComment = this.submitReplyComment.bind(this)
  }

  editComment () {
    this.setState({ edit: !this.state.edit })
  }

  submit (body, stringBody) {
    if (this.props.type === 'ideacomment') {
      this.props.dispatch(editComment(body, stringBody, this.props.comment._id, this.props.match.params.idea))
    } else if (this.props.type === 'issuecomment') {
      this.props.dispatch(editCommentIssue(body, stringBody, this.props.match.params.id, this.props.comment._id))
    }
  }

  deleteComment () {
    if (this.state.areyousure) {
      if (this.props.type === 'ideacomment') {
        this.props.dispatch(deleteComment(this.props.match.params.idea, this.props.comment._id))
      } else if (this.props.type === 'issuecomment') {
        this.props.dispatch(deleteCommentIssue(this.props.match.params.id, this.props.comment._id))
      }
    } else {
      this.setState({ areyousure: true })
    }
  }

  no () {
    this.setState({ areyousure: false })
  }

  handleMinimise () {
    this.setState({ minimised: !this.state.minimised })
  }

  replyComment () {
    this.setState({ reply: !this.state.reply })
  }

  submitReplyComment (body, stringBody) {
    if (this.props.type === 'ideacomment') {
      this.props.dispatch(commentIdea(body, stringBody, this.props.match.params.idea, this.props.comment._id))
    }
  }

  getAvatarClassName (isMinimised) {
    if (isMinimised) {
      return 'CommentAvatarSmall'
    } else {
      return 'CommentAvatar'
    }
  }

  getLeftClassName (isMinimised) {
    if (isMinimised) {
      return 'LeftMin'
    } else {
      return 'Left'
    }
  }

  render () {
    return (
      <div id={this.props.comment._id}>
        <Card className='Comment' elevation={0}>
          {!this.props.comment.deleted && (
            <div className={this.getLeftClassName(this.state.minimised)}>
              <Avatar component={Link} to={`/${this.props.comment.user._id}/profile`} src={this.props.comment.user.avatar} className={this.getAvatarClassName(this.state.minimised)} />
              {!this.state.minimised && (
                <VoteButtons id={this.props.comment._id} votes={this.props.comment.upvotes} user={this.props.user} type={this.props.type} />
              )}
            </div>
          )}
          <div className='Right'>
            {!this.props.comment.deleted && (
              <div className='Header'>
                <Typography variant='body1' component={Link} to={`/${this.props.comment.user._id}/profile`} className='CommentName'>{this.props.comment.user.name}</Typography>
                <Typography variant='body1' component={Link} to={`/${this.props.comment.user._id}/profile`} className='CommentUsername'>@{this.props.comment.user.username}</Typography>
                <div className='When'>
                  <ReactSVG src={Simpleclock} className='ReactSVGIcon ClockIcon' />
                  <ReactTimeAgo locale='en' className='CommentTime'>
                    {Date.parse(this.props.comment.date)}
                  </ReactTimeAgo>
                </div>
                {this.props.comment.edited && (
                  <div className='Edited'>
                    <ReactSVG src={Pencil} className='ReactSVGIcon PencilIcon' />
                    <Typography variant='body1'>edited</Typography>
                  </div>
                )}
                {!this.state.minimised && (
                  <ReactSVG src={Minus} onClick={this.handleMinimise} className='ReactSVGIcon CommentMinimiseButton' />
                )}
                {this.state.minimised && (
                  <ReactSVG src={Plus} onClick={this.handleMinimise} className='ReactSVGIcon CommentMaximiseButton' />
                )}
              </div>
            )}
            {this.props.comment.deleted && (
              <div className='DeletedHeader'>
                <Typography className='DeletedTitle'>deleted</Typography>
                {!this.state.minimised && (
                  <ReactSVG src={Minus} onClick={this.handleMinimise} className='ReactSVGIcon CommentMinimiseButton' />
                )}
                {this.state.minimised && (
                  <ReactSVG src={Plus} onClick={this.handleMinimise} className='ReactSVGIcon CommentMaximiseButton' />
                )}
              </div>
            )}
            {!this.state.minimised && (
              <div>
                {!this.props.comment.deleted && (
                  <div className='Body'>
                    {(this.props.commentSubmitStatus === this.props.comment._id || this.props.issueCommentStatus === this.props.comment._id) && (
                      <div className='GenericLinearLoading'>
                        <LinearProgress color='secondary' />
                      </div>
                    )}
                    {(this.props.commentSubmitStatus !== this.props.comment._id && this.props.issueCommentStatus !== this.props.comment._id) && (
                      <div>
                        {this.state.edit && (
                          <ReactQuillEditor placeholder='Editting comment ...' text={this.props.comment.body} submit={this.submit} cancel={this.editComment} />
                        )}
                        {!this.state.edit && (
                          <div className='TheIdeaItself UserQuillContent' dangerouslySetInnerHTML={{ __html: this.props.comment.body }} />
                        )}
                        {this.state.reply && (
                          <ReactQuillEditor placeholder={`Replying to ${this.props.comment.user.username} ...`} submit={this.submitReplyComment} cancel={this.replyComment} />
                        )}
                      </div>
                    )}
                    {(!this.state.reply && !this.state.edit) && (
                      <div className='Actions'>
                        {(!this.state.minimised && (this.props.user.id !== false && this.props.user.id !== undefined)) && (
                          <Button variant='fab' mini className='ActionButton' onClick={this.replyComment}>
                            <ReactSVG src={Reply} className='ReactSVGIcon ReplyIcon' />
                          </Button>
                        )}
                        <div className='ActionButton'><ShareButton {...this.props} mini title={`${this.props.comment.user.username}'s comment on Source`} url={`${window.location.href}#${this.props.comment._id}`} /></div>
                        {!this.state.minimised && (
                          <div>
                            {this.props.comment.user._id === this.props.user.id && (
                              <div className='Flex'>
                                <Button variant='fab' mini className='EditButton ActionButton' onClick={this.editComment}><ReactSVG src={Edit} className='ReactSVGIcon EditIcon' /></Button>
                                <DeleteButton delete={this.deleteComment} mini />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                    {this.props.childComments !== undefined && (
                      <div>
                        {this.props.childComments.map(childComment => {
                          return (
                            <ChildComment {...this.props} comment={childComment[0]} childComments={childComment[1]} key={childComment[0]._id} />
                          )
                        })}
                      </div>
                    )}
                  </div>
                )}
                {this.props.comment.deleted && (
                  <div>
                    {this.props.childComments !== undefined && (
                      <div>
                        {this.props.childComments.map(childComment => {
                          return (
                            <ChildComment {...this.props} comment={childComment[0]} childComments={childComment[1]} key={childComment[0]._id} />
                          )
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    commentSubmitStatus: getCommentSubmitStatus(state),
    issueCommentStatus: getIssueCommentStatus(state)
  }
}

export default connect(mapStateToProps)(Comment)
