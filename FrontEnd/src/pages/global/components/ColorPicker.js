import React from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import ReactSVG from 'react-svg'
import Share from './../../../assets/svg/share.svg'
import { arrows_remove } from 'react-icons-kit/linea/arrows_remove'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      color: (this.props.color !== undefined) ? this.props.color : 'FFFFFF'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChangeColor = this.handleChangeColor.bind(this)
  }

  handleClick () {
    this.setState({ open: !this.state.open })
  }

  handleChangeColor () {
    this.props.handleChangeColor
  }

  render () {
    return (
      <div className='ShareButton'>
        {!this.state.open && (
          <Button variant='fab' className='MainButton' mini onClick={this.handleClick}>
            <ReactSVG src={Share} className='ShareIcon' />
          </Button>
        )}
        {this.state.open && (
          <Button variant='fab' className='MainButton' mini onClick={this.handleClick}>
            <Icon icon={arrows_remove} size={20} />
          </Button>
        )}
        {this.state.open && (
          <ClickAwayListener onClickAway={this.handleClick}>
            <Grow in={this.state.open}>
              <SketchPicker
                color={this.state.color}
                onChangeComplete={this.handleChangeColor}
                presetColors={['#EFF0F0']}
                onSwatchHover={this.handleChangeColorTemporarily}
              />
            </Grow>
          </ClickAwayListener>
        )}
      </div>
    )
  }
}

export default { ColorPicker }
