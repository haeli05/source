'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

var _reactRedux = require('react-redux')

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

var _TextField = require('@material-ui/core/TextField')

var _TextField2 = _interopRequireDefault(_TextField)

var _user = require('./../../actions/user.actions')

var _user2 = require('./../../reducers/user.reducer')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var WelcomePage = (function (_Component) {
  _inherits(WelcomePage, _Component)

  function WelcomePage (props) {
    _classCallCheck(this, WelcomePage)

    var _this = _possibleConstructorReturn(this, (WelcomePage.__proto__ || Object.getPrototypeOf(WelcomePage)).call(this, props))

    _this.state = {
      code: '',
      truth: JSON.parse(sessionStorage.getItem('alpha'))
    }
    _this.handleChangeCode = _this.handleChangeCode.bind(_this)
    _this.submit = _this.submit.bind(_this)
    return _this
  }

  _createClass(WelcomePage, [{
    key: 'handleChangeCode',
    value: function handleChangeCode (e) {
      this.setState({ code: e.target.value })
    }
  }, {
    key: 'submit',
    value: function submit () {
      this.props.dispatch((0, _user.inviteCodeCheck)({ invite: this.state.code }))
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress (e) {
      if (e.key === 'Enter') {
        this.submit()
      }
    }
  }, {
    key: 'render',
    value: function render () {
      var _this2 = this

      return _react2.default.createElement(
        'div',
        { className: 'WelcomePage' },
        _react2.default.createElement(
          _Typography2.default,
          { className: 'Header', variant: 'caption' },
          'Welcome to'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { className: 'Tagline', variant: 'body1' },
          'For ideas, projects, and people'
        ),
        !this.props.good && !this.state.truth && _react2.default.createElement(
          'div',
          { className: 'CodeInput' },
          _react2.default.createElement(_TextField2.default, {
            id: 'code-input',
            label: 'Invite Code',
            value: this.state.code,
            onChange: this.handleChangeCode,
            onKeyPress: function onKeyPress (e) {
              _this2.handleKeyPress(e)
            },
            margin: 'normal'
          }),
          _react2.default.createElement(
            _Button2.default,
            { className: 'CodeButton', onClick: this.submit, variant: 'raised', color: 'primary' },
            'Submit'
          )
        ),
        (this.props.good || this.state.truth) && _react2.default.createElement(
          'a',
          { href: '/explore/projects', className: 'ExploreButton' },
          _react2.default.createElement(
            _Button2.default,
            { variant: 'raised', color: 'primary' },
            'Explore'
          )
        )
      )
    }
  }])

  return WelcomePage
}(_react.Component))

var mapStateToProps = function mapStateToProps (state) {
  return {
    good: (0, _user2.getGood)(state)
  }
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(WelcomePage)

/*

<Button className="ExploreButton" onClick={this.goExplore} variant="raised" color="primary">Explore</Button>

<Paper className="Updates">
  <div className="Header">
    <Typography variant="display2">Front End Updates</Typography>
  </div>
  <div className="Version">
    <Typography variant="headline">Alpha v0.2</Typography>
    <Typography variant="body1">Updated UI and navigation</Typography>
    <Typography variant="body1">To do: Ideas, Users, Search, Project details and usability features</Typography>
  </div>
  <div className="Version">
    <Typography variant="headline">Alpha v0.1</Typography>
    <Typography variant="body1">Launched with basic project repo functionality</Typography>
    <Typography variant="body1">To do: Projects, user control, create project, define contracts, etc.</Typography>
  </div>
</Paper>

*/
