import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Icon from 'react-icons-kit'
import { medium } from 'react-icons-kit/fa/medium'
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter'
import IconButton from '@material-ui/core/IconButton'
import { paperPlane } from 'react-icons-kit/fa/paperPlane'
import SendFeedback from './sendFeedback'
import { socialTwitterOutline } from 'react-icons-kit/ionicons/socialTwitterOutline'
import { iosPaperplaneOutline } from 'react-icons-kit/ionicons/iosPaperplaneOutline'
import Medium from './../img/mediumOutline.png'
import Steem from './../img/Steemit.png'

let translate = require('./../../../assets/svg/translate.svg')

class Footer extends Component {
  render () {
    return (
      <div className='Footer'>
        <div className='Left'>
          <div className='Feedback'>
            <SendFeedback props={this.props} className='SendFeedbackButton' />
          </div>
        </div>
        <div className='Middle'>
          <Typography variant='body1' gutterBottom align='center'>Made in Brooklyn © 2019</Typography>
        </div>
        <div className='Icons'>
          <a href='https://t.me/joinchat/EbiqAxL2g2baSz4fulFeHg'>
            <div className='telegram'>
              <Icon size={30} icon={iosPaperplaneOutline} />
            </div>
          </a>
          <a href='https://twitter.com/Source_platform'>
            <div className='twitter'>
              <Icon size={20} icon={socialTwitterOutline} className='twittericon' />
            </div>
          </a>
          <a href='https://medium.com/source-blog'>
            <div className='medium'>
              <img src={Medium} width='20px' alt='medium' />
            </div>
          </a>
          <a href='https://steemit.com/@sourceplatform'>
            <div className='steem'>
              <img src={Steem} width='20px' alt='steem' />
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer
