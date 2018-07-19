import React, { Component } from 'react';
import '../styling/Form.css'

import { Row, Input, Button} from 'react-materialize'

class QuoteForm extends Component {
  render() {
    return (
        <div>

        <Row className='center'>
            <h5>Quote Form </h5>
            <Input label="Customer Name" s={6} />
            <Input s={12} type='select' label="Select Service" defaultValue='2'>
                <option value='1'>Flooring</option>
                <option value='2'>Landscaping</option>
                <option value='3'>Windows</option>
            </Input>
            <Input name='on' type='date' label='Date of Quote' onChange={function(e, value) {}} />
            <Input type='textarea' label='Comments' s={12} />
        </Row>
        
        <Button waves='light'>Submit</Button>

        </div>

        
    );
  }
}

export default QuoteForm;
