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
import {fetchAllCartData, fetchDeletProductByProductId, fetchGetCartData} from '../redux/action/cartDataAction';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import {fetchCartProductDetailDelete} from '../redux/action/productCardAction'

const  Cart = () =>{
    // const  cartDataList = useSelector( (state) => state.cartData.allCartData);
    const productCartDetails = useSelector((state) => state.productCardData)
    const deletCartDataById = useSelector((state) => state.cartData.deletProductData)
    const allProductList = useSelector((state) => state.productCardData.allProduct);
    const cartData = productCartDetails.cartData
    const CustomerCartData = useSelector((state) => state.cartData.getCartData)
    const cartDataList = JSON.parse(localStorage.getItem('cart')) || []
    const [quantity ,setQuantity] = useState();
    const [totalCost , setTotalcost] = useState();
    const dispatch = useDispatch();
    const id = localStorage.getItem('token')
    if(!id){
        Swal.fire('Please login first')
      }
      useEffect(()=>{
        const id = localStorage.getItem('token')
        console.log(id)
          dispatch(fetchGetCartData(id))
          console.log(CustomerCartData)
      },[])

    const handlerDecrement = (index)=>{
        console.log(index)
        const cartDataList = JSON.parse(localStorage.getItem('cart')) || []
        const elem = cartDataList[index]
         console.log('element', elem)
        setQuantity( elem.quantity = elem.quantity > 0 ? elem.quantity - 1 : 0)
        setTotalcost( elem.totalCost = elem.quantity * elem.cost)
    }

    const hanlerIncrement = (index)=>{
        console.log(index)
        const cartDataList = JSON.parse(localStorage.getItem('cart')) || [] 
        const elem = cartDataList[index]
         console.log('element', elem)
        setQuantity( elem.quantity = elem.quantity + 1)
        setTotalcost( elem.totalCost = elem.quantity * elem.cost)
    }  
    const handlerDelete = (productId) => {
        // console.log(index)
        // dispatch(fetchCartProductDetailDelete(index))
        const id = localStorage.getItem('token')
        dispatch(fetchDeletProductByProductId(productId , id))
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //       if (result.value) {
        //         Swal.fire(
        //           'Deleted!',
        //           'Your file has been deleted.',
        //           'success'
        //         )
        //     }
        //   })
      };
    const subTotal = cartDataList.reduce((prev, cur) => {
        return prev + parseInt(cur.totalCost || 0);
      }, 0);
      const gst = (subTotal * 5) / 100;
      const total = subTotal + gst;
        return ( 
            <Container fluid>
                {
                    cartDataList.length == 0?
                    <div className="empty-cart">
                    <img 
                     src='../../Assets/images/emptycart.png'></img>
                    <h5>YOUR CART IS CURRENTLY EMPTY</h5>
                    <p>EMPTY <br/>
Before proceed to checkout you must add some products to you shopping cart. <br/>
You will find lots of intresting products on our products page</p>
<Link to='/Product'>
<Button>Return to Product Page</Button>
</Link>
                    </div>
                    :
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
                                            src={"http://180.149.241.208:3022/" + cart.product_image}/>
                                        </td>
                                        <td>
                                        <p>{cart.product_name} <br/>
                                        by {cart.product_producer}.<br/> 
                                        Status: <span className="instock">In Stock</span>
                                        </p>
                                        </td>
                                        <td className="quantity-input">
                                            <button className="quantity-input__modifier quantity-input__modifier--left" onClick={()=>handlerDecrement(index)}>
                                                &mdash;
                                            </button>
                                            <input className="quantity-input__screen" type="text" value={cart.quantity} readonly />
                                            <button className="quantity-input__modifier quantity-input__modifier--right" onClick={()=>hanlerIncrement(index)}>
                                                &#xff0b;
                                            </button>
                                        </td>
                                        <td>{cart.product_cost.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                                        <td>{parseFloat(cart.total).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                                        <td ><AiOutlineDelete className="delet-icon" onClick={()=>handlerDelete(cart.product_id)}></AiOutlineDelete></td>
                                        
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
                                    {
                                        id ?
                                        <Link to="/deliveryAddress">
                                    <Button className="procced-btn" variant="primary">Procced To Buy</Button>
                                    </Link>
                                    : 
                                    <Redirect to="/login"/>
                                    }
                                    
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                }
            </Container>
         );
    }

 
    export default Cart ;