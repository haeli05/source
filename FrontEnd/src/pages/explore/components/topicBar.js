import React, { Component } from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
// Components
import Chip from './../../global/components/chip.js'

class topicBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Paper className='TopicBar' elevation={0}>
        <div className='TopicBarTitle'>
          <Typography variant='overline'>TOPICS</Typography>
        </div>
        {(this.props.topics !== undefined && this.props.topics.length > 0) && (
          <div className='TopicBarAllChips'>
            {this.props.topics.map(topic => {
              return (
                <div className='TopicBarChipDiv' key={topic}>
                  <Chip {...this.props} label={topic} />
                </div>
              )
            })}
          </div>
        )}
        {(this.props.topics === undefined || this.props.topics.length === 0) && (
          <Typography variant='body1' className='NoTopics'>No topics to display</Typography>
        )}
      </Paper>
    )
  }
}
export default topicBar
