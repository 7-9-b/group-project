import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

import Route from './Routes'

class App extends Component {
  render() {
    return (
      <Provider store = {store} >
        <Router>
          <div className="App">
            <h1 className="App-intro">Quotely</h1>
            <hr />
            <h1> This is a temp navbar to test routing.</h1>
            <ul>
              <li><Link to='/signup'>Sign Up</Link></li>
              <li><Link to='/login'>Log In</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/quoteform'>Quote Form</Link></li>
              <li><Link to='/feed'>Feed</Link></li>
            </ul>
          <Route />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
// Lines 24-42 establish the connection the the MongoDb using Mongoose.
// var mongoose = require('mongoose');
// var opts = {
//      server: {
//         socketOptions: {keepAlive: 1}
//      }
// };
// switch(app.get('env')){
//     case 'development': 
//               mongoose.connect(credentials.mongo.
//               development.connectionString, opts);
//               break;
//     case 'production':                         
//               mongoose.connect(credentials.mongo.
//               production.connectionString, opts);
//               break;
//     default:
//          throw new Error('Unknown execution environment: ' + 
//                           app.get('env'));
// }