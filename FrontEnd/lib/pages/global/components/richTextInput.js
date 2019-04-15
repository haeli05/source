'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draftJs = require('draft-js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RichEditorExample = function (_React$Component) {
  _inherits(RichEditorExample, _React$Component);

  function RichEditorExample(props) {
    _classCallCheck(this, RichEditorExample);

    var _this = _possibleConstructorReturn(this, (RichEditorExample.__proto__ || Object.getPrototypeOf(RichEditorExample)).call(this, props));

    _this.state = { editorState: _draftJs.EditorState.createEmpty() };

    _this.focus = function () {
      return _this.refs.editor.focus();
    };
    _this.onChange = function (editorState) {
      (0, _draftJs.convertToRaw)(_this.state.editorState.getCurrentContent());
      _this.setState({ editorState: editorState });
    };

    _this.getState = _this.getState.bind(_this);
    _this.handleKeyCommand = function (command) {
      return _this._handleKeyCommand(command);
    };
    _this.onTab = function (e) {
      return _this._onTab(e);
    };
    _this.toggleBlockType = function (type) {
      return _this._toggleBlockType(type);
    };
    _this.toggleInlineStyle = function (style) {
      return _this._toggleInlineStyle(style);
    };
    return _this;
  }

  _createClass(RichEditorExample, [{
    key: '_handleKeyCommand',
    value: function _handleKeyCommand(command) {
      var editorState = this.state.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: '_onTab',
    value: function _onTab(e) {
      var maxDepth = 4;
      this.onChange(_draftJs.RichUtils.onTab(e, this.state.editorState, maxDepth));
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }
  }, {
    key: 'getState',
    value: function getState() {
      return (0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent());
    }
  }, {
    key: 'render',
    value: function render() {
      var editorState = this.state.editorState;

      // If the user changes block type before entering any text, we can
      // either style the placeholder or hide it. Let's just hide it now.

      var className = 'RichEditor-editor';
      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' RichEditor-hidePlaceholder';
        }
      }
      console.log(this.state.editorState);

      return _react2.default.createElement(
        'div',
        { className: 'RichEditor-root' },
        _react2.default.createElement(BlockStyleControls, {
          editorState: editorState,
          onToggle: this.toggleBlockType
        }),
        _react2.default.createElement(InlineStyleControls, {
          editorState: editorState,
          onToggle: this.toggleInlineStyle
        }),
        _react2.default.createElement(
          'div',
          { className: className, onClick: this.focus },
          _react2.default.createElement(_draftJs.Editor, {
            blockStyleFn: getBlockStyle,
            customStyleMap: styleMap,
            editorState: editorState,
            handleKeyCommand: this.handleKeyCommand,
            onChange: this.onChange,
            onTab: this.onTab,
            placeholder: 'Write your comment here ...',
            ref: 'editor',
            spellCheck: true
          })
        )
      );
    }
  }]);

  return RichEditorExample;
}(_react2.default.Component);

// Custom overrides for "code" style.


var styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: 'gotham_htfbook',
    fontSize: 16,
    padding: 2
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

var StyleButton = function (_React$Component2) {
  _inherits(StyleButton, _React$Component2);

  function StyleButton() {
    _classCallCheck(this, StyleButton);

    var _this2 = _possibleConstructorReturn(this, (StyleButton.__proto__ || Object.getPrototypeOf(StyleButton)).call(this));

    _this2.onToggle = function (e) {
      e.preventDefault();
      _this2.props.onToggle(_this2.props.style);
    };
    return _this2;
  }

  _createClass(StyleButton, [{
    key: 'render',
    value: function render() {
      var className = 'RichEditor-styleButton';
      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }

      return _react2.default.createElement(
        'span',
        { className: className, onMouseDown: this.onToggle },
        this.props.label
      );
    }
  }]);

  return StyleButton;
}(_react2.default.Component);

var BLOCK_TYPES = [{ label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'H4', style: 'header-four' }, { label: 'H5', style: 'header-five' }, { label: 'H6', style: 'header-six' }, { label: 'Blockquote', style: 'blockquote' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }, { label: 'Code Block', style: 'code-block' }];

var BlockStyleControls = function BlockStyleControls(props) {
  var editorState = props.editorState;

  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

  return _react2.default.createElement(
    'div',
    { className: 'RichEditor-controls' },
    BLOCK_TYPES.map(function (type) {
      return _react2.default.createElement(StyleButton, {
        key: type.label,
        active: type.style === blockType,
        label: type.label,
        onToggle: props.onToggle,
        style: type.style
      });
    })
  );
};

var INLINE_STYLES = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Underline', style: 'UNDERLINE' }, { label: 'Monospace', style: 'CODE' }];

var InlineStyleControls = function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return _react2.default.createElement(
    'div',
    { className: 'RichEditor-controls' },
    INLINE_STYLES.map(function (type) {
      return _react2.default.createElement(StyleButton, {
        key: type.label,
        active: currentStyle.has(type.style),
        label: type.label,
        onToggle: props.onToggle,
        style: type.style
      });
    })
  );
};

exports.default = RichEditorExample;