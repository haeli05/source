'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

var _Dialog = require('@material-ui/core/Dialog')

var _Dialog2 = _interopRequireDefault(_Dialog)

var _DialogActions = require('@material-ui/core/DialogActions')

var _DialogActions2 = _interopRequireDefault(_DialogActions)

var _DialogContent = require('@material-ui/core/DialogContent')

var _DialogContent2 = _interopRequireDefault(_DialogContent)

var _DialogContentText = require('@material-ui/core/DialogContentText')

var _DialogContentText2 = _interopRequireDefault(_DialogContentText)

var _checkCircle = require('react-icons-kit/fa/checkCircle')

var _reactIconsKit = require('react-icons-kit')

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var AlertDialog = (function (_React$Component) {
  _inherits(AlertDialog, _React$Component)

  function AlertDialog (props) {
    _classCallCheck(this, AlertDialog)

    var _this = _possibleConstructorReturn(this, (AlertDialog.__proto__ || Object.getPrototypeOf(AlertDialog)).call(this, props))

    _this.state = {
      open: false
    }
    return _this
  }

  _createClass(AlertDialog, [{
    key: 'handleClickOpen',
    value: function handleClickOpen () {
      this.setState({ open: true })
    }
  }, {
    key: 'handleClose',
    value: function handleClose () {
      this.setState({ open: false })
    }
  }, {
    key: 'handleAccept',
    value: function handleAccept () {
      this.setState({ open: false })
    }
  }, {
    key: 'render',
    value: function render () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Button2.default,
          { onClick: this.handleClickOpen, style: { fontFamily: 'gotham_htfbook' } },
          _react2.default.createElement(_reactIconsKit2.default, { icon: _checkCircle.checkCircle }),
          'Accept'
        ),
        _react2.default.createElement(
          _Dialog2.default,
          {
            open: this.state.open,
            onClose: this.handleClose,
            'aria-labelledby': 'alert-dialog-title',
            'aria-describedby': 'alert-dialog-description'
          },
          _react2.default.createElement(
            _DialogContent2.default,
            null,
            _react2.default.createElement(
              _DialogContentText2.default,
              { id: 'alert-dialog-description', style: { fontFamily: 'gotham_htfbook' } },
              'Are you sure you wish to accept this pull request?'
            )
          ),
          _react2.default.createElement(
            _DialogActions2.default,
            null,
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.handleAccept, color: 'primary', style: { fontFamily: 'gotham_htfbook' } },
              'Accept'
            ),
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.handleClose, color: 'primary', autoFocus: true, style: { fontFamily: 'gotham_htfbook' } },
              'Cancel'
            )
          )
        )
      )
    }
  }])

  return AlertDialog
}(_react2.default.Component))

exports.default = AlertDialog
