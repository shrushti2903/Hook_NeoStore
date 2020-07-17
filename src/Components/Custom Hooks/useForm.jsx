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
  const [form, setForm] = useState({ intialState });
  const [error, setError] = useState({ intialState });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState();
  const loginDataList = useSelector((state) => state.customerData.loginData);
  const dispatch = useDispatch();

  const handleChangeAll = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(validate(form));
    setIsSubmitting(true);
    const user = {
      email: form.email,
      pass: form.password,
    };
    const isValid = validate;
    if (isValid) {
      await dispatch(fetchLoginData(user));
    }
    
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
      await Swal.fire(loginDataList.message)
    }else{
      await Swal.fire('Password is not matched')
    }
  };
  
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
    }
  }, [error]);
  
  return {
    handleChangeAll,
    handleSubmit,
    form,
    error,
    loggedIn,
  };
};

export default useForm;
