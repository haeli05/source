import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
// SVG
import ReactSVG from 'react-svg'
import WarningDanger from './../../../assets/svg/warning_danger.svg'
import circlebrackets from './../../../assets/svg/circlebrackets.svg'
import forks from './../../../assets/svg/forks.svg'
// Components
import Chip from './../../global/components/chip'
import PayButton from './../../payments/payButton'
// MISC
import { SocialIcon } from 'react-social-icons'

class TabAbout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='TabAbout'>
        <div className='TabAboutDetails'>
          <div className='DetailsLeft'>
            <Avatar className='ProjectAvatar' style={{ borderRadius: '0' }}>{this.props.repo.proj.project_name[0]}</Avatar>
            <div className='SocialDiv'>
              <SocialIcon className='SocialIcon' style={{ height: 30, width: 30 }} url='https://twitter.com/haeli05' />
              <SocialIcon className='SocialIcon' style={{ height: 30, width: 30 }} url='https://www.sitehtat.com/doesntexist' />
            </div>
          </div>
          <div className='DetailsRight'>
            <Typography variant='h4' className='ProjectDescription'>{this.props.repo.proj.description}</Typography>
            <Chip {...this.props} label='Project Topics' />
            <div className='ProjectStatistics'>
              <div className='StatDiv'>
                <ReactSVG src={circlebrackets} className='ReactSVGIcon' />
                <Typography variant='caption' className='Stat'>Language</Typography>
              </div>
              <div className='StatDiv'>
                <ReactSVG src={forks} className='ReactSVGIcon' />
                <Typography variant='caption' className='Stat'>{this.props.repo.proj.forks_count}</Typography>
              </div>
              <div className='StatDiv'>
                <ReactSVG src={WarningDanger} className='ReactSVGIcon' />
                {this.props.issueCount === undefined && (
                  <div className='StatLoading'>
                    <CircularProgress className='StatLoadingCircle' color='primary' size={15} />
                  </div>
                )}
                {this.props.issueCount === 'ERROR' && (
                  <span>error!</span>
                )}
                {(typeof this.props.issueCount === 'number') && (
                  <Typography variant='caption' className='Stat'>{this.props.issueCount}</Typography>
                )}
              </div>
            </div>
            <PayButton />
            <Typography variant='overline'>Admin</Typography>
            <Typography variant='overline'>Project Managers</Typography>
            <Typography variant='overline'>Contributors</Typography>
          </div>
        </div>
        <div className='TabAboutRecentUpdates'>
          <Typography variant='overline'>Recent Updates</Typography>
        </div>
      </div>
    )
  }
}

export default TabAbout
