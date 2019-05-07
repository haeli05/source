import React, { Component } from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
// MISC
import { Link } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { fetchPersonChip } from './../../../actions/people.actions'
import { getPersonChip } from './../../../reducers/people.reducer'

class PersonChip extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avatar: undefined,
      username: undefined,
      name: undefined,
      id: undefined,
      ticker: 0,
      size: (this.props.size === undefined) ? 'small' : this.props.size
    }
    this.updateState = this.updateState.bind(this)
  }

  componentDidMount () {
    if (this.props.personchip === undefined) {
      if (this.props.personChips === undefined || this.props.personChips === false) {
        this.props.dispatch(fetchPersonChip(this.props.id))
      } else {
        this.updateState()
      }
    } else {
      this.setState({ avatar: this.props.personchip.avatar })
      this.setState({ username: this.props.personchip.username })
      this.setState({ name: this.props.personchip.name })
      this.setState({ id: this.props.personchip._id })
    }
  }

  componentDidUpdate () {
    if (this.state.avatar === undefined) {
      var isInArray = this.props.personChips.find(person => person._id === this.props.id)
      if (isInArray) {
        this.setState({ avatar: isInArray.avatar })
        this.setState({ username: isInArray.username })
        this.setState({ name: isInArray.name })
        this.setState({ id: isInArray._id })
      } else {
        this.props.dispatch(fetchPersonChip(this.props.id))
      }
    }
  }

  updateState () {
    var isInArray = this.props.personChips.find(person => person._id === this.props.id)
    if (isInArray) {
      this.setState({ avatar: isInArray.avatar })
      this.setState({ username: isInArray.username })
      this.setState({ name: isInArray.name })
      this.setState({ id: isInArray._id })
      return
    }
    setTimeout(() => this.setState({ ticker: this.state.ticker + 1 }), 500)
  }

  getPersonChipClassName (size) {
    if (size === 'large') {
      return 'PersonChipLarge'
    } else if (size === 'small') {
      return 'PersonChipSmall'
    }
  }

  render () {
    if (this.state.ticker < 5 && (this.props.personChips !== undefined && this.props.personChips !== false) && this.state.avatar === undefined) {
      this.updateState()
    }
    if (this.state.avatar === undefined) {
      return (
        <div className={this.getPersonChipClassName(this.state.size)}>
          <Avatar className='Avatar' src='https://s3.amazonaws.com/source-images-xyz/5J2rt6mKx1Fw8cfb3TvbzDs31y9r56MRHHNJzgef7xbnBUMCCQo' />
          <div className='PersonChipText'>
            <Typography className='Name'>loading</Typography>
            <Typography className='Username'>@loading</Typography>
          </div>
        </div>
      )
    }
    return (
      <Link to={`/${this.state.id}/profile`} className={this.getPersonChipClassName(this.state.size)}>
        <Avatar className='Avatar' src={this.state.avatar} />
        <div className='PersonChipText'>
          <Typography className='Name'>{this.state.name}</Typography>
          <Typography className='Username'>@{this.state.username}</Typography>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personChips: getPersonChip(state)
  }
}

export default connect(mapStateToProps)(PersonChip)
