'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require('react-redux');

var _repo = require('./../../../actions/repo.actions');

var _repo2 = require('./../../../reducers/repo.reducer');

var _richTextInput = require('./../../global/components/richTextInput');

var _richTextInput2 = _interopRequireDefault(_richTextInput);

var _comment = require('./components/comment');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssuePage = function (_Component) {
  _inherits(IssuePage, _Component);

  function IssuePage(props) {
    _classCallCheck(this, IssuePage);

    var _this = _possibleConstructorReturn(this, (IssuePage.__proto__ || Object.getPrototypeOf(IssuePage)).call(this, props));

    _this.props.dispatch((0, _repo.fetchIssue)(_this.props.match.params.id, _this.props.match.params.repo));
    _this.goback = _this.goback.bind(_this);
    _this.handleUser = _this.handleUser.bind(_this);
    return _this;
  }

  _createClass(IssuePage, [{
    key: 'goback',
    value: function goback() {
      var user = this.props.match.params.user;
      var repo = this.props.match.params.repo;
      console.log(user, repo);
      this.props.history.push('/source/' + user + '/' + repo);
    }
  }, {
    key: 'handleUser',
    value: function handleUser(user) {
      this.props.history.push('/source/' + user);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.issue !== undefined && this.props.issue !== false) return _react2.default.createElement(
        'div',
        { className: 'IssuePage' },
        _react2.default.createElement(
          _Paper2.default,
          { className: 'IssuePagePaper', elevation: 0 },
          _react2.default.createElement(
            'div',
            { className: 'IssueTitle' },
            _react2.default.createElement(
              'h2',
              { onClick: this.goback, style: { cursor: "pointer", color: "blue" } },
              this.props.match.params.repo
            ),
            _react2.default.createElement(
              'h2',
              { className: 'separator' },
              '/'
            ),
            _react2.default.createElement(
              'h2',
              null,
              this.props.issue.title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'IssueInfo' },
            _react2.default.createElement(
              'div',
              { className: 'IssueHeader' },
              _react2.default.createElement(
                'div',
                { className: 'IssueAuthor' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Opened by: '
                ),
                _react2.default.createElement(
                  'p',
                  { onClick: function onClick() {
                      return _this2.handleUser(_this2.props.issue.creator);
                    }, style: { cursor: "pointer" } },
                  this.props.issue.creator
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'IssueActions' },
                _react2.default.createElement(
                  _Button2.default,
                  { color: 'primary', style: { fontFamily: "gotham_htfbook" } },
                  'Resolve'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: 'primary', style: { fontFamily: "gotham_htfbook" } },
                  'Close'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Comments', style: { marginBottom: "25px" } },
              _react2.default.createElement(_comment2.default, null),
              _react2.default.createElement(_comment2.default, null)
            ),
            _react2.default.createElement(_richTextInput2.default, null)
          )
        )
      );else return _react2.default.createElement(
        'div',
        null,
        'Loading'
      );
    }
  }]);

  return IssuePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    issue: (0, _repo2.getIssueBlob)(state)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(IssuePage);