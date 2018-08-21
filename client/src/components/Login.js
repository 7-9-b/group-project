import React, { Component } from 'react'
import axios from 'axios'
import '../styling/Form.css'
import { connect } from 'react-redux'
import { userLogIn } from '../actions/auth'

import { Row, Input, Button } from 'react-materialize'

class LogInForm extends Component {
    
    state = {}

    setValue(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    login() {
        axios.post('/users/login', this.state).then((res) => {
            localStorage.setItem('auth_token', res.data.token)
            window.location.href = '/quoteform';
        }).catch((err) => {
            console.log('error')
        })
    }

    render() {

        return(
            <div>
                <input name="userEmail" placeholder="email..." onChange={(e) => this.setValue(e)} />
                <input name="userPassword" placeholder="password" onChange={(e) => this.setValue(e)} />
                <Button onClick={() => this.login()}>submit</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, { userLogIn })(LogInForm)