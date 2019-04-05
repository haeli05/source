import React from 'react';
import ReactDOM from 'react-dom';
// Material UI
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
// SVG
import ReactSVG from 'react-svg';
// Icons
import Icon from 'react-icons-kit';
import {arrows_plus} from 'react-icons-kit/linea/arrows_plus';
// Components
import LoginPrompt from './../../global/components/loginPrompt.js';
import Board from './../../workflow/Board';
// MISC
import {Link} from 'react-router-dom';
import ReactQuillEditor from './../../global/components/reactQuillEditor';
// Redux
import {connect} from 'react-redux'
import {getUser} from './../../../reducers/user.reducer';



class TabTasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: "tutorial",
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="TabTasks">
        <div className="Board">
          <Board boardTitle="Here is a board" boardId="12398312" boardColor="lightgrey"/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {

    user: getUser(state),
  }
}


export default connect(mapStateToProps)(TabTasks);



/*

<Select
  value={this.state.branch}
  onChange={this.handleChange}
  inputProps={{
    name: 'branch',
  }}
  input={
    <OutlinedInput
      labelWidth={this.branchref ? this.branchref.offsetWidth : 0}
    />
  }
>
  {this.props.branches.branches.map(branch => {
    return (
      <MenuItem key={branch} value={branch}>{branch}</MenuItem>
    )
  })}
</Select>

*/
