import React, { useContext, useState } from "react";
import SideBar from "./SideBar";
import "../../Assets/css/product.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "../../redux/action/categoriesAction";
import { fetchColor } from "../../redux/action/colorAction";
import { fetchAllProduct, fetchAllProductInHighestRating } from "../../redux/action/productCardAction";
import { fetchCategoryId } from "../../redux/action/categoriesAction";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdArrowDown, IoIosStar, IoMdArrowUp } from "react-icons/io";
import ProductCard from "./ProductCard";
import { mergeCartData } from "../../Utils/helper";
import {
  fetchProductDetails,
  fetchCartProductDetail,
} from "../../redux/action/productCardAction";
import Swal from "sweetalert2";
import { fetchGetCartData } from "../../redux/action/cartDataAction";
import FullLoader from "../../Common/FullLoader";

const Product = (props) => {
  const categoryList = useSelector((state) => state.categoriesData.categories);
  const colorList = useSelector((state) => state.colorData.color);
  const allProductList = useSelector(
    (state) => state.productCardData.allProduct
  );
  const CategoryIdList = useSelector(
    (state) => state.categoriesData.categoryId
  );
  const productCartDetails = useSelector((state) => state.productCardData);
  const productDetails = productCartDetails.cartData;
  const getCartDataList = useSelector((state) => state.cartData.getCartData);
  const cart = (getCartDataList && getCartDataList.product_details) || [];
  const cartValue = JSON.parse(localStorage.getItem("cart")) || [];
 const allProductInHighestRatingList = useSelector((state)=> state.productCardData.allProductInHighestRating)
 console.log('all toprating product' ,allProductInHighestRatingList)
  const [ProductDataList, setProduct] = useState([]);
  const [count, setcount] = useState({});
  const loading = useSelector(
    (state) => state.categoriesData.loading,
    (state) => state.colorData.loading,
    (state) => state.productCardData.loading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchColor());
    dispatch(fetchAllProduct());
     dispatch(fetchAllProductInHighestRating());
    const id = localStorage.getItem("token");
    dispatch(fetchGetCartData(id));
  }, []);

  const addToCart = (id) => {
    const productDetailId = allProductList.filter(
      (product) => product._id == id
    );
    const localStorageCartData = JSON.parse(localStorage.getItem("cart")) || [];
    const mergeCartDataList = mergeCartData(cart, localStorageCartData);
    const isAvailableProductData = mergeCartDataList.filter(
      (product) => product.product_id == id
    );
    if (isAvailableProductData && isAvailableProductData.length) {
      Swal.fire("Already added");
      return;
    }

    const product_name = productDetailId[0].product_name;
    const product_producer = productDetailId[0].product_producer;
    const product_cost = productDetailId[0].product_cost;
    const product_stock = productDetailId[0].product_stock;
    const product_image = productDetailId[0].product_image;
    const product_id = productDetailId[0].product_id;
    const total = productDetailId[0].product_cost;
    const quantity = 1;
    const _id = productDetailId[0].product_id;
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
  };
 const handllerAllProductTopRating = async (event) => {
    
    console.log('clicked' , allProductInHighestRatingList)
       await setProduct(  allProductInHighestRatingList);
       console.log('product list set', ProductDataList)
  };
  return (
    <div>
      {loading ? (
            <FullLoader/>
          ) : (

      <h5 className="sort">
        Sort By:
        <button className="star-btn" onClick={handllerAllProductTopRating}>
          <IoIosStar className="star-icon" />
        </button>
        <button className="star-btn">
          ₹<IoMdArrowUp className="star-icon" />
        </button>
        <button className="star-btn">
          ₹<IoMdArrowDown className="star-icon" />
        </button>
      </h5>
          )}
      {loading ? (
            <FullLoader/>
          ) : (

      <Row className="row-product">
        <Col lg={3} className="col-sidebar">
          <SideBar colorList={colorList} categoryList={categoryList}></SideBar>
        </Col>
        <Col>
          <Row>
            <Col lg={12} md={12} className="col-products">
              <ProductCard
                ProductDataList={ProductDataList}
                handleClick={addToCart}
              />
            </Col>
          </Row>
        </Col>
      </Row>
          )}

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
  );
};

export default Product;
