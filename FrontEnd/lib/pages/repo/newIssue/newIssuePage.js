'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require('react-redux');

var _user = require('./../../../reducers/user.reducer');

var _repo = require('./../../../actions/repo.actions');

var _richTextInput = require('././../../global/components/richTextInput');

var _richTextInput2 = _interopRequireDefault(_richTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import {convertToRaw} from 'draft-js';

//import {getID} from './../../../reducers/repo.reducer';


var NewIssuePage = function (_Component) {
  _inherits(NewIssuePage, _Component);

  function NewIssuePage(props) {
    _classCallCheck(this, NewIssuePage);

    var _this = _possibleConstructorReturn(this, (NewIssuePage.__proto__ || Object.getPrototypeOf(NewIssuePage)).call(this, props));

    _this.state = {
      text: "",
      title: ""
    };
    _this.submitIssue = _this.submitIssue.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.bindhandleTitleChange = _this.handleTitleChange.bind(_this);
    return _this;
  }

  _createClass(NewIssuePage, [{
    key: 'submitIssue',
    value: function submitIssue() {
      //alert(this.child.state);
      var data = this.child.getState().blocks[0].text;
      var title = this.state.title;
      this.props.dispatch((0, _repo.newIssue)(title, data, this.props.match.params.id, "Imacunt", 0, Date.now()));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      console.log(e.target);
      this.setState({ text: e.target.value });
    }
  }, {
    key: 'handleTitleChange',
    value: function handleTitleChange(e) {
      this.setState({ title: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(this.props.user);
      return _react2.default.createElement(
        'div',
        { className: 'NewIssuePage', style: { display: "flex", flexDirection: "column", alignItems: "center" } },
        _react2.default.createElement(
          'div',
          { style: { width: "500px" } },
          _react2.default.createElement(
            'div',
            { style: { textAlign: "center" } },
            _react2.default.createElement(
              'h1',
              null,
              'New Issue'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'NewIssueForm' },
            _react2.default.createElement(
              'p',
              null,
              'Issue Name'
            ),
            _react2.default.createElement('input', { style: { width: "500px" }, value: this.state.title, onChange: function onChange(e) {
                _this2.handleTitleChange(e);
              } }),
            _react2.default.createElement(
              'p',
              null,
              'Comment'
            ),
            _react2.default.createElement(_richTextInput2.default, { ref: function ref(instance) {
                _this2.child = instance;
              }, onChange: this.handleChange, value: this.state.text }),
            _react2.default.createElement(
              'div',
              { style: { display: "flex", justifyContent: "center" } },
              _react2.default.createElement(
                _Button2.default,
                {
                  onClick: this.submitIssue, variant: 'outlined',
                  style: { fontFamily: "inherit", borderRadius: "25px", marginTop: "50px", marginBottom: "50px" }
                },
                'Submit'
              )
            )
          )
        )
      );
    }
  }]);

  return NewIssuePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: (0, _user.getUser)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NewIssuePage);