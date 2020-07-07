import React from 'react';
import Button from 'react-bootstrap/Button'
import Form, { FormRow } from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


const AddressEdit = () => {
    return ( 
        <Form>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
      
        <Form.Group id="formCountry">
        <Form.Label>Country</Form.Label>
          <Form.Control placeholder="Country" />     
             </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
     );
}
 
export default AddressEdit;