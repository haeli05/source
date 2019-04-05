import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {ic_mode_edit} from 'react-icons-kit/md/ic_mode_edit';
import {ic_check_circle} from 'react-icons-kit/md/ic_check_circle';
import {ic_delete} from 'react-icons-kit/md/ic_delete';
import Icon from 'react-icons-kit';


class RoleCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      RoleID: this.props.RoleID,
      RoleName: this.props.RoleName,
      ReputationRequired: this.props.ReputationRequired,
      EditName: false,
      ShowActions: false,
      ActionChecked: this.props.ActionChecked,
      ActionSRC: this.props.ActionSRC,
      ActionREP: this.props.ActionREP,
    };
    this.handleChangeName=this.handleChangeName.bind(this);
    this.handleChangeReputationRequired=this.handleChangeReputationRequired.bind(this);
    this.handleChangeCheck=this.handleChangeCheck.bind(this);
    this.handleCommit=this.handleChangeSRC.bind(this);
    this.handleCommit=this.handleChangeREP.bind(this);
    this.terminate=this.terminate.bind(this);
  };

  handleEdit  ()  {
    this.setState({ EditName: true });
  };

  handleShow  ()  {
    this.setState({ ShowActions: true });
  };

  handleHide  ()  {
    this.setState({ ShowActions: false });
  };

  handleSubmit  ()  {
    this.setState({ EditName: false });
  };

  handleChangeName(e){
    this.setState({RoleName:e.target.value})
    this.props.updateMeName(this.state.RoleID,e.target.value)
  };

  handleChangeReputationRequired(e){
    this.setState({ReputationRequired:e.target.value});
    this.props.updateMeRep(e.target.value,this.props.RoleID);
  };

  terminate(){
    this.props.endMe(this.props.RoleID);
  }

  handleChangeCheck(e,ActionID) {
    let arr = this.state.ActionChecked
    if (arr[ActionID] === true) {
      arr[ActionID] = false
      this.setState({ActionChecked:arr})
      this.props.updateMeCheck(this.state.RoleID,ActionID,false)
    }
    else {
      arr[ActionID] = true
      this.setState({ActionChecked:arr})
      this.props.updateMeCheck(this.state.RoleID,ActionID,true)
    };
  };

  handleChangeSRC(e,ActionID){
    let arr = this.state.ActionSRC
    arr[ActionID] = e.target.value
    this.setState({ActionSRC:arr})
  }

  handleChangeREP(e,ActionID){
    let arr = this.state.ActionREP
    arr[ActionID] = e.target.value
    this.setState({ActionREP:arr})
  }

  render() {
    return (
      <div className="RoleCard" style={{margin:"5px", width:"30%"}}>
        <Paper className="RoleCardPaper" elevation={0} style={{borderRadius:"6px", padding:"10px"}}>
          <div>
            {!this.state.EditName && (
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <h2 style={{padding:0, margin:0}}>{this.state.RoleName}</h2>
                <div>
                  <Button style={{borderRadius:"100px", fontFamily:"gotham_htfbook"}} onClick={this.handleEdit} value={this.state.RoleName}><Icon icon={ic_mode_edit}/></Button>
                  {this.state.RoleID === 0 && (<Button style={{borderRadius:"100px", fontFamily:"gotham_htfbook"}} disabled><Icon icon={ic_delete}/></Button>)}
                  {this.state.RoleID > 0 && (<Button style={{borderRadius:"100px", fontFamily:"gotham_htfbook"}} onClick={this.terminate}><Icon icon={ic_delete}/></Button>)}
                </div>
              </div>
            )}
            {this.state.EditName && (
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <input onChange={this.handleChangeName} placeholder="Role Name" type="text" style={{fontFamily:"gotham_htfbook"}}/>
                <div style={{display:"flex"}}>
                  <Button style={{borderRadius:"100px", fontFamily:"gotham_htfbook"}} onClick={this.handleSubmit}><Icon icon={ic_check_circle}/></Button>
                  {this.state.RoleID === 0 && (<Button style={{borderRadius:"100px", fontFamily:"gotham_htfbook"}} disabled><Icon icon={ic_delete}/></Button>)}
                  {this.state.RoleID > 0 && (<Button style={{borderRadius:"100px", fontFamily:"gotham_htfbook"}} onClick={this.terminate}><Icon icon={ic_delete}/></Button>)}
                </div>
              </div>
            )}
          </div>
          <div className="ReputationRequired" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <p>Reputation Required:</p>
            {this.state.RoleID === 0 && (<input min="0" type="number" style={{fontFamily:"gotham_htfbook"}} value={this.state.ReputationRequired} disabled/>)}
            {this.state.RoleID > 0 && (<input min="0" type="number" style={{fontFamily:"gotham_htfbook"}} onChange={(e)=>{this.handleChangeReputationRequired(e)}} value={this.state.ReputationRequired} />)}
          </div>
          {!this.state.ShowActions && (
            <Button variant="outlined" style={{borderRadius:"100px", fontFamily:"gotham_htfbook"}} onClick={this.handleShow}>Show Actions</Button>
          )}
          {this.state.ShowActions && (
            <div className="Actions">
              <div className="Commit" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="ActionName" style={{display:"flex"}}>
                  {this.state.ActionChecked[0] && (<input type="checkbox" checked onChange={(e)=>{this.handleChangeCheck(e,0)}}/>)}
                  {!this.state.ActionChecked[0] && (<input type="checkbox" onChange={(e)=>{this.handleChangeCheck(e,0)}}/>)}
                  <p>Commit</p>
                </div>
                <div className="NumInputs" style={{display:"flex", flexDirection:"column"}}>
                  <input type="number" onChange={(e)=>{this.handleChangeSRC(e,0)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} min="0" max="1000" value={this.state.ActionSRC[0]} placeholder="SRC Reward"/>
                  <input type="number" onChange={(e)=>{this.handleChangeREP(e,0)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} value={this.state.ActionREP[0]} min="0" placeholder="Reputation Reward"/>
                </div>
              </div>
              <div className="Unstar" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="ActionName" style={{display:"flex"}}>
                  {this.state.ActionChecked[1] && (<input type="checkbox" checked onChange={(e)=>{this.handleChangeCheck(e,1)}}/>)}
                  {!this.state.ActionChecked[1] && (<input type="checkbox" onChange={(e)=>{this.handleChangeCheck(e,1)}}/>)}
                  <p>Unstar</p>
                </div>
                <div className="NumInputs" style={{display:"flex", flexDirection:"column"}}>
                  <input type="number" onChange={(e)=>{this.handleChangeSRC(e,1)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} min="0" max="1000" value={this.state.ActionSRC[1]} placeholder="SRC Reward"/>
                  <input type="number" onChange={(e)=>{this.handleChangeREP(e,1)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} value={this.state.ActionREP[1]} min="0" placeholder="Reputation Reward"/>
                </div>
              </div>
              <div className="Upvote" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="ActionName" style={{display:"flex"}}>
                  {this.state.ActionChecked[2] && (<input type="checkbox" checked onChange={(e)=>{this.handleChangeCheck(e,2)}}/>)}
                  {!this.state.ActionChecked[2] && (<input type="checkbox" onChange={(e)=>{this.handleChangeCheck(e,2)}}/>)}
                  <p>Upvote</p>
                </div>
                <div className="NumInputs" style={{display:"flex", flexDirection:"column"}}>
                  <input type="number" onChange={(e)=>{this.handleChangeSRC(e,2)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} min="0" max="1000" value={this.state.ActionSRC[2]} placeholder="SRC Reward"/>
                  <input type="number" onChange={(e)=>{this.handleChangeREP(e,2)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} value={this.state.ActionREP[2]} min="0" placeholder="Reputation Reward"/>
                </div>
              </div>
              <div className="Resolve" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="ActionName" style={{display:"flex"}}>
                  {this.state.ActionChecked[3] && (<input type="checkbox" checked onChange={(e)=>{this.handleChangeCheck(e,3)}}/>)}
                  {!this.state.ActionChecked[3] && (<input type="checkbox" onChange={(e)=>{this.handleChangeCheck(e,3)}}/>)}
                  <p>Resolve</p>
                </div>
                <div className="NumInputs" style={{display:"flex", flexDirection:"column"}}>
                  <input type="number" onChange={(e)=>{this.handleChangeSRC(e,3)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} min="0" max="1000" value={this.state.ActionSRC[3]} placeholder="SRC Reward"/>
                  <input type="number" onChange={(e)=>{this.handleChangeREP(e,3)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} value={this.state.ActionREP[3]} min="0" placeholder="Reputation Reward"/>
                </div>
              </div>
              <div className="Star" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="ActionName" style={{display:"flex"}}>
                  {this.state.ActionChecked[4] && (<input type="checkbox" checked onChange={(e)=>{this.handleChangeCheck(e,4)}}/>)}
                  {!this.state.ActionChecked[4] && (<input type="checkbox" onChange={(e)=>{this.handleChangeCheck(e,4)}}/>)}
                  <p>Star</p>
                </div>
                <div className="NumInputs" style={{display:"flex", flexDirection:"column"}}>
                  <input type="number" onChange={(e)=>{this.handleChangeSRC(e,4)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} min="0" max="1000" value={this.state.ActionSRC[4]} placeholder="SRC Reward"/>
                  <input type="number" onChange={(e)=>{this.handleChangeREP(e,4)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} value={this.state.ActionREP[4]} min="0" placeholder="Reputation Reward"/>
                </div>
              </div>
              <div className="OpenIssue" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="ActionName" style={{display:"flex"}}>
                  {this.state.ActionChecked[5] && (<input type="checkbox" checked onChange={(e)=>{this.handleChangeCheck(e,5)}}/>)}
                  {!this.state.ActionChecked[5] && (<input type="checkbox" onChange={(e)=>{this.handleChangeCheck(e,5)}}/>)}
                  <p>Open Issue</p>
                </div>
                <div className="NumInputs" style={{display:"flex", flexDirection:"column"}}>
                  <input type="number" onChange={(e)=>{this.handleChangeSRC(e,5)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} min="0" max="1000" value={this.state.ActionSRC[5]} placeholder="SRC Reward"/>
                  <input type="number" onChange={(e)=>{this.handleChangeREP(e,5)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} value={this.state.ActionREP[5]} min="0" placeholder="Reputation Reward"/>
                </div>
              </div>
              <div className="Merge" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div className="ActionName" style={{display:"flex"}}>
                  {this.state.ActionChecked[6] && (<input type="checkbox" checked onChange={(e)=>{this.handleChangeCheck(e,6)}}/>)}
                  {!this.state.ActionChecked[6] && (<input type="checkbox" onChange={(e)=>{this.handleChangeCheck(e,6)}}/>)}
                  <p>Merge</p>
                </div>
                <div className="NumInputs" style={{display:"flex", flexDirection:"column"}}>
                  <input type="number" onChange={(e)=>{this.handleChangeSRC(e,6)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} min="0" max="1000" value={this.state.ActionSRC[6]} placeholder="SRC Reward"/>
                  <input type="number" onChange={(e)=>{this.handleChangeREP(e,6)}} style={{width:"120px", fontFamily:"gotham_htfbook"}} value={this.state.ActionREP[6]} min="0" placeholder="Reputation Reward"/>
                </div>
              </div>
              <Button variant="outlined" style={{borderRadius:"100px", fontFamily:"gotham_htfbook"}} onClick={this.handleHide}>Hide Actions</Button>
            </div>
          )}
        </Paper>
      </div>
    );
  }
}

export default RoleCard;
