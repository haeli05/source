'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactRedux = require('react-redux')

var _user = require('./../../reducers/user.reducer')

var _user2 = require('./../../actions/user.actions')

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

var _TextField = require('@material-ui/core/TextField')

var _TextField2 = _interopRequireDefault(_TextField)

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var LoginPage = (function (_Component) {
  _inherits(LoginPage, _Component)

  function LoginPage (props) {
    _classCallCheck(this, LoginPage)

    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props))

    _this.state = {
      username: '',
      password: ''
    }
    _this.handleChangeUser = _this.handleChangeUser.bind(_this)
    _this.handleChangePassword = _this.handleChangePassword.bind(_this)
    _this.submit = _this.submit.bind(_this)
    _this.goHome = _this.goHome.bind(_this)
    _this.handleKeyPress = _this.handleKeyPress.bind(_this)
    return _this
  }

  _createClass(LoginPage, [{
    key: 'handleChangeUser',
    value: function handleChangeUser (e) {
      this.setState({ username: e.target.value })
    }
  }, {
    key: 'handleChangePassword',
    value: function handleChangePassword (e) {
      this.setState({ password: e.target.value })
    }
  }, {
    key: 'submit',
    value: function submit () {
      this.props.dispatch((0, _user2.signin)(this.state))
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress (e) {
      if (e.key === 'Enter') {
        this.submit()
      }
    }
  }, {
    key: 'goHome',
    value: function goHome () {
      this.props.history.push('/source/' + this.state.username + '/')
    }
  }, {
    key: 'render',
    value: function render () {
      var _this2 = this

      return _react2.default.createElement(
        'div',
        { className: 'LoginPage' },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'display3' },
          'Login'
        ),
        _react2.default.createElement(
          'div',
          { className: 'Form' },
          _react2.default.createElement(_TextField2.default, {
            id: 'email-input',
            label: 'Username / Email',
            value: this.state.email,
            onChange: this.handleChangeUser,
            onKeyPress: function onKeyPress (e) {
              _this2.handleKeyPress(e)
            },
            margin: 'normal'
          }),
          _react2.default.createElement(_TextField2.default, {
            id: 'password-input',
            label: 'Password',
            type: 'password',
            value: this.state.password,
            onChange: this.handleChangePassword,
            onKeyPress: function onKeyPress (e) {
              _this2.handleKeyPress(e)
            },
            margin: 'normal'
          }),
          _react2.default.createElement(
            _Button2.default,
            { variant: 'raised', color: 'primary', onClick: this.submit, className: 'SubmitButton' },
            'Submit'
          )
        )
      )
    }
  }])

  return LoginPage
}(_react.Component))

var mapStateToProps = function mapStateToProps (state) {
  return {
    user: (0, _user.getUser)(state)
  }
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(LoginPage)
