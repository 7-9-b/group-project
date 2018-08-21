import React, { Component } from 'react';
import axios from 'axios'
import '../styling/Form.css'

import { Row, Input, Button } from 'react-materialize'

class QuoteForm extends Component {

    state = {}

    componentDidMount() {
        axios.get(`/quotes`).then((res) => {
            this.setState({
                quotes: res.data
            })
        })
    }

    setValue(e) {   
        this.setState({[e.target.name]: e.target.value})
    }

    save(e) {
        e.preventDefault()
        axios.post('/quotes', this.state).then(() => {
            window.location.reload()
        })
    }

    edit(q) {
        let newQuote = window.prompt(`Update Service: ${q.service}`);
        this.setState({newQuote: newQuote}, () => {
            axios.put(`/quotes/${q._id}`, this.state).then(() => {
                window.location.reload();
            })
        })
    }

    delete(q) {
        axios.delete(`/quotes/${q._id}`).then(() => {
            window.location.reload()
        })
    }


    render() {
        return (
        <div>
            <form onSubmit={(e) => this.save(e)}>
                <Row className='center'>
                    <Input 
                        type='text'
                        label="Customer Name" 
                        s={12} 
                        name='name' 
                        onChange={(e) => this.setValue(e)} />
                    <Input 
                        type='text'
                        label="Phone Number" 
                        s={12} 
                        name='phone' 
                        onChange={(e) => this.setValue(e)} />
                    <Input 
                        type='text'
                        label="Service" 
                        s={12} 
                        name='service' 
                        onChange={(e) => this.setValue(e)} />
                    <Input 
                        type='textarea' 
                        label='Comments' 
                        s={12} 
                        name='comments' 
                        onChange={(e) => this.setValue(e)} />
                </Row>
                <Button waves='light'>Submit</Button>
            </form>

            <h3>Quotes</h3>

            {(this.state.quotes) ? this.state.quotes.map((quote, index) => (
                <li key={index}>
                    {quote.name} - {quote.service} - {quote.phone} <Button onClick={() => this.edit(quote)}>edit</Button> <Button onClick={() => this.delete(quote)}>delete</Button>
                </li>
            )) : null}
        </div>
        );
    }
}

export default QuoteForm;
