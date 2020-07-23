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
  const [form, setForm] = useState({  form: {
    email: "",
    password: "",
  }, });
  const [error, setError] = useState({  error: {
    email: "",
    password: "",
  }, });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState();
  const loginDataList = useSelector((state) => state.customerData.loginData);
  const dispatch = useDispatch();


  const handleChangeAll = async(event) => {
    const { name, value } = event.target;
  
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email: form.email,
      pass: form.password,
    };
    setError(validate(form));
    setIsSubmitting(true);
    console.log('submit',user)    
    console.log(localStorage)
    if (Object.keys(error).length == 0 ) {
       await dispatch(fetchLoginData(user));
    }  else{
      Swal.fire('Please Enter Correct Email and Password')
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
       Swal.fire(loginDataList.message)
    }
   
  
  };

  useEffect(() => {
    if(isSubmitting){

      callback()
      setError(validate(form))
    }
    
  }, [form]);
  
  return {
    handleChangeAll,
    handleSubmit,
    form,
    error,
    loggedIn,
  };
};

export default useForm;
