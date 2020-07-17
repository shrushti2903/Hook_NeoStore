import { regEmail, regPassword } from "../../Constants/inputRegxs";

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
    error.password = "Password is invalid";
  }
  return error;
}
