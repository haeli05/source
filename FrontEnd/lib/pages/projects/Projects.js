'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

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

var _Card = require('@material-ui/core/Card')

var _Card2 = _interopRequireDefault(_Card)

var _CardActions = require('@material-ui/core/CardActions')

var _CardActions2 = _interopRequireDefault(_CardActions)

var _CardContent = require('@material-ui/core/CardContent')

var _CardContent2 = _interopRequireDefault(_CardContent)

var _CardMedia = require('@material-ui/core/CardMedia')

var _CardMedia2 = _interopRequireDefault(_CardMedia)

var _Grid = require('@material-ui/core/Grid')

var _Grid2 = _interopRequireDefault(_Grid)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

function TabContainer (props) {
  return _react2.default.createElement(
    _Typography2.default,
    { component: 'div', style: { padding: 8 * 3 } },
    props.children
  )
}

TabContainer.propTypes = {
  children: _propTypes2.default.node.isRequired
}

var Projects = (function (_Component) {
  _inherits(Projects, _Component)

  function Projects (props) {
    _classCallCheck(this, Projects)

    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props))

    _this.props.dispatch((0, _repo2.fetchRepos)())
    _this.handleStar = _this.handleStar.bind(_this)
    _this.handleChange = _this.handleChange.bind(_this)
    return _this
  }

  _createClass(Projects, [{
    key: 'handleStar',
    value: function handleStar (id, cid) {
      if (this.props.user.token === false || this.props.user.token === undefined) {
        alert('Please sign in or sign up to star a repository')
      } else {
        this.props.dispatch((0, _repo2.starHandle)(id, this.props.user.token, cid))
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange (event, value) {
      this.setState({ value: value })
    }
  }, {
    key: 'render',
    value: function render () {
      var _this2 = this

      console.log('REPOS', this.props.repos, 'USA', this.props.user)
      return _react2.default.createElement(
        'div',
        { className: 'Explore' },
        _react2.default.createElement(_Grid2.default, { container: true, spacing: 24 }),
        _react2.default.createElement(
          'div',
          { className: 'PageTitle' },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'body2' },
            'PROJECTS'
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'display4' },
            'Trending'
          ),
          _react2.default.createElement(
            _Tabs2.default,
            { onChange: this.handleChange, indicatorColor: 'primary' },
            _react2.default.createElement(_Tab2.default, { label: 'Recommended' }),
            _react2.default.createElement(_Tab2.default, { label: 'New' }),
            _react2.default.createElement(_Tab2.default, { label: 'Popular' })
          ),
          _react2.default.createElement(
            _Card2.default,
            null,
            _react2.default.createElement(
              _Grid2.default,
              { container: true, spacing: 54 },
              _react2.default.createElement(
                _Grid2.default,
                null,
                _react2.default.createElement(_CardMedia2.default, {
                  LogoImage: true,

                  style: { width: '30px', height: '30px' }
                }),
                _react2.default.createElement('image', { style: { width: '80px', height: '80px', backgroundColor: 'secondary', label: 'Coming Soon' } })
              ),
              _react2.default.createElement(
                _Grid2.default,
                null,
                _react2.default.createElement(
                  _CardContent2.default,
                  null,
                  _react2.default.createElement(
                    _Typography2.default,
                    { color: 'textSecondary' },
                    'Bitcoin'
                  ),
                  _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'headline', component: 'h2' },
                    'Bitcoin Cash is Bitcoin!!'
                  ),
                  _react2.default.createElement(
                    _Typography2.default,
                    { color: 'textSecondary' },
                    'Roger Ver and Jihan Wu....'
                  ),
                  _react2.default.createElement(
                    _CardContent2.default,
                    null,
                    _react2.default.createElement(
                      _Typography2.default,
                      { component: 'caption' },
                      'Treason!',
                      _react2.default.createElement(
                        _Card2.default,
                        null,
                        _react2.default.createElement(
                          _Typography2.default,
                          { component: 'caption' },
                          'Excommunicate!'
                        ),
                        _react2.default.createElement(
                          _Card2.default,
                          null,
                          _react2.default.createElement(
                            _CardContent2.default,
                            null,
                            'HAHA'
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _CardActions2.default,
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { size: 'small' },
                    'Like icon'
                  )
                )
              )
            )
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
                RepoDescription: 'Best Repo',
                Language: 'Put me in coach!',
                Forks: repo.forks_count,
                Issues: 'Put me in coach!',
                SRCRaised: repo.src_raised,
                starCount: repo.star_count
              })
            })
          )
        )
      )
    }
  }])

  return Projects
}(_react.Component))

var mapStateToProps = function mapStateToProps (state) {
  return {
    repos: (0, _repo.getRepos)(state),
    user: (0, _user.getUser)(state)
  }
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Explore)
