// Thought card
import React from 'react'
import Card from '@material-ui/core/Card'
import ReactQuillEditor from './reactQuillEditor'
import CardContent from '@material-ui/core/CardContent'

class ThoughtCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: this.props.content ? this.props.content : <ReactQuillEditor />,
      author: this.props.author
    }
  }

  render () {
    return (
      <Card >
        <div className='ThoughtCard'>
          <CardContent>
            <div className='Header' />
            <div className='ThoughtBody'>
              {this.state.content}
            </div>
          </CardContent>

        </div>

      </Card>
    )
  }
}

export default ThoughtCard
