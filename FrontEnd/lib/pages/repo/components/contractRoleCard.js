'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ic_mode_edit = require('react-icons-kit/md/ic_mode_edit');

var _ic_check_circle = require('react-icons-kit/md/ic_check_circle');

var _ic_delete = require('react-icons-kit/md/ic_delete');

var _reactIconsKit = require('react-icons-kit');

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoleCard = function (_Component) {
  _inherits(RoleCard, _Component);

  function RoleCard(props) {
    _classCallCheck(this, RoleCard);

    var _this = _possibleConstructorReturn(this, (RoleCard.__proto__ || Object.getPrototypeOf(RoleCard)).call(this, props));

    _this.state = {
      RoleID: _this.props.RoleID,
      RoleName: _this.props.RoleName,
      ReputationRequired: _this.props.ReputationRequired,
      EditName: false,
      ShowActions: false,
      ActionChecked: _this.props.ActionChecked,
      ActionSRC: _this.props.ActionSRC,
      ActionREP: _this.props.ActionREP
    };
    _this.handleChangeName = _this.handleChangeName.bind(_this);
    _this.handleChangeReputationRequired = _this.handleChangeReputationRequired.bind(_this);
    _this.handleChangeCheck = _this.handleChangeCheck.bind(_this);
    _this.handleCommit = _this.handleChangeSRC.bind(_this);
    _this.handleCommit = _this.handleChangeREP.bind(_this);
    _this.terminate = _this.terminate.bind(_this);
    return _this;
  }

  _createClass(RoleCard, [{
    key: 'handleEdit',
    value: function handleEdit() {
      this.setState({ EditName: true });
    }
  }, {
    key: 'handleShow',
    value: function handleShow() {
      this.setState({ ShowActions: true });
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      this.setState({ ShowActions: false });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.setState({ EditName: false });
    }
  }, {
    key: 'handleChangeName',
    value: function handleChangeName(e) {
      this.setState({ RoleName: e.target.value });
      this.props.updateMeName(this.state.RoleID, e.target.value);
    }
  }, {
    key: 'handleChangeReputationRequired',
    value: function handleChangeReputationRequired(e) {
      this.setState({ ReputationRequired: e.target.value });
      this.props.updateMeRep(e.target.value, this.props.RoleID);
    }
  }, {
    key: 'terminate',
    value: function terminate() {
      this.props.endMe(this.props.RoleID);
    }
  }, {
    key: 'handleChangeCheck',
    value: function handleChangeCheck(e, ActionID) {
      console.log("changedCheck", this.state.ActionChecked[0]);
      var arr = this.state.ActionChecked;
      if (arr[ActionID] === true) {
        arr[ActionID] = false;
        this.setState({ ActionChecked: arr });
        this.props.updateMeCheck(this.state.RoleID, ActionID, false);
      } else {
        arr[ActionID] = true;
        this.setState({ ActionChecked: arr });
        this.props.updateMeCheck(this.state.RoleID, ActionID, true);
      };
    }
  }, {
    key: 'handleChangeSRC',
    value: function handleChangeSRC(e, ActionID) {
      console.log("changed SRC", ActionID, e.target.value);
      var arr = this.state.ActionSRC;
      arr[ActionID] = e.target.value;
      this.setState({ ActionSRC: arr });
    }
  }, {
    key: 'handleChangeREP',
    value: function handleChangeREP(e, ActionID) {
      console.log("changed REP", ActionID, e.target.value);
      var arr = this.state.ActionREP;
      arr[ActionID] = e.target.value;
      this.setState({ ActionREP: arr });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'RoleCard', style: { margin: "5px", width: "30%" } },
        _react2.default.createElement(
          _Paper2.default,
          { className: 'RoleCardPaper', elevation: 0, style: { borderRadius: "6px", padding: "10px" } },
          _react2.default.createElement(
            'div',
            null,
            !this.state.EditName && _react2.default.createElement(
              'div',
              { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
              _react2.default.createElement(
                'h2',
                { style: { padding: 0, margin: 0 } },
                this.state.RoleName
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _Button2.default,
                  { style: { borderRadius: "100px", fontFamily: "gotham_htfbook" }, onClick: this.handleEdit, value: this.state.RoleName },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_mode_edit.ic_mode_edit })
                ),
                this.state.RoleID === 0 && _react2.default.createElement(
                  _Button2.default,
                  { style: { borderRadius: "100px", fontFamily: "gotham_htfbook" }, disabled: true },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_delete.ic_delete })
                ),
                this.state.RoleID > 0 && _react2.default.createElement(
                  _Button2.default,
                  { style: { borderRadius: "100px", fontFamily: "gotham_htfbook" }, onClick: this.terminate },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_delete.ic_delete })
                )
              )
            ),
            this.state.EditName && _react2.default.createElement(
              'div',
              { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
              _react2.default.createElement('input', { onChange: this.handleChangeName, placeholder: 'Role Name', type: 'text', style: { fontFamily: "gotham_htfbook" } }),
              _react2.default.createElement(
                'div',
                { style: { display: "flex" } },
                _react2.default.createElement(
                  _Button2.default,
                  { style: { borderRadius: "100px", fontFamily: "gotham_htfbook" }, onClick: this.handleSubmit },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_check_circle.ic_check_circle })
                ),
                this.state.RoleID === 0 && _react2.default.createElement(
                  _Button2.default,
                  { style: { borderRadius: "100px", fontFamily: "gotham_htfbook" }, disabled: true },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_delete.ic_delete })
                ),
                this.state.RoleID > 0 && _react2.default.createElement(
                  _Button2.default,
                  { style: { borderRadius: "100px", fontFamily: "gotham_htfbook" }, onClick: this.terminate },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_delete.ic_delete })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ReputationRequired', style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
            _react2.default.createElement(
              'p',
              null,
              'Reputation Required:'
            ),
            this.state.RoleID === 0 && _react2.default.createElement('input', { min: '0', type: 'number', style: { fontFamily: "gotham_htfbook" }, value: this.state.ReputationRequired, disabled: true }),
            this.state.RoleID > 0 && _react2.default.createElement('input', { min: '0', type: 'number', style: { fontFamily: "gotham_htfbook" }, onChange: function onChange(e) {
                _this2.handleChangeReputationRequired(e);
              }, value: this.state.ReputationRequired })
          ),
          !this.state.ShowActions && _react2.default.createElement(
            _Button2.default,
            { variant: 'outlined', style: { borderRadius: "100px", fontFamily: "gotham_htfbook" }, onClick: this.handleShow },
            'Show Actions'
          ),
          this.state.ShowActions && _react2.default.createElement(
            'div',
            { className: 'Actions' },
            _react2.default.createElement(
              'div',
              { className: 'Commit', style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
              _react2.default.createElement(
                'div',
                { className: 'ActionName', style: { display: "flex" } },
                this.state.ActionChecked[0] && _react2.default.createElement('input', { type: 'checkbox', checked: true, onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 0);
                  } }),
                !this.state.ActionChecked[0] && _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 0);
                  } }),
                _react2.default.createElement(
                  'p',
                  null,
                  'Commit'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'NumInputs', style: { display: "flex", flexDirection: "column" } },
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeSRC(e, 0);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, min: '0', max: '1000', value: this.state.ActionSRC[0], placeholder: 'SRC Reward' }),
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeREP(e, 0);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, value: this.state.ActionREP[0], min: '0', placeholder: 'Reputation Reward' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Unstar', style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
              _react2.default.createElement(
                'div',
                { className: 'ActionName', style: { display: "flex" } },
                this.state.ActionChecked[1] && _react2.default.createElement('input', { type: 'checkbox', checked: true, onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 1);
                  } }),
                !this.state.ActionChecked[1] && _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 1);
                  } }),
                _react2.default.createElement(
                  'p',
                  null,
                  'Unstar'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'NumInputs', style: { display: "flex", flexDirection: "column" } },
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeSRC(e, 1);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, min: '0', max: '1000', value: this.state.ActionSRC[1], placeholder: 'SRC Reward' }),
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeREP(e, 1);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, value: this.state.ActionREP[1], min: '0', placeholder: 'Reputation Reward' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Upvote', style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
              _react2.default.createElement(
                'div',
                { className: 'ActionName', style: { display: "flex" } },
                this.state.ActionChecked[2] && _react2.default.createElement('input', { type: 'checkbox', checked: true, onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 2);
                  } }),
                !this.state.ActionChecked[2] && _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 2);
                  } }),
                _react2.default.createElement(
                  'p',
                  null,
                  'Upvote'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'NumInputs', style: { display: "flex", flexDirection: "column" } },
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeSRC(e, 2);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, min: '0', max: '1000', value: this.state.ActionSRC[2], placeholder: 'SRC Reward' }),
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeREP(e, 2);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, value: this.state.ActionREP[2], min: '0', placeholder: 'Reputation Reward' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Resolve', style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
              _react2.default.createElement(
                'div',
                { className: 'ActionName', style: { display: "flex" } },
                this.state.ActionChecked[3] && _react2.default.createElement('input', { type: 'checkbox', checked: true, onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 3);
                  } }),
                !this.state.ActionChecked[3] && _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 3);
                  } }),
                _react2.default.createElement(
                  'p',
                  null,
                  'Resolve'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'NumInputs', style: { display: "flex", flexDirection: "column" } },
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeSRC(e, 3);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, min: '0', max: '1000', value: this.state.ActionSRC[3], placeholder: 'SRC Reward' }),
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeREP(e, 3);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, value: this.state.ActionREP[3], min: '0', placeholder: 'Reputation Reward' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Star', style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
              _react2.default.createElement(
                'div',
                { className: 'ActionName', style: { display: "flex" } },
                this.state.ActionChecked[4] && _react2.default.createElement('input', { type: 'checkbox', checked: true, onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 4);
                  } }),
                !this.state.ActionChecked[4] && _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 4);
                  } }),
                _react2.default.createElement(
                  'p',
                  null,
                  'Star'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'NumInputs', style: { display: "flex", flexDirection: "column" } },
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeSRC(e, 4);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, min: '0', max: '1000', value: this.state.ActionSRC[4], placeholder: 'SRC Reward' }),
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeREP(e, 4);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, value: this.state.ActionREP[4], min: '0', placeholder: 'Reputation Reward' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'OpenIssue', style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
              _react2.default.createElement(
                'div',
                { className: 'ActionName', style: { display: "flex" } },
                this.state.ActionChecked[5] && _react2.default.createElement('input', { type: 'checkbox', checked: true, onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 5);
                  } }),
                !this.state.ActionChecked[5] && _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 5);
                  } }),
                _react2.default.createElement(
                  'p',
                  null,
                  'Open Issue'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'NumInputs', style: { display: "flex", flexDirection: "column" } },
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeSRC(e, 5);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, min: '0', max: '1000', value: this.state.ActionSRC[5], placeholder: 'SRC Reward' }),
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeREP(e, 5);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, value: this.state.ActionREP[5], min: '0', placeholder: 'Reputation Reward' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Merge', style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
              _react2.default.createElement(
                'div',
                { className: 'ActionName', style: { display: "flex" } },
                this.state.ActionChecked[6] && _react2.default.createElement('input', { type: 'checkbox', checked: true, onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 6);
                  } }),
                !this.state.ActionChecked[6] && _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(e) {
                    _this2.handleChangeCheck(e, 6);
                  } }),
                _react2.default.createElement(
                  'p',
                  null,
                  'Merge'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'NumInputs', style: { display: "flex", flexDirection: "column" } },
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeSRC(e, 6);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, min: '0', max: '1000', value: this.state.ActionSRC[6], placeholder: 'SRC Reward' }),
                _react2.default.createElement('input', { type: 'number', onChange: function onChange(e) {
                    _this2.handleChangeREP(e, 6);
                  }, style: { width: "120px", fontFamily: "gotham_htfbook" }, value: this.state.ActionREP[6], min: '0', placeholder: 'Reputation Reward' })
              )
            ),
            _react2.default.createElement(
              _Button2.default,
              { variant: 'outlined', style: { borderRadius: "100px", fontFamily: "gotham_htfbook" }, onClick: this.handleHide },
              'Hide Actions'
            )
          )
        )
      );
    }
  }]);

  return RoleCard;
}(_react.Component);

exports.default = RoleCard;