import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../Assets/css/header.css";
import { Dropdown } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MdShoppingCart } from "react-icons/md";
import { MdPermContactCalendar, MdAccountCircle } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import Badge from "react-bootstrap/Badge";
import { ButtonGroup } from "react-bootstrap";
import {
  fetchAllCartData,
  fetchGetCartData,
} from "../redux/action/cartDataAction";
import { BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useMemo } from "react";
import { fetchCartProductDetail } from "../redux/action/productCardAction";
import { useCallback } from "react";
import { fetchAddProductToCartCheckout } from "../redux/action/customerDataAction";
import { mergeCartData } from "../Utils/helper";
import Swal from "sweetalert2";
import FullLoader from "./FullLoader";

const Header = (props) => {
  const productCartDetails = useSelector((state) => state.productCardData);
  const addProductToCheckoutList = useSelector(
    (state) => state.customerData.addProductToCheckout
  );
  const loading = useSelector(
    (state) => state.productCardData.loading , 
    (state) => state.customerData.loading
  );
  
  let productDetails = productCartDetails.cartData;
  const CustomerCartData = useSelector((state) => state.cartData.getCartData);
  const cart = (CustomerCartData && CustomerCartData.product_details) || [];
  const cartValue = JSON.parse(localStorage.getItem("cart")) || [];
  const id = localStorage.getItem("token");
  const dispatch = useDispatch();
  const history = useHistory();
  const loginDataList = JSON.parse(localStorage.getItem("customer"));
  useEffect(() => {
    const id = localStorage.getItem("token");
    dispatch(fetchGetCartData(id));
  }, []);

  const logout = () => {
    const cartDataList = JSON.parse(localStorage.getItem("cart")) || [];
    const map =
      cartDataList &&
      cartDataList.map((value) => {
        return {
          _id: value._id,
          product_id: value.product_id,
          quantity: value.quantity,
        };
      });
    map.push({ flag: "logout" });
    const user = map;
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "yes Logout !",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Logout!", "You are logged successfully");
        const token = localStorage.getItem("token");
        dispatch(fetchAddProductToCartCheckout(user, token));
        localStorage.clear();
        history.push("/login");

      }
    });
  };
  const order = () =>{
    if (!id) {
      Swal.fire("Please login first");
      history.push("/login");
  
    }
  }
  const localStorageCartData = JSON.parse(localStorage.getItem("cart")) || [];
  const mergeCartDataList = mergeCartData(cart, localStorageCartData);
  return (
    <div>
     

      <Navbar className="navbar" expand="lg" variant="dark">
        <Navbar.Brand className="brand">
          <Link to="/home" className="link">
            Neo<b>STORE</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link to="/home" className="link-option">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Product" className="link-option">
                Product
              </Link>
            </Nav.Link>
            
            <Nav.Link onClick={order}>
              <Link to="/Order/orderdetails" className="link-option">
                Order
              </Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text className="search-inpur-grp" id="basic-addon1">
                  <IoMdSearch className="search-icon" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="search"
                placeholder="Products"
                aria-label="Products"
                aria-describedby="basic-addon1"
                id="gsearch"
                name="gsearch"
                className="mr-sm-2 search-bar "
              />
            </InputGroup>
            <Link to="/cart">
              <Button variant="light" className="cart-button">
                <MdShoppingCart color="black" size="1.5rem"></MdShoppingCart>
                <Badge className="count" variant="danger">
                  {mergeCartDataList.length}
                </Badge>
                Cart
              </Button>
            </Link>
            {id ? (
              <Dropdown alignRight className="drop-down-btn">
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="dropdown-btn"
                >
                  {loginDataList.first_name}
                  <MdAccountCircle color="black" size="2rem" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className='drop-btn'>
                    <Link to="/Order/profile" className="link-drop">
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='drop-btn' onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Dropdown alignRight className="drop-down-btn">
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="drop-down-btn-login"
                >
                  <MdPermContactCalendar color="black" size="2rem" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item className='drop-btn'>
                    <Link to="/login" className="link-drop">
                      Login
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='drop-btn'>
                  <Link to="/register" className="link-drop">
                      Register
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
        
    </div>
  );
};

export default Header;
