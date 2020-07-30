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
import Swal from "sweetalert2";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  /**
 * Function Name - handleSubmit
 * Parameters -  event
 * this function submitted all the field of form 
    after validating all the field value and after validation on submit api  gets called,
 */

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
    setIsSubmitting(true);
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
    if (Object.keys(error).length === 0 && isSubmitting) {
      dispatch(fetchRegisterData(user));
    }
  };
  if (registerData.status_code == 200) {
    Swal.fire({
      confirmButtonColor: "#ff0000 ",
      text: registerData.message,
    });
    history.push("/login");
  }
  useEffect(() => {
    if (isSubmitting) {
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
    }
  }, [firstName, lastName, email, phone, password, confirmPassword, data]);
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
        <Col xs={12} md={12} lg={12}>
          <Form
            className="mx-auto col-md-6"
            onSubmit={handlerSubmit}
            noValidate
          >
            <Card className="contact">
              <h5 className="heading-form">Register To NeoSTORE</h5>
              <Form.Group controlId="formGroupFirstName">
                <Form.Control
                  id="formGroupFirstName"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={setFirtName}
                />
                <Form.Text className=" error-tittle">
                  {error.firstNameError && error.firstNameError}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formGroupLastName">
                <Form.Control
                  id="formGroupLastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={setLastName}
                />
                <Form.Text className=" error-tittle">
                  {error.lastNameError && error.lastNameError}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  id="formGroup-Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                />
                <Form.Text className=" error-tittle">
                  {error.emailError && error.emailError}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  id="formGroup-Password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={setPassword}
                />
                <Form.Text className=" error-tittle">
                  {error.passwordError && error.passwordError}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formGroupConPassword">
                <Form.Control
                  id="formGroupConPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={setConfitmPassword}
                />
                <Form.Text className=" error-tittle">
                  {error.confirmPasswordError && error.confirmPasswordError}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formGroupNumber">
                <Form.Control
                  id="formGroupNumber"
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  name="phone"
                  onChange={setPhone}
                />
                <Form.Text className=" error-tittle">
                  {error.phoneError && error.phoneError}
                </Form.Text>
              </Form.Group>
              <div>
                <span id="head">Gender : </span>
                <div class="custom-control custom-radio custom-control-inline radio">
                  <input
                    type="radio"
                    id={data.male}
                    name="male"
                    value={data.male}
                    checked={data.male === gender}
                    onChange={setGender}
                  />
                  <label className="radio-label" htmlFor={data.male}>
                    Male
                  </label>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id={data.female}
                      value={data.female}
                      name="female"
                      checked={data.female === gender}
                      onChange={setGender}
                    />
                    <label className="radio-label" htmlFor={data.female}>
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <Form.Group>
                <Form.Text className=" error-tittle">
                  {error.radioError && error.radioError}
                </Form.Text>
              </Form.Group>
              <Button id="register-btn" size="sm" type="submit" value="send">
                <b id="span-reg">Register</b>
              </Button>
            </Card>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Resgister;
