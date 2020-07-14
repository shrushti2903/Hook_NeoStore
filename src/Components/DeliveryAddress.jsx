import React , {useEffect} from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import '../Assets/css/address.css'
import {MdCancel} from 'react-icons/md'
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomerAddress, fetchDelAddressByAddressId, fetchCustomerUpdateAddress, fetchAddProductToCartCheckout } from '../redux/action/customerDataAction';
import Form from 'react-bootstrap/Form'


const DeliveryAddress = () => {
    const customerAddressList = useSelector((state) => state.customerData.customerAddress)
    const CustomerCartData = useSelector((state) => state.cartData.getCartData)
    console.log(CustomerCartData)
    const data = customerAddressList.customer_address
    const customerUpdatedAddress = useSelector((state)=> state.customerData.updateAddress)
    console.log('address' ,data )
  const dispatch = useDispatch()
  const history = useHistory()

    useEffect(()=>{

        const id = localStorage.getItem('token',)
            dispatch(fetchCustomerAddress(id))
    },[])
    const updateAddress = (user)=>{
       
            user.isDeliveryAddress = true

        
        console.log('address id',user)
        const id = localStorage.getItem('token')
        dispatch(fetchCustomerUpdateAddress(user , id))
       
    }
    const placeOrder = ()=>{
        const data = CustomerCartData.product_details[0]

            const user = [{
                _id : data.product_id.product_id,
                product_id : data.product_id.product_id,
                quantity : data.quantity
            },{flag : "checkout"}];
        
        console.log('user.....' ,user )
       
        
        const token = localStorage.getItem('token')
        dispatch(fetchAddProductToCartCheckout(user , token))
    //     // history.push('/orderPlaced');
    }
    return ( 
        <div>
            <div className="main-address">
                <h3 className="address-tittle">
                Addresses
                </h3>
                <hr className="address-tittle"/>
                
                    {
                    data && data.map((value) => {
                        return (
                            <div className="address">
                        <span className="address-details">{value.address}</span>
                            <br/>
                        <span className="address-details">{value.city} - {value.pincode}</span>
                            <br/>
                        <span className="address-details">{value.country}</span>
                            <br/>
                            <Row>
                                <Col lg={1} className="radio">
                                <Form.Check onChange={()=>updateAddress(value)} className="select-radio custom-control custom-radio custom-control-inline radio" name="radio" type="radio" label="Select" 
                                />
                                &nbsp;&nbsp; 
                                </Col>
                                <Col lg={1}>
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
                              
                                </Col>
                            </Row>
                           
                              
                        </div>
                        )
                    })
                    }
                    <Link to='/Order/addAddress'>
                    <Button className="edit-Button">
                                Add Address
                            </Button>
                    </Link>
                    <Button className="edit-Button"
                    onClick={placeOrder}>
                               Place Order
                            </Button> 
            </div>
        </div>
     );
}
 
export default DeliveryAddress;