import React from "react";
import "../../../../Assets/css/cart.css";
import { Link, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <img className="empty-image" src="./images/emptycart.png" />
      <h5>YOUR CART IS CURRENTLY EMPTY</h5>
      <p>
        EMPTY <br />
        Before proceed to checkout you must add some products to you shopping
        cart. <br />
        You will find lots of intresting products on our products page
      </p>
      <Link to="/Product">
        <Button>Return to Product Page</Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
