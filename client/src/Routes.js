import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Form from './components/Form'

const HomePage = () => (
    <div>
      <h2>Home</h2>
    </div>
  );
  
  const Feed = () => (
    <div>
      <h2>Feed</h2>
    </div>
  );

class Routes extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={HomePage} />
                <Route path="/quoteform" component={Form} />
                <Route path="/feed" component={Feed} />
            </div>
        )
    }
}

export default Routes