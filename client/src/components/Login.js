import React, { Component } from 'react'
import axios from 'axios'
import '../styling/Form.css'

import { Row, Input, Button } from 'react-materialize'

class LogInForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    handleLogIn = (event) => {
        event.preventDefault()
        
        axios.post('/login', {
            username: this.state.email,
            password: this.state.password
        })
            .then(res => {
                console.log('Logged In!')
            })
            .catch(err => {
                console.log(err)
            })

        this.setState({
            email: '',
            password: '',
        })
    }

    render() {
        return(
            <div>
            
            <form onSubmit={this.handleLogIn}> 
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
            </Row>

            <Button waves='light'>Log In</Button>   
            </form>


            </div>
        )
    }
}

export default LogInForm