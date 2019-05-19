import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Dialog from '@material-ui/core/Dialog'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import TextField from '@material-ui/core/TextField'
// MISC
import { Draggable } from 'react-beautiful-dnd'
// Components
import UserAssigner from './../../global/components/userAssigner'
import { DeleteButton } from './../../global/components/majorActionButtons'
// Icons
import Icon from 'react-icons-kit'
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz'
// MISC
import Markdown from 'react-markdown'

export default class KanbanCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editTitle: false,
      editDescription: false,
      dueDateSelector: !!this.props.task.dueDate,
      dialog_open: false,
      isHovering: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeDueDate = this.changeDueDate.bind(this)
    this.selectDueDate = this.selectDueDate.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.editToggle = this.editToggle.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.toggleDialog = this.toggleDialog.bind(this)
    this.renderActions = this.renderActions.bind(this)
    this.handleHover = this.handleHover.bind(this)
  }

  handleChange (e, type) {
    this.props.editCard(this.props.task.id, type, e.target.value)
  }

  changeDueDate (e) {
    console.log(e.target.value)
    if (e.target.value === '') {
      this.setState({ dueDateSelector: false })
      this.props.editCard(this.props.task.id, 'dueDate', undefined)
    } else {
      this.props.editCard(this.props.task.id, 'dueDate', e.target.value)
    }
  }

  selectDueDate () {
    this.setState({ dueDateSelector: !this.state.dueDateSelector })
  }

  handleKeyPress (event) {
    if (event.keyCode === 13) {
      this.setState({ editTitle: false })
    }
  }

  editToggle (type) {
    this.setState({ [type]: !this.state[type] })
  }

  getClassName (isDragging) {
    if (isDragging) {
      return 'KanbanCard KanbanCardDragging'
    } else {
      return 'KanbanCard Pointer'
    }
  }

  deleteCard () {
    this.props.deleteCard(this.props.task.id, this.props.columnId)
  }

  toggleDialog () {
    this.setState({ dialog_open: !this.state.dialog_open })
  }

  renderActions () {
    if (this.state.isHovering) {
      return (
        <DeleteButton delete={this.deleteCard} />
      )
    } else {

    }
  }

  handleHover (isHovering) {
    if (this.state.isHovering !== isHovering) {
      this.setState({ isHovering: isHovering })
    }
  }

  renderDueDate (dueDate) {
    if (dueDate) {
      var today = new Date()
      var mm = ((today.getMonth() + 1) < 10 ? ('0' + String((today.getMonth() + 1))) : today.getMonth() + 1)
      var dd = ((today.getDate() + 1) < 10 ? ('0' + String((today.getDate() + 1))) : today.getDate() + 1)
      var yyyymmdd = String(today.getFullYear()) + String(mm) + String(dd)
      var dueDateCopy = dueDate
      dueDateCopy = dueDateCopy.replace(/-/g, '')
      if (yyyymmdd <= dueDateCopy) {
        return (
          <div className='KanbanLabel Due'>
            <Typography>{this.renderStringDate(dueDate)}</Typography>
          </div>
        )
      } else {
        return (
          <div className='KanbanLabel OverDue'>
            <Typography>{this.renderStringDate(dueDate)}</Typography>
          </div>
        )
      }
    }
  }

  renderStringDate (dueDate) {
    var dueDateCopy = dueDate.split('-')
    var stringDate = ''
    if (dueDateCopy[1] === '01') { stringDate = 'JAN ' }
    if (dueDateCopy[1] === '02') { stringDate = 'FEB ' }
    if (dueDateCopy[1] === '03') { stringDate = 'MAR ' }
    if (dueDateCopy[1] === '04') { stringDate = 'APR ' }
    if (dueDateCopy[1] === '05') { stringDate = 'MAY ' }
    if (dueDateCopy[1] === '06') { stringDate = 'JUN ' }
    if (dueDateCopy[1] === '07') { stringDate = 'JUL ' }
    if (dueDateCopy[1] === '08') { stringDate = 'AUG ' }
    if (dueDateCopy[1] === '09') { stringDate = 'SEP ' }
    if (dueDateCopy[1] === '10') { stringDate = 'OCT ' }
    if (dueDateCopy[1] === '11') { stringDate = 'NOV ' }
    if (dueDateCopy[1] === '12') { stringDate = 'DEC ' }
    stringDate = stringDate + String(dueDateCopy[2])
    return stringDate
  }

  render () {
    return (
      <div>
        <Dialog onClose={this.toggleDialog} open={this.state.dialog_open}>
          <div className='KanbanCardDialog'>
            <div className='KanbanCardDialogHeader'>
              {this.state.editTitle && (
                <ClickAwayListener onClickAway={() => { this.editToggle('editTitle') }}>
                  <input
                    className='EditTitleInput'
                    value={this.props.task.title}
                    onChange={(e) => { this.handleChange(e, 'title') }}
                    onKeyPress={(event) => { this.handleKeyPress(event) }}
                  />
                </ClickAwayListener>
              )}
              {!this.state.editTitle && (
                <Typography variant='h3' className='Title' onClick={() => { this.editToggle('editTitle') }}>{this.props.task.title}</Typography>
              )}
            </div>
            <div className='KanbanCardDialogBody'>
              {this.state.editDescription && (
                <ClickAwayListener onClickAway={() => { this.editToggle('editDescription') }}>
                  <div>
                    <textarea
                      className='EditDescriptionInput'
                      value={this.props.task.description}
                      onChange={(e) => { this.handleChange(e, 'description') }}
                      onKeyPress={(event) => { this.handleKeyPress(event) }}
                    />
                    <Typography variant='caption'>markdown supported</Typography>
                  </div>
                </ClickAwayListener>
              )}
              {!this.state.editDescription && (
                <div className='Description' onClick={() => { this.editToggle('editDescription') }}>
                  <Markdown
                    escapeHtml
                    source={this.props.task.description}
                  />
                </div>
              )}
              <div className='KanbanCardDialogLabels'>
                {this.state.dueDateSelector && (
                  <TextField
                    className='MarginRight10'
                    id='date'
                    label='Due Date'
                    type='date'
                    onChange={this.changeDueDate}
                    defaultValue={this.props.task.dueDate ? this.props.task.dueDate : '2019-02-01'}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                )}
                {!this.state.dueDateSelector && (
                  <Button className='MarginRight10' variant='outlined' onClick={this.selectDueDate}>Add Due Date</Button>
                )}
                {this.props.task.compensation === undefined && (
                  <Button className='MarginRight10' variant='outlined'>Add Compensation</Button>
                )}
                {this.props.task.assignedTo === undefined && (
                  <Button className='MarginRight10' variant='outlined'>Assign to user</Button>
                )}
              </div>
            </div>
          </div>
        </Dialog>
        <Draggable
          isDragDisabled
          key={this.props.task.id}
          draggableId={this.props.task.id}
          index={this.props.index}
        >
          {(provided, snapshot) =>
            <div className={this.getClassName(snapshot.isDragging)}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onClick={this.toggleDialog}
              onMouseEnter={() => { this.handleHover(true) }}
              onMouseLeave={() => { this.handleHover(false) }}
            >
              <div className='KanbanHeader Flex JustifyBetween AlignCenter'>
                <Typography {...provided.dragHandleProps} variant='h6'>{this.props.task.title}</Typography>
                <div className='Actions' onClick={(e) => { e.stopPropagation() }}>
                  {this.renderActions()}
                </div>
              </div>
              <div className='KanbanBody'>
                <Typography variant='body1'>{this.props.task.content}</Typography>
              </div>
              <div className='KanbanLabels'>
                {this.props.task.dueDate && (
                  <div>
                    {this.renderDueDate(this.props.task.dueDate)}
                  </div>
                )}
                <div className='KanbanLabel Compensation'>
                  <Typography>{this.props.task.compensation}</Typography>
                </div>
                <div className='KanbanLabel Assigned' />
              </div>
              {provided.placeholder}
            </div>
          }
        </Draggable>
      </div>
    )
  }
}
