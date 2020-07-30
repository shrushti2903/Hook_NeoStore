import { regEmail, regPassword } from "../../Constants/inputRegxs";

/**
 * Function Name - validate
 * Parameters -
 * in this function all the required field are validating accordingly
 */

export default function validateLogin(form) {
  let error = {};
  if (!form.email) {
    error.email = "Email is required";
  } else if (!regEmail.test(form.email)) {
    error.email = "Email address is invalid";
  }
  if (!form.password) {
    error.password = "Password is required";
  } else if (!regPassword.test(form.password)) {
    error.password = "Password length should be in between 8-12 character";
  }
  return error;
}
