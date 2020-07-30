import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../Assets/css/changePassword.css";
import { regEmail } from "../../Constants/inputRegxs";
import { apiUrl } from "../../Constants/api";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { regPassword } from "../../Constants/inputRegxs";
import {
  fetchForgotPassworData,
  fetchCustomerChangePassword,
} from "../../redux/action/customerDataAction";
import { useInput } from "../Custom Hooks/useInput";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const [form, setForm] = useState({
    form: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const [error, setError] = useState({
    error: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const chnagePasswordData = useSelector(
    (state) => state.customerData.changePassword
  );
  const dispatch = useDispatch();

  /**
   * Function Name - handleChangeAll
   * Parameters -  event
   * this function helps to set the state of form when it gets change from its current state.
   */

  const handleChangeAll = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  /**
 * Function Name - handleSubmit
 * Parameters -  event
 * this function submitted all the field of form 
    after validating all the field value and after validation on submit api  gets called,
 */

  const handlerSubmit = async (event) => {
    event.preventDefault();
    setError(validate(form));
    setIsSubmitting(true);
    const user = {
      oldPass: form.oldPassword,
      newPass: form.newPassword,
      confirmPass: form.confirmPassword,
    };
    console.log("user", user);
    if (Object.keys(error).length === 0) {
      const token = localStorage.getItem("token");
      await dispatch(fetchCustomerChangePassword(user, token));
    }
  };
  if (chnagePasswordData.status_code == 200) {
    Swal.fire({
      confirmButtonColor: "#ff0000 ",
      text: chnagePasswordData.message,
    });
  }

  /**
   * Function Name - validate
   * Parameters -
   * in this function all the required field are validating accordingly
   */

  const validate = () => {
    let error = {};
    if (!form.oldPassword) {
      error.oldPassword = "oldPassword is required";
    }
    //Validation for password
    if (!form.newPassword) {
      error.newPassword = "Password required";
    } else if (!regPassword.test(form.newPassword)) {
      error.newPassword = "Password length should be in between 8-12 character";
    }
    //Validation for confirm password
    if (!form.confirmPassword) {
      error.confirmPassword = "Confirm Password required";
    } else if (form.newPassword !== form.confirmPassword) {
      error.confirmPassword = "Confirm Password not match";
    }
    return error;
  };

  useEffect(() => {
    if (isSubmitting) {
      setError(validate(form));
    }
  }, [form]);

  return (
    <div>
      <Form
        className="edit-address-form  mx-auto "
        onSubmit={handlerSubmit}
        noValidate
      >
        <Card className="contact">
          <h5 className="heading-form">Change Password</h5>
          <hr />
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              id="formGroup-Email"
              type="password"
              name="oldPassword"
              placeholder="Enter Old Password"
              value={form.oldPassword}
              onChange={handleChangeAll}
            />
            <Form.Text className=" error-tittle">
              {error.oldPassword && error.oldPassword}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              id="formGroup-Email"
              type="password"
              name="newPassword"
              placeholder="Enter New Password"
              value={form.newPassword}
              onChange={handleChangeAll}
            />
            <Form.Text className=" error-tittle">
              {error.newPassword && error.newPassword}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              id="formGroup-Email"
              type="password"
              name="confirmPassword"
              placeholder="Enter confirm passwprd"
              value={form.confirmPassword}
              onChange={handleChangeAll}
            />
            <Form.Text className=" error-tittle">
              {error.confirmPassword && error.confirmPassword}
            </Form.Text>
          </Form.Group>
          <Button className="login-btn" type="submit" value="send">
            Submit
          </Button>
        </Card>
      </Form>
    </div>
  );
};

export default ChangePassword;
