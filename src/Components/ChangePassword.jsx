import React , {useEffect , useState}from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import '../Assets/css/changePassword.css'
import {regEmail } from '../Constants/inputRegxs'
import {apiUrl } from '../Constants/api';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { regPassword } from '../Constants/inputRegxs'
import {fetchForgotPassworData} from '../redux/action/customerDataAction' 



const ChangePassword = () => {
 const [oldPassword , setOldPassword] = useState({oldPassword : "" });
 const [newPassword , setNewPassword] = useState({newPassword : "" });
 const [confirmPassword , setconfirmPassword] = useState({confirmPassword : "" });
 const [error , setError] = useState({error : "" });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const loginDataList = useSelector((state)=> state.customerData.forgotPassword)
 const dispatch = useDispatch()

 const handllerChange = (event) => {
    const { name, value } = event.target;
  setOldPassword(
      { 
          ...oldPassword,
          [name] : value

      }
    );
    setNewPassword(
        { 
            ...newPassword,
            [name] : value
  
        }
      );
      setconfirmPassword(
        { 
            ...confirmPassword,
            [name] : value
  
        }
      );
  console.log('form', oldPassword , newPassword , confirmPassword)
} 
  const handlerSubmit = event => {
    event.preventDefault();
    setError(validate(oldPassword , newPassword , confirmPassword));
    setIsSubmitting(true);
    // const user = {
    //     email : email.email,
    //   }
    //   const isValid = validate 
    // if (isValid){
    //     dispatch(fetchForgotPassworData(user))
    // }
  };

 const validate = ()=>{
    let error = {};
    if (!oldPassword.oldPassword) {
        error.error = "oldPassword is required"
    } 
    //Validation for password
    if(!newPassword.newPassword){
        error.passwordError = "Password required"
    }
    else if (!regPassword.test(newPassword.newPassword)){
        error.error = "Password should be valid"
    }
    //Validation for confirm password
    if(!confirmPassword.confirmPassword){
        error.error = "Confirm Password required"
    }
    else if(newPassword !== confirmPassword.confirmPassword){ 
        error.error = "Confirm Password not match"
    }
    return error
 }
 
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      console.log('successfully Submitted')
    }
  }, [error]);
 
   
      return (
        <div className="main-changePassword">
            <Form className="form-changepassword"  onSubmit={handlerSubmit} noValidate>
                                    <h3>Change Password</h3>
                                <hr />
                                <h3 className= "text-center">NOTE : Password must be : 8-12 Alphanumeric characters</h3>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control id="formGroup-Email" 
                                    type="email" 
                                    placeholder="Enter email" 
                                    value ={oldPassword.oldPassword}
                                    name = "email"
                                    onChange={handllerChange} 
                                    />
                                </Form.Group>
                                <div className ="error-tittle" >{error.error}</div>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control id="formGroup-Email" 
                                    type="email" 
                                    placeholder="Enter email" 
                                    value ={newPassword.newPassword}
                                    name = "email"
                                    onChange={handllerChange} 
                                    />
                                </Form.Group>
                                <div className ="error-tittle" >{error.error}</div>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control id="formGroup-Email" 
                                    type="email" 
                                    placeholder="Enter email" 
                                    value ={confirmPassword.confirmPassword}
                                    name = "email"
                                    onChange={handllerChange} 
                                    />
                                </Form.Group>
                                <div className ="error-tittle" >{error.error}</div>

                                <Button id="login-btn" 
                                className ="mx-auto" 
                                size="sm" 
                                type = "submit"
                                value="send" >
                                    Submit
                                </Button>
                        </Form>
        </div>
      )
    }
  

export default ChangePassword