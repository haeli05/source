'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

var _Menu = require('@material-ui/core/Menu')

var _Menu2 = _interopRequireDefault(_Menu)

var _MenuItem = require('@material-ui/core/MenuItem')

var _MenuItem2 = _interopRequireDefault(_MenuItem)

var _music_diapason = require('react-icons-kit/linea/music_diapason')

var _reactIconsKit = require('react-icons-kit')

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var SimpleMenu = (function (_React$Component) {
  _inherits(SimpleMenu, _React$Component)

  function SimpleMenu (props) {
    _classCallCheck(this, SimpleMenu)

    var _this = _possibleConstructorReturn(this, (SimpleMenu.__proto__ || Object.getPrototypeOf(SimpleMenu)).call(this, props))

    _this.state = {
      anchorEl: null
    }
    return _this
  }

  _createClass(SimpleMenu, [{
    key: 'handleClick',
    value: function handleClick (event) {
      this.setState({ anchorEl: event.currentTarget })
    }
  }, {
    key: 'handleClose',
    value: function handleClose () {
      this.setState({ anchorEl: null })
    }
  }, {
    key: 'render',
    value: function render () {
      var anchorEl = this.state.anchorEl

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Button2.default,
          {
            'aria-owns': anchorEl ? 'simple-menu' : null,
            'aria-haspopup': 'true',
            onClick: this.handleClick
          },
          _react2.default.createElement(_reactIconsKit2.default, { icon: _music_diapason.music_diapason, size: 20 })
        ),
        _react2.default.createElement(
          _Menu2.default,
          {
            id: 'simple-menu',
            anchorEl: anchorEl,
            open: Boolean(anchorEl),
            onClose: this.handleClose
          },
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose, disabled: true },
            'Download as zip'
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: this.handleClose, disabled: true },
            'Download as tar'
          )
        )
      )
    }
  }])

  return SimpleMenu
}(_react2.default.Component))

exports.default = SimpleMenu
