import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import QuoteForm from './components/Form'
import SignUpForm from './components/Signup'
import LogInForm from './components/Login'

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
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/quoteform" component={QuoteForm} />
                    <Route path="/feed" component={Feed} />
                    <Route path="/signup" component={SignUpForm} />
                    <Route path='/login' component={LogInForm} />
                </Switch>
            </div>
        )
    }
}

export default Routes