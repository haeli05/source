'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _reactIconsKit = require('react-icons-kit');

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit);

var _medium = require('react-icons-kit/fa/medium');

var _socialTwitter = require('react-icons-kit/ionicons/socialTwitter');

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _paperPlane = require('react-icons-kit/fa/paperPlane');

var _sendFeedback = require('./sendFeedback');

var _sendFeedback2 = _interopRequireDefault(_sendFeedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Footer', style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
        _react2.default.createElement(
          'div',
          { className: 'left', style: { marginLeft: "5px" } },
          _react2.default.createElement(_sendFeedback2.default, { props: this.props })
        ),
        _react2.default.createElement(
          'div',
          { className: 'Middle' },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'caption', gutterBottom: true, align: 'center' },
            'Source Alpha v0.2 \xA9 2018'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Icons' },
          _react2.default.createElement(
            'a',
            { href: 'https://t.me/joinchat/JMBo4kzE_1SCgMbeuqvCJQ' },
            _react2.default.createElement(
              _IconButton2.default,
              { className: 'Telegram' },
              _react2.default.createElement(_reactIconsKit2.default, { icon: _paperPlane.paperPlane })
            )
          ),
          _react2.default.createElement(
            'a',
            { href: 'https://medium.com/source-blog' },
            _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_reactIconsKit2.default, { icon: _medium.medium })
            )
          ),
          _react2.default.createElement(
            'a',
            { href: 'https://twitter.com/Source_platform' },
            _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_reactIconsKit2.default, { icon: _socialTwitter.socialTwitter })
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;