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

var _repo = require('./../../actions/repo.actions')

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

var _TextField = require('@material-ui/core/TextField')

var _TextField2 = _interopRequireDefault(_TextField)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var NewRepoPage = (function (_Component) {
  _inherits(NewRepoPage, _Component)

  function NewRepoPage (props) {
    _classCallCheck(this, NewRepoPage)

    var _this = _possibleConstructorReturn(this, (NewRepoPage.__proto__ || Object.getPrototypeOf(NewRepoPage)).call(this, props))

    _this.state = {
      name: '',
      description: '',
      import_url: ''
    }
    _this.handleName = _this.handleName.bind(_this)
    _this.handleDesc = _this.handleDesc.bind(_this)
    _this.handleUrl = _this.handleUrl.bind(_this)
    _this.handleSubmit = _this.handleSubmit.bind(_this)
    return _this
  }

  _createClass(NewRepoPage, [{
    key: 'handleName',
    value: function handleName (e) {
      this.setState({ name: e.target.value })
    }
  }, {
    key: 'handleDesc',
    value: function handleDesc (e) {
      this.setState({ description: e.target.value })
    }
  }, {
    key: 'handleUrl',
    value: function handleUrl (e) {
      this.setState({ import_url: e.target.value })
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit (e) {
      e.preventDefault()
      this.props.dispatch((0, _repo.newRepo)(this.state))
    }
  }, {
    key: 'render',
    value: function render () {
      if (this.props.newrepo !== undefined && this.props.newrepo !== false) this.props.history.push('/newrepo/contract/' + this.props.newrepo.username + '/' + this.props.newrepo.project_name + '/')
      return _react2.default.createElement(
        'div',
        { className: 'NewRepoPage' },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'display4' },
          'New Project'
        ),
        _react2.default.createElement(
          'div',
          { className: 'Form' },
          _react2.default.createElement(_TextField2.default, {
            id: 'name-input',
            label: 'Project Name',
            value: this.state.name,
            onChange: this.handleName,
            margin: 'normal'
          }),
          _react2.default.createElement(_TextField2.default, {
            id: 'description-input',
            label: 'Project Description (optional)',
            value: this.state.description,
            onChange: this.handleDesc,
            margin: 'normal'
          }),
          _react2.default.createElement(_TextField2.default, {
            id: 'url-input',
            label: 'Import URL (optional)',
            value: this.state.import_url,
            onChange: this.handleUrl,
            margin: 'normal'
          }),
          _react2.default.createElement(
            _Button2.default,
            { variant: 'raised', color: 'primary', className: 'SubmitButton', onClick: this.handleSubmit },
            'Create Repo'
          )
        )
      )
    }
  }])

  return NewRepoPage
}(_react.Component))

var mapStateToProps = function mapStateToProps (state) {
  return {
    newrepo: state.repos.data
  }
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NewRepoPage)
