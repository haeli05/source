'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _repo = require('./../../../actions/repo.actions');

var _repo2 = require('./../../../reducers/repo.reducer');

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactIconsKit = require('react-icons-kit');

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit);

var _ic_delete = require('react-icons-kit/md/ic_delete');

var _ic_mode_edit = require('react-icons-kit/md/ic_mode_edit');

var _ic_history = require('react-icons-kit/md/ic_history');

var _ic_insert_drive_file = require('react-icons-kit/md/ic_insert_drive_file');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilePage = function (_Component) {
  _inherits(FilePage, _Component);

  function FilePage(props) {
    _classCallCheck(this, FilePage);

    var _this = _possibleConstructorReturn(this, (FilePage.__proto__ || Object.getPrototypeOf(FilePage)).call(this, props));

    _this.props.dispatch((0, _repo.getRawBlob)(_this.props.match.params.id, _this.props.match.params.repo));
    _this.goback = _this.goback.bind(_this);
    var user = _this.props.match.params.user;
    var repo = _this.props.match.params.repo;
    console.log('/' + user + '/' + repo);
    return _this;
  }

  _createClass(FilePage, [{
    key: 'goback',
    value: function goback() {
      var user = this.props.match.params.user;
      var repo = this.props.match.params.repo;
      console.log(user, repo);
      this.props.history.push('/source/' + user + '/' + repo);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(":::", this.props);
      if (this.props.file !== undefined && this.props.file !== false) return _react2.default.createElement(
        'div',
        { className: 'FilePage' },
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
              { variant: 'display4', onClick: this.goback, className: 'RepoName' },
              this.props.match.params.repo
            )
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'display3', className: 'Separator' },
            '/'
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'display3', className: 'FileName' },
            this.props.match.params.file
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Info' },
          _react2.default.createElement(
            _Paper2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'Header' },
              _react2.default.createElement(
                'div',
                { className: 'Contributors' },
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'body1' },
                  'Contributors: coming soon'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'Actions' },
                _react2.default.createElement(
                  _Button2.default,
                  { color: 'primary', disabled: true },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_insert_drive_file.ic_insert_drive_file }),
                  'Raw'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: 'primary', disabled: true },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_history.ic_history }),
                  'History'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: 'primary', disabled: true },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_mode_edit.ic_mode_edit }),
                  'Edit'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: 'primary', disabled: true },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _ic_delete.ic_delete }),
                  'Delete'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'FileContents' },
              this.props.file.split("\n").map(function (word) {
                return _react2.default.createElement(
                  'code',
                  null,
                  word
                );
              })
            )
          )
        )
      );else return _react2.default.createElement(
        'div',
        null,
        'Loading'
      );
    }
  }]);

  return FilePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    file: (0, _repo2.getBlob)(state)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(FilePage);