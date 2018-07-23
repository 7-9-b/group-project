import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';

import Route from './Routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="App-intro">
            Welcome to Quotely.
            Here is where the front-end of our app will live.
          </h1>
        <hr />
          <h1> This is a temp navbar to test routing.</h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/quoteform'>Quote Form</Link></li>
            <li><Link to='/feed'>Feed</Link></li>
          </ul>
          <Route />
        </div>
      </Router>
    );
  }
}

export default App;
