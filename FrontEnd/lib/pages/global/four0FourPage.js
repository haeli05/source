'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Four0FourPage = function (_React$Component) {
  _inherits(Four0FourPage, _React$Component);

  function Four0FourPage() {
    _classCallCheck(this, Four0FourPage);

    return _possibleConstructorReturn(this, (Four0FourPage.__proto__ || Object.getPrototypeOf(Four0FourPage)).apply(this, arguments));
  }

  _createClass(Four0FourPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Four0FourPage' },
        _react2.default.createElement(
          _Paper2.default,
          { className: 'Content' },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'display3' },
            'You took a left when you should have taken a right'
          ),
          _react2.default.createElement(
            'a',
            { href: '/' },
            _react2.default.createElement(
              _Button2.default,
              { className: 'Button', variant: 'raised', color: 'primary', size: 'large' },
              'Let\'s backtrack'
            )
          )
        )
      );
    }
  }]);

  return Four0FourPage;
}(_react2.default.Component);

exports.default = Four0FourPage;