import React from 'react';
import '../Assets/css/order.css';
import { RiOrderPlayLine } from "react-icons/ri";
import {MdPermContactCalendar } from "react-icons/md"
 import {FaAddressCard , FaExchangeAlt} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { fetchCustomerAddress } from '../redux/action/customerDataAction';
import { useSelector, useDispatch } from 'react-redux';


const OrderSidebar = () => {
    const customerAddressList = useSelector((state) => state.customerData.customerAddress)
    const dispatch = useDispatch()
    const handlerChangeOrder = () =>{
        const id = localStorage.getItem('token',)
        dispatch(fetchCustomerAddress(id))
    }
    return ( 
        <div>
                 <img 
                 className="profile-pic" 
                 src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                 <span _ngcontent-yuw-c19="" id="imgTitle"> Aparna&nbsp; deshmukh&nbsp;
                 </span>
                <div className="profileOptions">
                         <Link to="/orderdetail">
                     <button className="order-btn" >
                         <RiOrderPlayLine className='mat-icon'/>
                         &nbsp; Order 
                     </button>
                         </Link>
                </div>
                <div className="profileOptions">
                         <Link to="/profile">
                     <button className="order-btn">
                         <MdPermContactCalendar className='mat-icon'/>
                         &nbsp; Profile 
                     </button>
                         </Link>
                </div>
                <div className="profileOptions">
                         <Link to="/address">
                     <button className="order-btn" onClick={handlerChangeOrder}>
                         <FaAddressCard className='mat-icon'/>
                         &nbsp; Address 
                     </button>
                         </Link>
                </div>
                <div className="profileOptions">
                         <Link to="/changePassword">
                     <button className="order-btn" >
                         <FaExchangeAlt className='mat-icon'/>
                         &nbsp; Change Password  
                     </button>
                         </Link>
                     </div>
                     
        </div>
     );
}
 
export default OrderSidebar;