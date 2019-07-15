import React, { Component } from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
// Icons
import Icon from 'react-icons-kit'
import { arrows_plus } from 'react-icons-kit/linea/arrows_plus'
// Components
import KanbanCard from './components/kanbanCard'
import { DeleteButton } from './../global/components/majorActionButtons'
// MISC
import { Droppable, Draggable } from 'react-beautiful-dnd'

export default class Column extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHovering: false
    }
    this.deleteColumn = this.deleteColumn.bind(this)
    this.renderActions = this.renderActions.bind(this)
    this.handleHover = this.handleHover.bind(this)
  }

  deleteColumn () {
    this.props.deleteColumn(this.props.column.id)
  }

  renderActions () {
    if (this.state.isHovering) {
      return (
        <DeleteButton delete={this.deleteColumn} />
      )
    } else {

    }
  }

  handleHover (isHovering) {
    if (this.state.isHovering !== isHovering) {
      this.setState({ isHovering: isHovering })
    }
  }

  render () {
    return (
      <Draggable
        isDragDisabled
        key={this.props.column.id}
        draggableId={this.props.column.id}
        index={this.props.index}
      >
        {provided => (
          <div
            className='Column'
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div
              className='ColumnHeader'
              onMouseEnter={() => { this.handleHover(true) }}
              onMouseLeave={() => { this.handleHover(false) }}
            >
              <Typography
                variant='h5'
                {...provided.dragHandleProps}
              >
                {this.props.column.title}
              </Typography>

              <div className='Actions AlignRight'>
              <div className='NewCard'>
                <div className='NewCardButton Pointer' onClick={() => { this.props.newCard(this.props.column.id) }}>
                  <Icon icon={arrows_plus} size={20} />
                </div>
              </div>
                {this.renderActions()}
              </div>
            </div>
            <Droppable isDropDisabled droppableId={this.props.column.id} type='task'>
              {provided => (
                <div>
                  <div className='Lane'
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {this.props.tasks.map((task, index) => {
                      return <KanbanCard
                        columnId={this.props.column.id}
                        editCard={this.props.editCard}
                        deleteCard={this.props.deleteCard}
                        task={task}
                        key={task.id}
                        index={index}
                      />
                    })}
                  </div>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    )
  }
}
