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

var _reactIconsKit = require('react-icons-kit')

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit)

var _arrows_plus = require('react-icons-kit/linea/arrows_plus')

var _TextField = require('@material-ui/core/TextField')

var _TextField2 = _interopRequireDefault(_TextField)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var NewBranchDialogue = (function (_React$Component) {
  _inherits(NewBranchDialogue, _React$Component)

  function NewBranchDialogue (props) {
    _classCallCheck(this, NewBranchDialogue)

    var _this = _possibleConstructorReturn(this, (NewBranchDialogue.__proto__ || Object.getPrototypeOf(NewBranchDialogue)).call(this, props))

    _this.state = {
      NewBranchName: '',
      SourceBranch: 'master',
      open: false
    }
    _this.handleChange = _this.handleChange.bind(_this)
    _this.handleSubmit = _this.handleSubmit.bind(_this)
    _this.handleKeyPress = _this.handleKeyPress.bind(_this)
    return _this
  }

  _createClass(NewBranchDialogue, [{
    key: 'handleChange',
    value: function handleChange (e) {
      this.setState({ NewBranchName: e.target.value })
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit (e) {
      e.preventDefault()
      this.props.newBranch(this.state.SourceBranch, this.state.NewBranchName)
      this.setState({ open: false })
    }
  }, {
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
    key: 'handleKeyPress',
    value: function handleKeyPress (e) {
      if (e.key === 'Enter') {
        this.handleSubmit()
      }
    }
  }, {
    key: 'render',
    value: function render () {
      var _this2 = this

      return _react2.default.createElement(
        'div',
        { className: 'NewBranchButton' },
        _react2.default.createElement(
          _Button2.default,
          { onClick: this.handleClickOpen, className: 'Button' },
          _react2.default.createElement(_reactIconsKit2.default, { icon: _arrows_plus.arrows_plus, size: 25 })
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
            _react2.default.createElement(_TextField2.default, {
              id: 'branchname-input',
              label: 'New branch name',
              value: this.state.NewBranchName,
              onChange: this.handleChange,
              onKeyPress: function onKeyPress (e) {
                _this2.handleKeyPress(e)
              },
              fullWidth: true,
              margin: 'normal'
            })
          ),
          _react2.default.createElement(
            _DialogActions2.default,
            null,
            _react2.default.createElement(
              _Button2.default,
              { color: 'secondary', onClick: this.handleClose },
              'Cancel'
            ),
            _react2.default.createElement(
              _Button2.default,
              { color: 'primary', onClick: this.handleSubmit },
              'Submit'
            )
          )
        )
      )
    }
  }])

  return NewBranchDialogue
}(_react2.default.Component))

exports.default = NewBranchDialogue
