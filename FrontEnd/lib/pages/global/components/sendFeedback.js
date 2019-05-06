'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

var _TextField = require('@material-ui/core/TextField')

var _TextField2 = _interopRequireDefault(_TextField)

var _Dialog = require('@material-ui/core/Dialog')

var _Dialog2 = _interopRequireDefault(_Dialog)

var _axios = require('axios')

var _axios2 = _interopRequireDefault(_axios)

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var SendFeedback = (function (_React$Component) {
  _inherits(SendFeedback, _React$Component)

  function SendFeedback (props) {
    _classCallCheck(this, SendFeedback)

    var _this = _possibleConstructorReturn(this, (SendFeedback.__proto__ || Object.getPrototypeOf(SendFeedback)).call(this, props))

    _this.state = {
      open: false,
      email: '',
      feedback: '',
      sent: false
    }
    _this.handleChange = _this.handleChange.bind(_this)
    _this.handleEmailChange = _this.handleEmailChange.bind(_this)
    _this.handleSubmit = _this.handleSubmit.bind(_this)
    _this.handleOpen = _this.handleOpen.bind(_this)
    _this.handleClose = _this.handleClose.bind(_this)
    return _this
  }

  _createClass(SendFeedback, [{
    key: 'handleOpen',
    value: function handleOpen () {
      this.setState({ open: true })
    }
  }, {
    key: 'handleClose',
    value: function handleClose () {
      this.setState({ open: false })
    }
  }, {
    key: 'handleChange',
    value: function handleChange (e) {
      this.setState({ feedback: e.target.value })
    }
  }, {
    key: 'handleEmailChange',
    value: function handleEmailChange (e) {
      this.setState({ email: e.target.value })
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit () {
      console.log(this.state)
      _axios2.default.post('/mail', {
        email: this.state.email
      })
      _axios2.default.post('/mail2', {
        email: this.state.email,
        feedback: this.state.feedback
      })
      this.setState({ sent: true })
    }
  }, {
    key: 'render',
    value: function render () {
      return _react2.default.createElement(
        'div',
        { className: 'SendFeedback' },
        _react2.default.createElement(
          _Button2.default,
          { className: 'MainButton', variant: 'outlined', size: 'small', onClick: this.handleOpen },
          'Feedback'
        ),
        _react2.default.createElement(
          _Dialog2.default,
          {
            open: this.state.open,
            onClose: this.handleClose,
            'aria-labelledby': 'form-dialog-title'
          },
          !this.state.sent && _react2.default.createElement(
            'div',
            { className: 'FeedbackPopUpForm' },
            _react2.default.createElement(
              'div',
              { className: 'Title' },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'display2' },
                'Bugs & Feedback'
              ),
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'caption' },
                'Notify us about bugs and give us your suggestions! Help improve Source!'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Content' },
              _react2.default.createElement(_TextField2.default, {
                id: 'Email',
                label: 'Email',
                value: this.state.email,
                onChange: this.handleEmailChange,
                fullWidth: true,
                margin: 'normal'
              }),
              _react2.default.createElement(_TextField2.default, {
                label: 'Your Feedback',
                multiline: true,
                value: this.state.feedback,
                onChange: this.handleChange,
                fullWidth: true
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'Actions' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _Button2.default,
                  { className: 'CancelButton', onClick: this.handleClose, color: 'secondary' },
                  'Cancel'
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _Button2.default,
                  { className: 'SubmitButton', onClick: this.handleSubmit, color: 'primary' },
                  'Send Feedback'
                )
              )
            )
          ),
          this.state.sent && _react2.default.createElement(
            'div',
            { className: 'SentSuccessfullyPopUp' },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display1' },
              'Thank you for helping us improve Source!'
            ),
            _react2.default.createElement(
              'div',
              { className: 'Action' },
              _react2.default.createElement(
                _Button2.default,
                { className: 'CloseButton', onClick: this.handleClose, variant: 'raised', color: 'primary' },
                'Close'
              )
            )
          )
        )
      )
    }
  }])

  return SendFeedback
}(_react2.default.Component))

exports.default = SendFeedback
