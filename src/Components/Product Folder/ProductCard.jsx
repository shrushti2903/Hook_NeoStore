import React, { useState, useMemo } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../Assets/css/productrating.css";
import { Router, Link } from "react-router-dom";
import { IoIosStarOutline, IoIosStar, IoIosStarHalf } from "react-icons/io";
import axios from "axios";
import { ratingTotalCount } from "../../Constants/enum";
import { apiUrl } from "../../Constants/api";
import EditAddModalPop from "../Product Folder/EditAddModalPop";
import { MdModeEdit } from "react-icons/md";
import { Container } from "react-bootstrap";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mergeCartData } from "../../Utils/helper";
import {
  fetchProductDetails,
  fetchCartProductDetail,
} from "../../redux/action/productCardAction";
import Swal from "sweetalert2";
import { useEffect, useCallback } from "react";
import { fetchGetCartData } from "../../redux/action/cartDataAction";

const ProductCard = (props) => {
  const [addModalShow, setModalShow] = useState(false);

  /**
   * Function Name - handleClose
   * Parameters -
   * this function on clicked closses the modal pop up
   */

  const handleClose = () => setModalShow(false);

  const [productId, setId] = useState("");

  /**
   * Function Name - handleShow
   * Parameters -
   * this functions on clicket opens the modal pop up
   */

  const handleShow = (id) => {
    setId(id);
    setModalShow(true);
  };
  const getCartDataList = useSelector((state) => state.cartData.getCartData);
  const cart = (getCartDataList && getCartDataList.product_details) || [];
  const { ProductDataList } = props;

  const dispatch = useDispatch();

  /**
   * Function Name - addToCart
   * Parameters - id
   * this function add products in cart
   */

  const addToCart = (id) => {
    const productDetailId = ProductDataList.filter(
      (product) => product._id == id
    );
    console.log("cartProduct12", productDetailId);
    const localStorageCartData = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(
      "cartProduct12 local storage data inside add cart",
      localStorageCartData
    );
    const mergeCartDataList = mergeCartData(cart, localStorageCartData);
    const isAvailableProductData = mergeCartDataList.filter(
      (product) => product.product_id == id
    );
    if (isAvailableProductData && isAvailableProductData.length) {
      Swal.fire({
        confirmButtonColor: "#ff0000 ",
        text: "Already added",
      });
      return;
    }
    const product_name = productDetailId[0].product_name;
    const product_producer = productDetailId[0].product_producer;
    const product_cost = productDetailId[0].product_cost;
    const product_stock = productDetailId[0].product_stock;
    const product_image = productDetailId[0].product_image;
    const product_id = productDetailId[0].product_id;
    const total = productDetailId[0].product_cost;
    const quantity = 1;
    const _id = productDetailId[0].product_id;
    Swal.fire({
      confirmButtonColor: "#ff0000 ",
      text: "Added to cart",
    });
    dispatch(
      fetchCartProductDetail(
        product_name,
        product_stock,
        product_image,
        product_cost,
        product_id,
        product_producer,
        total,
        quantity,
        _id
      )
    );
  };
  return (
    <div>
      {typeof ProductDataList == "string" ? (
        <div>
          <h2>{ProductDataList}</h2>
        </div>
      ) : (
        <Row>
          {ProductDataList &&
            ProductDataList.map((data) => {
              return (
                <Col lg={4} md={6} sm={12}>
                  <Card className="product-card-list">
                    <Button
                      className="edit"
                      variant="white"
                      onClick={() => handleShow(data.product_id)}
                    >
                      <MdModeEdit className="edit-icon" />
                    </Button>

                    <Card.Img
                      className="product-card-img"
                      variant="top"
                      src={apiUrl + data.product_image}
                    />
                    <Card.Body>
                      <Card.Title className="product-card-link">
                        <Link
                          to={{
                            pathname: "/productDetails",
                            state: {
                              id: data.product_id,
                            },
                          }}
                        >
                          {data.product_name}
                        </Link>
                      </Card.Title>
                      <Card.Text className="prize">
                        <p>Rs {data.product_cost}</p>
                        <button
                          className="add-cart-btn"
                          onClick={() => addToCart(data.product_id)}
                        >
                          Add To Cart
                        </button>
                        <div className="stars">
                          {ratingTotalCount.map((star_value, index) => {
                            let product_rating = data.product_rating;
                            return product_rating - star_value > 0 ? (
                              <IoIosStar
                                className="rating-star fill"
                                key={star_value}
                              >
                                {product_rating}
                              </IoIosStar>
                            ) : product_rating - star_value >= -0.5 &&
                              product_rating - star_value < 0 ? (
                              <IoIosStarHalf
                                className="rating-star fill"
                                key={star_value}
                              ></IoIosStarHalf>
                            ) : (
                              <IoIosStarOutline
                                className="rating-star"
                                key={star_value}
                              ></IoIosStarOutline>
                            );
                          })}
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      )}
      {addModalShow ? (
        <EditAddModalPop
          className="edit"
          productId={productId}
          Id={"5cfe3f0fb4db0f338946eabd"}
          show={addModalShow}
          handleClose={handleClose}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductCard;
