import React, { useState, useEffect, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { regEmail, regPassword } from "../../Constants/inputRegxs";
import "../../Assets/css/login.css";
import { apiUrl } from "../../Constants/api";
import axios from "axios";
import useForm from "../Custom Hooks/useForm";
import validate from "../Custom Hooks/ValidateLogin";
import FullLoader from "../../Common/FullLoader";
import { useSelector } from "react-redux";

const Login = () => {
  const { handleChangeAll, handleSubmit, form, error, loggedIn } = useForm(
    submit,
    validate
  );

  function submit() {}
  if (loggedIn) {
    return <Redirect to="/home" />;
  }
  return (
    <div>
      <Container fluid>
        <Row>
          {/* <Col xs={6} className="log-btn">
            <Button id="fb-btn">
              <FaFacebookF size="3rem" className="mr-4 icon-btn"></FaFacebookF>
              Login facbook
            </Button>
            <Button id="gog-btn">
              <FaGoogle size="3rem" className="mr-4 icon-btn"></FaGoogle>
              Login google
            </Button>
            <Button id="twi-btn">
              <FaTwitter size="3rem" className="mr-4 icon-btn"></FaTwitter>
              Login Twitter
            </Button>
          </Col> */}
          <Col xs={10}>
            <Card className='login-card'>
              <Card.Body className='login-cardbody'>
                <Form onSubmit={handleSubmit} className="form-login" noValidate>
                  <h3 className="h3"> Login to NeoSTORE</h3>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control
                      id="formGroupEmail"
                      className="form-grp"
                      type="email"
                      placeholder="Enter email"
                      value={form.email}
                      onChange={handleChangeAll}
                      name="email"
                    />
                  </Form.Group>
                  {error.email && <p className="error-tittle">{error.email}</p>}
                  <Form.Group controlId="formGroupPassword">
                    <Form.Control
                      id="formGroupPassword"
                      className="form-grp"
                      type="password"
                      placeholder="Enter password"
                      value={form.password}
                      onChange={handleChangeAll}
                      name="password"
                    />
                  </Form.Group>
                  {error.password && (
                    <p className="error-tittle">{error.password}</p>
                  )}
                  <button
                    className="login-btn"
                   
                    type="submit"
                    value="send"
                  >
                    Login
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="col-btn">
            <div id="reg-li">
              <Link to="/register" className="reg-link">
                Register Now
              </Link>
              &nbsp;&nbsp;|&nbsp;
              <Link to="/forgotten" className="reg-link">
                Forgot Password?
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
