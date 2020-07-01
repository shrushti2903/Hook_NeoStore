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
import { useCallback } from 'react';
import CartCount from './CartCount';





const Product = (props)=> {

  const categoryList = useSelector((state)=> state.categoriesData.categories)
  const colorList = useSelector((state)=> state.colorData.color);
  const allProductList = useSelector((state) => state.productCardData.allProduct);
  const CategoryIdList = useSelector((state) => state.categoriesData.categoryId);
  const [ProductDataList , setProduct] = useState([]);
  const dispatch = useDispatch()
  useEffect(()=>{
    // console.log('effect ')
    dispatch(fetchCategory())
   dispatch(fetchColor())
   dispatch(fetchAllProduct())
  
  },[])
// console.log('product data list', ProductDataList)
  // const getCategoryId = (id) => {
  //   console.log(id)
  //   dispatch(fetchCategoryId(id));
  //        setProduct({
  //         CategoryIdList
  //        },
  //        )   
  // }
  // console.log('render')
  return (
  
    <div>
      <h5 className="sort">Sort By:<button className="star-btn" ><IoIosStar className="star-icon" /></button>
        <button className="star-btn" >₹<IoMdArrowUp className="star-icon" /></button>
        <button className="star-btn">₹<IoMdArrowDown className="star-icon" /></button>
      </h5>
      <CartCount
     />
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