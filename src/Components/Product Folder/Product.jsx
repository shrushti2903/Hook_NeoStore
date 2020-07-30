import React, {
  useContext,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import SideBar from "./SideBar";
import "../../Assets/css/product.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "../../redux/action/categoriesAction";
import { fetchColor, fetchColorId } from "../../redux/action/colorAction";
import {
  fetchAllProduct,
  fetchAllProductInHighestRating,
  fetchDescendingProduct,
  fetchAscendingProduct,
  fetchProductByColorAndCategory,
  fetchCommonProducts,
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
import { connect } from "react-redux";
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
import Pagination from "react-js-pagination";

const Product = (props, id) => {
  const { categoryList, CategoryIdList } = useSelector((state) => ({
    categoryList: state.categoriesData.categories,
    CategoryIdList: state.categoriesData.categoryId,
  }));
  const { colorList, ColorIdList } = useSelector((state) => ({
    colorList: state.colorData.color,
    ColorIdList: state.colorData.colorId,
  }));
  console.log("product Color", ColorIdList);
  const productCartDetails = useSelector((state) => state.productCardData);
  const productDetails = productCartDetails.cartData;
  const getCartDataList = useSelector((state) => state.cartData.getCartData);
  const cart = (getCartDataList && getCartDataList.product_details) || [];
  const cartValue = JSON.parse(localStorage.getItem("cart")) || [];
  const {
    allProductInHighestRatingList,
    allProductList,
    colorAndCategoryList,
    descendingProductList,
    ascendingProductList,
    commonProductList,
    searchedTextList,
    totalCount,
  } = useSelector((state) => ({
    allProductInHighestRatingList:
      state.productCardData.allProductInHighestRating,
    allProductList: state.productCardData.allProduct,
    colorAndCategoryList: state.productCardData.colorAndCategory,
    descendingProductList: state.productCardData.descendingProduct,
    ascendingProductList: state.productCardData.ascendingProduct,
    commonProductList: state.productCardData.commonProduct,
    searchedTextList: state.productCardData.searchedText,
    totalCount: state.productCardData.commonProductTotalCount,
  }));

  console.log("product color and category", colorAndCategoryList);
  const [productData, setProduct] = useState(allProductInHighestRatingList);
  // const [productData, setProduct] = useState([]);
  const [colorId, setColorId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("All Categories");
  const [colorCode, setcolorCode] = useState("white");
  const [prize, setPrize] = useState("true");
  const [rating, setRating] = useState();
  const [activePage, setActivePage] = useState(1);
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
  }, []);

  useEffect(() => {
    setProduct(allProductInHighestRatingList);
  }, [allProductInHighestRatingList]);

  useEffect(() => {
    setProduct(CategoryIdList);
    console.log("useEfect category", CategoryIdList);
  }, [CategoryIdList]);

  useEffect(() => {
    setProduct(ColorIdList);
    console.log("useEfect color", ColorIdList);
  }, [ColorIdList]);

  useEffect(() => {
    setProduct(colorAndCategoryList);
    console.log("useEfect color and category", colorAndCategoryList);
  }, [colorAndCategoryList]);

  useEffect(() => {
    setProduct(descendingProductList);
  }, [descendingProductList]);

  useEffect(() => {
    setProduct(ascendingProductList);
  }, [ascendingProductList]);

  useEffect(() => {
    console.log("category after set inside useEdffect", categoryId);
    getColorAndCategory();
    getCommonProduct();
  }, [categoryId]);

  useEffect(() => {
    console.log("color after set inside useEdffect", colorId);
    getColorAndCategory();
    getCommonProduct();
  }, [colorId]);

  useEffect(
    (state) => {
      setProduct(commonProductList);
    },
    [commonProductList]
  );

  useEffect(() => {
    getCommonProduct();
  }, [activePage]);

  useEffect(() => {
    getCommonProduct();
  }, [rating]);

  useEffect(() => {
    getCommonProduct();
  }, [prize]);

  useEffect(() => {
    setProduct(searchedTextList);
  }, [searchedTextList]);

  /**
   * Function Name - handllerAllProductTopRating
   * Parameters - event
   * this function filters the product according to the Hightest rating
   */

  const handllerAllProductTopRating = async (event) => {
    await dispatch(fetchAllProductInHighestRating());
    setRating("product_rating");
    setCategoryName("Top Rating");
    setcolorCode("white");
  };

  /**
   * Function Name - handllerDescendingPrize
   * Parameters - event
   * this function filters the product according to the descending prize
   */

  const handllerDescendingPrize = (event) => {
    dispatch(fetchDescendingProduct());
    setCategoryName("High to low in prize");
    setRating("product_cost");
    setPrize("true");
  };

  /**
   * Function Name - handllerAscendingPrize
   * Parameters - event
   * this function filters the product according to the Ascending prize
   */

  const handllerAscendingPrize = (event) => {
    dispatch(fetchAscendingProduct());
    setCategoryName("Low to high in prize");
    setcolorCode("white");
    setRating("product_cost");
    setPrize("false");
  };

  /**
   * Function Name - getCategoryId
   * Parameters - id
   * this function shows the category list
   */

  const getCategoryId = async (id) => {
    console.log("categoryId", id);
    setCategoryId(id);
    getCommonProduct();
    getColorAndCategory();
    console.log("after set inside function", categoryId);
    await dispatch(fetchCategoryId(id));
    const categoryNameFilter = categoryList.filter(
      (category) => category._id == id
    );
    const categoryIdName = categoryNameFilter[0].category_name;
    setCategoryName(categoryIdName);
  };

  /**
   * Function Name - getColorId
   * Parameters - id
   * this function shows the color list
   */

  const getColorId = async (Id) => {
    let id = Id;
    console.log("colorId", id);
    setColorId(id);
    getCommonProduct();
    getColorAndCategory();
    console.log("after set inside function", colorId);
    await dispatch(fetchColorId(id));
    const colorName = colorList.filter((color) => color._id == id);
    const colorIDCode = colorName[0].color_code;
    setcolorCode(colorIDCode);
  };

  /**
   * Function Name - getColorAndCategory
   * Parameters -
   * this function filters the product according to the category and color selected
   */

  const getColorAndCategory = async () => {
    getCommonProduct();
    if (categoryId && colorId) {
      await dispatch(fetchProductByColorAndCategory(categoryId, colorId));
    }
  };

  /**
   * Function Name - getAllCategoryProduct
   * Parameters -
   * this function filters the product according to the category
   */

  const getAllCategoryProduct = () => {
    getCommonProduct();
    dispatch(fetchAllProduct());
    setProduct(allProductList);
    setCategoryName("All Categories");
  };

  /**
   * Function Name - getCommonProduct
   * Parameters -
   * this function shows the common product according to the filtring selected
   */

  const getCommonProduct = async () => {
    let limit = 5;
    if ((categoryId || colorId || rating || prize || activePage, limit)) {
      await dispatch(
        fetchCommonProducts(
          categoryId,
          colorId,
          rating,
          prize,
          activePage,
          limit
        )
      );
    }
  };

  /**
   * Function Name - handlePageChange
   * Parameters - pageNumber
   * this function changes the  page no according to the selected  page
   */

  const handlePageChange = (pageNumber) => {
    getCommonProduct();
    setActivePage(pageNumber);
  };
  return (
    <div className="product">
      <h5 className="sort">
        Sort By:
        <button className="star-btn">
          <IoIosStar
            className="star-icon"
            onClick={handllerAllProductTopRating}
          />
        </button>
        <button className="star-btn">
          ₹
          <IoMdArrowUp
            className="star-icon"
            onClick={handllerDescendingPrize}
          />
        </button>
        <button className="star-btn">
          ₹
          <IoMdArrowDown
            className="star-icon"
            onClick={handllerAscendingPrize}
          />
        </button>
      </h5>

      <Row className="row-product">
        <Col lg={3} className="col-sidebar">
          <SideBar
            colorList={colorList}
            categoryList={categoryList}
            getCategoryId={getCategoryId}
            getColorId={getColorId}
            getAllCategoryProduct={getAllCategoryProduct}
          ></SideBar>
        </Col>
        <Col>
          <Row className="row-catName">
            <Col>
              {allProductList.length > 0 ? (
                <h2 className="tittle">
                  {categoryName}
                  <button
                    className="color-block"
                    style={{ backgroundColor: colorCode }}
                  ></button>
                </h2>
              ) : (
                <h2 className="tittle">No products Available</h2>
              )}
            </Col>
          </Row>
          <Row className="row-prod">
            <Col lg={12} md={12} className="col-products">
              <ProductCard
                ProductDataList={
                  productData.length > 0 ? productData : allProductList
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="pagination">
        {totalCount > 1 ? (
          <Pagination
            hideFirstLastPages
            prevPageText="Prev"
            nextPageText="Next"
            className="pagi"
            activePage={activePage}
            itemsCountPerPage={5}
            totalItemsCount={totalCount}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Product;
