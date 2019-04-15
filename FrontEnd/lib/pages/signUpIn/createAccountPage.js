'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _user = require('./../../actions/user.actions');

var _user2 = require('./../../reducers/user.reducer');

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateAccountPage = function (_Component) {
  _inherits(CreateAccountPage, _Component);

  function CreateAccountPage(props) {
    _classCallCheck(this, CreateAccountPage);

    var _this = _possibleConstructorReturn(this, (CreateAccountPage.__proto__ || Object.getPrototypeOf(CreateAccountPage)).call(this, props));

    _this.state = {
      name: "",
      username: "",
      password: "",
      passconfirm: "",
      email: ""
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    return _this;
  }

  _createClass(CreateAccountPage, [{
    key: 'handleChange',
    value: function handleChange(target, e) {
      if (target === "username") {
        this.setState({ username: e.target.value });
        this.setState({ name: e.target.value });
      } else {
        var change = {};
        change[target] = e.target.value;
        this.setState(change);
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.state.password === this.state.passconfirm) {
        this.props.dispatch((0, _user.newUser)(this.state));
      } else {
        alert("Passwords do not match");
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      if (e.key === 'Enter') {
        this.handleSubmit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.user.username !== undefined && this.props.user.token !== false) {
        this.props.history.push('/source/' + this.state.username);
      }
      return _react2.default.createElement(
        'div',
        { className: 'CreateAccountPage' },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'display3' },
          'Create Account'
        ),
        _react2.default.createElement(
          'div',
          { className: 'Form' },
          _react2.default.createElement(_TextField2.default, {
            id: 'username-input',
            label: 'Username',
            value: this.state.username,
            onChange: function onChange(e) {
              _this2.handleChange("username", e);
            },
            onKeyPress: function onKeyPress(e) {
              _this2.handleKeyPress(e);
            },
            margin: 'normal'
          }),
          _react2.default.createElement(_TextField2.default, {
            id: 'email-input',
            label: 'Email',
            value: this.state.email,
            onChange: function onChange(e) {
              _this2.handleChange("email", e);
            },
            onKeyPress: function onKeyPress(e) {
              _this2.handleKeyPress(e);
            },
            margin: 'normal'
          }),
          _react2.default.createElement(_TextField2.default, {
            id: 'password-input',
            label: 'Password',
            type: 'password',
            value: this.state.password,
            onChange: function onChange(e) {
              _this2.handleChange("password", e);
            },
            onKeyPress: function onKeyPress(e) {
              _this2.handleKeyPress(e);
            },
            margin: 'normal'
          }),
          _react2.default.createElement(_TextField2.default, {
            id: 'passconfirm-input',
            label: 'Confirm Password',
            type: 'password',
            value: this.state.passconfirm,
            onChange: function onChange(e) {
              _this2.handleChange("passconfirm", e);
            },
            onKeyPress: function onKeyPress(e) {
              _this2.handleKeyPress(e);
            },
            margin: 'normal'
          }),
          this.state.password !== this.state.passconfirm && _react2.default.createElement(
            _Typography2.default,
            { variant: 'caption', className: 'PasswordAlert' },
            'passwords do not match!'
          ),
          _react2.default.createElement(
            _Button2.default,
            { variant: 'raised', color: 'primary', className: 'SubmitButton', onClick: this.handleSubmit },
            'Submit'
          )
        )
      );
    }
  }]);

  return CreateAccountPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: (0, _user2.getUser)(state),
    good: (0, _user2.getGood)(state)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(CreateAccountPage);