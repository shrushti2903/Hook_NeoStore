import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchCustomerOrderDetails,
  fetchCutomerOrderInvoice,
} from "../../../redux/action/customerDataAction";
import { Button } from "react-bootstrap";
import "../../../Assets/css/address.css";
import FullLoader from "../../../Common/FullLoader";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const orderDetails = useSelector(
    (state) => state.customerData.customerOrderDetails
  );
  const orderDetail = orderDetails.product_details;
  console.log('orderdetails', orderDetail)
  const invoiceData = useSelector((state) => state.customerData.orderInvoice);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchCustomerOrderDetails(token));
  }, []);
  const inVoice = () => {
    const token = localStorage.getItem("token");
    dispatch(fetchCutomerOrderInvoice(orderDetails, token));
  };
  const loading = useSelector(
    (state) => state.customerData.loading
  );
  return (
    <div>
      {
        orderDetail  ==  null || []?
        <div>
        <h1 className="no-order">
          No Order Found
        </h1>
        <Link to="/product"> <Button className="go-to-prouct">  Go to Product Page </Button></Link>
        </div>
       :
      <h2>
        <h3 className="address-tittle">Order Details</h3>
        <hr className="address-tittle" />

        {orderDetail &&
          orderDetail.map((value) => {
            return (
              <div className="address">
                <span className="address-details">{value._id}</span>
                <hr className="address-tittle" />
                <br />
                {value &&
                  value.product_details &&
                  value.product_details.map((data) => {
                    console.log(data);
                    return (
                      data &&
                      data.product_details.map((val) => {
                        return (
                          <img
                            className="order-image"
                            src={
                              "http://180.149.241.208:3022/" + val.product_image
                            }
                          />
                        );
                      })
                    );
                  })}
                <br />
                <Button onClick={inVoice} className="edit-Button">
                  Download InVoice
                </Button>
              </div>
            );
          })}
      </h2>
    
        }  
    </div>
  );
};

export default OrderDetails;
