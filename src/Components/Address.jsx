import React from 'react';
import { Button } from 'react-bootstrap';
import '../Assets/css/address.css'
import {MdCancel} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Address = () => {
    const customerAddressList = useSelector((state) => state.customerData.customerAddress)
    const data = customerAddressList.customer_address
    console.log('address' ,data )
    const dispatch = useDispatch()
    return ( 
        <div>
            <div className="main-address">
                <h3 className="address-tittle">
                    Address
                </h3>
                <hr className="address-tittle"/>
                
                    {
                    data && data.map((value) => {
                        return (
                            <div className="address">
                            <MdCancel className="cancel-icon"/>
                        <span className="address-details">{value.address}</span>
                            <br/>
                        <span className="address-details">{value.city} - {value.pincode}</span>
                            <br/>
                        <span className="address-details">{value.country}</span>
                            <br/>
                                <Link to="/editAddress">
                            <Button className="edit-Button">
                                Edit
                            </Button>
                                </Link>
                        </div>
                        )
                    })
                    }
            </div>
        </div>
     );
}
 
export default Address;