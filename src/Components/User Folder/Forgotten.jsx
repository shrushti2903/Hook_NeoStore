import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../Assets/css/forgotten.css";
import { regEmail } from "../../Constants/inputRegxs";
import { apiUrl } from "../../Constants/api";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { fetchForgotPassworData } from "../../redux/action/customerDataAction";
import FullLoader from "../../Common/FullLoader";

const Forgotten = () => {
  const [email, setEmail] = useState({ email: "" });
  const [error, setError] = useState({ error: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const loginDataList = useSelector(
    (state) => state.customerData.forgotPassword
  );
  const loading = useSelector(
    (state) => state.customerData.loading
  );
  const dispatch = useDispatch();

  const handllerChange = (event) => {
    const { name, value } = event.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    setError(validate(email));
    setIsSubmitting(true);
    const user = {
      email: email.email,
    };
    const isValid = validate;
    if (isValid) {
      dispatch(fetchForgotPassworData(user));
    }
  };

  const validate = () => {
    let error = {};
    if (!email.email) {
      error.error = "Email is required";
    } else if (!regEmail.test(email.email)) {
      error.error = "Email address is invalid";
    }
    return error;
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
    }
  }, [error]);

  return (
    <div className="main-forgotten">
       {loading ? (
            <FullLoader/>
          ) : (

      <Form className="mx-auto col-md-6 " onSubmit={handlerSubmit} noValidate>
        <Card border="grey" bg="light">
          <div>
            <h3 className="text-center">Forgot Password</h3>
          </div>
          <hr />
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              id="formGroup-Email"
              type="email"
              placeholder="Enter email"
              value={email.email}
              name="email"
              onChange={handllerChange}
            />
          </Form.Group>
          <div className="error-tittle">{error.error}</div>

          <Button
            id="login-btn"
            className="mx-auto"
            size="sm"
            type="submit"
            value="send"
          >
            Submit
          </Button>
        </Card>
      </Form>
          )}
    </div>
  );
};

export default Forgotten;
