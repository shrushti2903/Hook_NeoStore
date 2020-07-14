import React , {useContext, useState} from 'react';
import SideBar from '../Components/SideBar'
import '../Assets/css/product.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchCategory} from '../redux/action/categoriesAction';
import {fetchColor} from '../redux/action/colorAction';
import {fetchAllProduct} from '../redux/action/productCardAction';
import {fetchCategoryId} from '../redux/action/categoriesAction';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {IoMdArrowDown , IoIosStar , IoMdArrowUp} from "react-icons/io";
import ProductCard from '../Components/ProductCard';

import { fetchProductDetails, fetchCartProductDetail } from '../redux/action/productCardAction';
import Swal from 'sweetalert2'






const Product = (props)=> {

  const categoryList = useSelector((state)=> state.categoriesData.categories)
  const colorList = useSelector((state)=> state.colorData.color);
  const allProductList = useSelector((state) => state.productCardData.allProduct);
  const CategoryIdList = useSelector((state) => state.categoriesData.categoryId);
  const productCartDetails = useSelector((state) => state.productCardData)
  const  productDetails = productCartDetails.cartData
  const cartValue = JSON.parse(localStorage.getItem('cart')) || []
  const [ProductDataList , setProduct] = useState([]);
  const [count , setcount] = useState({})
   const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategory())
   dispatch(fetchColor())
   dispatch(fetchAllProduct())
  
  },[])
  

  

  console.log('cartValue',cartValue)
  const addToCart =  (id)=>{
    const productDetailId = allProductList.filter(
      (product) => product._id == id
      );
          const found = productDetails.filter(
          (element) => element.productId == id
            );
            if (found && found.length){
              Swal.fire('Already added')
              return
            } 
      
      const product_name = productDetailId[0].product_name
      const product_producer = productDetailId[0].product_producer
      const product_cost = productDetailId[0].product_cost
      const product_stock = productDetailId[0].product_stock
      const product_image = productDetailId[0].product_image
      const product_id = productDetailId[0].product_id
      const total = productDetailId[0].product_cost
      const quantity = 1
      const _id = productDetailId[0].product_id
      Swal.fire('Added to cart')
       dispatch(fetchCartProductDetail( product_name , product_stock, product_image , product_cost , product_id, product_producer ,total ,quantity , _id))
      
     }
  return (
  
    <div>
      
      <h5 className="sort">Sort By:<button className="star-btn" ><IoIosStar className="star-icon" /></button>
        <button className="star-btn" >₹<IoMdArrowUp className="star-icon" /></button>
        <button className="star-btn">₹<IoMdArrowDown className="star-icon" /></button>
      </h5>
        <Row className='row-product'>
            <Col lg={3} className="col-sidebar">
            <SideBar
              colorList={colorList}
              categoryList={categoryList}
             
              >
            </SideBar>
          </Col>
          <Col>
  <Row>
      <Col lg={12} md={12} className="col-products">

            <ProductCard ProductData={allProductList}
             handleClick={addToCart}
            />
          </Col>
          </Row>
          </Col>
      
        </Row>
       
        {/* <Pagination
        hideFirstLastPages
        prevPageText='prev'
        nextPageText='next'
    activePage={this.state.activePage}
    itemsCountPerPage={5}
    totalItemsCount={40} 
    pageRangeDisplayed={5}
    onChange={this.handlePageChange}
  /> */}
      </div>
  )
}


export default Product