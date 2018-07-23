import React, { Component } from 'react';
import '../styling/Form.css'

import { Row, Input, Button} from 'react-materialize'

class QuoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {value: ''}
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        console.log('Customer name: ' + this.state.value)
        event.preventDefault()
    }

  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>

        <Row className='center'>
            <Input label="Customer Name" s={6} value={this.state.value} onChange={this.handleChange}/>
            <Input s={12} type='select' label="Select Service" defaultValue='2'>
                <option value='1'>Flooring</option>
                <option value='2'>Landscaping</option>
                <option value='3'>Windows</option>
            </Input>
            <Input name='on' type='date' label='Date of Quote' onChange={function(e, value) {}} />
            <Input type='textarea' label='Comments' s={12} />
        </Row>
        
        <Button waves='light'>Submit</Button>
        </form>

        </div>

        
    );
  }
}

export default QuoteForm;
