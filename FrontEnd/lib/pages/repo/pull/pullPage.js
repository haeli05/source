'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _reactRedux = require('react-redux');

var _repo = require('./../../../actions/repo.actions');

var _repo2 = require('./../../../reducers/repo.reducer');

var _acceptButton = require('./components/acceptButton');

var _acceptButton2 = _interopRequireDefault(_acceptButton);

var _denyButton = require('./components/denyButton');

var _denyButton2 = _interopRequireDefault(_denyButton);

var _filesChanged = require('./components/filesChanged');

var _filesChanged2 = _interopRequireDefault(_filesChanged);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PullPage = function (_Component) {
  _inherits(PullPage, _Component);

  function PullPage(props) {
    _classCallCheck(this, PullPage);

    var _this = _possibleConstructorReturn(this, (PullPage.__proto__ || Object.getPrototypeOf(PullPage)).call(this, props));

    _this.props.dispatch((0, _repo.getSinglePull)(_this.props.match.params.id));
    return _this;
  }

  _createClass(PullPage, [{
    key: 'render',
    value: function render() {
      console.log("these props hopefully", this.props);
      return _react2.default.createElement(
        'div',
        { className: 'RepoPullPage' },
        _react2.default.createElement(
          _Paper2.default,
          { className: 'RepoPullPagePaper', elevation: 0 },
          _react2.default.createElement(
            'div',
            { className: 'PullTitle' },
            _react2.default.createElement(
              'a',
              { href: '/repo' },
              _react2.default.createElement(
                'h2',
                null,
                this.props.match.params.repo
              )
            ),
            _react2.default.createElement(
              'h2',
              { className: 'separator' },
              '/'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'PullName'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'PullInfo' },
            _react2.default.createElement(
              'div',
              { className: 'PullHeader' },
              _react2.default.createElement(
                'div',
                { className: 'PullAuthor' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Author:'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '/user' },
                  'Username'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'PullActions' },
                _react2.default.createElement(_acceptButton2.default, null),
                _react2.default.createElement(_denyButton2.default, null)
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'files' },
              _react2.default.createElement(
                'h4',
                null,
                'Changes'
              ),
              _react2.default.createElement(_filesChanged2.default, null)
            )
          )
        )
      );
    }
  }]);

  return PullPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    pull: (0, _repo2.getPull)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PullPage);