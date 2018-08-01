import React, { Component } from 'react'
import axios from 'axios'
import '../styling/Form.css'

import { Row, Input, Button } from 'react-materialize'

class SignUpForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    
    handleConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value })
    }

    handleSignUp = (event) => {
        event.preventDefault()

        axios.post('/signup', {
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        
        this.setState({
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    render() {
        return(
            <div>
            
            <form onSubmit={this.handleSignUp}> 
            <Row className='center'>
                <Input 
                    type='text'
                    label='Email'
                    s={12}
                    name='email' 
                    value={this.state.email}
                    onChange={this.handleEmail} />
                <Input
                    type='password'
                    label='Password'
                    s={12}
                    name='password'
                    value={this.state.password}
                    onChange={this.handlePassword} />
                <Input
                    type='password'
                    label='Confirm Password'
                    s={12}
                    name='confirmPassword' 
                    value={this.state.confirmPassword}
                    onChange={this.handleConfirmPassword} />
            </Row>

            <Button waves='light'>Sign Up</Button>    
            </form>

            </div>
        )
    }
}

export default SignUpForm