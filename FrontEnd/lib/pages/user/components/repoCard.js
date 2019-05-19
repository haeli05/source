'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _Card = require('@material-ui/core/Card')

var _Card2 = _interopRequireDefault(_Card)

var _CardContent = require('@material-ui/core/CardContent')

var _CardContent2 = _interopRequireDefault(_CardContent)

var _reactIconsKit = require('react-icons-kit')

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit)

var _star = require('react-icons-kit/fa/star')

var _starO = require('react-icons-kit/fa/starO')

var _ecommerce_money = require('react-icons-kit/linea/ecommerce_money')

var _arrows_question = require('react-icons-kit/linea/arrows_question')

var _music_diapason = require('react-icons-kit/linea/music_diapason')

var _basic_pencil_ruler = require('react-icons-kit/linea/basic_pencil_ruler')

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }
// import {codeFork} from 'react-icons-kit/fa/codeFork'
// import {exclamationCircle} from 'react-icons-kit/fa/exclamationCircle'
// import {code} from 'react-icons-kit/fa/code'
// import {ecommerce_dollar} from 'react-icons-kit/linea/ecommerce_dollar'

var SimpleCard = (function (_React$Component) {
  _inherits(SimpleCard, _React$Component)

  function SimpleCard (props) {
    _classCallCheck(this, SimpleCard)

    var _this = _possibleConstructorReturn(this, (SimpleCard.__proto__ || Object.getPrototypeOf(SimpleCard)).call(this, props))

    _this.state = {
      RepoName: _this.props.RepoName,
      RepoAuthor: _this.props.RepoAuthor,
      RepoDescription: _this.props.RepoDescription,
      Language: _this.props.Language,
      Forks: _this.props.Forks,
      Issues: _this.props.Issues,
      SRCRaised: _this.props.SRCRaised
    }
    return _this
  }

  _createClass(SimpleCard, [{
    key: 'handleClickFavourite',
    value: function handleClickFavourite () {
      this.props.handleStar(this.props.id, this.props.cid)
    }
  }, {
    key: 'render',
    value: function render () {
      var _this2 = this

      return _react2.default.createElement(
        'div',
        { className: 'UserPageRepoCard' },
        _react2.default.createElement(
          _Card2.default,
          { elevation: 0 },
          _react2.default.createElement(
            _CardContent2.default,
            { className: 'Content' },
            _react2.default.createElement(
              'div',
              { className: 'Header' },
              _react2.default.createElement(
                'div',
                { onClick: function onClick () {
                  return _this2.props.props.history.push('/source/' + _this2.props.RepoAuthor + '/' + _this2.props.RepoName)
                } },
                _react2.default.createElement(
                  _Typography2.default,
                  { className: 'Name', variant: 'headline' },
                  this.state.RepoName
                )
              ),
              _react2.default.createElement(
                'div',
                { onClick: function onClick () {
                  return _this2.props.props.history.push('/source/' + _this2.props.RepoAuthor)
                } },
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'subheading', className: 'Author' },
                  this.state.RepoAuthor
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'FavouriteButton' },
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'caption', className: 'StarCount' },
                  this.props.starCount
                ),
                this.props.starred && _react2.default.createElement(_reactIconsKit2.default, { className: 'StarIcon', size: 20, icon: _star.star, onClick: this.handleClickFavourite }),
                !this.props.starred && _react2.default.createElement(_reactIconsKit2.default, { className: 'StarIcon', size: 20, icon: _starO.starO, onClick: this.handleClickFavourite })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Body' },
              _react2.default.createElement(
                'div',
                { className: 'Left' },
                _react2.default.createElement('div', { className: 'Graphic' }),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'caption', className: 'Description' },
                  this.state.RepoDescription
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'Right' },
                _react2.default.createElement(
                  'div',
                  { className: 'StatDiv' },
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'caption', className: 'Stat' },
                    this.state.Language
                  ),
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _basic_pencil_ruler.basic_pencil_ruler, size: 18 })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'StatDiv' },
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'caption', className: 'Stat' },
                    this.state.Forks
                  ),
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _music_diapason.music_diapason, size: 18 })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'StatDiv' },
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'caption', className: 'Stat' },
                    this.state.Issues
                  ),
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _arrows_question.arrows_question, size: 18 })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'StatDiv' },
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'caption', className: 'Stat' },
                    this.state.SRCRaised
                  ),
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ecommerce_money.ecommerce_money, size: 18 })
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

exports.default = SimpleCard
