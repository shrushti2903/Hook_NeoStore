import React , {useEffect} from 'react';
import { Button } from 'react-bootstrap';
import '../Assets/css/address.css'
import {MdCancel} from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomerAddress, fetchDelAddressByAddressId } from '../redux/action/customerDataAction';


const Address = () => {
    const customerAddressList = useSelector((state) => state.customerData.customerAddress)
    const data = customerAddressList.customer_address
    const delAddressData = useSelector((state) => state.customerData.delAddressByAddressId)
    console.log('address' ,data )
    const dispatch = useDispatch()

    useEffect(()=>{

        const id = localStorage.getItem('token',)
            dispatch(fetchCustomerAddress(id))
    },[])
    const handlerDeletAddress = (addressId)=>{
        console.log('address id',addressId)
        const id = localStorage.getItem('token',)
        dispatch(fetchDelAddressByAddressId( addressId , id))
       
    }
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
                            <MdCancel 
                            className="cancel-icon"
                            onClick={()=>handlerDeletAddress(value.address_id)}/>
                        <span className="address-details">{value.address}</span>
                            <br/>
                        <span className="address-details">{value.city} - {value.pincode}</span>
                            <br/>
                        <span className="address-details">{value.country}</span>
                            <br/>
                                <Link 
                                to={{
                    pathname : '/Order/editAddress',
                    state : {
                        data : value
                    },
                }}>
                            <Button className="edit-Button">
                                Edit
                            </Button>
                                </Link>
                        </div>
                        )
                    })
                    }
                    <Link to='/Order/addAddress'>
                    <Button className="edit-Button">
                                Add Address
                            </Button>
                    </Link>
                    
            </div>
        </div>
     );
}
 
export default Address;