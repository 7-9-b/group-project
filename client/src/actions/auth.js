import axios from 'axios'
import { GET_ERRORS } from './types'

export const userSignUp = (user, history) => dispatch => {
    axios.post('/signup', user)
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

export const userLogIn = (user) => dispatch => {
    axios.post('/login', user)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }) 
}