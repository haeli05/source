import React, { Component } from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'

class EmptyRepoMessage extends Component {
  render () {
    return (
      <div className='EmptyRepoMessage'>
        <Typography variant='h2' className='TextCenter'>This project is empty</Typography>
        <Typography variant='caption' className='TextCenter'>`Here's what you can do:`</Typography>
        <div className='EmptyOption'>
          <Typography variant='h6'>To create a new project from the command line</Typography>
          <div className='TerminalInputs'>
            <pre>git clone {this.props.repo.proj.http_url}</pre>
            <pre>cd {this.props.repo.proj.project_name}</pre>
            <pre>touch README.md</pre>
            <pre>git add README.md</pre>
            <pre>git commit -m "add README.md"</pre>
            <pre>git push -u origin master</pre>
          </div>
        </div>
        <div className='EmptyOption'>
          <Typography variant='h6'>To create Project from existing folder</Typography>
          <div className='TerminalInputs'>
            <pre>git init</pre>
            <pre>git remote add origin {this.props.repo.proj.http_url}</pre>
            <pre>git add .</pre>
            <pre>git commit -m "Initial commit"</pre>
            <pre>git push -u origin master</pre>
          </div>
        </div>
        <div className='EmptyOption'>
          <Typography variant='h6'>To push an existing Git Project</Typography>
          <div className='TerminalInputs'>
            <pre>cd {this.props.repo.project_name}</pre>
            <pre>git remote rename origin old-origin</pre>
            <pre>git remote add origin {this.props.repo.proj.http_url}</pre>
            <pre>git push -u origin --all</pre>
            <pre>git push -u origin --tags</pre>
          </div>
        </div>
      </div>
    )
  }
}

export default EmptyRepoMessage
