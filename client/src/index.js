import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './Feed.js';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Feed />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
