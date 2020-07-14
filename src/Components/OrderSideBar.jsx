import React from 'react';
import '../Assets/css/order.css';
import { RiOrderPlayLine } from "react-icons/ri";
import {MdPermContactCalendar } from "react-icons/md"
 import {FaAddressCard , FaExchangeAlt} from "react-icons/fa"
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { fetchCustomerAddress } from '../redux/action/customerDataAction';
import { useSelector, useDispatch } from 'react-redux';
import { Row , Col } from 'react-bootstrap';
import ChangePassword from '../Components/ChangePassword'
import Address from './Address';
import AddressEdit from './AddressEdit';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import AddAddress from './AddAddress';


const OrderSidebar = () => {
    const customerAddressList = useSelector((state) => state.customerData.customerAddress)
    const dispatch = useDispatch()
    const handlerChangeOrder = () =>{
        const id = localStorage.getItem('token',)
        dispatch(fetchCustomerAddress(id))
    }
    let match = useRouteMatch();
    return ( 
        <div>
            <Row>
            <Col  lg={12}>
                     <h2>My Account</h2>
                     <hr/>
                 </Col>
                    <Col  lg={4}>
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
                         <Link to={`${match.url}/profile`}>
                     <button className="order-btn">
                         <MdPermContactCalendar className='mat-icon'/>
                         &nbsp; Profile 
                     </button>
                         </Link>
                </div>
                <div className="profileOptions">
                         <Link to={`${match.url}/address`}>
                     <button className="order-btn" onClick={handlerChangeOrder}>
                         <FaAddressCard className='mat-icon'/>
                         &nbsp; Address 
                     </button>
                         </Link>
                </div>
                <div className="profileOptions">
                         <Link to={`${match.url}/changePassword`}>
                     <button className="order-btn" >
                         <FaExchangeAlt className='mat-icon'/>
                         &nbsp; Change Password  
                     </button>
                         </Link>
                     </div>
                    </Col>
                    <Col lg={8}>
                        <Switch>
                        <Route path={`${match.path}/profile`} component={Profile}>
                            </Route>
                            <Route path={`${match.path}/address`} component={Address}>
                            </Route>
                            <Route path={`${match.path}/changePassword`} component={ChangePassword}>
                            </Route>
                            <Route path={`${match.path}/editProfile`} component={ProfileEdit}>
                            </Route>
                            <Route path={`${match.path}/editAddress`} component={AddressEdit}>
                            </Route>
                            <Route path={`${match.path}/addaddress`} component={AddAddress}>
                            </Route>
                        </Switch>
                    </Col>
            </Row>
                     
        </div>
     );
}
 
export default OrderSidebar;