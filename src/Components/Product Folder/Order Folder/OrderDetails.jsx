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
import { apiUrl } from "../../../Constants/api";

const OrderDetails = () => {
  const orderDetails = useSelector(
    (state) => state.customerData.customerOrderDetails
  );
  const orderDetail = orderDetails.product_details;
  console.log("orderdetails", orderDetail);
  const invoiceData = useSelector((state) => state.customerData.orderInvoice);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchCustomerOrderDetails(token));
  }, []);

  /**
   * Function Name - inVoice
   * Parameters -
   * this function shows the invoice for all the order has placed
   */

  const inVoice = () => {
    const token = localStorage.getItem("token");
    dispatch(fetchCutomerOrderInvoice(orderDetails, token));
  };
  const loading = useSelector((state) => state.customerData.loading);
  return (
    <div>
      {orderDetail && orderDetail.length > 0 ? (
        <h2>
          <h5 className="address-tittle">Order Details</h5>
          <hr />

          {orderDetail &&
            orderDetail.map((value) => {
              return (
                <div className="address">
                  <h6 className="address-details">{value._id}</h6>
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
                              src={apiUrl + val.product_image}
                            />
                          );
                        })
                      );
                    })}
                  <Button onClick={inVoice} className="invoice-button">
                    {invoiceData && invoiceData.receipt && (
                      <a
                        className="a"
                        href={apiUrl + invoiceData && invoiceData.receipt}
                        download
                      ></a>
                    )}
                    Download Invoice
                  </Button>
                </div>
              );
            })}
        </h2>
      ) : (
        <div>
          {loading ? (
            <FullLoader />
          ) : (
            <div>
              <h1 className="no-order">No Order Found</h1>
              <Link to="/product">
                {" "}
                <Button className="go-to-prouct"> Go to Product Page </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
