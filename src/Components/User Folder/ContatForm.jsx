import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../Assets/css/contactForm.css";
import Card from "react-bootstrap/Card";
import { regEmail, regNumber, regfullName } from "../../Constants/inputRegxs";
import { useSelector, useDispatch } from "react-redux";
import { fetchContactUsData } from "../../redux/action/customerDataAction";
import FullLoader from "../../Common/FullLoader";

const intialState = {
  form: {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  },
  error: {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  },
};
const ContactForm = () => {
  const [form, setForm] = useState({ intialState });
  const [error, setError] = useState({ intialState });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const loginDataList = useSelector((state) => state.customerData.contactUs);
  const loading = useSelector(
    (state) => state.customerData.loading
  );
  const dispatch = useDispatch();

  const handleChangeAll = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validate(form));
    setIsSubmitting(true);
    const user = {
      customer_id: 88,
      email: form.email,
      name: form.name,
      subject: form.subject,
      phone_no: form.phone,
      message: form.message,
    };
    const isValid = validate;
    if (isValid) {
      dispatch(fetchContactUsData(user));
    }
  };

  const validate = () => {
    let error = {};
    //for name
    if (!form.name) {
      error.name = "FirstName required";
    } else if (!regfullName.test(form.name)) {
      error.name = "Name should be valid";
    }
    //for email
    console.log("email", form.email);
    if (!form.email) {
      error.email = "Email is Required";
    } else if (!regEmail.test(form.email)) {
      error.email = "Email should be Valid";
    }
    //Validation for Mobile Number
    if (!form.phone) {
      error.phone = "Phone Number required";
    } else if (regNumber.test(form.Phone)) {
      error.phone = "Phone Number should be valid";
    }
    if (!form.subject) {
      error.subject = "Subject required";
    }
    if (!form.message) {
      error.message = "Message required";
    }
    return error;
  };
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
    }
  }, [error]);

  return (
    <div>
       {loading ? (
            <FullLoader />
          ) : (

      <Form onSubmit={handleSubmit} className="mx-auto col-md-6 " noValidate>
        <Card className="contact">
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={form.name}
              name="name"
              onChange={handleChangeAll}
            />
          </Form.Group>
          <div className="modal- error-tittle">{error.name}</div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={form.email}
              name="email"
              onChange={handleChangeAll}
            />
          </Form.Group>
          <div className="modal- error-tittle">{error.email}</div>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number "
              value={form.phone}
              name="phone"
              onChange={handleChangeAll}
            />
          </Form.Group>
          <div className="modal- error-tittle">{error.phone}</div>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              value={form.subject}
              name="subject"
              onChange={handleChangeAll}
            />
          </Form.Group>
          <div className="modal- error-tittle">{error.subject}</div>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="text"
              placeholder="Message"
              value={form.message}
              name="message"
              onChange={handleChangeAll}
            />
          </Form.Group>
          <div className="modal- error-tittle">{error.message}</div>
          <Button variant="primary" type="submit" value="send">
            Submit
          </Button>
        </Card>
      </Form>
          )}
    </div>
  );
};

export default ContactForm;
