import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoginData } from "../../redux/action/customerDataAction";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Redirect } from "react-router-dom";

const intialState = {
  form: {
    email: "",
    password: "",
  },
  error: {
    email: "",
    password: "",
  },
};
const useForm = (callback, validate) => {
  const [form, setForm] = useState({
    form: {
      email: "",
      password: "",
    },
  });
  const [error, setError] = useState({
    error: {
      email: "",
      password: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState();
  const loginDataList = useSelector((state) => state.customerData.loginData);
  const dispatch = useDispatch();

  /**
   * Function Name - handleChangeAll
   * Parameters -  event
   * this function helps to set the state of form when it gets change from its current state.
   */

  const handleChangeAll = async (event) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    const user = {
      email: form.email,
      pass: form.password,
    };
    setIsSubmitting(true);
    setError(validate(form));
    if (Object.keys(error).length == 0) {
      await dispatch(fetchLoginData(user));
    }
    Swal.fire({
      confirmButtonColor: "#ff0000 ",
      text: "Please Enter Correct Email and Password",
    });
  };
  useEffect(() => {
    setIsSubmitting(true);
  }, [isSubmitting]);
  useEffect(() => {
    if (isSubmitting) {
      callback();
      setError(validate(form));
    }
  }, [form]);

  useEffect(() => {
    console.log("login form");
    if (isSubmitting) {
      if (loginDataList.status_code == 200) {
        localStorage.setItem(
          "token",
          loginDataList.token,
          loginDataList.provider
        );
        localStorage.setItem(
          "customer",
          JSON.stringify(loginDataList.customer_details)
        );
        setLoggedIn(true);
        Swal.fire({
          confirmButtonColor: "#ff0000 ",
          text: loginDataList.message,
        });
      }
    }
  }, [loginDataList]);
  return {
    handleChangeAll,
    handleSubmit,
    form,
    error,
    loggedIn,
  };
};

export default useForm;
