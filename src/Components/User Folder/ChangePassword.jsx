import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../Assets/css/changePassword.css"
import { regEmail } from "../../Constants/inputRegxs";
import { apiUrl } from "../../Constants/api";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { regPassword } from "../../Constants/inputRegxs";
import { fetchForgotPassworData, fetchCustomerChangePassword } from "../../redux/action/customerDataAction";
import { useInput } from "../Custom Hooks/useInput";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const [form, setForm] = useState({   form: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  }, });
  const [error, setError] = useState({   error: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  }, });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const chnagePasswordData = useSelector((state)=> state.customerData.changePassword)
  const dispatch = useDispatch()

  const handleChangeAll = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handlerSubmit = async(event) => {
    event.preventDefault();
    setError(validate(form))
    setIsSubmitting(true)
    const user = {
      oldPass: form.oldPassword,
      newPass: form.newPassword,
      confirmPass: form.confirmPassword,
    };
    console.log('user',user)
    if(Object.keys(error).length === 0){
    const token = localStorage.getItem("token");
      await dispatch(fetchCustomerChangePassword(user , token))
    }
  };
      if(chnagePasswordData.status_code == 200){
        Swal.fire(chnagePasswordData.message)
      }

   const validate = ()=>{
      let error = {};
      if (!form.oldPassword) {
          error.oldPassword = "oldPassword is required"
      }
      //Validation for password
      if(!form.newPassword){
          error.newPassword = "Password required"
      }
      else if (!regPassword.test(form.newPassword)){
          error.newPassword = "Password should be valid"
      }
      //Validation for confirm password
      if(!form.confirmPassword){
          error.confirmPassword = "Confirm Password required"
      }
      else if(form.newPassword !== form.confirmPassword){
          error.confirmPassword = "Confirm Password not match"
      }
      return error
   }

  useEffect(() => {
    if (isSubmitting) {
    setError(validate(form))
    }
  }, [form]);

  return (
    <div className="main-changePassword">
      <Form className="form-changepassword" onSubmit={handlerSubmit} noValidate>
        <h3>Change Password</h3>
        <hr />
        <h3 className="text-center">
          NOTE : Password must be : 8-12 Alphanumeric characters
        </h3>
        <Form.Group controlId="formGroupEmail">
          <Form.Control
            id="formGroup-Email"
            type="password"
            name="oldPassword"
            placeholder="Enter Old Password"
            value={form.oldPassword}
            onChange={handleChangeAll}
          />
        </Form.Group>
        <div className="modal- error-tittle">{error.oldPassword}</div>
        <Form.Group controlId="formGroupEmail">
          <Form.Control
            id="formGroup-Email"
            type="password"
            name="newPassword"
            placeholder="Enter New Password"
            value={form.newPassword}
            onChange={handleChangeAll}
          />
        </Form.Group>
        <div className="modal- error-tittle">{error.newPassword}</div>
        <Form.Group controlId="formGroupEmail">
          <Form.Control
            id="formGroup-Email"
            type="password"
            name="confirmPassword"
            placeholder="Enter confirm passwprd"
            value={form.confirmPassword}
            onChange={handleChangeAll}
          />
        </Form.Group>
        <div className="modal- error-tittle">{error.confirmPassword}</div>

        <Button
          id="login-btn"
          className="mx-auto submit"
          size="sm"
          type="submit"
          value="send"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
