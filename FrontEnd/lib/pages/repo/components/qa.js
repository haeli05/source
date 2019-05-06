'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _styles = require('@material-ui/core/styles')

var _List = require('@material-ui/core/List')

var _List2 = _interopRequireDefault(_List)

var _ListItem = require('@material-ui/core/ListItem')

var _ListItem2 = _interopRequireDefault(_ListItem)

var _ListItemIcon = require('@material-ui/core/ListItemIcon')

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon)

var _ListItemText = require('@material-ui/core/ListItemText')

var _ListItemText2 = _interopRequireDefault(_ListItemText)

var _Error = require('@material-ui/icons/Error')

var _Error2 = _interopRequireDefault(_Error)

var _Comment = require('@material-ui/icons/Comment')

var _Comment2 = _interopRequireDefault(_Comment)

var _Paper = require('@material-ui/core/Paper')

var _Paper2 = _interopRequireDefault(_Paper)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var styles = function styles (theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  }
}

function InsetList (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paper2.default,
      { className: 'RepoPageIssuesPaper', elevation: 4 },
      _react2.default.createElement(
        _List2.default,
        { component: 'nav' },
        _react2.default.createElement(
          _ListItem2.default,
          { button: true },
          _react2.default.createElement(
            _ListItemIcon2.default,
            null,
            _react2.default.createElement(_Error2.default, null)
          ),
          _react2.default.createElement(_ListItemText2.default, { inset: true, primary: 'help xyz is not working', secondary: '#13 asked by $author on dd/mm/yy' }),
          _react2.default.createElement(
            _ListItemIcon2.default,
            null,
            _react2.default.createElement(_Comment2.default, null)
          ),
          _react2.default.createElement(
            'p',
            null,
            '12'
          )
        ),
        _react2.default.createElement(
          _ListItem2.default,
          { button: true },
          _react2.default.createElement(
            _ListItemIcon2.default,
            null,
            _react2.default.createElement(_Error2.default, null)
          ),
          _react2.default.createElement(_ListItemText2.default, { inset: true, primary: 'can\'t access files', secondary: '#13 asked by $author on dd/mm/yy' }),
          _react2.default.createElement(
            _ListItemIcon2.default,
            null,
            _react2.default.createElement(_Comment2.default, null)
          ),
          _react2.default.createElement(
            'p',
            null,
            '12'
          )
        )
      )
    )
  )
}

InsetList.propTypes = {
  classes: _propTypes2.default.object.isRequired
}

exports.default = (0, _styles.withStyles)(styles)(InsetList)
