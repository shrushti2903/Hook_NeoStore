import React, { useLayoutEffect } from 'react'
import { BrowserRouter , Redirect, Link, Route, useRouteMatch, Switch } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import '../Assets/css/order.css'
import Col from 'react-bootstrap/Col'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomerOrder } from '../redux/action/orderAction';
import Swal from 'sweetalert2';
import ChangePassword from '../Components/ChangePassword'
import Address from './Address';
import OrderSidebar from './OrderSideBar';
import AddressEdit from './AddressEdit';
import ProfileEdit from './ProfileEdit';
import Home from './Home';

const Order = (props) => {
     const [loggedIn , setLoggedIn] = useState(Boolean)
    // const token = localStorage.getItem('token')
    // console.log('token',token)
    // useLayoutEffect(()=>{
    // if(token == null){
    //     setLoggedIn( prevState => !prevState)
    //     console.log(loggedIn)
    // }
    // if(loggedIn === false){
    //     console.log(loggedIn)
    //     return <Redirect to='/login'/>
    // }
    // },[])
    const loginDataList = useSelector((state)=> state.customerData.loginData)
    const customerOrder = useSelector((state)=> state.orderData.customerOrder)
    const dispatch = useDispatch()
    console.log(loginDataList)
    let match = useRouteMatch();
          const id = localStorage.getItem('token',)
          if(!id){
            Swal.fire('Please login first')
            return <Redirect to="/login" />
          }

            return (
            <div>
                {
                    id?
                    
                        <OrderSidebar/>
                   
                    // {/* <span _ngcontent-yuw-c21="" class="noAddress">No Orders Found</span>
                    // <br _ngcontent-yuw-c21=""/>
                    //     <button _ngcontent-yuw-c21="" color="primary" mat-raised-button="" routerlink="prouctPage" tabindex="0" class="mat-raised-button mat-primary">
                    //         <span class="mat-button-wrapper">Go to Product Page</span>
                    //         <div class="mat-button-ripple mat-ripple" matripple=""></div>
                    //         <div class="mat-button-focus-overlay"></div>
                    //         </button> */}
                            

                
                :
                
                ''
                }
                </div>
                
     );
}
 
export default Order;