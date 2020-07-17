import React, { useState, useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../../Assets/css/register.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form, { FormRow } from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { apiUrl } from "../../Constants/api";
import validate from "../Custom Hooks/ValidateRegister";
import { useSelector, useDispatch } from "react-redux";
import { fetchRegisterData } from "../../redux/action/customerDataAction";
import produce from "immer";
import { set, has } from "lodash";
import { useInput } from "../Custom Hooks/useInput";
import FullLoader from "../../Common/FullLoader";

const initialState = {
  error: {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    phoneError: "",
    radioError: "",
  },
};

const Resgister = () => {
  const registerData = useSelector((state) => state.customerData.register);

  const dispatch = useDispatch();
  const [error, setError] = useState(initialState);
  const [firstName, setFirtName] = useInput("");
  const [lastName, setLastName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfitmPassword] = useInput("");
  const [data] = useState({ male: "male", female: "female", other: "other" });
  const [gender, setGender] = useInput("");
  const [phone, setPhone] = useInput("");
  const history = useHistory();
  const handlerSubmit = (event) => {
    event.preventDefault();
    setError(
      validate(
        firstName,
        lastName,
        email,
        phone,
        password,
        confirmPassword,
        data
      )
    );
    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      pass: password,
      confirmPass: confirmPassword,
      phone_no: phone,
      gender: gender,
    };
    const isValid = validate;
    if (isValid) {
      dispatch(fetchRegisterData(user));
      if(registerData.status_code == 200){

        history.push("/login");
      }
    }
  };

  return (
    <div>
      {/* <Container>
        <Row>
          <Col className="fb-gog-col">
            <Button size="sm" id="fb">
              <FaFacebookF size="3rem" className="mr-4"></FaFacebookF>
              <span>Login facbook</span>
            </Button>
            <Button id="gog" size="sm">
              <FaGoogle size="3rem" className="mr-4"></FaGoogle>
              <span>Login google</span>
            </Button>
          </Col>
        </Row>
      </Container>
      <hr /> */}

      <Row>
        <Col>
          <Card className="card-register">
            <Card.Body className="card-register-body">
           

              <Form
                className="mx-auto col-md-12"
                onSubmit={handlerSubmit}
                noValidate
              >
                <h3 className="register-heading">Register To NeoSTORE</h3>
                <Form.Group controlId="formGroupFirstName">
                  <Form.Control
                    id="formGroupFirstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={setFirtName}
                  />
                </Form.Group>
                <div className="error-tittle">{error.firstNameError}</div>
                <Form.Group controlId="formGroupLastName">
                  <Form.Control
                    id="formGroupLastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={setLastName}
                  />
                </Form.Group>
                <div className="error-tittle">{error.lastNameError}</div>
                <Form.Group controlId="formGroupEmail">
                  <Form.Control
                    id="formGroup-Email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={setEmail}
                  />
                </Form.Group>
                <div className="error-tittle">{error.emailError}</div>
                <Form.Group controlId="formGroupPassword">
                  <Form.Control
                    id="formGroup-Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                  />
                </Form.Group>
                <div className="error-tittle">{error.passwordError}</div>
                <Form.Group controlId="formGroupConPassword">
                  <Form.Control
                    id="formGroupConPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={setConfitmPassword}
                  />
                </Form.Group>
                <div className="error-tittle">{error.confirmPasswordError}</div>
                <Form.Group controlId="formGroupNumber">
                  <Form.Control
                    id="formGroupNumber"
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={setPhone}
                  />
                </Form.Group>
                <div className="error-tittle">{error.phoneError}</div>
                <div>
                  <span id="head">Gender : </span>
                  <div class="custom-control custom-radio custom-control-inline radio">
                    <input
                      type="radio"
                      id={data.male}
                      value={data.male}
                      checked={data.male === gender}
                      onChange={setGender}
                    />
                    <label htmlFor={data.male}>Male</label>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id={data.female}
                        value={data.female}
                        checked={data.female === gender}
                        onChange={setGender}
                      />
                      <label htmlFor={data.female}>Female</label>
                    </div>
                  </div>
                </div>
                <div className="error-tittle">{error.radioError}</div>
                <Button id="register-btn" size="sm" type="submit" value="send">
                  <b id="span-reg">Register</b>
                </Button>
              </Form>
     
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Resgister;
