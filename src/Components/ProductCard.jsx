import React ,{useState} from 'react';
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
import EditAddModalPop from '../Components/EditAddModalPop';
import {MdModeEdit} from 'react-icons/md';


import { Container } from 'react-bootstrap';
import { useRef } from 'react';



const ProductCard = (props)=> {
const productIdRef = useRef(null)
const [addModalShow , setModalShow] = useState(false)
const handleClose = () => setModalShow(false);
const handleShow = (event) => {
  const productId = event.target.id
  console.log(productId)
  
  setModalShow(true);
}
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
                      <Button className="edit" variant="danger" id={data.product_id} onClick={handleShow}>
                   <MdModeEdit/>
                </Button>
                {
                  addModalShow ? 
                  <EditAddModalPop className="edit"
                 productId ={data.product_id}
                    colorId={data.color_id}
                    id={"5cfe3f0fb4db0f338946eabd"}
                    categoryId={data.category_id} 
                    describtion ={data.product_desc}
                    rating={data.product_rating}
                    producer={data.product_producer}
                    cost={data.product_cost}
                    stock={data.product_stock}
                    dimension={data.product_dimension}
                    material={data.product_material}
                    name={data.product_name}
                    show={addModalShow}
                    handleClose={handleClose}
                  />
                 :
                 ''
                }
               
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
