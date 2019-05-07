import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
// SVG
import ReactSVG from 'react-svg';
import Write from './../../assets/svg/write.svg';
// Icons
import Icon from 'react-icons-kit';
import {basic_trashcan} from 'react-icons-kit/linea/basic_trashcan';
import {arrows_plus} from 'react-icons-kit/linea/arrows_plus';
// Components
import Column from './Column';
// DND
import { DragDropContext, Droppable } from "react-beautiful-dnd";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startX: null,
      startScrollX: null,
      boardColor : this.props.boardColor? this.props.boardColor : "#FFFFFF",
      data: {
        tasks: {
          'task-1': {
            id: 'task-1',
            title: "Database Migration",
            content: "MongoDB to PostGreSQL",
            dueDate: "",
            compensation: 1500
          },
          'task-2': {
            id: 'task-2',
            title: "Git Hosting",
            content: "GitLab to Gitolite",
            dueDate: "",
            compensation: 1500
          },
          'task-3':{
            id: 'task-3',
            title: "Social Logins (FB, Twitter, GitHub,Google)",
            content: "Integrate logins with these methods",
            dueDate: "",
            compensation: 1000
          },
          'task-4':{
            id: 'task-4',
            title: "Real Time Notifications",
            content: "Apollo",
            dueDate: "",
            compensation: 500
            },
          'task-5':{
            id:'task-5',
            title: "Riot Chat integration",
            content: "Riot.im",
            dueDate: "",
            compensation: 500
          },
          'task-6':{
            id:'task-6',
            title: "Marketing funnel",
            content: "Discuss",
            dueDate: "",
            compensation: 500
          }
        },
        columns: {
          'column-1' : {
            id: "column-1",
            title: "Front End",
            taskIds: ['task-3','task-4'],
          },
          'column-2' : {
            id: "column-2",
            title: "Back End",
            taskIds: ['task-1','task-2','task-3'],
          },
          'column-3' : {
            id: "column-3",
            title: "Misc",
            taskIds: ['task-5','task-6'],
          },
        },
        columnOrder: ['column-1', 'column-2', 'column-3'],
      }
    };
    this.handleDragEnd=this.handleDragEnd.bind(this);
    this.newCard=this.newCard.bind(this);
    this.newColumn=this.newColumn.bind(this);
  }

  newCard(columnId) {
    console.log("here",this.state.data.columns[columnId])
    const newTaskId = `task-${Object.keys(this.state.data.tasks).length + 1}`
    const newTask = {
      id: newTaskId,
      content: `new task number ${Object.keys(this.state.data.tasks).length + 1}`
    }

    const editedColumn = this.state.data.columns[columnId]
    editedColumn.taskIds.push(newTaskId)

    const newStateData = {
      ...this.state.data,
      tasks: {
        ...this.state.data.tasks,
        [newTaskId]: newTask,
      },
      columns: {
        ...this.state.data.columns,
        [editedColumn.Id]: editedColumn,
      },
    };

    this.setState({data:newStateData})
    return
  }

  newColumn() {
    const newColumnId = `column-${this.state.data.columnOrder.length+1}`
    const newColumn = {
      id: newColumnId,
      title: 'new column',
      taskIds: [],
    }

    const newColumnOrder = this.state.data.columnOrder
    newColumnOrder.push(newColumnId)

    const newStateData = {
      ...this.state.data,
      columns: {
        ...this.state.data.columns,
        [newColumnId]: newColumn,
      },
      columnOrder: newColumnOrder,
    };

    this.setState({data:newStateData})
    return
  }

  // boardId is stored in the redux store so that it is available inside middleware
  // componentDidMount = () => {
  //   const { boardId, dispatch } = this.props;
  //   dispatch({
  //     type: "PUT_BOARD_ID_IN_REDUX",
  //     payload: { boardId }
  //   });
  // };

  // The following three methods implement dragging of the board by holding down the mouse
  handleMouseDown = ({ target, clientX }) => {
    // if (target.className !== "list-wrapper" && target.className !== "lists") {
    //   return;
    // }
    // window.addEventListener("mousemove", this.handleMouseMove);
    // window.addEventListener("mouseup", this.handleMouseUp);
    // this.setState({
    //   startX: clientX,
    //   startScrollX: window.scrollX
    // });
  };

  // Go to new scroll position every time the mouse moves while dragging is activated
  handleMouseMove = ({ clientX }) => {
    // const { startX, startScrollX } = this.state;
    // const scrollX = startScrollX - clientX + startX;
    // window.scrollTo(scrollX, 0);
    // const windowScrollX = window.scrollX;
    // if (scrollX !== windowScrollX) {
    //   this.setState({
    //     startX: clientX + windowScrollX - startScrollX
    //   });
    // }
  };

  // Remove drag event listeners
  handleMouseUp = () => {
    // if (this.state.startX) {
    //   window.removeEventListener("mousemove", this.handleMouseMove);
    //   window.removeEventListener("mouseup", this.handleMouseUp);
    //   this.setState({ startX: null, startScrollX: null });
    // }
  };

  handleWheel = ({ target, deltaY }) => {
    // Scroll page right or left as long as the mouse is not hovering a card-list (which could have vertical scroll)
    // if (
    //   target.className !== "list-wrapper" &&
    //   target.className !== "lists" &&
    //   target.className !== "open-composer-button" &&
    //   target.className !== "list-title-button"
    // ) {
    //   return;
    // }
    // // Move the board 80 pixes on every wheel event
    // if (Math.sign(deltaY) === 1) {
    //   window.scrollTo(window.scrollX + 80, 0);
    // } else if (Math.sign(deltaY) === -1) {
    //   window.scrollTo(window.scrollX - 80, 0);
    // }
  };



  handleChangeColor(color){

    this.setState({ boardColor: color.hex });

  }

  handleChangeColorTemporarily(color){}



  handleDragEnd(result){
    const {destination, source, draggableId, type} = result;

    // Do nothing if card hasn't been moved
    if (!destination){
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(this.state.data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newStateData = {
        ...this.state.data,
        columnOrder: newColumnOrder,
      }

      this.setState({data:newStateData})
      return
    }

    const start = this.state.data.columns[source.droppableId];
    const finish = this.state.data.columns[destination.droppableId];

    // Move the card within column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newStateData = {
        ...this.state.data,
        columns: {
          ...this.state.data.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState({data:newStateData})
      return
    }

    // Move card between columns
    if (start !== finish) {
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      const newStateData = {
        ...this.state.data,
        columns: {
          ...this.state.data.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };

      this.setState({data:newStateData})
      return
    }







    // dropped outside the list
    // if (!destination) {
    //   return;
    // }
    // const { dispatch, boardId } = this.props;
    //
    // // Move list
    // if (type === "COLUMN") {
    //   // Prevent update if nothing has changed
    //   if (source.index !== destination.index) {
    //     this.props.dispatch({
    //       type: "MOVE_LIST",
    //       payload: {
    //         oldListIndex: source.index,
    //         newListIndex: destination.index,
    //         boardId: source.droppableId
    //       }
    //     });
    //   }
    //   return;
    // }
    // // Move card
    // if (
    //   source.index !== destination.index ||
    //   source.droppableId !== destination.droppableId
    // ) {
    //   this.props.dispatch({
    //     type: "MOVE_CARD",
    //     payload: {
    //       sourceListId: source.droppableId,
    //       destListId: destination.droppableId,
    //       oldCardIndex: source.index,
    //       newCardIndex: destination.index,
    //       boardId
    //     }
    //   });
    // }
  };



  render(){
    return (
      <div className="Board">
        <div className="Header">
        <div className="Flex MarginTop10 MarginBottom10 AlignCenter None">
          <div className="BoardSelector">
            <FormControl variant="outlined">
              <InputLabel ref={ref => {this.boardref = ReactDOM.findDOMNode(ref);}}>
                Board
              </InputLabel>
              <Select
                value={this.state.board}
                onChange={this.handleChange}
                inputProps={{
                  name: 'board',
                }}
                input={
                  <OutlinedInput
                    labelWidth={this.boardref ? this.boardref.offsetWidth : 0}
                  />
                }
              >
              <MenuItem value="tutorial">tutorial</MenuItem>
              <MenuItem value="new board">new board</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="NewBoardButton">
            <Button variant="outlined"><Icon icon={arrows_plus} size={20}/>New Board</Button>
          </div>

        </div>
          <div className="Title MarginRight10">
            <Typography variant="h5">{this.props.boardTitle}</Typography>
            <Typography variant="subtitle2">{this.props.description}</Typography>
          </div>
          <div className="Actions Flex AlignCenter None">
            <Button variant="fab" mini className="EditButton MarginRight10"><ReactSVG src={Write} className="ReactSVGIcon"/></Button>
            <Button variant="fab" mini className="DeleteButton"><Icon icon={basic_trashcan}/></Button>
          </div>
        </div>
        <div>
          <DragDropContext
            onDragEnd={this.handleDragEnd}
          >
            <Droppable
              isDropDisabled={true}
              droppableId="all-columns"
              direction="horizontal"
              type="column"
            >
              {provided => (
                <div
                  className="Body"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {this.state.data.columnOrder.map((columnId, index) => {
                    const column = this.state.data.columns[columnId];
                    const tasks = column.taskIds.map((taskId, index) => this.state.data.tasks[taskId]);
                    return <Column newCard={this.newCard} key={column.id} index={index} column={column} tasks={tasks} />;
                  })}
                  <div className="Column">
                    <div className="NewColumn Pointer" onClick={this.newColumn}>
                      <Icon icon={arrows_plus} size={50}/>
                    </div>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    );
  }
}
/*

const mapStateToProps = (state, ownProps) => {
  const { boardId } = ownProps.match.params;
  return {
    boardTitle: state.boardsById[boardId].title,
    boardColor: state.boardsById[boardId].color,
    boardId
  };
};

const mapStateToProps = (state, ownProps) => {
  const { board } = ownProps;
  return {
//    lists: board.lists.map(listId => state.listsById[listId]),
    boardTitle: board.title,
    boardColor: board.color,
    boardId: board._id
  };
};
*/
export default (Board);
