'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _styles = require('@material-ui/core/styles')

var _Table = require('@material-ui/core/Table')

var _Table2 = _interopRequireDefault(_Table)

var _TableBody = require('@material-ui/core/TableBody')

var _TableBody2 = _interopRequireDefault(_TableBody)

var _TableCell = require('@material-ui/core/TableCell')

var _TableCell2 = _interopRequireDefault(_TableCell)

var _TableHead = require('@material-ui/core/TableHead')

var _TableHead2 = _interopRequireDefault(_TableHead)

var _TableRow = require('@material-ui/core/TableRow')

var _TableRow2 = _interopRequireDefault(_TableRow)

var _forkMenu = require('./forkMenu')

var _forkMenu2 = _interopRequireDefault(_forkMenu)

var _branchMenu = require('./branchMenu')

var _branchMenu2 = _interopRequireDefault(_branchMenu)

var _newBranchButton = require('./newBranchButton')

var _newBranchButton2 = _interopRequireDefault(_newBranchButton)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var styles = function styles (theme) {
  return {
    root: {
      width: '100%',
      marginTop: 0,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  }
}

var Files = (function (_React$Component) {
  _inherits(Files, _React$Component)

  function Files () {
    _classCallCheck(this, Files)

    return _possibleConstructorReturn(this, (Files.__proto__ || Object.getPrototypeOf(Files)).apply(this, arguments))
  }

  _createClass(Files, [{
    key: 'render',
    value: function render () {
      var _this2 = this

      var classes = this.props.classes

      return _react2.default.createElement(
        'div',
        { className: 'Files' },
        _react2.default.createElement(
          'div',
          { className: 'Actions' },
          _react2.default.createElement(
            'div',
            { className: 'Branches', style: { display: 'flex', alignItems: 'center' } },
            _react2.default.createElement(_branchMenu2.default, { id: this.props.id, branches: this.props.branches, getBranches: this.props.getBranches }),
            _react2.default.createElement(_newBranchButton2.default, { newBranch: this.props.newBranch })
          ),
          _react2.default.createElement(
            'div',
            { className: 'ForkMenu' },
            _react2.default.createElement(_forkMenu2.default, null)
          )
        ),
        _react2.default.createElement(
          _Table2.default,
          { className: classes.table },
          _react2.default.createElement(
            _TableHead2.default,
            null,
            _react2.default.createElement(
              _TableRow2.default,
              null,
              _react2.default.createElement(
                _TableCell2.default,
                null,
                'File Name'
              ),
              _react2.default.createElement(
                _TableCell2.default,
                null,
                'Last Commit'
              ),
              _react2.default.createElement(
                _TableCell2.default,
                null,
                'By'
              ),
              _react2.default.createElement(
                _TableCell2.default,
                null,
                'Date'
              )
            )
          ),
          _react2.default.createElement(
            _TableBody2.default,
            null,
            this.props.files.map(function (n) {
              return _react2.default.createElement(
                _TableRow2.default,
                { key: n.id,
                  onClick: function onClick () {
                    return _this2.props.handleFile(n.id, n.name)
                  },
                  className: 'TableRow' },
                _react2.default.createElement(
                  _TableCell2.default,
                  { component: 'th', scope: 'row' },
                  n.name
                ),
                _react2.default.createElement(
                  _TableCell2.default,
                  { className: 'ComingSoon' },
                  'coming soon'
                ),
                _react2.default.createElement(
                  _TableCell2.default,
                  { className: 'ComingSoon' },
                  'coming soon'
                ),
                _react2.default.createElement(
                  _TableCell2.default,
                  { className: 'ComingSoon' },
                  'coming soon'
                )
              )
            })
          )
        )
      )
    }
  }])

  return Files
}(_react2.default.Component))

Files.propTypes = {
  classes: _propTypes2.default.object.isRequired
}

exports.default = (0, _styles.withStyles)(styles)(Files)
