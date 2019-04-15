'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _exploreIdeas = require('./pages/explore/exploreIdeas');

var _exploreIdeas2 = _interopRequireDefault(_exploreIdeas);

var _ideaPage = require('./pages/idea/ideaPage');

var _ideaPage2 = _interopRequireDefault(_ideaPage);

var _quill = require('./pages/idea/quill');

var _quill2 = _interopRequireDefault(_quill);

var _exploreProjects = require('./pages/explore/exploreProjects');

var _exploreProjects2 = _interopRequireDefault(_exploreProjects);

var _explorePeople = require('./pages/explore/explorePeople');

var _explorePeople2 = _interopRequireDefault(_explorePeople);

var _repoPage = require('./pages/repo/repoPage');

var _repoPage2 = _interopRequireDefault(_repoPage);

var _newRepoPage = require('./pages/newRepo/newRepoPage');

var _newRepoPage2 = _interopRequireDefault(_newRepoPage);

var _filePage = require('./pages/repo/file/filePage.js');

var _filePage2 = _interopRequireDefault(_filePage);

var _pullPage = require('./pages/repo/pull/pullPage');

var _pullPage2 = _interopRequireDefault(_pullPage);

var _userPage = require('./pages/user/userPage');

var _userPage2 = _interopRequireDefault(_userPage);

var _walletPage = require('./pages/user/walletPage');

var _walletPage2 = _interopRequireDefault(_walletPage);

var _distribute = require('./pages/distribute/distribute');

var _distribute2 = _interopRequireDefault(_distribute);

var _loginPage = require('./pages/signUpIn/loginPage');

var _loginPage2 = _interopRequireDefault(_loginPage);

var _createContractPage = require('./pages/repo/createContractPage');

var _createContractPage2 = _interopRequireDefault(_createContractPage);

var _issuePage = require('./pages/repo/issue/issuePage');

var _issuePage2 = _interopRequireDefault(_issuePage);

var _newIssuePage = require('./pages/repo/newIssue/newIssuePage');

var _newIssuePage2 = _interopRequireDefault(_newIssuePage);

var _newPullPage = require('./pages/repo/newPull/newPullPage');

var _newPullPage2 = _interopRequireDefault(_newPullPage);

var _createAccountPage = require('./pages/signUpIn/createAccountPage');

var _createAccountPage2 = _interopRequireDefault(_createAccountPage);

var _four0FourPage = require('./pages/global/four0FourPage');

var _four0FourPage2 = _interopRequireDefault(_four0FourPage);

var _navbar = require('./pages/global/components/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _footer = require('./pages/global/components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var truth = JSON.parse(sessionStorage.getItem('alpha')); /* eslint-disable global-require */


var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.Router,
    { history: _history2.default },
    _react2.default.createElement(
      'div',
      { className: 'app' },
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', render: function render(props) {
          return _react2.default.createElement(_navbar2.default, props);
        } }),
      _react2.default.createElement(
        'div',
        { className: 'TheEntirePageMinusFooter' },
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {
            return _react2.default.createElement(_app2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/explore/ideas', render: function render(props) {
            return _react2.default.createElement(_exploreIdeas2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/explore/projects', render: function render(props) {
            return _react2.default.createElement(_exploreProjects2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/explore/people', render: function render(props) {
            return _react2.default.createElement(_explorePeople2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/newrepo/:user', render: function render(props) {
            return _react2.default.createElement(_newRepoPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/source/:user/:repo', render: function render(props) {
            return _react2.default.createElement(_repoPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/source/:user/:repo/file/:id/:file', render: function render(props) {
            return _react2.default.createElement(_filePage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/source/:user/:repo/pull/:id/', render: function render(props) {
            return _react2.default.createElement(_pullPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/source/:user/:repo/issue/:id', render: function render(props) {
            return _react2.default.createElement(_issuePage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/newissue/:id', render: function render(props) {
            return _react2.default.createElement(_newIssuePage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/newpull', render: function render(props) {
            return _react2.default.createElement(_newPullPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/pull', render: function render(props) {
            return _react2.default.createElement(_pullPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/source/:user', render: function render(props) {
            return _react2.default.createElement(_userPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/wallet/:user', render: function render(props) {
            return _react2.default.createElement(_walletPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/createaccount', render: function render(props) {
            return _react2.default.createElement(_createAccountPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', render: function render(props) {
            return _react2.default.createElement(_loginPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '*/404', render: function render(props) {
            return _react2.default.createElement(_four0FourPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/newrepo/contract/:user/:name', render: function render(props) {
            return _react2.default.createElement(_createContractPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/distribute', render: function render(props) {
            return _react2.default.createElement(_distribute2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/idea', render: function render(props) {
            return _react2.default.createElement(_ideaPage2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/quill', render: function render(props) {
            return _react2.default.createElement(_quill2.default, props);
          } })
      ),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', render: function render(props) {
          return _react2.default.createElement(_footer2.default, props);
        } })
    )
  );
};

/*

if (truth) {
  Routes =() =>(
    <Router history={history}>
      <div className="app">
        <Route path="/" render={props =><Navbar {...props}/>} />
        <div className="TheEntirePageMinusFooter">
          <Route exact path="/" render={ props => <App {...props} />} />
          <Route exact path="/explore/ideas" render={ props => <Ideas {...props}/> }/>
          <Route exact path="/explore/projects" render={ props => <Projects {...props}/> }/>
          <Route exact path="/explore/people" render={ props => <People {...props}/> }/>
          <Route exact path="/newrepo/:user" render={ props => <NewRepoPage {...props}/> }/>
          <Route exact path="/source/:user/:repo" render={ props => <RepoPage {...props}/> }/>
          <Route exact path="/source/:user/:repo/file/:id/:file" render={ props => <FilePage {...props}/> }/>
          <Route exact path="/source/:user/:repo/pull/:id/" render={ props => <PullPage {...props}/> }/>
          <Route exact path="/source/:user/:repo/issue/:id" render={ props => <IssuePage {...props}/> }/>
          <Route exact path="/newissue/:id" render={ props => <NewIssuePage {...props}/> }/>
          <Route exact path="/newpull" render={ props => <NewPullPage {...props}/> }/>
          <Route exact path="/pull" render={ props => <PullPage {...props}/> }/>
          <Route exact path="/source/:user" render={ props => <UserPage {...props}/> }/>
          <Route exact path="/wallet/:user" render={ props => <WalletPage {...props}/> }/>
          <Route exact path="/createaccount" render={ props => <CreateAccountPage {...props}/> }/>
          <Route exact path="/login" render={ props => <LoginPage {...props}/> }/>
          <Route path="/404" render={props=><Four0FourPage {...props}/>}/>
          <Route path="/newrepo/contract/:user/:name" render={props=><CreateContractPage {...props}/>} />
          <Route path="/distribute" render={props=><Distribute {...props}/>} />
          <Route path="/idea" render={props=><IdeaPage {...props}/> } />
          <Route path="/quill" render={props=><Quill {...props}/>} />
        </div>
        <Route path ="/" render={props =><Footer {...props}/>}/>
      </div>
    </Router>
  )
}

*/

exports.default = Routes;