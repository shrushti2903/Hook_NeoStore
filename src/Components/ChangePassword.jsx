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
import { useInput } from './useInput';



const ChangePassword = () => {
 const [oldPassword , setOldPassword] = useInput();
 const [newPassword , setNewPassword] = useInput();
 const [confirmPassword , setconfirmPassword] = useInput();
 const [error , setError] = useInput();

 
  const handlerSubmit = event => {
    event.preventDefault();
    event.target.reset();
    const user = {
      oldPass  : oldPassword ,
      newPass  : newPassword,
      confirmPass  : confirmPassword,
    }
    console.log('user', user)
    
  };

//  const validate = ()=>{
//     let error = {};
//     if (!oldPassword.oldPassword) {
//         error.error = "oldPassword is required"
//     } 
//     //Validation for password
//     if(!newPassword.newPassword){
//         error.passwordError = "Password required"
//     }
//     else if (!regPassword.test(newPassword.newPassword)){
//         error.error = "Password should be valid"
//     }
//     //Validation for confirm password
//     if(!confirmPassword.confirmPassword){
//         error.error = "Confirm Password required"
//     }
//     else if(newPassword !== confirmPassword.confirmPassword){ 
//         error.error = "Confirm Password not match"
//     }
//     return error
//  }
 
  // useEffect(() => {
  //   if (Object.keys(error).length === 0 && isSubmitting) {
  //     console.log('successfully Submitted')
  //   }
  // }, [error]);
 
   
      return (
        <div className="main-changePassword">
            <Form className="form-changepassword"  onSubmit={handlerSubmit} noValidate>
                                    <h3>Change Password</h3>
                                <hr />
                                <h3 className= "text-center">NOTE : Password must be : 8-12 Alphanumeric characters</h3>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control id="formGroup-Email" 
                                    type="password" 
                                    placeholder="Enter Old Password" 
                                    value={oldPassword}
                                    onChange={setOldPassword} 
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control id="formGroup-Email" 
                                    type="password" 
                                    placeholder="Enter New Password" 
                                    value={newPassword}
                                    onChange={setNewPassword}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control id="formGroup-Email" 
                                    type="password" 
                                    placeholder="Enter confirm passwprd" 
                                    value={confirmPassword} 
                                    onChange={setconfirmPassword}
                                    />
                                </Form.Group>

                                <Button id="login-btn" 
                                className ="mx-auto submit" 
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