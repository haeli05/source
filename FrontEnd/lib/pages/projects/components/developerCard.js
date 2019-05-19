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

var _Card = require('@material-ui/core/Card')

var _Card2 = _interopRequireDefault(_Card)

var _CardContent = require('@material-ui/core/CardContent')

var _CardContent2 = _interopRequireDefault(_CardContent)

var _reactIconsKit = require('react-icons-kit')

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit)

var _ic_grade = require('react-icons-kit/md/ic_grade')

var _codeFork = require('react-icons-kit/fa/codeFork')

var _exclamationCircle = require('react-icons-kit/fa/exclamationCircle')

var _bitcoin = require('react-icons-kit/fa/bitcoin')

var _code = require('react-icons-kit/fa/code')

var _userPlus = require('react-icons-kit/fa/userPlus')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

var SimpleCard = (function (_React$Component) {
  _inherits(SimpleCard, _React$Component)

  function SimpleCard (props) {
    _classCallCheck(this, SimpleCard)

    var _this = _possibleConstructorReturn(this, (SimpleCard.__proto__ || Object.getPrototypeOf(SimpleCard)).call(this, props))

    _this.state = {
      liked: false,
      Username: _this.props.Username,
      Bio: _this.props.Bio
    }
    return _this
  }

  _createClass(SimpleCard, [{
    key: 'handleClickFavourite',
    value: function handleClickFavourite () {
      if (this.state.liked) {
        this.setState({ liked: false })
      } else {
        this.setState({ liked: true })
      }
    }
  }, {
    key: 'render',
    value: function render () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Card2.default,
          { className: 'RepoCardLong', elevation: 0, style: { backgroundColor: '#f4f4f4', marginTop: '5px', marginBottom: '5px', paddingLeft: '10px' } },
          _react2.default.createElement(
            _CardContent2.default,
            { style: { padding: '8px', minWidth: '300px' } },
            _react2.default.createElement(
              'div',
              { className: 'RepoDetails', style: { borderBottom: 'solid 1px lightgrey', display: 'flex', alignItems: 'baseline' } },
              _react2.default.createElement(
                'a',
                { className: 'RepoTitle', href: '/repo', style: { fontFamily: 'gotham_htfmedium', color: '#72b2e2', fontSize: '18px' } },
                this.state.Username
              ),
              _react2.default.createElement(
                'div',
                { className: 'FavouriteButton', style: { display: 'flex', marginLeft: 'auto', cursor: 'pointer' }, onClick: this.handleClickFavourite },
                this.state.liked && _react2.default.createElement(_reactIconsKit2.default, { size: 20, icon: _userPlus.userPlus, style: { color: '#79e094' } }),
                !this.state.liked && _react2.default.createElement(_reactIconsKit2.default, { size: 20, icon: _userPlus.userPlus, style: { color: '#645964' } })
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', alignItems: 'center' } },
              _react2.default.createElement('div', { style: { width: '40px', height: '40px', backgroundColor: 'darkgrey', borderRadius: '6px', marginRight: '10px', marginTop: '10px' } }),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'p',
                  { className: 'RepoDescription', style: { margin: '0', marginTop: '10px', paddingBottom: '5px', fontFamily: 'gotham_htfbook', color: 'grey' } },
                  this.state.Bio
                )
              )
            )
          )
        )
      )
    }
  }])

  return SimpleCard
}(_react2.default.Component))

SimpleCard.propTypes = {
  classes: _propTypes2.default.object.isRequired
}

exports.default = (0, _styles.withStyles)(styles)(SimpleCard)
