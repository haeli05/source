import React, { Component } from 'react'
import Welcome from './pages/welcome/welcomePage'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Welcome {...this.props} />
      </div>
    )
  }
}

export default App
