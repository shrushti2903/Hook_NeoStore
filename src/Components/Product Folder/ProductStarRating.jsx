import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { fetchUpdateProductByProductId, fetchUpdateProductRatingByCustomerId } from "../../redux/action/productCardAction";




const ProductStarRating =(props) => {
  const [starValue , setStarValue] = useState('2')
  const firstExample = {
    size: 40,
    value: 2.5,
    edit: true,
    onChange: newValue => {
      console.log(`Example 4: new value is ${newValue}`);
      setStarValue(newValue)
    }
  };
  const [show, setShow] = useState(false);
  const {id} = props
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateRatingByCustomerId = useSelector((state)=> state.productCardData.updateProductRatingByCustomerId);
  console.log('update rating',updateRatingByCustomerId)
  const dispatch = useDispatch()
  const handlerSubmit = ()=>{
    console.log('product it for submit',id)
    console.log('star value after set',starValue)
    const data ={
      product_id : id,
      product_rating : starValue
    }
    const token = localStorage.getItem("token");
    const customerData = JSON.parse(localStorage.getItem("customer"));
    const customerId = customerData.customer_id
    console.log('customer id ', customerId)
    dispatch(fetchUpdateProductRatingByCustomerId( data , token))
    

  }
  return (
    <div >
    <Button className="rate-btn" onClick={handleShow}>
        Rate Product 
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate the Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ReactStars {...firstExample} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="edit-cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="edit-save" onClick={handlerSubmit}>
           Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ProductStarRating
