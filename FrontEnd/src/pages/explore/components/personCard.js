import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
// Components
import MajorActionButtons from './../../global/components/majorActionButtons'
import Chip from './../../global/components/chip'
// MISC
import { Link } from 'react-router-dom'

class PersonCardLanding extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bio: this.stripHTML(this.props.content.bio)
    }
  }

  stripHTML (html) {
    if (html !== undefined) {
      html = html.replace(/<([^]>)/g, ' ')
      html = html.replace(/<(?:.|\n)*?>/gm, '')
      return html
    }
  }

  render () {
    return (
      <div className='PersonCard ExploreCard'>
        <Avatar className='Avatar' component={Link} to={`/${this.props.content._id}/profile`} src={this.props.content.avatar} />
        <div className='Right'>
          <div>
            <div className='Title'>
              <Typography variant='h4' color='textPrimary' component={Link} to={`/${this.props.content._id}/profile`}>{this.props.content.name}</Typography>
              <Typography variant='h6' color='textSecondary' component={Link} to={`/${this.props.content._id}/profile`}>{'\u00A0'}{'\u00A0'}@{this.props.content.username}</Typography>
            </div>
            <div className='PersonCardDetails'>
              <div className='PersonQuick'>
                {this.props.content.location !== undefined && (
                  <Typography variant='subtitle2' component={Link} to={`/${this.props.content._id}/profile`}>{this.props.content.location}</Typography>
                )}
                {this.props.content.location !== undefined && (
                  <Typography variant='body1' className='Separator'>•</Typography>
                )}
                <Typography variant='subtitle2' className='TextOverflowEllipsis' component={Link} to={`/${this.props.content._id}/profile`}>{this.props.content.description}</Typography>
              </div>
              <Typography variant='body2' className='PersonCardBio' component={Link} to={`/${this.props.content._id}/profile`}>{this.state.bio}</Typography>
            </div>
          </div>
          <div className='Bottom'>
            <div className='ExploreCardTags'>
              {this.props.content.skills.slice(0, 4).map(skill => {
                if (skill !== '') {
                  return (
                    <div key={skill} className='IndividualChip'>
                      <Chip {...this.props} label={skill} />
                    </div>
                  )
                }
              })}
            </div>
            <div className='CardUtilityButtons'>
              <MajorActionButtons {...this.props} title={this.props.content.username} url={`www.source.lol/${this.props.content._id}/profile`} type='person' id={this.props.content._id} orientation='horizontal' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonCardLanding
