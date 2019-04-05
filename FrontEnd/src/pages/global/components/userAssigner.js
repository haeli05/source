//User Assigner
import React, { Component } from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// MISC
import PersonChip from './personChip';
import ReactSVG from 'react-svg';
import AddPerson from './../../../assets/svg/addperson.svg';

// Redux
import { connect } from 'react-redux';
import {fetchPersonChip} from './../../../actions/people.actions';
import {getPersonChip} from './../../../reducers/people.reducer';

class UserAssigner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
    }
    this.updateState=this.updateState.bind(this);
  }

  componentDidMount(){

  }

  componentDidUpdate(){


  }
  handleClick(){

  }
  updateState(){
  }

  render() {
      return (
        <div className="UserAssigner">
          <div>
            {/*Array of UserChips that hv been added to this particular mofo*/}
            <PersonChip />
          </div>
          <div>
              <IconButton onClick={() => this.handleClick()} >
                <ReactSVG src={AddPerson} className="ReactSVGIcon"/>
              </IconButton>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}


export default connect(mapStateToProps)(UserAssigner);
