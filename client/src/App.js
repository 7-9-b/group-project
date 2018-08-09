import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


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
          Here is where the front-end of our app will live
        </h1>
      </div>
    );
  }
}

export default App;

import 'bootstrap';
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Quotely </h1>
        </header> */}
        <h1 className="Navbar-intro">
          Quotely
        </h1>
      </div>
    );
  }
}

