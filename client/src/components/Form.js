import React, { Component } from 'react';
import axios from 'axios'
import '../styling/Form.css'

import { Row, Input, Button} from 'react-materialize'

class QuoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerName: '',
            service: '',
            width: '',
            length: '',
            comments: ''
        }
    }

    handleCustomerName = (event) => {
        this.setState({ customerName: event.target.value })
    }

    handleService = (event) => {
        this.setState({ service: event.target.value })
    }

    handleWidth = (event) => {
        this.setState({ width: event.target.value })
    }

    handleLength = (event) => {
        this.setState({ length: event.target.value })
    }

    handleComments = (event) => {
        this.setState({ comments: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const submission = {
            customerName: this.state.customerName,
            service: this.state.service,
            width: this.state.width,
            length: this.state.length,
            comments: this.state.comments
        }

        axios.post('/quoteform', {submission})
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        this.setState({
            customerName: '',
            service: '',
            width: '',
            length: '',
            comments: ''
        })
    }

  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>

        <Row className='center'>
            <Input 
                type='text'
                label="Customer Name" 
                s={6} 
                name='customerName' 
                value={this.state.customerName} 
                onChange={this.handleCustomerName} />
            <Input 
                type='select' 
                label="Select Service" 
                s={12} 
                name='service'
                value={this.state.service} 
                onChange={this.handleService}>
                    <option value='-'>-</option>
                    <option value='flooring'>Flooring</option>
                    <option value='landscaping'>Landscaping</option>
                    <option value='windows'>Windows</option>
            </Input>
            <Input 
                type='number'
                label='width'
                name='width'
                value={this.state.width}
                onChange={this.handleWidth} />
            <Input 
                type='number'
                label='length'
                name='length'
                value={this.state.length}
                onChange={this.handleLength} />
            <Input 
                type='textarea' 
                label='Comments' 
                s={12} 
                name='comments' 
                value={this.state.comments} 
                onChange={this.handleComments} />
        </Row>
        
        <Button waves='light'>Submit</Button>
        </form>

        </div>

        
    );
  }
}

export default QuoteForm;
