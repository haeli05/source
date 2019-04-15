"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var newFolder = function newFolder(repo) {
  return "git clone " + repo.http_url + "<br/>cd " + repo.project_name + "<br/>touch README.md<br/>git add README.md<br/>git commit -m \"add README\"<br/> git push -u origin master<br/>";
};

var existing = function existing(repo) {
  return "cd " + repo.project_name + "<br/>git init<br/>git remote add origin " + repo.http_url + "<br/>git add .<br/>git commit -m \"Initial commit\"<br/>git push -u origin master<br/>";
};

var existingGit = function existingGit(repo) {
  return _react2.default.createElement(
    "div",
    null,
    "cd $",
    repo.project_name,
    _react2.default.createElement("br", null),
    "git remote rename origin old-origingit remote add origin $",
    repo.http_url,
    _react2.default.createElement("br", null),
    "git push -u origin --all",
    _react2.default.createElement("br", null),
    "gitpush -u origin --tags",
    _react2.default.createElement("br", null)
  );
};

var styles = {
  newFolder: {},
  newFolderText: {},
  existing: {},
  existingText: {},
  existingGit: {},
  existingGitText: {}
};

var NewMessage = function (_Component) {
  _inherits(NewMessage, _Component);

  function NewMessage(props) {
    _classCallCheck(this, NewMessage);

    var _this = _possibleConstructorReturn(this, (NewMessage.__proto__ || Object.getPrototypeOf(NewMessage)).call(this, props));

    console.log("new", props.repo);
    return _this;
  }

  _createClass(NewMessage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "NewMessage", style: { display: "flex", alignItems: "center", flexDirection: "column" } },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "newFolder" },
            _react2.default.createElement(
              "u",
              null,
              "Create New Project from CommandLine"
            )
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "div",
            null,
            "git clone ",
            this.props.repo.http_url,
            _react2.default.createElement("br", null),
            "cd ",
            this.props.repo.project_name,
            _react2.default.createElement("br", null),
            "touch README.md",
            _react2.default.createElement("br", null),
            "git add README.md",
            _react2.default.createElement("br", null),
            "git commit -m \"add README\"",
            _react2.default.createElement("br", null),
            " git push -u origin master",
            _react2.default.createElement("br", null)
          ),
          _react2.default.createElement(
            "div",
            { className: "existing", style: styles.existing },
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "u",
              null,
              "Create Project from existing folder"
            )
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "div",
            null,
            "cd ",
            this.props.repo.project_name,
            _react2.default.createElement("br", null),
            "git init",
            _react2.default.createElement("br", null),
            "git remote add origin ",
            this.props.repo.http_url,
            _react2.default.createElement("br", null),
            "git add .",
            _react2.default.createElement("br", null),
            "git commit -m \"Initial commit\"",
            _react2.default.createElement("br", null),
            "git push -u origin master",
            _react2.default.createElement("br", null)
          ),
          _react2.default.createElement(
            "div",
            { className: "existingGit", style: styles.existingGit },
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "u",
              null,
              " Push an existing Git Project"
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement("br", null)
          ),
          _react2.default.createElement(
            "div",
            null,
            "cd ",
            this.props.repo.project_name,
            _react2.default.createElement("br", null),
            "git remote rename origin old-origin",
            _react2.default.createElement("br", null),
            "git remote add origin ",
            this.props.repo.http_url,
            _react2.default.createElement("br", null),
            "git push -u origin --all",
            _react2.default.createElement("br", null),
            "git push -u origin --tags",
            _react2.default.createElement("br", null)
          )
        )
      );
    }
  }]);

  return NewMessage;
}(_react.Component);

exports.default = NewMessage;