import React, { Component } from 'react'
import '../styling/Form.css'
// import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userSignUp } from '../actions/auth'

import { Row, Input, Button } from 'react-materialize'

class SignUpForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword:'',
            errors: {}
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

        const user = {
            email: this.state.email, 
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        this.props.userSignUp(user, this.props.history)

        // axios.post('/signup', {
        //     email: this.state.email,
        //     password: this.state.password,
        //     confirmPassword: this.state.confirmPassword
        // })
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        
        this.setState({
            email: '',
            password: '',
            confirmPassword: ''
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
            
            <form onSubmit={this.handleSignUp}> 
            <Row className='center'>
                <Input 
                    type='text'
                    label='Email'
                    s={12}
                    name='email' 
                    value={this.state.email}
                    onChange={this.handleEmail} />
                <div> {errors.email} </div>
                <Input
                    type='password'
                    label='Password'
                    s={12}
                    name='password'
                    value={this.state.password}
                    onChange={this.handlePassword} />
                <div> {errors.password} </div>
                <Input
                    type='password'
                    label='Confirm Password'
                    s={12}
                    name='confirmPassword' 
                    value={this.state.confirmPassword}
                    onChange={this.handleConfirmPassword} />
                <div> {errors.confirmPassword} </div>
            </Row>

            <Button waves='light'>Sign Up</Button>    
            </form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { userSignUp })(withRouter(SignUpForm))