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

var _DialogTitle = require('@material-ui/core/DialogTitle')

var _DialogTitle2 = _interopRequireDefault(_DialogTitle)

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
      PrivateKey: '',
      TargetAddress: '',
      Amount: '',
      open: false
    }
    _this.handlePrivateKeyChange = _this.handlePrivateKeyChange.bind(_this)
    _this.handleTargetAddressChange = _this.handleTargetAddressChange.bind(_this)
    _this.handleAmountChange = _this.handleAmountChange.bind(_this)
    _this.handleSubmit = _this.handleSubmit.bind(_this)
    return _this
  }

  _createClass(NewBranchDialogue, [{
    key: 'handlePrivateKeyChange',
    value: function handlePrivateKeyChange (e) {
      this.setState({ PrivateKey: e.target.value })
    }
  }, {
    key: 'handleTargetAddressChange',
    value: function handleTargetAddressChange (e) {
      this.setState({ TargetAddress: e.target.value })
    }
  }, {
    key: 'handleAmountChange',
    value: function handleAmountChange (e) {
      this.setState({ Amount: e.target.value })
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit (e) {
      e.preventDefault()
      this.props.handleSubmit(this.state.PrivateKey, this.state.TargetAddress, this.state.Amount)
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
    key: 'render',
    value: function render () {
      var _this2 = this

      return _react2.default.createElement(
        'div',
        { style: { marginLeft: '50px' }, className: 'TransferButton' },
        _react2.default.createElement(
          _Button2.default,
          { disabled: true, variant: 'outlined' },
          'Transfer'
        ),
        _react2.default.createElement(
          _Dialog2.default,
          {
            open: this.state.open,
            onClose: this.handleClose,
            'aria-labelledby': 'alert-dialog-title',
            'aria-describedby': 'alert-dialog-TargetAddress'
          },
          _react2.default.createElement(
            _DialogTitle2.default,
            { id: 'alert-dialog-title' },
            'Transfer'
          ),
          _react2.default.createElement(
            _DialogContent2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'TransferButtonInputs' },
              _react2.default.createElement(
                'p',
                null,
                'Private Key'
              ),
              _react2.default.createElement('input', { style: { width: '500px' },
                value: this.state.PrivateKey,
                onChange: function onChange (e) {
                  _this2.handlePrivateKeyChange(e)
                } }),
              _react2.default.createElement(
                'p',
                null,
                'Receiving Address'
              ),
              _react2.default.createElement('input', { style: { width: '500px' },
                value: this.state.TargetAddress,
                onChange: function onChange (e) {
                  _this2.handleTargetAddressChange(e)
                } }),
              _react2.default.createElement(
                'p',
                null,
                'Amount'
              ),
              _react2.default.createElement('input', { type: 'number',
                step: '0.00001',
                style: { width: '500px' },
                value: this.state.Amount,
                min: '0',
                onChange: function onChange (e) {
                  _this2.handleAmountChange(e)
                } })
            )
          ),
          _react2.default.createElement(
            _DialogActions2.default,
            null,
            _react2.default.createElement(
              _Button2.default,
              { variant: 'outlined', onClick: this.handleSubmit, style: { fontFamily: 'inherit', borderRadius: '25px', marginTop: '50px', marginBottom: '50px', textTransform: 'capitalize' } },
              'Submit'
            ),
            _react2.default.createElement(
              _Button2.default,
              { variant: 'outlined', onClick: this.handleClose, style: { fontFamily: 'inherit', borderRadius: '25px', marginTop: '50px', marginBottom: '50px', textTransform: 'capitalize' } },
              'Cancel'
            )
          )
        )
      )
    }
  }])

  return NewBranchDialogue
}(_react2.default.Component))

exports.default = NewBranchDialogue
