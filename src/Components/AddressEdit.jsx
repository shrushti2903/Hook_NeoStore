import React from 'react';
import Button from 'react-bootstrap/Button'
import Form, { FormRow } from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../Assets/css/editAddress.css'
import {IoMdSave} from 'react-icons/io'
import {TiCancel} from 'react-icons/ti'

const AddressEdit = () => {
    return ( 
      <div className="main-editAddress">
         <h3 className="address-tittle">Edit Address</h3>
            <hr className="address-tittle"/>
        <Form className="edit-address-form">
        <Form.Group  controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control className="address-field" placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group  controlId="formGridPincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control className="form-field"/>
          </Form.Group>
       

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control className="form-field" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control  className="form-field"  >
            </Form.Control>
          </Form.Group>
          </Form.Row>
        <Form.Group id="formCountry">
        <Form.Label>Country</Form.Label>
          <Form.Control className="form-field" placeholder="Country" />     
             </Form.Group>
        <Button className="edit-save" type="submit">
        <IoMdSave/>
          save
        </Button>
        <Button className="edit-save"  type="submit">
        <TiCancel/>
          Cancel
        </Button>
      </Form>
      </div>
     );
}
 
export default AddressEdit;