import React from 'react'
// Components
import Board from './../../workflow/Board'
// Redux
import { connect } from 'react-redux'
import { getUser } from './../../../reducers/user.reducer'

class TabTasks extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      board: 'tutorial'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  };

  render () {
    return (
      <div className='TabTasks'>
        <div className='Board'>
          <Board boardTitle='Here is a board' boardId='12398312' boardColor='lightgrey' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

    user: getUser(state)
  }
}

export default connect(mapStateToProps)(TabTasks)
