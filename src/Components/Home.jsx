import React ,{ Component, useEffect } from 'react';
import '../Assets/css/home.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductCard } from '../redux/action/productCardAction';
import ProductRating from './ProductRating'

const Home =() => {
  const topratingProduct = useSelector((state) => state.productCardData.productCard);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProductCard())
  },[])
      return (
        <div className = "main-slider">
             <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100 slider"
      src="http://180.149.241.208:3022/2019-06-14T07-16-40.263Zsofa.jpg"
      alt="First slide"
    />
  </Carousel.Item >
  <Carousel.Item >
    <img
      className="d-block w-100 slider"
      src="http://180.149.241.208:3022/2019-06-14T07-12-38.862Zbed.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100 slider"
      src="http://180.149.241.208:3022/2019-06-14T07-00-13.113Zwp2163483.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100 slider"
      src="http://180.149.241.208:3022/2019-06-14T07-16-18.267Ztable.jpg"
      alt="forth slide"
    />
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100 slider"
      src="http://180.149.241.208:3022/2019-06-28T05-38-01.778Zwardrobe-design-with-color-combination.jpeg"
            alt="fifth slide"
    />
     </Carousel.Item>
</Carousel>
  <h3 className="pop-product">Popular Product</h3>
  <button className="view-all-btn"><Link to="/product" className="view-all" >View All</Link></button>
  <Col lg={12}>
              <ProductRating ProductData={topratingProduct} />
            </Col>
        </div>
      )
    
}   

export default Home