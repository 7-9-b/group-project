import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../src/screens/Register';
import Home from '../src/screens/Home';
import Feed from '../src/screens/Feed';
import Form from '../src/screens/Form';
import Login from '../src/screens/Login';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const Index = ({ pathname }) => {
  switch (pathname) {
    case '/':
    return <Register />
    case '/home':
    return <Home />
    case "/login":
    return <Login />
    case'/feed':
    return <Feed />
    case '/form':
    return <Form />
    default: 
      return <Register />
  }
}

let pathname = window.location.pathname;

ReactDOM.render(
  <Index pathname={pathname} />,
  document.getElementById('root')
)

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
})

// function App() {
//   return (
//     <div className="App">
//       <Feed />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
