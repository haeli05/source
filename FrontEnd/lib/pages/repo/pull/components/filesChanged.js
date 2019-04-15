'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  };
};

function InsetList(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Paper2.default,
      { className: 'PullPageFilesChanged', elevation: 0 },
      _react2.default.createElement(
        _List2.default,
        { component: 'nav' },
        _react2.default.createElement(
          'a',
          { href: '/file', style: { textDecoration: "none" } },
          _react2.default.createElement(
            _ListItem2.default,
            { button: true },
            _react2.default.createElement(_ListItemText2.default, { inset: true, primary: 'file.txt' })
          )
        ),
        _react2.default.createElement(
          'a',
          { href: '/file', style: { textDecoration: "none" } },
          _react2.default.createElement(
            _ListItem2.default,
            { button: true },
            _react2.default.createElement(_ListItemText2.default, { inset: true, primary: 'other.py' })
          )
        )
      )
    )
  );
}

InsetList.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(InsetList);