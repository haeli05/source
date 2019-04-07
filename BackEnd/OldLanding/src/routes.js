/* eslint-disable global-require */
import React from 'react';
import {Router,Route} from 'react-router-dom';
import App from './App';
import OnePager from './onepager';
import history from './history';


let Routes =()=>(
  <Router history={history}>
    <div className="app">
      <Route exact path="/" render={ props => <App {...props} />} />
      <Route exact path="/onepager" render={ props => <OnePager {...props} />} />
    </div>
  </Router>
)



export default Routes ;
