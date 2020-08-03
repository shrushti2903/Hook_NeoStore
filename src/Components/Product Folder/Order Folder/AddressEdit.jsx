import React from "react";
import Button from "react-bootstrap/Button";
import Form, { FormRow } from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "../../../Assets/css/editAddress.css";
import { IoMdSave } from "react-icons/io";
import { TiCancel } from "react-icons/ti";
import { useLocation, useHistory } from "react-router-dom";
import { useInput } from "../../Custom Hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerUpdateAddress } from "../../../redux/action/customerDataAction";
import FullLoader from "../../../Common/FullLoader";
import Card from "react-bootstrap/Card";

const AddressEdit = () => {
  const location = useLocation();
  const data = location.state.data;
  const history = useHistory();
  const loading = useSelector((state) => state.customerData.loading);
  const [address, setAddress] = useInput(data.address);
  const [pincode, setPincode] = useInput(data.pincode);
  const [state, setState] = useInput(data.state);
  const [city, setCity] = useInput(data.city);
  const [country, setCountry] = useInput(data.country);
  const customerUpdatedAddress = useSelector(
    (state) => state.customerData.updateAddress
  );
  const dispatch = useDispatch();

  /**
 * Function Name - handlerSubmit
 * Parameters -  event
 * this function submitted all the field of form 
    after validating all the field value and after validation on submit api  gets called,
 */

  const handlerSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    const user = {
      address_id: data.address_id,
      address: address,
      city: city,
      pincode: pincode,
      state: state,
      country: country,
    };
    const id = localStorage.getItem("token");
    dispatch(fetchCustomerUpdateAddress(user, id));
    if (customerUpdatedAddress.status_code == 200) {
      history.push("/Order/address");
    }
  };

  const redirect = () => {
    history.push("/Order/address");
  };

  return (
    <div className="main-editAddress">
      <h5 className="heading-form">Edit Address</h5>
      <hr className="address-tittle" />

      <Form className="edit-address-form" onSubmit={handlerSubmit}>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="address-field"
            placeholder="1234 Main St"
            value={address}
            onChange={setAddress}
          />
        </Form.Group>

        <Form.Group controlId="formGridPincode">
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            className="form-field"
            placeholder="pincode"
            value={pincode}
            onChange={setPincode}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              className="form-field"
              placeholder="city"
              value={city}
              onChange={setCity}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              className="form-field"
              placeholder="state"
              value={state}
              onChange={setState}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group id="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            className="form-field"
            placeholder="Country"
            value={country}
            onChange={setCountry}
          />
        </Form.Group>
        <Button className="edit-cancel" onClick={redirect}>
          Cancel
        </Button>
        <Button className="edit-save" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddressEdit;
