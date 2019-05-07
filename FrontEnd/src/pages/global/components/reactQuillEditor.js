import React from 'react';
// Material UI
import Button from '@material-ui/core/Button';
// Components
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import './../../../assets/css/styles.min .css'

let Editor={}
/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ 'header': [4, 5, false] }],
    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    // [{ 'script': 'sub'}, { 'script': 'super' }],
    ['bold', 'italic', 'underline','strike', 'blockquote', 'code'],
    [{'list': 'ordered'}, {'list': 'bullet'}], // {'indent': '-1'}, {'indent': '+1'}
    ['link', 'image'],
    //[{ 'background': [] }],          // dropdown with defaults from theme
    //[{ 'align': [] }],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true,
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code',
  'list', 'bullet', // 'indent',
  'link', 'image', 'clean'
]



class ReactQuillEditor extends React.Component {
  constructor(props){
    super(props);
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.state={
      text: (this.props.text === undefined) ? "" : this.props.text,
      stringBody: "",
      theme: 'bubble',
      placeholder: (this.props.placeholder === undefined) ? "begin typing here ..." : this.props.placeholder,
    };
    this.handleTextChange=this.handleTextChange.bind(this);
    this.submit=this.submit.bind(this);
  }

  componentDidUpdate() {
    this.attachQuillRefs()
  }

  componentDidMount(){
    const Font = ReactQuill.Quill.import('formats/font');
    Font.whitelist = ['gotham_htflight', 'gotham_htfthin', 'gotham_htfbook', 'gotham_htfmedium'] ;
    ReactQuill.Quill.register(Font, true);
    this.attachQuillRefs()
  }

  attachQuillRefs = () => {
    if (this.reactQuillRef !== null) {
      if (typeof this.reactQuillRef.getEditor !== 'function') return;
      this.quillRef = this.reactQuillRef.getEditor();
    }
  }

  handleTextChange(value) {
    this.setState({ text: value })
  }

  submit(){
    if (this.state.text !== '') {
      this.setState({stringBody: this.quillRef.getText()});
      this.props.submit(this.state.text, this.quillRef.getText());
    }
  }

  render(){
    return (
      <div className="ReactQuillEditor">
        <ReactQuill
          theme={this.state.theme}
          value={this.state.text}
          onChange={this.handleTextChange}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.ReactQuillEditor'}
          placeholder={this.state.placeholder}
          ref={(el) => { this.reactQuillRef = el }}
        />
        <div className="QuillActionButtons">
          {this.props.cancel!==undefined && (
            <Button className="QuillCancel" variant="outlined" onClick={this.props.cancel}>Cancel</Button>
          )}
          <Button variant="contained" color="primary" onClick={this.submit}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default ReactQuillEditor;
