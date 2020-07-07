import React from 'react';
import { Button } from 'react-bootstrap';
import '../Assets/css/address.css'
import {MdCancel} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Address = () => {
    return ( 
        <div>
            <div className="main-address">
                <h3 className="address-tittle">
                    Address
                </h3>
                <hr className="address-tittle"/>
                <div className="address">
                    <MdCancel className="cancel-icon"/>
                    <span className="address-details">Basera colony Padmavati Nagar allodi road Wardha</span>
                    <br/>
                    <span className="address-details">Wardha- 442001</span>
                    <br/>
                    <span className="address-details">India</span>
                    <br/>
                    <Button className="edit-Button">
                        <Link to="/editAddress">
                        Edit
                        </Link>
                    </Button>
                </div>
                <div className="address">
                <MdCancel className="cancel-icon"/>
                    <span className="address-details">Basera colony Padmavati Nagar allodi road Wardha</span>
                    <br/>
                    <span className="address-details">Wardha- 442001</span>
                    <br/>
                    <span className="address-details">India</span>
                    <br/>
                    <Button className="edit-Button">
                        Edit
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default Address;