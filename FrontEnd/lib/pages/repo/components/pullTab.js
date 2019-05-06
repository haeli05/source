'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

var _repo = require('./../../../actions/repo.actions')

var _bannerPullDenyButton = require('./bannerPullDenyButton')

var _bannerPullDenyButton2 = _interopRequireDefault(_bannerPullDenyButton)

var _bannerPullAcceptButton = require('./bannerPullAcceptButton')

var _bannerPullAcceptButton2 = _interopRequireDefault(_bannerPullAcceptButton)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var PullTab = (function (_React$Component) {
  _inherits(PullTab, _React$Component)

  function PullTab (props) {
    _classCallCheck(this, PullTab)

    var _this = _possibleConstructorReturn(this, (PullTab.__proto__ || Object.getPrototypeOf(PullTab)).call(this, props))

    _this.handleAuthor = _this.handleAuthor.bind(_this)
    _this.handlePull = _this.handlePull.bind(_this)
    return _this
  }

  _createClass(PullTab, [{
    key: 'handleAccept',
    value: function handleAccept () {
      this.props.dispatch((0, _repo.acceptPull)(this.props.id))
    }
  }, {
    key: 'handleReject',
    value: function handleReject () {
      this.props.dispatch((0, _repo.rejectPull)(this.props.id))
    }
  }, {
    key: 'handleAuthor',
    value: function handleAuthor (username) {
      this.props.history.push('/source/' + username)
    }
  }, {
    key: 'handlePull',
    value: function handlePull (id) {
      this.props.history.push(this.props.match.url + '/pull/' + id)
    }
  }, {
    key: 'render',
    value: function render () {
      var _this2 = this

      return _react2.default.createElement(
        'div',
        { className: 'MostRecentPullRequest', style: { color: 'black', backgroundColor: '#cce5ff', display: 'flex', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px', justifyContent: 'space-between' } },
        _react2.default.createElement(
          'div',
          { className: 'MostRecentPullRequestInfo', style: { display: 'flex' } },
          _react2.default.createElement(
            'h4',
            { style: { cursor: 'pointer', textDecoration: 'underline' },
              onClick: function onClick () {
                return _this2.handlePull(_this2.props.pull.sha)
              } },
            ' Most recent pull request (',
            this.props.pull.title,
            ') '
          ),
          _react2.default.createElement(
            'h4',
            { className: 'by' },
            'by'
          ),
          this.props.pull !== undefined && this.props.pull !== false && _react2.default.createElement(
            'h4',
            { style: { cursor: 'pointer', textDecoration: 'underline' },
              onClick: function onClick () {
                return _this2.handleAuthor(_this2.props.pull.author.name)
              } },
            this.props.pull.author.name
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'MostRecentPullRequestActions', style: { display: 'flex' } },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_bannerPullAcceptButton2.default, null)
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_bannerPullDenyButton2.default, null)
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Button2.default,
              { onClick: function onClick () {
                return _this2.props.closeMe(_this2.props.id)
              } },
              'X'
            )
          )
        )
      )
    }
  }])

  return PullTab
}(_react2.default.Component))

exports.default = PullTab
