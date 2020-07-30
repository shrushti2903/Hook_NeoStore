import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../../../Assets/css/cart.css";

import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineDelete } from "react-icons/ai";
import { connect } from "react-redux";
import Dialog from "react-bootstrap-dialog";
import {
  fetchAllCartData,
  fetchDeletProductByProductId,
  fetchGetCartData,
} from "../../../../redux/action/cartDataAction";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchCartProductDetailDelete } from "../../../../redux/action/productCardAction";
import { mergeCartData } from "../../../../Utils/helper";
import EmptyCart from "./EmptyCart";
import FullLoader from "../../../../Common/FullLoader";
import { apiUrl } from "../../../../Constants/api";

const Cart = () => {
  // const  cartDataList = useSelector( (state) => state.cartData.allCartData);
  const productCartDetails = useSelector((state) => state.productCardData);
  const deletCartDataById = useSelector(
    (state) => state.cartData.deletProductData
  );
  const allProductList = useSelector(
    (state) => state.productCardData.allProduct
  );
  const loading = useSelector(
    (state) => state.productCardData.loading,
    (state) => state.cartData.loading
  );
  const cartData = productCartDetails.cartData;
  const CustomerCartData = useSelector((state) => state.cartData.getCartData);
  const cart = (CustomerCartData && CustomerCartData.product_details) || [];

  const [, setQuantity] = useState();
  const [, setTotalcost] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const id = localStorage.getItem("token");
  if (!id) {
    Swal.fire({
      confirmButtonColor: "#ff0000 ",
      text: "Please login first",
    });
    history.push("/login");
  }

  useEffect(() => {
    const id = localStorage.getItem("token");
    dispatch(fetchGetCartData(id));
  }, [productCartDetails]);
  /**
   * Function Name - handlerDecrement
   * Parameters - index
   * this function is for decrementing the current quantity coming from api response also on decrementing quantity accordingly cost is also changing
   */

  const handlerDecrement = (index) => {
    const mergeCartDataList = mergeCartData(cart, localStorageCartData);
    const elem = cartResponse[index];
    setQuantity((elem.quantity = elem.quantity > 0 ? elem.quantity - 1 : 0));
    setTotalcost((elem.total = elem.quantity * elem.product_cost));
  };

  /**
   * Function Name - handlerIncrement
   * Parameters - index
   * this function is for incrementing the current quantity coming from api response also on incrementing quantinty according cost is also chanaging
   */

  const hanlerIncrement = (index) => {
    const mergeCartDataList = mergeCartData(cart, localStorageCartData);
    const elem = cartResponse[index];
    setQuantity((elem.quantity = elem.quantity + 1));
    setTotalcost((elem.total = elem.quantity * elem.product_cost));
  };

  /**
  * Function Name - handlerDelete
  * Parameters - index
  * in this function it takes index on click and then accordin
     the index deleted the product added in the card 
     also on clicking delete icon one dialong alert is pop up for confirmation on 
     deleting this product
  * */

  const handlerDelete = async (productId, index) => {
    dispatch(fetchCartProductDetailDelete(index));
    const id = localStorage.getItem("token");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000 ",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          confirmButtonColor: "#ff0000 ",
          text: "Deleted! Your file has been deleted success",
        });
        dispatch(fetchDeletProductByProductId(productId, id));
        console.log("delete success");
        const filterergeData = cartResponse.filter(
          (product) => product.product_id !== productId
        );
        setCartResponse(filterergeData);
      }
    });
  };
  const localStorageCartData = JSON.parse(localStorage.getItem("cart")) || [];
  const mergeCartDataList = mergeCartData(cart, localStorageCartData);
  const [cartResponse, setCartResponse] = useState(mergeCartDataList);
  console.log(cartResponse);
  const subTotal = cartResponse.reduce((prev, cur) => {
    return prev + parseInt((cur && cur.total) || 0);
  }, 0);
  const gst = (subTotal * 5) / 100;
  const total = subTotal + gst;
  return (
    <div>
      {cartResponse.length == 0 ? (
        <div className="empty-cart">
          <img src="./images/emptycart.png"></img>
          <h5>YOUR CART IS CURRENTLY EMPTY</h5>
          <p>
            EMPTY <br />
            Before proceed to checkout you must add some products to you
            shopping cart. <br />
            You will find lots of intresting products on our products page
          </p>
          <Link to="/Product">
            <Button>Return to Product Page</Button>
          </Link>
        </div>
      ) : (
        <Row>
          <Col lg={8}>
            <Card className="table-col">
              <Table responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th></th>
                    <th>Quantity</th>
                    <th>Prize</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                {cartResponse &&
                  cartResponse.map((value, index) => {
                    return (
                      <tbody>
                        <tr key={index}>
                          <td className="img-td">
                            <img
                              className="table-img"
                              src={apiUrl + value.product_image}
                            />
                          </td>
                          <td>
                            <p>
                              {value && value.product_name} <br />
                              by {value.product_producer}.<br />
                              Status: <span className="instock">In Stock</span>
                            </p>
                          </td>
                          <td className="quantity-input">
                            <button
                              className="quantity-input__modifier quantity-input__modifier--left"
                              onClick={() => handlerDecrement(index)}
                            >
                              &mdash;
                            </button>
                            <input
                              className="quantity-input__screen"
                              type="text"
                              value={value && value.quantity}
                              readonly
                            />
                            <button
                              className="quantity-input__modifier quantity-input__modifier--right"
                              onClick={() => hanlerIncrement(index)}
                            >
                              &#xff0b;
                            </button>
                          </td>
                          <td>
                            {value &&
                              value.product_cost.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                              })}
                          </td>
                          <td>
                            {parseFloat(value && value.total).toLocaleString(
                              undefined,
                              {
                                maximumFractionDigits: 2,
                              }
                            )}
                          </td>
                          <td>
                            <AiOutlineDelete
                              className="delet-icon"
                              onClick={() =>
                                handlerDelete(value && value.product_id, index)
                              }
                            ></AiOutlineDelete>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </Table>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="total-col">
              <Card.Body>
                <Card.Title>Review Order</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <span className="left"> Subtotal</span>
                    <span className="right">
                      {subTotal.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span className="left"> GST(5%)</span>
                    <span className="right">
                      {subTotal.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span className="left">Order Total</span>
                    <span className="right">
                      {total.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </ListGroup.Item>
                </ListGroup>
                {id ? (
                  <Link to="/deliveryAddress">
                    <Button className="procced-btn" variant="primary">
                      Procced To Buy
                    </Button>
                  </Link>
                ) : (
                  <Redirect to="/login" />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Cart;
