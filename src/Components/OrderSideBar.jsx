import React from 'react';
import '../Assets/css/order.css';
import { RiOrderPlayLine } from "react-icons/ri";
import {MdPermContactCalendar } from "react-icons/md"
 import {FaAddressCard , FaExchangeAlt} from "react-icons/fa"

const OrderSidebar = () => {
    const handlerChangeOrder = () =>{
        
    }
    return ( 
        <div>
                 <img 
                 className="profile-pic" 
                 src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"/>
                 <span _ngcontent-yuw-c19="" id="imgTitle"> Aparna&nbsp; deshmukh&nbsp;
                 </span>
                <div className="profileOptions">
                     <button className="order-btn" onChange={handlerChangeOrder}>
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
        </div>
     );
}
 
export default OrderSidebar;