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
import Swal from "sweetalert2";

const Forgotten = () => {
  const [email, setEmail] = useState({ email: "" });
  const [error, setError] = useState({ error: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const forgotDataList = useSelector(
    (state) => state.customerData.forgotPassword
  );

  const dispatch = useDispatch();

  /**
   * Function Name - handlerChange
   * Parameters -  event
   * this function helps to set the state of form when it gets change from its current state.
   */

  const handllerChange = (event) => {
    const { name, value } = event.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };

  /**
 * Function Name - handleSubmit
 * Parameters -  event
 * this function submitted all the field of form 
    after validating all the field value and after validation on submit api  gets called,
 */

  const handlerSubmit = (event) => {
    event.preventDefault();
    setError(validate(email));
    setIsSubmitting(true);
    const user = {
      email: email.email,
    };
    if (Object.keys(error).length === 0 && isSubmitting) {
      dispatch(fetchForgotPassworData(user));
    }
    if (forgotDataList.success) {
      Swal.fire({
        confirmButtonColor: "#ff0000 ",
        text: forgotDataList.message,
      });
    }
  };

  /**
   * Function Name - validate
   * Parameters -
   * in this function all the required field are validating accordingly
   */

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
    if (isSubmitting) {
      setError(validate(email));
    }
  }, [email]);

  return (
    <div className="main-forgotten">
      <Form className="mx-auto col-md-6 " onSubmit={handlerSubmit} noValidate>
        <Card className="contact">
          <div>
            <h5 className="heading-form">Forgot Password</h5>
          </div>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              id="formGroup-Email"
              type="email"
              placeholder="Enter email"
              value={email.email}
              name="email"
              onChange={handllerChange}
            />
            <Form.Text className=" error-tittle">
              {error.error && error.error}
            </Form.Text>
          </Form.Group>
          <Button className="login-btn" size="sm" type="submit" value="send">
            Submit
          </Button>
        </Card>
      </Form>
    </div>
  );
};

export default Forgotten;
