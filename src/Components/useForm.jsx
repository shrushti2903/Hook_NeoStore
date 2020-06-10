import {useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchLoginData} from '../redux/action/customerDataAction'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const intialState = {
    form : {
     email: "",
     password: "",
    },
    error:{
     email: "",
     password: "",
    }
   }
const useForm = (callback , validate) =>{
    const [form , setForm] = useState({intialState});
    const [error , setError] = useState({intialState});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const loginDataList = useSelector((state)=> state.customerData.loginData)
    const dispatch = useDispatch()
   
    const handleChangeAll = (event) => {
        const { name, value } = event.target;
      setForm(
          { 
              ...form,
              [name] : value

          }
        );
      console.log('form', form)
    } 
    const handleSubmit = event => {
        event.preventDefault();
        setError(validate(form));
        setIsSubmitting(true);
        const user = {
            email : form.email,
            pass : form.password,
          }
        const isValid = validate 
        if (isValid){
            dispatch(fetchLoginData(user))
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
        error
      };
    }; 




export default useForm;
