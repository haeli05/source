'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactQuill = require('react-quill');

var _reactQuill2 = _interopRequireDefault(_reactQuill);

require('react-quill/dist/quill.snow.css');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _ListSubheader = require('@material-ui/core/ListSubheader');

var _ListSubheader2 = _interopRequireDefault(_ListSubheader);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Tabs = require('@material-ui/core/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('@material-ui/core/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _ideaTabs = require('./components/ideaTabs');

var _ideaTabs2 = _interopRequireDefault(_ideaTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = {};
/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [[{ 'header': '1' }, { 'header': '2' }, { 'font': [] }], [{ size: [] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['link', 'image', 'video'], ['clean']],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
};Editor.formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video'];

var Quill = function (_React$Component) {
  _inherits(Quill, _React$Component);

  function Quill(props) {
    _classCallCheck(this, Quill);

    var _this = _possibleConstructorReturn(this, (Quill.__proto__ || Object.getPrototypeOf(Quill)).call(this, props));

    _this.state = {
      text: '',
      currentTab: 0
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Quill, [{
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({ text: value });
    }
  }, {
    key: 'handleTabChange',
    value: function handleTabChange(tabNum) {
      if (tabNum === 0) {
        this.setState({ currentTab: 0 });
      } else if (tabNum === 1) {
        this.setState({ currentTab: 1 });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'IdeaPage' },
        _react2.default.createElement(
          'div',
          { className: 'Header' },
          _react2.default.createElement(
            'div',
            { className: 'PageTitle' },
            _react2.default.createElement(
              _Typography2.default,
              { id: 'overline' },
              'IDEA'
            ),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display4' },
              'source'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Content' },
          _react2.default.createElement(
            'div',
            { className: 'Body' },
            _react2.default.createElement(
              _Paper2.default,
              { className: 'Paper' },
              _react2.default.createElement(_reactQuill2.default, {
                theme: this.state.theme,
                onChange: this.handleChange,
                value: this.state.text,
                modules: Editor.modules,
                formats: Editor.formats,
                bounds: '.app',
                placeholder: this.props.placeholder
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Sidebar' },
            _react2.default.createElement(
              _Button2.default,
              { variant: 'outlined', fullWidth: true, className: 'ActionButton' },
              'Favourite'
            ),
            _react2.default.createElement(
              _Button2.default,
              { variant: 'raised', color: 'primary', fullWidth: true, className: 'ActionButton' },
              'Send SOURCE'
            ),
            _react2.default.createElement(
              _Paper2.default,
              { className: 'Topics' },
              _react2.default.createElement(
                _List2.default,
                { component: 'nav' },
                _react2.default.createElement(
                  _ListSubheader2.default,
                  null,
                  'Topics Discussed'
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { button: true },
                  _react2.default.createElement(_ListItemText2.default, { primary: 'Source' })
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { button: true },
                  _react2.default.createElement(_ListItemText2.default, { primary: 'Cryptocurrency' })
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { button: true },
                  _react2.default.createElement(_ListItemText2.default, { primary: 'Blockchain' })
                ),
                _react2.default.createElement(
                  _ListItem2.default,
                  { button: true },
                  _react2.default.createElement(_ListItemText2.default, { primary: 'Bounties' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Quill;
}(_react2.default.Component);

exports.default = Quill;