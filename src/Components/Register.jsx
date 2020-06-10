import React ,{ useState , useEffect, useReducer , useCallback} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../Assets/css/register.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Form, { FormRow } from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import {apiUrl } from '../Constants/api';
import validate from './ValidateRegister'
import { useSelector, useDispatch } from 'react-redux';
import {fetchRegisterData} from '../redux/action/customerDataAction'
import produce from "immer";
import { set, has } from "lodash";

const initialState = {
    form : {
        firsName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : "",
        Phone : "",
        },
        gender : 

        {
            male : "",
            female : "",
        },
    error : {
        firstNameError : "",
        lastNameError :  "",
        emailError : "",
        passwordError : "" ,
        confirmPasswordError : "",
        phoneError : "",  
        radioError : "",
     },
}


const Resgister = () =>{
    
    const [form , setForm] = useState({initialState});
    const [gender , setGender] = useState( initialState);
    const [error , setError] = useState(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const loginDataList = useSelector((state)=> state.customerData.register)
    const dispatch = useDispatch()
   
    const handllerChange = (event)=>{
       const name = event.target.name;
       const value = event.target.value
       console.log('value',value)
       console.log('name',name)
      setForm(
          { 
              ...form,
              [name] : value

          },
          console.log('form', form)
        );
     setGender({
         ...gender,
        [name] : value
        
     },
     console.log('form', gender)
     )
    
     
    }
    
    const handlerSubmit = event => {
        event.preventDefault();
        setError(validate(form));
        setIsSubmitting(true);
        const user = {
            first_name : form.firstName,
            last_name : form.lastName,
            email : form.email,
            pass : form.password,
            confirmPass : form.confirmPassword,
            phone_no : form.Phone,
            gender : gender.gender,
        }
        const isValid = validate 
        if (isValid){
            dispatch(fetchRegisterData(user))
            console.log('forrm',form)
        }
      };
    
      useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmitting) {
            console.log("Submitted Succesfully");        }
      }, [error]);
    
     
        return (
            <div>
                   
                   <Container>
                        <Row>
                            <Col className="fb-gog-col">
                                <Button size="sm" id="fb">
                                    <FaFacebookF size="3rem" className="mr-4">
                                    </FaFacebookF>
                                    <span>Login facbook</span>
                                </Button>
                                <Button id="gog" size="sm" >
                                <FaGoogle size="3rem" className="mr-4" >
                                </FaGoogle>
                                <span>Login google</span>
                            </Button></Col>
                        </Row>
                    </Container>
                    <hr />
                   
                    <Row>
                        <Col>
                        <Card className="card-register">
                        <Card.Body className="card-register-body">
                        <Form className="mx-auto col-md-12" onSubmit={handlerSubmit} noValidate>
                            
                            <h3 className="register-heading">Register To NeoSTORE</h3>
                            <Form.Group controlId="formGroupFirstName">
                                <Form.Control id="formGroupFirstName" 
                                type="text" 
                                placeholder="First Name" 
                                value = {form.firstName} 
                                name ="firstName" 
                                onChange={handllerChange} />
                            </Form.Group>
                            <div className ="error-tittle" >{error.firstNameError}</div>
                            <Form.Group controlId="formGroupLastName">
                                <Form.Control id="formGroupLastName" 
                                type="text" 
                                placeholder="Last Name"
                                value ={form.lastName} 
                                name ="lastName"
                                onChange={handllerChange} />
                            </Form.Group>
                            <div className ="error-tittle" >{error.lastNameError}</div>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control id="formGroup-Email" 
                                type="email" 
                                placeholder="Enter email" 
                                value ={form.email}
                                name = "email"
                                onChange={handllerChange} />
                            </Form.Group>
                            <div className ="error-tittle" >{error.emailError}</div>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control id="formGroup-Password" 
                                type="password" 
                                placeholder="Password"
                                value ={form.password} 
                                name = "password"
                                onChange={handllerChange} />
                            </Form.Group>
                            <div className ="error-tittle" >{error.passwordError}</div>
                            <Form.Group controlId="formGroupConPassword">
                                <Form.Control id="formGroupConPassword" 
                                type="password" 
                                placeholder="Confirm Password"
                                value ={form.confirmPassword}
                                name ="confirmPassword"
                                onChange={handllerChange} />
                            </Form.Group>
                            <div className ="error-tittle" >{error.confirmPasswordError}</div>
                            <Form.Group controlId="formGroupNumber">
                                <Form.Control id="formGroupNumber" 
                                type="text" 
                                placeholder="Enter Phone Number"
                                value ={form.Phone}
                                name ="Phone"
                                onChange={handllerChange} />
                            </Form.Group>
                            <div className ="error-tittle" >{error.phoneError}</div>
                            <div>
                            <span id="head">Gender : </span>
                        <div class="custom-control custom-radio custom-control-inline radio">
                            <input type="radio" class="custom-control-input" id="defaultInline1" value ={gender.male} name="gender"  onChange={handllerChange} />
                            <label class="custom-control-label radio" for="defaultInline1">Male</label>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input " id="defaultInline2" value={gender.female} name="gender"  onChange={handllerChange} />
                                <label class="custom-control-label radio" for="defaultInline2">Female</label>
                            </div>
                        </div>   
                        </div>
                        <div className ="error-tittle" >{error.radioError}</div>                         
                            <Button id="register-btn" 
                            size="sm" 
                            type = "submit"
                            value="send" >
                                <b id="span-reg">Register</b>
                            </Button>
                            </Form>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                   
                    </div>
        )
    }


export default Resgister
