'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactRedux = require('react-redux')

var _repo = require('./../../actions/repo.actions')

var _repo2 = require('./../../reducers/repo.reducer')

var _Select = require('@material-ui/core/Select')

var _Select2 = _interopRequireDefault(_Select)

var _MenuItem = require('@material-ui/core/MenuItem')

var _MenuItem2 = _interopRequireDefault(_MenuItem)

var _FormControl = require('@material-ui/core/FormControl')

var _FormControl2 = _interopRequireDefault(_FormControl)

var _eosjs = require('eosjs')

var _eosjs2 = _interopRequireDefault(_eosjs)

var _newMessage = require('./components/newMessage')

var _newMessage2 = _interopRequireDefault(_newMessage)

var _reactIconsKit = require('react-icons-kit')

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit)

var _star = require('react-icons-kit/fa/star')

var _starO = require('react-icons-kit/fa/starO')

var _Tabs = require('@material-ui/core/Tabs')

var _Tabs2 = _interopRequireDefault(_Tabs)

var _Tab = require('@material-ui/core/Tab')

var _Tab2 = _interopRequireDefault(_Tab)

var _pullTab = require('./components/pullTab')

var _pullTab2 = _interopRequireDefault(_pullTab)

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

var _ecommerce_money = require('react-icons-kit/linea/ecommerce_money')

var _arrows_question = require('react-icons-kit/linea/arrows_question')

var _music_diapason = require('react-icons-kit/linea/music_diapason')

var _basic_pencil_ruler = require('react-icons-kit/linea/basic_pencil_ruler')

var _Card = require('@material-ui/core/Card')

var _Card2 = _interopRequireDefault(_Card)

var _AppBar = require('@material-ui/core/AppBar')

var _AppBar2 = _interopRequireDefault(_AppBar)

var _files = require('./components/files')

var _files2 = _interopRequireDefault(_files)

var _issues = require('./components/issues')

var _issues2 = _interopRequireDefault(_issues)

var _qa = require('./components/qa')

var _qa2 = _interopRequireDefault(_qa)

var _pullRequests = require('./components/pullRequests')

var _pullRequests2 = _interopRequireDefault(_pullRequests)

var _contracts = require('./components/contracts')

var _contracts2 = _interopRequireDefault(_contracts)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

function _asyncToGenerator (fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step (key, arg) { try { var info = gen[key](arg); var value = info.value } catch (error) { reject(error); return } if (info.done) { resolve(value) } else { return Promise.resolve(value).then(function (value) { step('next', value) }, function (err) { step('throw', err) }) } } return step('next') }) } }
// fetchSRC,fetchRepo

var eosConfig = {
  httpEndpoint: 'http://ec2-34-227-77-165.compute-1.amazonaws.com:8888'
}

var eos = (0, _eosjs2.default)(eosConfig)

var e = (function () {
  var _ref = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee (repo) {
    return regeneratorRuntime.wrap(function _callee$ (_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2
            return eos.getTableRows(true, repo, repo, 'metatable').then(function (rows) {
              return rows.rows
            })

          case 2:
            return _context.abrupt('return', _context.sent)

          case 3:
          case 'end':
            return _context.stop()
        }
      }
    }, _callee, undefined)
  }))

  return function e (_x) {
    return _ref.apply(this, arguments)
  }
}())

function TabContainer (props) {
  return _react2.default.createElement(
    _Typography2.default,
    { component: 'div' },
    props.children
  )
}

