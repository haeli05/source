import React from 'react'
import ReactDOM from 'react-dom'
import Icon from 'react-icons-kit'
import { image } from 'react-icons-kit/iconic/image'
import { video } from 'react-icons-kit/iconic/video'

import mediumDraftExporter from 'medium-draft/lib/exporter'

import {
  ImageSideButton,
  Block,
  addNewBlock,
  createEditorState,
  Editor,
  convertToRaw
} from 'medium-draft'

import fetch from 'isomorphic-fetch'
import 'medium-draft/dist/medium-draft.css'
import content from 'medium-draft/lib/model/content';

class CustomImageSideButton extends ImageSideButton {
  // Check if the uploaded image is valid
  onChange (e) {
    const file = e.target.files[0]
    if (file.type.indexOf('image/') === 0) {
      // This is a post request to server endpoint with image as `image`
      const formData = new FormData()
      formData.append('image', file)
      fetch('/sourceapi/newimage', {
        method: 'POST',
        body: formData
      }).then((response) => {
        if (response.status === 200) {
          // Assuming server responds with
          // `{ "url": "http://example-cdn.com/image.jpg"}`
          return response.json().then(data => {
            if (data.url) {
              this.props.setEditorState(addNewBlock(
                this.props.getEditorState(),
                Block.IMAGE, {
                  src: data.url
                }
              ))
            }
          })
        }
      })
    }
    this.props.close()
  }
  render () {
    return (
      <button
        className='md-sb-button SideButton SideButtonImage'
        type='button'
        onClick={this.onClick}
        title='Add an Image'
      >
        <Icon className='icon' icon={image} />
        <input
          type='file'
          accept='image/*'
          ref={(c) => { this.input = c }}
          onChange={this.onChange}
          style={{ display: 'none' }}
        />
      </button>
    )
  }
}

class CustomVideoSideButton extends ImageSideButton {
  // Check if the uploaded image is valid
  onChange (e) {
    const file = e.target.files[0]
    if (file.type.indexOf('video/') === 0) {
      const formData = new FormData()
      formData.append('video', file)
      fetch('/sourceapi/newvideo', {
        method: 'POST',
        body: formData
      }).then((response) => {
        if (response.status === 200) {
          // Assuming server responds with
          // `{ "url": "http://example-cdn.com/image.jpg"}`
          return response.json().then(data => {
            if (data.url) {
              this.props.setEditorState(addNewBlock(
                this.props.getEditorState(),
                Block.VIDEO, {
                  src: data.url
                }
              ))
            }
          })
        }
      })
    }
    this.props.close()
  }
  render () {
    return (
      <button
        className='md-sb-button SideButton'
        type='button'
        onClick={this.onClick}
        title='Add a Video'
      >
        <Icon className='icon' icon={video} />
        <input
          type='file'
          accept='video/*'
          ref={(c) => { this.input = c }}
          onChange={this.onChange}
          style={{ display: 'none' }}
        />
      </button>
    )
  }
}

class ReactDraftEditor extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      editorState: createEditorState() // for empty content
    }

    /*
    this.state = {
      editorState: createEditorState(data), // if you have initial data
    };
    */

    this.sideButtons = [{
      title: 'Image',
      component: CustomImageSideButton
    },
    {
      title: 'Video',
      component: CustomVideoSideButton
    }]

    this.onChange = (editorState) => {
      this.setState({ editorState })
    }
  }

  componentDidMount () {
    this.refs.editor.focus()
  }

  exportHTML () {
    const editorState = this.state.editorState
    const contentState = editorState.getCurrentContent()
    const renderedHTML = mediumDraftExporter(contentState)
    console.log(renderedHTML)

    // Handle HTML file
    // Probably send HTML file to backend
  }

  render () {
    const { editorState } = this.state
    return (
      <div className='ReactDraftEditor'>
        <Editor
          ref='editor'
          editorState={editorState}
          onChange={this.onChange}
          sideButtons={this.sideButtons}
        />
        { /* Replace with submit button */ }
        <button
          onClick={() => this.exportHTML()}
        >
          Export HTML
        </button>
      </div>
    )
  }
};

export default ReactDraftEditor
