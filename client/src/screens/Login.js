import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    state = {}
    
    setValue(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    login() {
        axios.post('/user/login', this.state).then((res) => {
            localStorage.setItem('token', res.data.token)
            window.location.pathname = '/home';
        })
    }

    render() {
        return (
           <span>
            <h1>Register</h1>
            <input type="text" name="email" placeholder="email" onChange={(e) => this.setValue(e)} />
            <input type="text" name="passowrd" placeholder="password" onChange={(e) => this.setValue(e)} />
            <button onClick={() => this.login()}>Submit</button>
          </span>
        )
    }
}

export default Login;