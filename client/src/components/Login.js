import React, { Component } from 'react'
// import axios from 'axios'
import '../styling/Form.css'
import { connect } from 'react-redux'
import { userLogIn } from '../actions/auth'

import { Row, Input, Button } from 'react-materialize'

class LogInForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {}
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

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.userLogIn(user)

        // axios.post('/login', {
        //     email: this.state.email, 
        //     password: this.state.password
        // })
        //     .then(res => {
        //         console.log('Logged In!')
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        this.setState({
            email: '',
            password: '',
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    render() {
        const { errors } = this.state

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
                <div>{errors.email}</div>
                <Input
                    type='password'
                    label='Password'
                    s={12}
                    name='password'
                    value={this.state.password}
                    onChange={this.handlePassword} />
                <div>{errors.password}</div>
            </Row>

            <Button waves='light'>Log In</Button>   
            </form>


            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, { userLogIn })(LogInForm)