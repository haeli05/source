import React, { Component } from 'react';
import Welcome from './pages/welcome/welcomePage';
import styles from './assets/css/styles.min .css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome {...this.props}/>
      </div>
    );
  }
}

export default App;
