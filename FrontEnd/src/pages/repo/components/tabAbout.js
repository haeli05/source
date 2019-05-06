import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Tooltip from '@material-ui/core/Tooltip'
import CircularProgress from '@material-ui/core/CircularProgress'
// Icons
import Icon from 'react-icons-kit'
import { arrows_down } from 'react-icons-kit/linea/arrows_down'
import { arrows_up } from 'react-icons-kit/linea/arrows_up'
import { arrows_minus } from 'react-icons-kit/linea/arrows_minus'
import { arrows_plus } from 'react-icons-kit/linea/arrows_plus'
import { basic_trashcan } from 'react-icons-kit/linea/basic_trashcan'
import { basic_settings } from 'react-icons-kit/linea/basic_settings'
import { ecommerce_money } from 'react-icons-kit/linea/ecommerce_money'
import { arrows_question } from 'react-icons-kit/linea/arrows_question'
import { star } from 'react-icons-kit/fa/star'
import { starO } from 'react-icons-kit/fa/starO'
// SVG
import ReactSVG from 'react-svg'
import RightBracket from './../../../assets/svg/rightbracket.svg'
import WarningDanger from './../../../assets/svg/warning_danger.svg'
import Reply from './../../../assets/svg/return.svg'
import CirclePlus from './../../../assets/svg/circleplus.svg'
import CircleMinus from './../../../assets/svg/circleminus.svg'
import circlebrackets from './../../../assets/svg/circlebrackets.svg'
import forks from './../../../assets/svg/forks.svg'
// Components
import Chip from './../../global/components/chip'
import PersonChip from './../../global/components/personChip'
import PayButton from './../../payments/payButton'
// MISC
import ReactTimeAgo from 'react-time-ago'
import Markdown from 'react-markdown'
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