var RepoPage = (function (_Component) {
  _inherits(RepoPage, _Component)

  function RepoPage (props) {
    _classCallCheck(this, RepoPage)

    var _this = _possibleConstructorReturn(this, (RepoPage.__proto__ || Object.getPrototypeOf(RepoPage)).call(this, props))

    _this.props.dispatch((0, _repo.fetchFiles)(_this.props.match.params.user, _this.props.match.params.repo))
    _this.handleFile = _this.handleFile.bind(_this)
    _this.handleIssue = _this.handleIssue.bind(_this)
    _this.handlePull = _this.handlePull.bind(_this)
    _this.getBranches = _this.getBranches.bind(_this)
    _this.newBranch = _this.newBranch.bind(_this)
    _this.submitPull = _this.submitPull.bind(_this)
    _this.closeMe = _this.closeMe.bind(_this)
    _this.newIssue = _this.newIssue.bind(_this)
    _this.handleLinkChange = _this.handleLinkChange.bind(_this)
    _this.handleLike = _this.handleLike.bind(_this)
    _this.handleBalance = _this.handleBalance.bind(_this)
    _this.handleTabChange = _this.handleTabChange.bind(_this)
    _this.state = {
      closeMe: false,
      link: 'SSH',
      liked: false,
      a: '-',
      value: 0
    }
    return _this
  }

  _createClass(RepoPage, [{
    key: 'handleTabChange',
    value: function handleTabChange (event, value) {
      this.setState({ value: value })
    }
  }, {
    key: 'handleLike',
    value: function handleLike () {
      if (this.state.liked) {
        this.setState({ liked: false })
      } else {
        this.setState({ liked: true })
      }
    }
  }, {
    key: 'handleLinkChange',
    value: function handleLinkChange (event) {
      this.setState({ link: event.target.value })
    }
  }, {
    key: 'newIssue',
    value: function newIssue () {
      this.props.history.push('/newissue/' + this.props.info.repoID)
    }
  }, {
    key: 'closeMe',
    value: function closeMe () {
      this.setState({ closeMe: true })
    }
  }, {
    key: 'submitPull',
    value: function submitPull (name, desc, target, source) {
      this.props.dispatch((0, _repo.newPull)(name, desc, target, source, this.props.info.repoID))
    }
  }, {
    key: 'handleFile',
    value: function handleFile (id, name) {
      this.props.history.push(this.props.match.url + '/file/' + id + '/' + name)
    }
  }, {
    key: 'handlePull',
    value: function handlePull (id) {
      this.props.history.push(this.props.match.url + '/pull/' + id)
    }
  }, {
    key: 'handleIssue',
    value: function handleIssue (id) {
      this.props.history.push(this.props.match.url + '/issue/' + id)
    }
  }, {
    key: 'handleBalance',
    value: (function () {
      var _ref2 = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2 () {
        var a
        return regeneratorRuntime.wrap(function _callee2$ (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2
                return e(this.props.cid)

              case 2:
                a = _context2.sent

                console.log('An', a)
                this.setState({ a: a[0].running_balance })

              case 5:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2, this)
      }))

      function handleBalance () {
        return _ref2.apply(this, arguments)
      }

      return handleBalance
    }())
  }, {
    key: 'getBranches',
    value: function getBranches () {
      this.props.dispatch((0, _repo.fetchBranches)(this.props.info.repoID))
    }
  }, {
    key: 'newBranch',
    value: function newBranch (SourceBranch, NewBranch) {
      this.props.dispatch((0, _repo.newBranch)(this.props.info.repoID, SourceBranch, NewBranch))
    }
  }, {
    key: 'render',
    value: function render () {
      if (this.props.cid !== false && this.state.a === '-') this.handleBalance()
      if ((!this.props.pulls || this.props.pulls === undefined) && this.props.id !== false) {
        this.props.dispatch((0, _repo.fetchPull)(this.props.id))
      }
      if ((!this.props.issues || this.props.issues === undefined) && this.props.id !== false) {
        this.props.dispatch((0, _repo.fetchIssues)(this.props.id))
      }
      if (!this.props.repo || this.props.repo === undefined || this.props.info === undefined) {
        return _react2.default.createElement(
          'div',
          { style: { display: 'flex', justifyContent: 'center', marginTop: '20vh' } },
          _react2.default.createElement(
            'h1',
            null,
            'Loading'
          )
        )
      }
      if (this.props.repo.empty) return _react2.default.createElement(_newMessage2.default, { repo: this.props.repo })
      return _react2.default.createElement(
        'div',
        { className: 'RepoPage' },
        _react2.default.createElement(
          'div',
          { className: 'Header' },
          _react2.default.createElement(
            'div',
            { className: 'Title' },
            _react2.default.createElement(
              _Typography2.default,
              { id: 'overline' },
              'Project'
            ),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display4' },
              this.props.match.params.repo
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Info' },
            _react2.default.createElement(
              'div',
              { className: 'GitLink' },
              _react2.default.createElement(
                _Card2.default,
                { className: 'Card' },
                _react2.default.createElement(
                  _FormControl2.default,
                  { className: 'Form' },
                  _react2.default.createElement(
                    _Select2.default,
                    {
                      value: this.state.link,
                      onChange: this.handleLinkChange,
                      inputProps: {
                        name: 'link',
                        id: 'link-simple'
                      }
                    },
                    _react2.default.createElement(
                      _MenuItem2.default,
                      { value: 'SSH' },
                      'SSH'
                    ),
                    _react2.default.createElement(
                      _MenuItem2.default,
                      { value: 'HTTPS' },
                      'HTTPS'
                    )
                  )
                ),
                this.state.link === 'SSH' && _react2.default.createElement(
                  'pre',
                  null,
                  this.props.info.ssh_url
                ),
                this.state.link === 'HTTPS' && _react2.default.createElement(
                  'pre',
                  null,
                  this.props.info.http_url
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Stats' },
              _react2.default.createElement(
                'div',
                { className: 'StatDiv' },
                _react2.default.createElement(_reactIconsKit2.default, { icon: _basic_pencil_ruler.basic_pencil_ruler, size: 18 }),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'caption', className: 'Stat' },
                  'Language'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'StatDiv' },
                _react2.default.createElement(_reactIconsKit2.default, { icon: _music_diapason.music_diapason, size: 18 }),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'caption', className: 'Stat' },
                  this.props.info.forks_count
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'StatDiv' },
                _react2.default.createElement(_reactIconsKit2.default, { icon: _arrows_question.arrows_question, size: 18 }),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'caption', className: 'Stat' },
                  'x'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'StatDiv' },
                _react2.default.createElement(_reactIconsKit2.default, { icon: _ecommerce_money.ecommerce_money, size: 18 }),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'caption', className: 'Stat' },
                  this.state.a
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'StatDiv' },
                this.state.liked && _react2.default.createElement(_reactIconsKit2.default, { icon: _star.star, onClick: this.handleLike, style: { cursor: 'pointer' } }),
                !this.state.liked && _react2.default.createElement(_reactIconsKit2.default, { icon: _starO.starO, onClick: this.handleLike, style: { cursor: 'pointer' } }),
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'caption', className: 'Stat' },
                  this.props.info.star_count
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Tabs' },
          _react2.default.createElement(
            _Card2.default,
            null,
            !this.state.closeMe && this.props.pulls !== undefined && this.props.pulls !== false && this.props.pulls.length > 0 && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_pullTab2.default, { closeMe: this.closeMe, pull: this.props.pulls[0] })
            ),
            _react2.default.createElement(
              _AppBar2.default,
              { position: 'static', elevation: 0, color: 'primary' },
              _react2.default.createElement(
                _Tabs2.default,
                { value: this.state.value, onChange: this.handleTabChange, fullWidth: true, indicatorColor: 'primary' },
                _react2.default.createElement(_Tab2.default, { label: 'Files' }),
                _react2.default.createElement(_Tab2.default, { disabled: true, label: 'Issues' }),
                _react2.default.createElement(_Tab2.default, { disabled: true, label: 'Merge Requests' }),
                _react2.default.createElement(_Tab2.default, { disabled: true, label: 'Q&A' }),
                _react2.default.createElement(_Tab2.default, { disabled: true, label: 'Contract' })
              )
            ),
            this.state.value === 0 && _react2.default.createElement(
              TabContainer,
              { className: 'TabContent' },
              _react2.default.createElement(_files2.default, { submitPull: this.props.submitPull, branches: this.props.branches, id: this.props.id, files: this.props.repo, getBranches: this.getBranches, handleFile: this.handleFile, handleNewBranch: this.props.handleNewBranch, newBranch: this.props.newBranch })
            ),
            this.state.value === 1 && _react2.default.createElement(
              TabContainer,
              { className: 'TabContent' },
              _react2.default.createElement(_issues2.default, { issues: this.props.issues, handleIssue: this.props.handleIssue, newIssue: this.props.newIssue, repoID: this.props.id })
            ),
            this.state.value === 2 && _react2.default.createElement(
              TabContainer,
              { className: 'TabContent' },
              _react2.default.createElement(_pullRequests2.default, { pulls: this.props.pulls, handlePull: this.props.handlePull, repo: this.props.repo, user: this.props.user })
            ),
            this.state.value === 3 && _react2.default.createElement(
              TabContainer,
              { className: 'TabContent' },
              _react2.default.createElement(_qa2.default, null)
            ),
            this.state.value === 4 && _react2.default.createElement(
              TabContainer,
              { className: 'TabContent' },
              _react2.default.createElement(_contracts2.default, null)
            )
          )
        )
      )
    }
  }])

  return RepoPage
}(_react.Component))

var mapStateToProps = function mapStateToProps (state) {
  return {
    repo: (0, _repo2.getFiles)(state),
    info: (0, _repo2.getRepo)(state),
    branches: (0, _repo2.getBranches)(state),
    pulls: (0, _repo2.getPulls)(state),
    id: (0, _repo2.getID)(state),
    cid: (0, _repo2.getCID)(state),
    issues: (0, _repo2.getIssues)(state)
  }
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(RepoPage)

// Just in case a port I did messed up

/*

<Tabs
  user={this.props.match.params.user} repo= {this.props.match.params.repo}
  id={this.props.info.repoID} getBranches={this.getBranches}
  branches={this.props.branches} files={this.props.repo}
  handleFile={this.handleFile} newBranch={this.newBranch}
  submitPull={this.submitPull} pulls={this.props.pulls}
  handlePull={this.handlePull} newIssue={this.newIssue}
  issues={this.props.issues} handleIssue={this.handleIssue}
/>

*/
