import React, { useContext, useState, useLayoutEffect } from "react";
import SideBar from "./SideBar";
import "../../Assets/css/product.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "../../redux/action/categoriesAction";
import { fetchColor } from "../../redux/action/colorAction";
import {
  fetchAllProduct,
  fetchAllProductInHighestRating,
} from "../../redux/action/productCardAction";
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
import { apiUrl } from "../../Constants/api";
import {
  endOfApi,
  topRatingProduct,
  allProduct,
  allProductDescending,
  allProductAscending,
  allProductInHighestRating,
  commonProducts,
  productDetail,
  colorAndCategory,
  searchedText,
  updateProductById,
} from "../../Constants/endFile";
import axios from "axios";

const Product = (props) => {
  const categoryList = useSelector((state) => state.categoriesData.categories);
  const colorList = useSelector((state) => state.colorData.color);
  const CategoryIdList = useSelector(
    (state) => state.categoriesData.categoryId
    );
    const productCartDetails = useSelector((state) => state.productCardData);
    const productDetails = productCartDetails.cartData;
    const getCartDataList = useSelector((state) => state.cartData.getCartData);
    const cart = (getCartDataList && getCartDataList.product_details) || [];
    const cartValue = JSON.parse(localStorage.getItem("cart")) || [];
    const allProductInHighestRatingList = useSelector(
      (state) => state.productCardData.allProductInHighestRating
      );
      const allProductList = useSelector(
        (state) => state.productCardData.allProduct,
        );
        const [ProductData, setProduct] = useState([]);
        const [count, setcount] = useState({});
  const loading = useSelector(
    (state) => state.categoriesData.loading,
    (state) => state.colorData.loading,
    (state) => state.productCardData.loading
  );
  const dispatch = useDispatch();
  useEffect(async() => {
    dispatch(fetchCategory());
    dispatch(fetchColor());
    // dispatch(fetchAllProductInHighestRating());
    const id = localStorage.getItem("token");
    dispatch(fetchGetCartData(id));
     await axios({
      method: "GET",
      url: `${apiUrl}${allProduct}`,
      headers: endOfApi,
    })
      .then((response) => {
        const allProduct =
          response && response.data && response.data.product_details;
          setProduct(allProduct)
      })
      .catch((error) => {
      });
  }, []);

  // const handllerAllProductTopRating = async () => {
  //   await dispatch(fetchAllProductInHighestRating())
  //      setProduct(prevState => allProductInHighestRatingList);
  //   console.log("product list set", ProductData);
  // };
  return (
    <div className="product">
      {loading ? (
        <FullLoader />
      ) : (
        <h5 className="sort">
          Sort By:
          <button className="star-btn" >
            <IoIosStar className="star-icon"  />
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
        <FullLoader />
      ) : (
        <Row className="row-product">
          <Col lg={3} className="col-sidebar">
            <SideBar
              colorList={colorList}
              categoryList={categoryList}
            ></SideBar>
          </Col>
          <Col>
            <Row>
              <Col lg={12} md={12} className="col-products">
                <ProductCard ProductDataList={ProductData} />
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
