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

     render() {
        return (
            <div>
                <h1>Previous Job Feed</h1>
                <ul>
                    {(this.state.feed) ? this.state.feed.map((feed, index) => (
                        <li key={index}>
                        {feed.owner}
                        </li>
                        <li key={index}>
                        {feed.service}
                        </li>
                        <li key={index}>
                        {feed.comment}
                        </li>
                    )) : null}
                </ul>
                </div>
        )
    }
}
export default Home;