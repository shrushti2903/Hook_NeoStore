import React, { useLayoutEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import '../Assets/css/order.css'
import Col from 'react-bootstrap/Col'
import { RiOrderPlayLine } from "react-icons/ri";
import {MdPermContactCalendar } from "react-icons/md"
 import {FaAddressCard , FaExchangeAlt} from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomerOrder } from '../redux/action/orderAction';

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
    
       useEffect(()=>{
        // if(loginDataList.status_code === 200){
        //     const id = localStorage.setItem('token', loginDataList.customer_id)
        //      setLoggedIn(true)
        //      console.log('login',loggedIn)
        //      dispatch(fetchCustomerOrder(id))
        //    }
       })
    return ( 
        <div>
           <Row>
            <Col className="my-account" lg={12}>
                <h2>My Account</h2>
                <hr/>
            </Col>
            <Col lg={4}>
            <img 
            className="profile-pic" 
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
            <span _ngcontent-yuw-c19="" id="imgTitle"> Aparna&nbsp; deshmukh&nbsp;
            </span>
           <div className="profileOptions">
                <button className="order-btn">
                    <RiOrderPlayLine className='mat-icon'/>
                    &nbsp; Order 
                </button>
           </div>
           <div className="profileOptions">
                <button className="order-btn">
                    <MdPermContactCalendar className='mat-icon'/>
                    &nbsp; Profile 
                </button>
           </div>
           <div className="profileOptions">
                <button className="order-btn">
                    <FaAddressCard className='mat-icon'/>
                    &nbsp; Address 
                </button>
           </div>
           <div className="profileOptions">
                <button className="order-btn">
                    <FaExchangeAlt className='mat-icon'/>
                    &nbsp; Change Password  
                </button>
           </div>
            </Col>
            <Col lg={8} className="order-result">
            <span _ngcontent-yuw-c21="" class="noAddress">No Orders Found</span>
            <br _ngcontent-yuw-c21=""/>
                <button _ngcontent-yuw-c21="" color="primary" mat-raised-button="" routerlink="prouctPage" tabindex="0" class="mat-raised-button mat-primary">
                    <span class="mat-button-wrapper">Go to Product Page</span>
                    <div class="mat-button-ripple mat-ripple" matripple=""></div>
                    <div class="mat-button-focus-overlay"></div>
                    </button>
                   
            </Col>
           </Row>
        </div>
     );
}
 
export default Order;