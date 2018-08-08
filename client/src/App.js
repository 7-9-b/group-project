import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Feed.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <h1 className="App-intro">
          Welcome to Quotely.
          Here is where the front-end of our app will live
        </h1>
      </div>
    );
  }
}

export default App;
// Lines 24-42 establish the connection the the MongoDb using Mongoose.
var mongoose = require('mongoose');
var opts = {
     server: {
        socketOptions: {keepAlive: 1}
     }
};
switch(app.get('env')){
    case 'development': 
              mongoose.connect(credentials.mongo.
              development.connectionString, opts);
              break;
    case 'production':                         
              mongoose.connect(credentials.mongo.
              production.connectionString, opts);
              break;
    default:
         throw new Error('Unknown execution environment: ' + 
                          app.get('env'));
}

