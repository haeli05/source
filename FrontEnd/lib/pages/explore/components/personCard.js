'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _Card = require('@material-ui/core/Card')

var _Card2 = _interopRequireDefault(_Card)

var _CardContent = require('@material-ui/core/CardContent')

var _CardContent2 = _interopRequireDefault(_CardContent)

var _CardMedia = require('@material-ui/core/CardMedia')

var _CardMedia2 = _interopRequireDefault(_CardMedia)

var _CardHeader = require('@material-ui/core/CardHeader')

var _CardHeader2 = _interopRequireDefault(_CardHeader)

var _CardActions = require('@material-ui/core/CardActions')

var _CardActions2 = _interopRequireDefault(_CardActions)

var _Collapse = require('@material-ui/core/Collapse')

var _Collapse2 = _interopRequireDefault(_Collapse)

var _Avatar = require('@material-ui/core/Avatar')

var _Avatar2 = _interopRequireDefault(_Avatar)

var _IconButton = require('@material-ui/core/IconButton')

var _IconButton2 = _interopRequireDefault(_IconButton)

var _red = require('@material-ui/core/colors/red')

var _red2 = _interopRequireDefault(_red)

var _Favorite = require('@material-ui/icons/Favorite')

var _Favorite2 = _interopRequireDefault(_Favorite)

var _Share = require('@material-ui/icons/Share')

var _Share2 = _interopRequireDefault(_Share)

var _ExpandMore = require('@material-ui/icons/ExpandMore')

var _ExpandMore2 = _interopRequireDefault(_ExpandMore)

var _MoreVert = require('@material-ui/icons/MoreVert')

var _MoreVert2 = _interopRequireDefault(_MoreVert)

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var PersonCard = (function (_React$Component) {
  _inherits(PersonCard, _React$Component)

  function PersonCard () {
    _classCallCheck(this, PersonCard)

    return _possibleConstructorReturn(this, (PersonCard.__proto__ || Object.getPrototypeOf(PersonCard)).apply(this, arguments))
  }

  _createClass(PersonCard, [{
    key: 'render',
    value: function render () {
      return _react2.default.createElement(
        'div',
        { className: 'PersonCard' },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(_CardHeader2.default, {
            avatar: _react2.default.createElement(
              _Avatar2.default,
              null,
              'CS'
            ),
            action: _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_MoreVert2.default, null)
            ),
            title: 'Glorious Leader Carlos Santos',
            subheader: 'El Presidente 2018'
          }),
          _react2.default.createElement(_CardMedia2.default, null),
          _react2.default.createElement(
            _CardContent2.default,
            null,
            _react2.default.createElement(
              _Typography2.default,
              { component: 'p' },
              'Carlos is the Great Leader Honduras never knew it needed'
            )
          ),
          _react2.default.createElement(
            _CardActions2.default,
            { disableActionSpacing: true },
            _react2.default.createElement(
              _IconButton2.default,
              { 'aria-label': 'Add to favorites' },
              _react2.default.createElement(_Favorite2.default, null)
            ),
            _react2.default.createElement(
              _IconButton2.default,
              { 'aria-label': 'Share' },
              _react2.default.createElement(_Share2.default, null)
            ),
            _react2.default.createElement(
              _IconButton2.default,
              {
                'aria-label': 'Show more'
              },
              _react2.default.createElement(_ExpandMore2.default, null)
            )
          )
        )
      )
    }
  }])

  return PersonCard
}(_react2.default.Component))

exports.default = PersonCard
