'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _styles = require('@material-ui/core/styles')

var _Paper = require('@material-ui/core/Paper')

var _Paper2 = _interopRequireDefault(_Paper)

var _Chip = require('@material-ui/core/Chip')

var _Chip2 = _interopRequireDefault(_Chip)

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

var _Card = require('@material-ui/core/Card')

var _Card2 = _interopRequireDefault(_Card)

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

var _Avatar = require('@material-ui/core/Avatar')

var _Avatar2 = _interopRequireDefault(_Avatar)

var _userTabs = require('./components/userTabs')

var _userTabs2 = _interopRequireDefault(_userTabs)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var UserPage = (function (_Component) {
  _inherits(UserPage, _Component)

  function UserPage (props) {
    _classCallCheck(this, UserPage)

    var _this = _possibleConstructorReturn(this, (UserPage.__proto__ || Object.getPrototypeOf(UserPage)).call(this, props))

    _this.state = {
      currentTab: 0
    }
    return _this
  }

  _createClass(UserPage, [{
    key: 'handleChange',
    value: function handleChange (event) {
      this.setState({ currentTab: event })
    }
  }, {
    key: 'render',
    value: function render () {
      return _react2.default.createElement(
        'div',
        { className: 'UserPage' },
        _react2.default.createElement(
          'div',
          { className: 'Header' },
          _react2.default.createElement(
            'div',
            { className: 'PageTitle' },
            _react2.default.createElement(
              _Typography2.default,
              { id: 'overline' },
              'PERSON'
            ),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display4' },
              this.props.match.params.user
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ActionButtons' },
            _react2.default.createElement(
              _Button2.default,
              { variant: 'outlined', className: 'Button' },
              'Favourite'
            ),
            _react2.default.createElement(
              _Button2.default,
              { variant: 'raised', color: 'primary', className: 'Button' },
              'Send SOURCE'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Content' },
          _react2.default.createElement(
            'div',
            { className: 'Profile' },
            _react2.default.createElement(
              _Paper2.default,
              { className: 'Paper' },
              _react2.default.createElement(
                'div',
                { className: 'AvatarDiv' },
                _react2.default.createElement(
                  _Avatar2.default,
                  { className: 'Avatar' },
                  this.props.match.params.user[0]
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'BioDiv' },
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'headline' },
                  'bio'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'SkillsDiv' },
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title' },
                  'Skills'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'ChipsDiv' },
                  _react2.default.createElement(_Chip2.default, { className: 'Chip', label: 'Blockchain' }),
                  _react2.default.createElement(_Chip2.default, { className: 'Chip', label: 'C++' }),
                  _react2.default.createElement(_Chip2.default, { className: 'Chip', label: 'Security' }),
                  _react2.default.createElement(_Chip2.default, { className: 'Chip', label: 'Management' }),
                  _react2.default.createElement(_Chip2.default, { className: 'Chip', label: 'AI' }),
                  _react2.default.createElement(_Chip2.default, { className: 'Chip', label: 'Machine Learning' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'FollowDiv' },
                _react2.default.createElement(
                  _Button2.default,
                  { variant: 'outlined' },
                  'Follow'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Display' },
            _react2.default.createElement(
              _Paper2.default,
              { className: 'Paper' },
              _react2.default.createElement(_userTabs2.default, null)
            )
          )
        )
      )
    }
  }])

  return UserPage
}(_react.Component))

exports.default = UserPage
