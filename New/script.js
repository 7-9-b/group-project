import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render (
    React.createElement('h1',null, 'customerName'),
    document.getElementById('mongodb://KimBailey:March-319@ds137611.mlab.com:37611/ikeafinal/QuoteFormData')
);

function previouJobData(customerNames) {
    return customerName.name.legnth > 0;
}
function filterInvalidData(customerNames) {
    var validData = [];
    for (var customerName of customerNames) {
        if (previousJobData (customerName)) {
            validData.push(customerName);
        }
    }
    return validData;
}

function customerNameToFormattedString(customerName) {
    return 'name'; customerName.name;
}

var customerName = [
    { 
        name: 'Isaac Grey',
        password: 'irockcoding'
    },
    {
        name: 'Kim Bailey',
        passowrd: 'IKEAForce1'
    },
    { 
        name: 'Anani Vossah',
        password: 'IKEAForce2'
    }
];

var validData = filterInvalidData(customerNames);

for (var i = 0; i < validData.length; i++) {
    return(cutomerNameToFormattedString(customerNames[i]));
}


import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

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

import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';

import Route from './Routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="App-intro">Quotely</h1>
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