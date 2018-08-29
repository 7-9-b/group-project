import React, { Component } from 'react'
import '../styling/Form.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignUp } from '../actions/auth'

import { Row, Input, Button } from 'react-materialize'

class SignUpForm extends Component {
    
    state = {}

    setValue(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    signup() {
        axios.post('/users/signup', this.state).then(() => {
          alert('success')
        }).catch((err) => {
          console.log('error')
        })
    }

    render() {

        return(
            <div>
                <input name="userEmail" placeholder="email..." onChange={(e) => this.setValue(e)} />
                <input name="userPassword" placeholder="password" onChange={(e) => this.setValue(e)} />
                <Button onClick={() => this.signup()}>submit</Button>
            </div>
        )
    }
}

export default SignUpForm;