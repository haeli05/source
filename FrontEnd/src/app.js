import React, { Component } from 'react';
import Welcome from './pages/welcome/welcomePage';
import styles from './assets/css/styles.min .css';
import Intercom from 'react-intercom';

class App extends Component {

  render() {
    const user = {
    user_id: 1,
    email: '',
    name: 'Guest'
    };
    return (
      <div className="App">
      <Intercom appID="f5is3sx5" {...user}/>
        <Welcome {...this.props}/>
      </div>
    );
  }
}

export default App;
