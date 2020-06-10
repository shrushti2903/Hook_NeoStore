import {regEmail , regPassword , regFullName , regNumber} from '../Constants/inputRegxs'

export default function validateRegister(form) {
    let error = {};
    if(!form.firstName){
        error.firstNameError = "FirstName required"
       }
       else if(!regFullName.test(form.firstName)){
           error.firstNameError = "Name should be valid"
       }
       //validation for last name
       if(!form.lastName){
           error.lastNameError = "LastName required"
          }
          else if(!regFullName.test(form.lastName)){
              error.lastNameError = "Name should be valid"
          }
       //Validation for email
       if(!form.email){
           error.emailError = "Email required"
       } 
       else if(!regEmail.test(form.email)){
            error.emailError = "Email should be valid"
       }
       //Validation for password
       if(!form.password){
           error.passwordError = "Password required"
       }
       else if (!regPassword.test(form.password)){
           error.passwordError = "Password should be valid"
       }
       //Validation for confirm password
       if(!form.confirmPassword){
           error.confirmPasswordError = "Confirm Password required"
       }
       else if(form.password !== form.confirmPassword){ 
           error.confirmPasswordError = "Confirm Password not match"
       }
       //Validation for Mobile Number
       if(!form.Phone){
           error.phoneError ="Phone Number required"
       }else if(regNumber.test(form.Phone)){
           error.phoneError = "Phone Number should be valid"
       }
       //Validation for Gender
    //    if(form.gender.female || form.gender.male){
    //        error.radioError = "Please select Gender"
    //    }
    return error;
  }