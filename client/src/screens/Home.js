import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    state = {}

    setValue(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount () {
        let authToken = window.localStorage.token;
        let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
        axios.get('/feed/${payload.id}').then((res) => {
            this.setState({
                owner: payload.id,
                feed: res.data
            })
        })
    }
    
    save() {
        axios.post('/feed', this.state).then(() => {
            window.location.reload()
        })
    }

    edit(td) {
        let newFeed = window.prompt('Update Feed: ${td.description}');
        this.setState({newFeed: newFeed}, () => {
            axios.put('/feed/${td._id}', this.state).then(() => {
                window.location.reload();
            })
        })
    }

    delete(td) {
        axios.delete('/feed/${td._id}').then(() => {
            window.location.reload()
        })
    }

    render() {
        return (
            <div>
                <h1>
        )
    }
}
