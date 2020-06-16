import React  from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Assets/css/productrating.css' ;
import {Router ,Link} from 'react-router-dom'
import {IoIosStarOutline , IoIosStar , IoIosStarHalf} from "react-icons/io";
import axios from 'axios';
import {ratingTotalCount } from '../Constants/enum';
import {apiUrl } from '../Constants/api';


import { Container } from 'react-bootstrap';


const ProductCard = (props)=> {
  
      const {ProductData} = props;
      return (
        <div>
          {
            typeof ProductData == 'string' ?

              <div>
                <h2>{ProductData}</h2>
              </div>
              :
              <Row>
                { 
                ProductData && ProductData.map((data) => {
                  return (
                    <Col lg={4}>
                      <Card className="product-card-list">
                        <Card.Img className="product-card-img" variant="top" src={"http://180.149.241.208:3022/" + data.product_image} />
                        <Card.Body>
                          <Card.Title className="product-card-link">
                          
                         
                          <Link to={
                            {
                              pathname: '/productDetails',
                              state : {
                               id : data.product_id
                              }
                            }
                          }
                            >{data.product_name}</Link>
                            
                          </Card.Title>
                          <Card.Text className="prize">
                            <p>Rs {data.product_cost}</p>
                          <button className="add-cart-btn">Add To Cart</button >
                          {
                            ratingTotalCount.map((star_value, index) => {
                              let product_rating = data.product_rating;
                              return (
                                product_rating - star_value > 0 ?
                                  (<IoIosStar className="rating-star fill" key={star_value}>{product_rating}</IoIosStar>)
                                  : ((product_rating - star_value) >= -0.5 && (product_rating - star_value) < 0) ?
                                    (<IoIosStarHalf className="rating-star fill" key={star_value}></IoIosStarHalf>)
                                    :
                                    (<IoIosStarOutline className="rating-star" key={star_value}></IoIosStarOutline>)
                              )
                            })
                          }
                           </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                }
                )
                }
              </Row>
          }

        </div>
      )
    }
  
  export default ProductCard
