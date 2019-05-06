import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { getRepo, getContract } from './../../reducers/repo.reducer'
import { fetchRepo, setRepo } from './../../actions/repo.actions'
import RoleCard from './components/contractRoleCard'

const newObj = (RoleID) => {
  return {
    RoleID: RoleID,
    RoleName: 'New Role',
    ReputationRequired: 0,
    ActionChecked: [false, false, false, false, false, false, false],
    ActionSRC: [],
    ActionREP: []
  }
}

class CreateContractPage extends Component {
  constructor (props) {
    super(props)
    this.props.dispatch(fetchRepo(this.props.match.params.user, this.props.match.params.name))
    this.state = {
      NumberOfRoles: 1,
      ActualNumRoles: 1,
      RoleIds: [0],
      Roles: [
        { RoleID: 0, RoleName: 'Default', ReputationRequired: 0, ActionChecked: [false, false, false, false, false, false, false], ActionSRC: [0, 0, 0, 0, 0, 0, 0], ActionREP: [0, 0, 0, 0, 0, 0, 0] }
      ]
    }
    this.handleAddRole = this.handleAddRole.bind(this)
    this.endMe = this.endMe.bind(this)
    this.updateMeRep = this.updateMeRep.bind(this)
    this.updateMeName = this.updateMeName.bind(this)
    this.updateMeCheck = this.updateMeCheck.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goTo = this.goTo.bind(this)
  };

  handleSubmit () {
    this.props.dispatch(setRepo(this.props.match.params.user, this.state.Roles, this.props.repo.repo.cid))
  }

  updateMeRep (rep, RoleID) {
    let arr = this.state.Roles
    let R = arr.find(role => role.RoleID === RoleID)
    R.ReputationRequired = rep
    this.setState({ Roles: arr })
  }

  updateMeName (RoleID, RoleName) {
    let arr = this.state.Roles
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].RoleID === RoleID) {
        arr[i].RoleName = RoleName
        this.setState({ Roles: arr })
      }
    }
  }

  updateMeCheck (RoleID, ActionID, value) {
    let arr = this.state.Roles
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].RoleID === RoleID) {
        arr[i].ActionChecked[ActionID] = value
        this.setState({ Roles: arr })
      }
    }
  }

  endMe (RoleID) {
    let arr = this.state.Roles
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].RoleID === RoleID) {
        arr.splice(i, 1)
        this.setState({ Roles: arr })
        this.setState({ ActualNumRoles: this.state.ActualNumRoles - 1 })
      }
    }
  }

  handleAddRole () {
    let newRole = newObj(this.state.NumberOfRoles)
    let arr = this.state.Roles
    arr.push(newRole)
    this.setState({ NumberOfRoles: this.state.NumberOfRoles + 1 })
    this.setState({ ActualNumRoles: this.state.ActualNumRoles + 1 })
    this.setState({ Roles: arr })
  }

  goTo () {
    this.props.history.push(`/${this.props.match.params.user}/project/${this.props.match.params.name}`)
  }

  /*
  mapRoles() {
    let components = [];
    for (let i = 0; i < this.state.Roles.length; i++){
      components.push(<RoleCard>key={this.state.Roles[i].RoleID} RoleID={this.state.Roles[i].RoleID} updateMeName={this.updateMeName} updateMeCheck={this.updateMeCheck} endMe={this.endMe} RoleName={this.state.Roles[i].RoleName} ReputationRequired={this.state.Roles[i].ReputationRequired} ActionChecked={this.state.Roles[i].ActionChecked} ActionSRC={this.state.Roles[i].ActionSRC} ActionREP={this.state.Roles[i].ActionREP}</RoleCard>)
    }
    return components;
  }

  separateElement() {
   var separateElements = [];
   var multiElements = this.mapRoles();

   for(var i = 0; i < multiElements.length; i+=3) {
     var oneRow = [];
     oneRow.push(multiElements.slice(i, i+3).map(item => {
     return <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>{item}</div>
      }))
      separateElements.push(oneRow.map(itm => {return <div>{itm}</div>}))
    }
    return separateElements;
  }
  */

  render () {
    if (this.props.contract) this.goTo()
    return (
      <div className='CreateContractPage' style={{ paddingLeft: '5%', paddingRight: '5%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1>CREATE CONTRACT</h1>
        {this.state.ActualNumRoles < 4 && (
          <div style={{ margin: '10px' }}>
            <Button variant='outlined' style={{ fontFamily: 'gotham_htfbook', borderRadius: '100px' }} onClick={this.handleAddRole}>Add New Role</Button>
          </div>
        )}
        {this.state.ActualNumRoles === 4 && (
          <div style={{ margin: '10px' }}>
            <Button onClick={this.handleSubmit}variant='outlined' style={{ fontFamily: 'gotham_htfbook', borderRadius: '100px' }} disabled >Add New Role</Button>
          </div>
        )}
        <div className='Roles' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {this.state.Roles.map(role => {
            return <RoleCard key={role.RoleID} RoleID={role.RoleID} updateMeName={this.updateMeName} updateMeRep={this.updateMeRep} updateMeCheck={this.updateMeCheck} endMe={this.endMe} RoleName={role.RoleName} ReputationRequired={role.ReputationRequired} ActionChecked={role.ActionChecked} ActionSRC={role.ActionSRC} ActionREP={role.ActionREP} />
          })}
        </div>
        <div style={{ margin: '10px' }}>
          <Button onClick={this.handleSubmit}variant='outlined' style={{ fontFamily: 'gotham_htfbook', borderRadius: '100px' }} >submit</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    repo: getRepo(state),
    contract: getContract(state)
  }
}
export default connect(mapStateToProps)(CreateContractPage)
