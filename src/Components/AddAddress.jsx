import React from 'react';
import Button from 'react-bootstrap/Button'
import Form, { FormRow } from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../Assets/css/editAddress.css'
import {IoMdSave} from 'react-icons/io'
import {TiCancel} from 'react-icons/ti'
import { useLocation, useHistory } from 'react-router-dom';
import { useInput } from './useInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddAddress } from '../redux/action/customerDataAction';

const AddAddress = () => {
  const history = useHistory()

  const [address , setAddress] = useInput()
  const [pincode , setPincode] = useInput()
  const [state , setState] = useInput()
  const [city , setCity] = useInput()
  const [country , setCountry] = useInput()
  const AddAddressData = useSelector((state)=> state.customerData.addAddress)
  const dispatch = useDispatch()

  const handlerSubmit = (event)=>{
    event.preventDefault();
    event.target.reset()
    const user = {
      address : address,
      city : city,
      pincode : pincode,
      state: state ,
      country : country,
    }
    console.log('user', user)
    const id = localStorage.getItem('token')
    dispatch(fetchAddAddress(user , id))
    if(AddAddressData.status_code == 200){
      history.push('/Order/address');
    }
  }

  const redirect = ()=>{
    console.log('clicked ')
    history.push('/Order/address');
    
}

    return ( 
      <div className="main-editAddress">
         <h3 className="address-tittle">Edit Address</h3>
            <hr className="address-tittle"/>
        <Form className="edit-address-form" onSubmit={handlerSubmit}>
        <Form.Group  controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control 
          className="address-field" 
          placeholder="1234 Main St" 
          value={address}
          onChange={setAddress}/>
        </Form.Group>

        <Form.Group  controlId="formGridPincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control 
            className="form-field"
            value={pincode}
            onChange={setPincode}/>
          </Form.Group>
       

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control 
            className="form-field"
            value={city}
            onChange={setCity} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control  
            className="form-field"
            value={state} 
            onChange={setState} >
            </Form.Control>
          </Form.Group>
          </Form.Row>
        <Form.Group id="formCountry">
        <Form.Label>Country</Form.Label>
          <Form.Control 
          className="form-field" 
          placeholder="Country"
          value={country}
          onChange={setCountry} />     
             </Form.Group>
        <Button 
        className="edit-save" 
        type="submit">
        <IoMdSave/>
          save
        </Button>
        <Button 
        className="edit-save"
        onClick={redirect} >
        <TiCancel/>
          Cancel
        </Button>
      </Form>
      </div>
     );
}
 
export default AddAddress;