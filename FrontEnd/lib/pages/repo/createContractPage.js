'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require('react-redux');

var _repo = require('./../../reducers/repo.reducer');

var _repo2 = require('./../../actions/repo.actions');

var _contractRoleCard = require('./components/contractRoleCard');

var _contractRoleCard2 = _interopRequireDefault(_contractRoleCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var newObj = function newObj(RoleID) {
  return {
    RoleID: RoleID,
    RoleName: "New Role",
    ReputationRequired: 0,
    ActionChecked: [false, false, false, false, false, false, false],
    ActionSRC: [],
    ActionREP: []
  };
};

var CreateContractPage = function (_Component) {
  _inherits(CreateContractPage, _Component);

  function CreateContractPage(props) {
    _classCallCheck(this, CreateContractPage);

    var _this = _possibleConstructorReturn(this, (CreateContractPage.__proto__ || Object.getPrototypeOf(CreateContractPage)).call(this, props));

    _this.props.dispatch((0, _repo2.fetchRepo)(_this.props.match.params.user, _this.props.match.params.name));
    _this.state = {
      NumberOfRoles: 1,
      ActualNumRoles: 1,
      RoleIds: [0],
      Roles: [{ RoleID: 0, RoleName: "Default", ReputationRequired: 0, ActionChecked: [false, false, false, false, false, false, false], ActionSRC: [0, 0, 0, 0, 0, 0, 0], ActionREP: [0, 0, 0, 0, 0, 0, 0] }]
    };
    _this.handleAddRole = _this.handleAddRole.bind(_this);
    _this.endMe = _this.endMe.bind(_this);
    _this.updateMeRep = _this.updateMeRep.bind(_this);
    _this.updateMeName = _this.updateMeName.bind(_this);
    _this.updateMeCheck = _this.updateMeCheck.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.goTo = _this.goTo.bind(_this);
    return _this;
  }

  _createClass(CreateContractPage, [{
    key: 'handleSubmit',
    value: function handleSubmit() {

      this.props.dispatch((0, _repo2.setRepo)(this.props.match.params.user, this.state.Roles, this.props.repo.repo.cid));
    }
  }, {
    key: 'updateMeRep',
    value: function updateMeRep(rep, RoleID) {
      var arr = this.state.Roles;
      var R = arr.find(function (role) {
        return role.RoleID === RoleID;
      });
      R.ReputationRequired = rep;
      this.setState({ Roles: arr });
    }
  }, {
    key: 'updateMeName',
    value: function updateMeName(RoleID, RoleName) {
      var arr = this.state.Roles;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].RoleID === RoleID) {
          arr[i].RoleName = RoleName;
          this.setState({ Roles: arr });
        }
      }
    }
  }, {
    key: 'updateMeCheck',
    value: function updateMeCheck(RoleID, ActionID, value) {
      var arr = this.state.Roles;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].RoleID === RoleID) {
          arr[i].ActionChecked[ActionID] = value;
          this.setState({ Roles: arr });
        }
      }
    }
  }, {
    key: 'endMe',
    value: function endMe(RoleID) {
      console.log("id", RoleID);
      var arr = this.state.Roles;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].RoleID === RoleID) {
          arr.splice(i, 1);
          console.log("test", arr);
          this.setState({ Roles: arr });
          this.setState({ ActualNumRoles: this.state.ActualNumRoles - 1 });
        }
      }
    }
  }, {
    key: 'handleAddRole',
    value: function handleAddRole() {
      console.log("add", this.state.NumberOfRoles);
      var newRole = newObj(this.state.NumberOfRoles);
      var arr = this.state.Roles;
      arr.push(newRole);
      this.setState({ NumberOfRoles: this.state.NumberOfRoles + 1 });
      this.setState({ ActualNumRoles: this.state.ActualNumRoles + 1 });
      this.setState({ Roles: arr });
    }
  }, {
    key: 'goTo',
    value: function goTo() {
      this.props.history.push('/source/' + this.props.match.params.user + '/' + this.props.match.params.name);
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

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log("repo", this.props.repo);
      if (this.props.contract) this.goTo();
      return _react2.default.createElement(
        'div',
        { className: 'CreateContractPage', style: { paddingLeft: "5%", paddingRight: "5%", display: "flex", alignItems: "center", flexDirection: "column" } },
        _react2.default.createElement(
          'h1',
          null,
          'CREATE CONTRACT'
        ),
        this.state.ActualNumRoles < 4 && _react2.default.createElement(
          'div',
          { style: { margin: "10px" } },
          _react2.default.createElement(
            _Button2.default,
            { variant: 'outlined', style: { fontFamily: "gotham_htfbook", borderRadius: "100px" }, onClick: this.handleAddRole },
            'Add New Role'
          )
        ),
        this.state.ActualNumRoles === 4 && _react2.default.createElement(
          'div',
          { style: { margin: "10px" } },
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.handleSubmit, variant: 'outlined', style: { fontFamily: "gotham_htfbook", borderRadius: "100px" }, disabled: true },
            'Add New Role'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Roles', style: { display: "flex", justifyContent: "space-between", width: "100%" } },
          this.state.Roles.map(function (role) {
            return _react2.default.createElement(_contractRoleCard2.default, { key: role.RoleID, RoleID: role.RoleID, updateMeName: _this2.updateMeName, updateMeRep: _this2.updateMeRep, updateMeCheck: _this2.updateMeCheck, endMe: _this2.endMe, RoleName: role.RoleName, ReputationRequired: role.ReputationRequired, ActionChecked: role.ActionChecked, ActionSRC: role.ActionSRC, ActionREP: role.ActionREP });
          })
        ),
        _react2.default.createElement(
          'div',
          { style: { margin: "10px" } },
          _react2.default.createElement(
            _Button2.default,
            { onClick: this.handleSubmit, variant: 'outlined', style: { fontFamily: "gotham_htfbook", borderRadius: "100px" } },
            'submit'
          )
        )
      );
    }
  }]);

  return CreateContractPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    repo: (0, _repo.getRepo)(state),
    contract: (0, _repo.getContract)(state)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(CreateContractPage);