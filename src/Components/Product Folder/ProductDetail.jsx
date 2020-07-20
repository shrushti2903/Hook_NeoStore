import React, { useLayoutEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { IoIosStarOutline, IoIosStar, IoIosStarHalf } from "react-icons/io";
import {
  FaFacebookSquare,
  FaGoogle,
  FaWhatsapp,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MdShare } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { ratingTotalCount } from "../../Constants/enum";
import { fetchProductDetails } from "../../redux/action/productCardAction";
import { fetchProductCard } from "../../redux/action/productCardAction";
import "../../Assets/css/productdetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import FullLoader from "../../Common/FullLoader";
import { mergeCartData } from "../../Utils/helper";

import {
 
  fetchCartProductDetail,
} from "../../redux/action/productCardAction";
import Swal from "sweetalert2";
const ProductDetails = (props) => {
  const productDetails = useSelector(
    (state) => state.productCardData.productDetail
  );
  const loading = useSelector(
    (state) => state.productCardData.loading
  );
  const getCartDataList = useSelector((state) => state.cartData.getCartData);
  const cart = (getCartDataList && getCartDataList.product_details) || [];
  const productDetailsList = productDetails[0];
  const productImage = productDetailsList && productDetailsList.product_image;
  const [image, setImage] = useState({ url: "" });
  const dispatch = useDispatch();
  const location = useLocation();
  useLayoutEffect(() => {
    const id = location.state.id;
    dispatch(fetchProductDetails(id));
    setImage("http://180.149.241.208:3022/" + productImage);
  }, []);
  const changeImage = (event) => {
    let img = event.target.src;

    setImage({
      url: img,
    });
  };

  const addToCart = ()=>{
    console.log(productDetailsList)
  
    const localStorageCartData = JSON.parse(localStorage.getItem("cart")) || [];
    const mergeCartDataList = mergeCartData(cart, localStorageCartData);
    const isAvailableProductData = mergeCartDataList.filter(
      (product) => product.product_id == productDetailsList.product_id
    );
    console.log('main',isAvailableProductData)
    if (isAvailableProductData && isAvailableProductData.length) {
      Swal.fire("Already added");
      return;
    }

    const product_name = productDetailsList.product_name;
    const product_producer = productDetailsList.product_producer;
    const product_cost = productDetailsList.product_cost;
    const product_stock = productDetailsList.product_stock;
    const product_image = productDetailsList.product_image;
    const product_id = productDetailsList.product_id;
    const total = productDetailsList.product_cost;
    const quantity = 1;
    const _id = productDetailsList.product_id;

    Swal.fire("Added to cart");
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
  }
  return (
    <div>
       {loading ? (
            <FullLoader/>
          ) : (

      <Row>
        <Col lg={6} className="img-col">
          <img
            className="img-main"
            src={image ? "http://180.149.241.208:3022/" + productImage : image}
          />
          <Row>
            {productDetailsList &&
              productDetailsList.subImages_id &&
              productDetailsList.subImages_id.product_subImages.map((value) => {
                return (
                  <Col lg={4} className="img-sub-col">
                    <img
                      className="img-sub"
                      onClick={changeImage}
                      src={"http://180.149.241.208:3022/" + value}
                    />
                  </Col>
                );
              })}
          </Row>
        </Col>
        <Col lg={6}>
          <h5 className="heading">
            {productDetailsList && productDetailsList.product_name}
          </h5>
          {ratingTotalCount.map((star_value, index) => {
            let product_rating =
              productDetailsList && productDetailsList.product_rating;
            return product_rating - star_value > 0 ? (
              <IoIosStar className="rating-star " key={star_value}>
                {product_rating}
              </IoIosStar>
            ) : product_rating - star_value >= -0.5 &&
              product_rating - star_value < 0 ? (
              <IoIosStarHalf
                className="rating-star "
                key={star_value}
              ></IoIosStarHalf>
            ) : (
              <IoIosStarOutline
                className="rating-star"
                key={star_value}
              ></IoIosStarOutline>
            );
          })}
          <hr />
          <span className="prize-color">
            Price : {productDetailsList && productDetailsList.product_cost}
          </span>
          <br />
          <span className="prize-color">
            color :
            <button
              className="color-code"
              style={{
                backgroundColor:
                  productDetailsList &&
                  productDetailsList.color_id &&
                  productDetailsList.color_id.color_code,
              }}
            ></button>
          </span>
          <h6 className="share">
            Share <MdShare></MdShare>
          </h6>
          <Row>
            <Col>
              <button className="social-btn fb">
                <FaFacebookSquare className="fb-icon" />
              </button>
              <button className="social-btn google">
                <FaGoogle className="google-icon" />
              </button>
              <button className="social-btn whats-app">
                <FaWhatsapp className="whtas-icon" />
              </button>
              <button className="social-btn pp">
                <FaPinterest className="pinterest-icon" />
              </button>
              <button className="social-btn twitter">
                <FaTwitter className="twitter-icon" />
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="add-btn" onClick={addToCart}>ADD TO CART</Button>
              <Button className="rate-btn">RATE PRODUCT</Button>
            </Col>
          </Row>
        </Col>
      </Row>
          )
          }
      <Tabs
        className="tab"
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
      >
        <Tab className="detail" eventKey="home" title="Description">
          <div>
            <p>{productDetailsList && productDetailsList.product_desc}</p>
          </div>
        </Tab>
        <Tab className="detail" eventKey="profile" title="Features">
          <div>
            <p>
              Dimensions:
              {productDetailsList && productDetailsList.product_dimension}
            </p>
            <p>
              Material:{" "}
              {productDetailsList && productDetailsList.product_material}
            </p>
            <p>
              Manufacturer:
              {productDetailsList && productDetailsList.product_producer}
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductDetails;
