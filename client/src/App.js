import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import QuoteForm from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-intro">
          Welcome to Quotely.
          Here is where the front-end of our app will live
        </h1>

        <QuoteForm />
      </div>
    );
  }
}

export default App;
