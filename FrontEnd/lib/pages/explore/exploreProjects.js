'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

var _repoCard = require('./components/repoCard')

var _repoCard2 = _interopRequireDefault(_repoCard)

var _reactRedux = require('react-redux')

var _repo = require('./../../reducers/repo.reducer')

var _user = require('./../../reducers/user.reducer')

var _repo2 = require('./../../actions/repo.actions')

var _CircularProgress = require('@material-ui/core/CircularProgress')

var _CircularProgress2 = _interopRequireDefault(_CircularProgress)

var _Tabs = require('@material-ui/core/Tabs')

var _Tabs2 = _interopRequireDefault(_Tabs)

var _Tab = require('@material-ui/core/Tab')

var _Tab2 = _interopRequireDefault(_Tab)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

function TabContainer (props) {
  return _react2.default.createElement(
    _Typography2.default,
    { component: 'div', style: { padding: '24px' } },
    props.children
  )
}

TabContainer.propTypes = {
  children: _propTypes2.default.node.isRequired
}

var ExploreProjects = (function (_Component) {
  _inherits(ExploreProjects, _Component)

  function ExploreProjects (props) {
    _classCallCheck(this, ExploreProjects)

    var _this = _possibleConstructorReturn(this, (ExploreProjects.__proto__ || Object.getPrototypeOf(ExploreProjects)).call(this, props))

    _this.state = {
      currentTab: 0,
      header: 'Trending'
    }

    _this.props.dispatch((0, _repo2.fetchRepos)())
    _this.handleStar = _this.handleStar.bind(_this)
    return _this
  }

  _createClass(ExploreProjects, [{
    key: 'handleTabChange',
    value: function handleTabChange (tabNum) {
      if (tabNum === 0) {
        this.setState({ currentTab: 0 })
        this.setState({ header: 'Trending' })
      } else if (tabNum === 1) {
        this.setState({ currentTab: 1 })
        this.setState({ header: 'New' })
      } else if (tabNum === 2) {
        this.setState({ currentTab: 2 })
        this.setState({ header: 'Most Funded' })
      }
    }
  }, {
    key: 'handleStar',
    value: function handleStar (id, cid) {
      if (this.props.user.token === false || this.props.user.token === undefined) {
        alert('Please sign in or sign up to star a repository')
      } else {
        this.props.dispatch((0, _repo2.starHandle)(id, this.props.user.token, cid))
      }
    }
  }, {
    key: 'render',
    value: function render () {
      var _this2 = this

      return _react2.default.createElement(
        'div',
        { className: 'ExploreProjects' },
        _react2.default.createElement(
          'div',
          { className: 'PageTitle' },
          _react2.default.createElement(
            _Typography2.default,
            { id: 'overline' },
            'PROJECTS'
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'display4' },
            this.state.header
          ),
          _react2.default.createElement(
            _Tabs2.default,
            { value: this.state.currentTab, indicatorColor: 'primary' },
            _react2.default.createElement(_Tab2.default, { label: 'Trending',
              onClick: function onClick () {
                return _this2.handleTabChange(0)
              } }),
            _react2.default.createElement(_Tab2.default, { label: 'New',
              onClick: function onClick () {
                return _this2.handleTabChange(1)
              } }),
            _react2.default.createElement(_Tab2.default, { label: 'Most Funded',
              onClick: function onClick () {
                return _this2.handleTabChange(2)
              } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'MainExploreSection' },
          _react2.default.createElement(
            'div',
            { className: 'ExploreRow' },
            this.props.repos === undefined || !this.props.repos && _react2.default.createElement(_CircularProgress2.default, { className: 'Spinner' }),
            this.props.repos !== false && this.props.repos !== undefined && this.props.repos.map(function (repo) {
              var truth = false
              if (_this2.props.user.user !== false && _this2.props.user.user !== undefined) {
                if (_this2.props.user.user.starred.includes(repo.repoID.toString())) {
                  truth = true
                }
              }
              return _react2.default.createElement(_repoCard2.default, {
                key: repo.repoID,
                id: repo.repoID,
                cid: repo.cid,
                starred: truth,
                handleStar: _this2.handleStar,
                props: _this2.props,
                RepoName: repo.project_name,
                RepoAuthor: repo.username,
                RepoDescription: 'Repo description',
                Language: 'x',
                Forks: repo.forks_count,
                Issues: 'x',
                SRCRaised: repo.src_raised,
                starCount: repo.star_count
              })
            })
          )
        )
      )
    }
  }])

  return ExploreProjects
}(_react.Component))

var mapStateToProps = function mapStateToProps (state) {
  return {
    repos: (0, _repo.getRepos)(state),
    user: (0, _user.getUser)(state)
  }
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ExploreProjects)
