import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../../Assets/css/editProfile.css";
import { IoMdSave } from "react-icons/io";
import { TiCancel } from "react-icons/ti";
import { useLocation, Redirect, useHistory } from "react-router-dom";
import { useInput } from "../../Custom Hooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomerProfile } from "../../../redux/action/customerDataAction";
import Card from "react-bootstrap/Card";

const ProfileEdit = (props) => {
  const location = useLocation();
  const data = location.state.data;
  const [firstName, setFirstName] = useInput(data.first_name);
  const [lastName, setLastName] = useInput(data.last_name);
  const [email, setEmail] = useInput(data.email);
  const [phoneNumber, setPhoneNumber] = useInput(data.phone_no);
  const [dataGender] = useState({ male: "Male", female: "Female" });
  const [gender, setGender] = useInput(data.gender);
  const [dob, setDob] = useInput(data.dob);
  const history = useHistory();

  const customerProfileList = useSelector(
    (state) => state.customerData.customerProfile
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
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_no: phoneNumber,
      gender: gender,
      dob: dob,
    };
    const id = localStorage.getItem("token");
    dispatch(fetchCustomerProfile(user, id));
    if (customerProfileList.status_code == 200) {
      localStorage.setItem(
        "customer",
        JSON.stringify(customerProfileList.customer_details)
      );
      history.push("/Order/profile");
    }
  };
  const redirect = () => {
    history.push("/Order/profile");
  };
  return (
    <div className="main-editAddress">
      <h5 className="heading-form">Edit Profile</h5>
      <hr className="address-tittle" />
      <Form className="edit-address-form " onSubmit={handlerSubmit}>
        <Form.Group controlId="formGroupFirstName">
          <Form.Control
            id="formGroupFirstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={setFirstName}
          />
        </Form.Group>
        <Form.Group controlId="formGroupLastName">
          <Form.Control
            id="formGroupLastName"
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={setLastName}
          />
        </Form.Group>
        <label className="gender">Gender : </label>
        <div class="custom-control custom-radio custom-control-inline radio">
          <input
            type="radio"
            id={dataGender.male}
            value={dataGender.male}
            checked={dataGender.male === gender}
            onChange={setGender}
          />
          <label className="radio-label" htmlFor={dataGender.male}>
            Male
          </label>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id={dataGender.female}
              value={dataGender.female}
              checked={dataGender.female === gender}
              onChange={setGender}
            />
            <label className="radio-label" htmlFor={dataGender.female}>
              Female
            </label>
          </div>
        </div>
        <Form.Group controlId="formGroupNumber">
          <Form.Control
            id="formGroupNumber"
            type="date"
            value={dob}
            placeholder={dob}
            onChange={setDob}
          />
        </Form.Group>
        <Form.Group controlId="formGroupNumber">
          <Form.Control
            id="formGroupNumber"
            type="text"
            value={phoneNumber}
            placeholder="Enter Phone Number"
            onChange={setPhoneNumber}
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Control
            id="formGroup-Email"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={setEmail}
          />
        </Form.Group>
        <Button className="edit-cancel" onClick={redirect}>
          Cancel
        </Button>
        <Button className="edit-save" type="submit" value="send">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProfileEdit;
