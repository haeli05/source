import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null
    };
    this.submitFile=this.submitFile.bind(this);
    this.handleFileUpload=this.handleFileUpload.bind(this);
  }

  submitFile (event) {
    event.preventDefault();
    let formData = new FormData();
    //formData.append('file', this.state.file[0], this.state.file[0].name);
    formData.append('foo', 'bar');
    axios.post(`http://localhost:8001/api/storage/upload`, formData, {
      headers: {
        'Content-Type': `multipart/form-data`
      }
    }).then(response => {
      console.log(response)
      // handle your response;
    }).catch(error => {
      console.log(error)
      // handle your error
    });
  }

  handleFileUpload (event) {
    this.setState({file: event.target.files});
  }

  render () {
    return (
      <form onSubmit={(e)=>{this.submitFile(e)}}>
        <input label='upload file' type='file' onChange={(e)=>{this.handleFileUpload(e)}} />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

export default FileUpload;
