import React, { Component, useEffect } from "react";
import "../../Assets/css/home.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductCard } from "../../redux/action/productCardAction";
import ProductRating from "../Product Folder/ProductRating";
import FullLoader from "../../Common/FullLoader";
import { apiUrl } from "../../Constants/api";
import { fetchGetCartData } from "../../redux/action/cartDataAction";

const Home = () => {
  const topratingProduct = useSelector(
    (state) => state.productCardData.productCard
  );

  console.log("topratingProduct", topratingProduct);
  const loading = useSelector((state) => state.productCardData.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductCard());
  }, []);
  useEffect(() => {
    const id = localStorage.getItem("token");
    dispatch(fetchGetCartData(id));
  }, []);

  return (
    <div className="main-slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src="./images/sideBar1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src="./images/sideBar2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src="./images/sideBar3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src="./images/sideBar4.jpg"
            alt="forth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider"
            src="./images/sideBar5.jpeg"
            alt="fifth slide"
          />
        </Carousel.Item>
      </Carousel>
      <h3 className="pop-product">Popular Product</h3>
      <button className="view-all-btn">
        <Link to="/product" className="view-all">
          View All
        </Link>
      </button>
      {loading ? (
        <FullLoader />
      ) : (
        <Col lg={10} className="home-col mx-auto">
          <ProductRating ProductDataList={topratingProduct} />
        </Col>
      )}
    </div>
  );
};

export default Home;
