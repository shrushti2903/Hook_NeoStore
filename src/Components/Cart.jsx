import React, { useState , useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../Assets/css/cart.css';
import ListGroup from 'react-bootstrap/ListGroup'
import {AiOutlineDelete} from 'react-icons/ai'
import {connect} from 'react-redux';
import Dialog from 'react-bootstrap-dialog'
import {fetchAllCartData} from '../redux/action/cartDataAction';
import { useSelector, useDispatch } from 'react-redux';


const  Cart = () =>{
    const  cartDataList = useSelector( (state) => state.cartData.allCartData);
    const [incrementProductCount , setIncrementProductCount] = useState( );
    const [decrementProductCount , setDecrementProductCount] = useState();
    const dispatch = useDispatch();
    useEffect(()=>{
    })
    
   
        return ( 
            <Container fluid>
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
                                {
                                    cartDataList && cartDataList.map((cart,index)=>{
                                        return(
<tbody>
                                    <tr key={index}>
                                        <td className="img-td">
                                            <img
                                            className="table-img"
                                            src={"http://180.149.241.208:3022/" + cart.product_id.product_image}/>
                                        </td>
                                        <td>
                                        <p>{cart.product_id.product_name} <br/>
                                        by {cart.product_id.product_producer}.<br/> 
                                        Status: <span className="instock">In Stock</span>
                                        </p>
                                        </td>
                                        <td className="quantity-input">
                                            <button className="quantity-input__modifier quantity-input__modifier--left">
                                                &mdash;
                                            </button>
                                            <input className="quantity-input__screen" type="text" value={cart.quantity} readonly />
                                            <button className="quantity-input__modifier quantity-input__modifier--right" onClick={incrementProductCount}>
                                                &#xff0b;
                                            </button>
                                        </td>
                                        <td>{cart.product_cost.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                                        <td>{parseFloat(cart.total_cost).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                                        <td ><AiOutlineDelete className="delet-icon"></AiOutlineDelete></td>
                                        
                                    </tr>
                                    
                                </tbody>
                                        )
                                    })
                                }
                                
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
                                    <span className="right"></span>
                           </ListGroup.Item>
                                    
                                    <ListGroup.Item>
                                    <span className="left"> GST(5%)</span>
                                    <span className="right"></span>
                                    </ListGroup.Item>
                                    
                                    <ListGroup.Item>
                                    <span className="left">Order Total</span>
                            <span className="right"></span>
                                    </ListGroup.Item>
                                    </ListGroup>
                              
                                <Button className="procced-btn" variant="primary">Procced To Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
               
            </Container>
         );
    }

 
    export default Cart ;