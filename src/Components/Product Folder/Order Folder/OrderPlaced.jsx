import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../Assets/css/orderPlaced.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetCartData } from "../../../redux/action/cartDataAction";
import FullLoader from "../../../Common/FullLoader";

const OrderPlaced = () => {
  const CustomerCartData = useSelector((state) => state.cartData.getCartData);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const id = localStorage.getItem("token");
    dispatch(fetchGetCartData(id));
  }, []);
  return (
    <div className="orderPlace">

      <h1>Thank you for your order</h1>
      <h5>Your order has been placed and is being processed</h5>
     
      <Link to="/home">
        <button>Back to HomePage</button>
      </Link>
        
    </div>
  );
};

export default OrderPlaced;
