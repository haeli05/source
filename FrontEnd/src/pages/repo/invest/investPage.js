import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



class InvestPage extends Component {
  constructor(props){
    super(props);
    this.state={
      amount: undefined,
      vestingChecked: false,
      vestingPeriodNum: 1,
      vestingPeriod: "Years",
      vestingDisabled: true,
      cliffChecked: false,
      cliffPeriodNum: 1,
      cliffPeriod: "Years",
      cliffDisabled: true,
      milestonesChecked: false,
      milestonesDisabled: true,
      milestonePayout1: 0,
      milestonePayout2: 0,
      milestonePayout3: 0,
      milestonePayout4: 0,
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(target, e){
    if (target==="vestingChecked") {
      if (this.state.vestingChecked===true){
        this.setState({vestingChecked:false});
        this.setState({vestingDisabled:true});
        this.setState({cliffDisabled:true});
      }
      else {
        this.setState({vestingChecked:true})
        this.setState({vestingDisabled:false});
        this.setState({cliffDisabled:false});
        this.setState({cliffChecked:true});
      }
    }
    else if (target==="cliffChecked") {
      if (this.state.cliffChecked===true){
        this.setState({cliffChecked:false})
        this.setState({cliffDisabled:true});
      }
      else {
        this.setState({cliffChecked:true})
        this.setState({cliffDisabled:false});
      }
    }
    else if (target==="milestonesChecked") {
      if (this.state.milestonesChecked===true){
        this.setState({milestonesChecked:false})
        this.setState({milestonesDisabled:true});
      }
      else {
        this.setState({milestonesChecked:true})
        this.setState({milestonesDisabled:false});
      }
    }
    else {
      let change ={}
      change[target] = e.target.value
      this.setState(change)
    }
  }

  render() {
    return (
      <div className="InvestPage">
        <div className="Header">
          <Typography variant="overline">PROJECT</Typography>
          <Typography variant="display4">RepoName / Invest</Typography>
        </div>
        <div className="Body">
          <TextField
            id="amount-input"
            label="Amount of SOURCE to Invest"
            type='number'
            inputProps={{ min: "0"}}
            value={this.state.amount}
            onChange={(e)=>{this.handleChange("amount", e)}}
            fullWidth
          />
          <div className="VestingCliff">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.vestingChecked}
                  onChange={(e)=>{this.handleChange("vestingChecked", e)}}
                  color="primary"
                />
              }
              label="Vesting"
            />
            <TextField
              disabled={this.state.vestingDisabled}
              id="vesting-period-input"
              label="Vesting Period"
              type='number'
              inputProps={{ min: "1", step: "1"}}
              value={this.state.vestingPeriodNum}
              onChange={(e)=>{this.handleChange("vestingPeriodNum", e)}}
              margin="normal"
            />
            <TextField
              disabled={this.state.vestingDisabled}
              className="SeletVestingPeriod"
              id="select-vesting-period"
              select
              value={this.state.vestingPeriod}
              onChange={(e)=>{this.handleChange("vestingPeriod", e)}}
              margin="normal"
              style={{width:"100px"}}
            >
              <MenuItem value="Years">Years</MenuItem>
              <MenuItem value="Months">Months</MenuItem>
              <MenuItem value="Days">Days</MenuItem>
            </TextField>
            <FormControlLabel
              disabled={this.state.vestingDisabled}
              control={
                <Checkbox
                  checked={this.state.cliffChecked}
                  onChange={(e)=>{this.handleChange("cliffChecked", e)}}
                  color="primary"
                />
              }
              label="Cliff"
            />
            <TextField
              disabled={this.state.cliffDisabled}
              id="cliff-period-input"
              label="Cliff Period"
              type='number'
              inputProps={{ min: "1", step: "1"}}
              value={this.state.cliffPeriodNum}
              onChange={(e)=>{this.handleChange("cliffPeriodNum", e)}}
              margin="normal"
            />
            <TextField
              disabled={this.state.cliffDisabled}
              className="SeletCliffPeriod"
              id="select-cliff-period"
              select
              value={this.state.cliffPeriod}
              onChange={(e)=>{this.handleChange("cliffPeriod", e)}}
              margin="normal"
              style={{width:"100px"}}
            >
              <MenuItem value="Years">Years</MenuItem>
              <MenuItem value="Months">Months</MenuItem>
              <MenuItem value="Days">Days</MenuItem>
            </TextField>
          </div>
          <div className="Milestones">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.milestonesChecked}
                  onChange={()=>{this.handleChange("milestonesChecked")}}
                  color="primary"
                />
              }
              label="Milestones Payout"
            />
            <div className="Stone">
              <Typography variant="title">Milestone Name</Typography>
              <TextField
                disabled={this.state.milestonesDisabled}
                id="milestone-payout-input"
                label="Payout on Completion"
                type='number'
                inputProps={{ min: "0" }}
                value={this.state.milestonePayout1}
                onChange={(e)=>{this.handleChange("milestonePayout1", e)}}
                margin="normal"
              />
            </div>
            <div className="Stone">
              <Typography variant="title">Milestone Name</Typography>
              <TextField
                disabled={this.state.milestonesDisabled}
                id="milestone-payout-input"
                label="Payout on Completion"
                type='number'
                inputProps={{ min: "0" }}
                value={this.state.milestonePayout2}
                onChange={(e)=>{this.handleChange("milestonePayout2", e)}}
                margin="normal"
              />
            </div>
            <div className="Stone">
              <Typography variant="title">Milestone Name</Typography>
              <TextField
                disabled={this.state.milestonesDisabled}
                id="milestone-payout-input"
                label="Payout on Completion"
                type='number'
                inputProps={{ min: "0" }}
                value={this.state.milestonePayout3}
                onChange={(e)=>{this.handleChange("milestonePayout3", e)}}
                margin="normal"
              />
            </div>
            <div className="Stone">
              <Typography variant="title">Milestone Name</Typography>
              <TextField
                disabled={this.state.milestonesDisabled}
                id="milestone-payout-input"
                label="Payout on Completion"
                type='number'
                inputProps={{ min: "0" }}
                value={this.state.milestonePayout4}
                onChange={(e)=>{this.handleChange("milestonePayout4", e)}}
                margin="normal"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default InvestPage;
