import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
// SVG
import ReactSVG from 'react-svg'
import Comment from './../../../assets/svg/comment.svg'
import Chip from './../../global/components/chip'
import Simpleclock from './../../../assets/svg/simple_clock.svg'
// Components
import { ShareButton } from './../../global/components/majorActionButtons'
import VoteButtons from './../../global/components/voteButtons'
// MISC
import ReactTimeAgo from 'react-time-ago'
import { Link } from 'react-router-dom'

class IdeaCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      description: (this.props.idea.stringBody === undefined) ? this.props.idea.body.substring(0, 600).replace(/<\/?[^>]+(>|$)/g, '').substring(0, 300) : this.props.idea.stringBody.substring(0, 300).replace(/\n/g, ' ') + '...',
      commentsNumber: 0
    }
  }

  componentDidMount () {
    var commentsNumber = this.recursiveCommentNumber(0, this.props.idea.blobs)
    if (commentsNumber === 0) {
      commentsNumber = 1
    }
    this.setState({ commentsNumber: commentsNumber - 1 })
  }

  recursiveCommentNumber (numberOfComments, array) {
    if (array instanceof Array) {
      for (var i = 0; i < array.length; i++) {
        numberOfComments = this.recursiveCommentNumber(numberOfComments, array[i])
      }
    } else {
      return numberOfComments + 1
    }
    return numberOfComments
  }

  render () {
    return (
      <div className='IdeaCard ExploreCard'>
        <div className='VoteButtons'>
          <VoteButtons id={this.props.idea._id} votes={this.props.idea.upvotes} user={this.props.user} type='idea' />
        </div>
        <div className='Main'>
          <div className='Header'>
            <div className='Info'>
              <Typography variant='h6' className='Title' component={Link} to={`/${this.props.idea.creator.username}/idea/${this.props.idea._id}`}>{this.props.idea.title}</Typography>
              <Typography variant='body2' className='LinkUnderline' component={Link} to={`/${this.props.idea.creator._id}/profile`}>@{this.props.idea.creator.username}</Typography>
              <div className='When'>
                <ReactSVG src={Simpleclock} className='ReactSVGIcon ClockIcon' />
                <ReactTimeAgo locale='en'>
                  {Date.parse(this.props.idea.date)}
                </ReactTimeAgo>
              </div>
            </div>

          </div>
          <div className='Body'>
            <Typography variant='body2' className='BodyText' component={Link} to={`/${this.props.idea.creator.username}/idea/${this.props.idea._id}`}>{this.state.description}</Typography>
          </div>
          <div className='Bottom'>
            <div className='Comments'>
              <ReactSVG src={Comment} className='CommentsIcon' />
              <Typography variant='body1' className='CommentsNumber' component={Link} to={`/${this.props.idea.creator.username}/idea/${this.props.idea._id}`}>{this.state.commentsNumber} comments</Typography>
            </div>
            <div className='ExploreCardTags'>
              {this.props.idea.tags.map(tag => {
                return (
                  <div key={tag} className='ExploreCardTag'>
                    <Chip {...this.props} label={tag} />
                  </div>
                )
              })}
            </div>
            <div className='ShareButtonDiv'>
              <ShareButton {...this.props} title={this.props.idea.title} url={`www.source.lol/${this.props.idea.creator.username}/idea/${this.props.idea._id}`} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IdeaCard
