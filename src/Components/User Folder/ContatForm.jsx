import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../Assets/css/contactForm.css";
import Card from "react-bootstrap/Card";
import { regEmail, regNumber, regfullName } from "../../Constants/inputRegxs";
import { useSelector, useDispatch } from "react-redux";
import { fetchContactUsData } from "../../redux/action/customerDataAction";
import FullLoader from "../../Common/FullLoader";

const ContactForm = () => {
  const [form, setForm] = useState({
    form: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const [error, setError] = useState({
    error: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const loginDataList = useSelector((state) => state.customerData.contactUs);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validate(form));
    setIsSubmitting(true);
    const user = {
      customer_id: 103,
      email: form.email,
      name: form.name,
      subject: form.subject,
      phone_no: form.phone,
      message: form.message,
    };
    const isValid = validate;
    if (Object.keys(error).length === 0) {
      dispatch(fetchContactUsData(user));
    }
  };

  /**
   * Function Name - validate
   * Parameters -
   * in this function all the required field are validating accordingly
   */

  const validate = () => {
    let error = {};
    //for name
    if (!form.name) {
      error.name = "Name required";
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
    if (isSubmitting) {
      setError(validate(form));
    }
  }, [form]);

  return (
    <div className="contact-div">
      {/* {loading ? (
    //         <FullLoader />
    //       ) : ( */}

      <Form onSubmit={handleSubmit} className="mx-auto col-md-6 " noValidate>
        <Card className="contact">
          <h5 className="heading-form">Contact Form</h5>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder=" Name"
              value={form.name}
              name="name"
              className="form-field"
              onChange={handleChangeAll}
            />
            <Form.Text className=" error-tittle">
              {error.name && error.name}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              value={form.email}
              name="email"
              className="form-field"
              onChange={handleChangeAll}
            />{" "}
            <Form.Text className=" error-tittle">
              {error.email && error.email}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="number"
              placeholder="Phone Number "
              value={form.phone}
              name="phone"
              className="form-field"
              onChange={handleChangeAll}
            />
            <Form.Text className=" error-tittle">
              {error.phone && error.phone}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Subject"
              value={form.subject}
              name="subject"
              className="form-field"
              onChange={handleChangeAll}
            />
            <Form.Text className=" error-tittle">
              {error.subject && error.subject}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="text"
              className="form-field"
              placeholder="Message"
              value={form.message}
              name="message"
              onChange={handleChangeAll}
            />
            <Form.Text className=" error-tittle">
              {error.message && error.message}
            </Form.Text>
          </Form.Group>
          <Button className="submit-btn" type="submit" value="send">
            Submit
          </Button>
        </Card>
      </Form>
    </div>
  );
};

export default ContactForm;
