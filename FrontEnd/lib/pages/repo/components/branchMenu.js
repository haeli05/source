'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _styles = require('@material-ui/core/styles')

var _List = require('@material-ui/core/List')

var _List2 = _interopRequireDefault(_List)

var _ListItem = require('@material-ui/core/ListItem')

var _ListItem2 = _interopRequireDefault(_ListItem)

var _ListItemText = require('@material-ui/core/ListItemText')

var _ListItemText2 = _interopRequireDefault(_ListItemText)

var _MenuItem = require('@material-ui/core/MenuItem')

var _MenuItem2 = _interopRequireDefault(_MenuItem)

var _Menu = require('@material-ui/core/Menu')

var _Menu2 = _interopRequireDefault(_Menu)

var _arrows_down = require('react-icons-kit/linea/arrows_down')

var _reactIconsKit = require('react-icons-kit')

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var styles = function styles (theme) {
  return {
    root: {
      width: 300,
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  }
}

var SimpleListMenu = (function (_React$Component) {
  _inherits(SimpleListMenu, _React$Component)

  function SimpleListMenu (props) {
    _classCallCheck(this, SimpleListMenu)

    var _this = _possibleConstructorReturn(this, (SimpleListMenu.__proto__ || Object.getPrototypeOf(SimpleListMenu)).call(this, props))

    _this.state = {
      branchChoice: 'master',
      anchorEl: null,
      selectedIndex: 0
    }
    return _this
  }

  _createClass(SimpleListMenu, [{
    key: 'handleClickListItem',
    value: function handleClickListItem (event) {
      this.setState({ anchorEl: event.currentTarget })
    }
  }, {
    key: 'handleMenuItemClick',
    value: function handleMenuItemClick (event, index, branchName) {
      this.setState({ branchChoice: branchName, anchorEl: null })
    }
  }, {
    key: 'handleClose',
    value: function handleClose () {
      this.setState({ anchorEl: null })
    }
  }, {
    key: 'render',
    value: function render () {
      var _this2 = this

      var anchorEl = this.state.anchorEl

      return _react2.default.createElement(
        'div',
        { className: 'BranchMenu' },
        _react2.default.createElement(
          _List2.default,
          { component: 'nav', className: 'Button' },
          _react2.default.createElement(
            _ListItem2.default,
            {
              button: true,
              'aria-haspopup': 'true',
              'aria-controls': 'lock-menu',
              'aria-label': 'branch-select',
              onClick: function onClick (e) {
                _this2.handleClickListItem(e); _this2.props.getBranches()
              }
            },
            _react2.default.createElement(_ListItemText2.default, {
              primary: this.state.branchChoice
            }),
            _react2.default.createElement(_reactIconsKit2.default, { icon: _arrows_down.arrows_down, size: 20 })
          )
        ),
        _react2.default.createElement(
          _Menu2.default,
          {
            id: 'lock-menu',
            anchorEl: anchorEl,
            open: Boolean(anchorEl),
            onClose: this.handleClose
          },
          !this.props.branches && _react2.default.createElement(
            _MenuItem2.default,
            { onClick: function onClick (event) {
              return _this2.handleMenuItemClick(event, 0)
            } },
            this.props.branchChoice
          ),
          this.props.branches && this.props.branches.sort().map(function (branch, index) {
            return _react2.default.createElement(
              _MenuItem2.default,
              {
                key: index,
                selected: index === _this2.state.selectedIndex,
                onClick: function onClick (event) {
                  return _this2.handleMenuItemClick(event, index, branch.name)
                } },
              branch.name
            )
          })
        )
      )
    }
  }])

  return SimpleListMenu
}(_react2.default.Component))

exports.default = (0, _styles.withStyles)(styles)(SimpleListMenu)
