import React, { useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../../../Assets/css/address.css";
import { MdCancel } from "react-icons/md";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCustomerAddress,
  fetchDelAddressByAddressId,
  fetchCustomerUpdateAddress,
  fetchAddProductToCartCheckout,
} from "../../../redux/action/customerDataAction";
import Form from "react-bootstrap/Form";
import { mergeCartData } from "../../../Utils/helper";
import FullLoader from "../../../Common/FullLoader";
import Swal from "sweetalert2";

const DeliveryAddress = () => {
  const customerAddressList = useSelector(
    (state) => state.customerData.customerAddress
  );
  const addProductToCheckoutList = useSelector(
    (state) => state.customerData.addProductToCheckout
  );
  const CustomerCartData = useSelector((state) => state.cartData.getCartData);
  const cart = (CustomerCartData && CustomerCartData.product_details) || [];

  const data = customerAddressList.customer_address;
  const customerUpdatedAddress = useSelector(
    (state) => state.customerData.updateAddress
  );
  const loading = useSelector((state) => state.customerData.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const localStorageCartData = JSON.parse(localStorage.getItem("cart")) || [];
  const mergeCartDataList = mergeCartData(cart, localStorageCartData);
  useEffect(() => {
    const id = localStorage.getItem("token");
    dispatch(fetchCustomerAddress(id));
  }, []);
  const updateAddress = (user) => {
    user.isDeliveryAddress = true;
    const id = localStorage.getItem("token");
    dispatch(fetchCustomerUpdateAddress(user, id));
  };

  /**
   * Function Name - placeOrder
   * Parameters -
   * this function place the order and passes product data and checkout flag in api as data
   */

  const placeOrder = () => {
    if(data){
      const map =
        mergeCartDataList &&
        mergeCartDataList.map((value) => {
          return {
            _id: value.product_id,
            product_id: value.product_id,
            quantity: value.quantity,
          };
        });
  
      map.push({ flag: "checkout" });
      const user = map;
      const token = localStorage.getItem("token");
      if(customerUpdatedAddress.status_code == 200){
        dispatch(fetchAddProductToCartCheckout(user, token));
      }
      else{
        Swal.fire({
          confirmButtonColor: "#ff0000 ",
          text: 'please select address',
        })
      }
    }
    else{
      Swal.fire({
        confirmButtonColor: "#ff0000 ",
        text: 'please add address first',
      })
    }
  };
  useEffect(()=>{
    if(addProductToCheckoutList.status_code == 200){
      history.push("/orderPlaced");
      localStorage.removeItem("cart");
    }
  },[addProductToCheckoutList])
  return (
    <div>
      <h3 className="address-tittle">Addresses</h3>
      <hr className="address-tittle" />

      {data &&
        data.map((value) => {
          return (
            <div className="address mx-auto col-md-8">
              <span className="address-details">{value.address}</span>
              <br />
              <span className="address-details">
                {value.city} - {value.pincode}
              </span>
              <br />
              <span className="address-details">{value.country}</span>
              <br />
              <Row>
                <Col lg={1} className="radio">
                  <Form.Check
                    onChange={() => updateAddress(value)}
                    className="select-radio custom-control custom-radio custom-control-inline radio"
                    name="radio"
                    type="radio"
                    label="Select"
                  />
                  &nbsp;&nbsp;
                </Col>
                <Col lg={10}>
                  <Link
                    to={{
                      pathname: "/Order/editAddress",
                      state: {
                        data: value,
                      },
                    }}
                  >
                    <Button className="edit-Button">Edit</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          );
        })}
      <Link to="/Order/addAddress">
        <Button className="edit-Button">Add Address</Button>
      </Link>
      <Button className="edit-Button" onClick={placeOrder}>
        Place Order
      </Button>
    </div>
  );
};

export default DeliveryAddress;
