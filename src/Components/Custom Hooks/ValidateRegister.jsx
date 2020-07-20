import {
  regEmail,
  regPassword,
  regFullName,
  regNumber,
} from "../../Constants/inputRegxs";

export default function validateRegister(
  firstName,
  lastName,
  email,
  phone,
  password,
  confirmPassword,
  data
) {
  let error = {};
  if (!firstName) {
    error.firstNameError = "FirstName required";
  } else if (!regFullName.test(firstName)) {
    error.firstNameError = "Name should be valid";
  }
  //validation for last name
  if (!lastName) {
    error.lastNameError = "LastName required";
  } else if (!regFullName.test(lastName)) {
    error.lastNameError = "Name should be valid";
  }
  //Validation for email
  if (!email) {
    error.emailError = "Email required";
  } else if (!regEmail.test(email)) {
    error.emailError = "Email should be valid";
  }
  //Validation for password
  if (!password) {
    error.passwordError = "Password required";
  } else if (!regPassword.test(password)) {
    error.passwordError = "Password should be valid";
  }
  //Validation for confirm password
  if (!confirmPassword) {
    error.confirmPasswordError = "Confirm Password required";
  } else if (password !== confirmPassword) {
    error.confirmPasswordError = "Confirm Password not match";
  }
  //Validation for Mobile Number
  if (!phone) {
    error.phoneError = "Phone Number required";
  } else if (regNumber.test(phone)) {
    error.phoneError = "Phone Number should be valid";
  }
  //Validation for Gender
  if (!data.female || !data.male) {
    error.radioError = "Please select Gender";
  }
  return error;
}
