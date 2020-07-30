import React, { useLayoutEffect } from "react";
import {
  BrowserRouter,
  Redirect,
  Link,
  Route,
  useRouteMatch,
  Switch,
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import "../../../Assets/css/order.css";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomerOrder } from "../../../redux/action/orderAction";
import Swal from "sweetalert2";

import OrderSidebar from "./OrderSideBar";


const Order = (props) => {
  const [loggedIn, setLoggedIn] = useState(Boolean);
  const loginDataList = useSelector((state) => state.customerData.loginData);
  const customerOrder = useSelector((state) => state.orderData.customerOrder);
  const dispatch = useDispatch();
  let match = useRouteMatch();
  const id = localStorage.getItem("token");
  if(!id){
    Swal.fire({
      confirmButtonColor: "#ff0000 ",
      text : "Please login first"
    });
    return <Redirect to="/login" />
  }

  return <div>{id ? <OrderSidebar /> : ""}</div>;
};

export default Order;
