import {FETCH_PRODUCT_REQUEST,
        FETCH_PRODUCT_SUCCESS,
        FETCH_PRODUCT_FAILURE} 
        from '../../Constants/typeActionRedux/typeAction';
import {FETCH_ALLPRODUCT_REQUEST,
        FETCH_ALLPRODUCT_SUCCESS,
        FETCH_ALLPRODUCT_FAILURE} 
        from '../../Constants/typeActionRedux/typeAction';
import {FETCH_DESCENDINGPRODUCT_REQUEST,
        FETCH_DESCENDINGPRODUCT_SUCCESS,
        FETCH_DESCENDINGPRODUCT_FAILURE}  
        from '../../Constants/typeActionRedux/typeAction';
import  {FETCH_ASCENDINGPRODUCT_REQUEST, 
        FETCH_ASCENDINGPRODUCT_SUCCESS ,
        FETCH_ASCENDINGPRODUCT_FAILURE}
        from '../../Constants/typeActionRedux/typeAction';
import {FETCH_ALLPRODUCTINHIGHESTRATING_REQUEST,
        FETCH_ALLPRODUCTINHIGHESTRATING_SUCCESS,
        FETCH_ALLPRODUCTINHIGHESTRATING_FAILURE} 
        from '../../Constants/typeActionRedux/typeAction';
import  {FETCH_COMMONPRODUCT_REQUEST,
        FETCH_COMMONPRODUCT_SUCCESS,
        FETCH_COMMONPRODUCT_FAILURE} 
 from '../../Constants/typeActionRedux/typeAction';
 import  {FETCH_PRODUCTDETAIL_REQUEST ,
        FETCH_PRODUCTDETAIL_SUCCESS ,
        FETCH_PRODUCTDETAIL_FAILURE} 
from '../../Constants/typeActionRedux/typeAction';
import  {FETCH_PRODUCTBYCOLORIDANDCATEGORYID_REQUEST,
        FETCH_PRODUCTBYCOLORIDANDCATEGORYID_SUCCESS ,
        FETCH_PRODUCTBYCOLORIDANDCATEGORYID_FAILURE } 
from '../../Constants/typeActionRedux/typeAction';
import {FETCH_PRODUCTBYSEARCHEDTEXT_REQUEST,
        FETCH_PRODUCTBYSEARCHEDTEXT_SUCCESS,
        FETCH_PRODUCTBYSEARCHEDTEXT_FAILURE }
from '../../Constants/typeActionRedux/typeAction';
import {FETCH_PRODUCTSUBIMAGE_REQUEST,
        FETCH_PRODUCTSUBIMAGE_SUCCESS,
        FETCH_PRODUCTSUBIMAGE_FAILURE}
from '../../Constants/typeActionRedux/typeAction';
import {FETCH_UPDATEPODUCTBYPRODUCTID_REQUEST,
        FETCH_UPDATEPODUCTBYPRODUCTID_SUCCESS,
        FETCH_UPDATEPODUCTBYPRODUCTID_FAILURE}
from '../../Constants/typeActionRedux/typeAction';
import axios from 'axios';
import {apiUrl} from '../../Constants/api';
import {endOfApi, 
        topRatingProduct, 
        allProduct, 
        allProductDescending, 
        allProductAscending, 
        allProductInHighestRating,
        commonProducts,
        productDetail,
        colorAndCategory,
        searchedText,
        updateProductById} 
        from '../../Constants/endFile';

export const fetchProductRequest =() =>({
        type : FETCH_PRODUCT_REQUEST,
});  
export const fetchProductSuccess = (productCard) =>({
    type : FETCH_PRODUCT_SUCCESS,
    payload : productCard,
});
export const fetchProductFailure = (error) => ({
    type : FETCH_PRODUCT_FAILURE,
    payload : error,
});
export const fetchProductCard = ()=>{
    return dispatch => {
      dispatch(fetchProductRequest());
      return axios({
        method : 'POST',
        url : `${apiUrl}${topRatingProduct}`,
        data : {limit : 5 },
        headers : endOfApi,
  }).then(response =>{
          const productCardList = response && response.data && response.data.products;
          dispatch(fetchProductSuccess(productCardList))
      })
      .catch(error =>{
          dispatch(fetchProductFailure(error))
      });
    }
    }


export const fetchAllProductRequest = () => ({
    type : FETCH_ALLPRODUCT_REQUEST,
});
export const fetchAllProductSuccess = (allProduct) => ({
    type : FETCH_ALLPRODUCT_SUCCESS,
    payload : allProduct,
});
export const fetchAllProductFailure = (error) => ({
    type : FETCH_ALLPRODUCT_FAILURE,
    payload : error,
});

export const fetchAllProduct = ()=>{
    return dispatch => { 
      dispatch(fetchAllProductRequest());
     
      return axios({
        method : 'GET',
        url : `${apiUrl}${allProduct}`,
        headers : endOfApi,
    }).then(response =>{
          const allProduct = response && response.data && response.data.product_details;
          dispatch(fetchAllProductSuccess(allProduct))
      })
      .catch(error =>{
          dispatch(fetchAllProductFailure(error))
      });
    }
    }

export const fetchDescendingProductRequest = () =>({
    type : FETCH_DESCENDINGPRODUCT_REQUEST,
});
export const fetchDescendingProductSuccess = (descendingProduct) =>({
    type : FETCH_DESCENDINGPRODUCT_SUCCESS,
    payload : descendingProduct,
});
export const fetchDescendingProductFailure = (error) =>({
    type : FETCH_DESCENDINGPRODUCT_FAILURE,
    payload : error,
});

export const fetchDescendingProduct = ()=>{
    return dispatch => { 
      dispatch(fetchDescendingProductRequest());
     
      return axios({
        method : 'GET',
        url : `${apiUrl}${allProductDescending}`,
        headers : endOfApi,
    }).then(response =>{
          const descendingProduct = response && response.data && response.data.product_details;
          dispatch(fetchDescendingProductSuccess(descendingProduct))
      })
      .catch(error =>{
          dispatch(fetchDescendingProductFailure(error))
      });
    }
    }


export const fetchAscendingProductRequest = () =>({
    type : FETCH_ASCENDINGPRODUCT_REQUEST,
});
export const fetchAscendingProductSuccess = (ascendingProduct => ({
    type : FETCH_ASCENDINGPRODUCT_SUCCESS,
    payload : ascendingProduct,
}));
export const fetchAscendingProductFailure = (error) => ({
    type : FETCH_ASCENDINGPRODUCT_FAILURE,
    payload : error,
});

export const fetchAscendingProduct = ()=>{
    return dispatch => { 
      dispatch(fetchAscendingProductRequest());

        return axios({
        method : 'GET',
         url : `${apiUrl}${allProductAscending}`,
         headers : endOfApi,
        }).then(response =>{
            const ascendingProduct = response && response.data && response.data.product_details;
            dispatch(fetchAscendingProductSuccess(ascendingProduct))
          })
          .catch(error =>{
              dispatch(fetchAscendingProductFailure(error))
          });
        }
        }

export const fetchAllProductInHighestRatingRequest = () => ({
    type : FETCH_ALLPRODUCTINHIGHESTRATING_REQUEST,
});
export const fetchAllProductInHighestRatingSuccess = (allProductInHighestRating) => ({
    type : FETCH_ALLPRODUCTINHIGHESTRATING_SUCCESS,
    payload : allProductInHighestRating,
});
export const fetchAllProductInHighestRatingFailure = (error) => ({
    type : FETCH_ALLPRODUCTINHIGHESTRATING_FAILURE,
    payload : error,
})
export const fetchAllProductInHighestRating = () => {
    return dispatch => {
        dispatch(fetchAllProductInHighestRatingRequest());

        return axios({
            method: 'GET',
            url: `${apiUrl}${allProductInHighestRating}`,
            headers : endOfApi,
        }).then(response => {
            const allProductInHighestRating = response && response.data && response.data.product_details;
            dispatch(fetchAllProductInHighestRatingSuccess(allProductInHighestRating))
        })
            .catch(error => {
                dispatch(fetchAllProductInHighestRatingFailure(error))
            });
    }
}

export const fetchCommonProductRequest = () => ({
    type : FETCH_COMMONPRODUCT_REQUEST
});
export const fetchCommonProductSuccess = (commonProduct) => ({
    type : FETCH_COMMONPRODUCT_SUCCESS,
    payload : commonProduct
});
export const fetchCommonProductFailure = (error) => ({
    type : FETCH_COMMONPRODUCT_FAILURE,
    payload : error
});
export const fetchCommonProducts = (categoryId, colorId , rating, prize , activePage , limit) => {
    return dispatch => {
        dispatch(fetchCommonProductRequest());
        let s = `category_id=${categoryId}&color_id=${colorId}&sortBy=${rating}&sortIn=${prize}&pageNo=${activePage}&perPage=${limit}`
        s = s.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"");
        return axios({
            method: 'GET',
            url: `${apiUrl}${commonProducts}?${s}`,
            headers : endOfApi,
        }).then(response => {
            const commonProduct = response && response.data && response.data.product_details;
            dispatch(fetchCommonProductSuccess(commonProduct));
        })
            .catch(error => {
                dispatch(fetchCommonProductFailure(error))
            });
    }
}


export const fetchProductDetailsRequest = ()=>({
    type : FETCH_PRODUCTDETAIL_REQUEST
});
export const fetchProductDetailsSuccess = (productDetail)=>({
    type : FETCH_PRODUCTDETAIL_SUCCESS,
    payload : productDetail,
});
export const fetchProductDetailsFailure = (error) =>({
    type : FETCH_PRODUCTDETAIL_FAILURE,
    payload : error
});
export const fetchProductDetails = (id) => {
    return dispatch => {
        dispatch(fetchProductDetailsRequest());

        return axios({
            method: 'GET',
            url:  `${apiUrl}${productDetail}${id}`,
            headers : endOfApi,
        }).then(response => {
            const productDetail = response && response.data && response.data.product_details;
            dispatch(fetchProductDetailsSuccess(productDetail))
        })
            .catch(error => {
                dispatch(fetchProductDetailsFailure(error))
            });
    }
}

export const fetchProductByColorAndCategoryRequest = ()=>({
    type : FETCH_PRODUCTBYCOLORIDANDCATEGORYID_REQUEST,
});
export const fetchProductByColorAndCategorySuccess = (colorAndCategory)=>({
    type : FETCH_PRODUCTBYCOLORIDANDCATEGORYID_SUCCESS,
    payload : colorAndCategory
});
export const fetchProductByColorAndCategoryFailure = (error)=>({
    type : FETCH_PRODUCTBYCOLORIDANDCATEGORYID_FAILURE,
    payload : error 
})
export const fetchProductByColorAndCategory = (categoryId , colorId) => {
    return dispatch => {
        dispatch(fetchProductByColorAndCategoryRequest());

        return axios({
            method: 'GET',
            url:  `${apiUrl}${colorAndCategory}${categoryId}/${colorId}`,
            headers : endOfApi,
        }).then(response => {
            const colorAndCategory = response && response.data && response.data.product_details;
            dispatch(fetchProductByColorAndCategorySuccess(colorAndCategory))
        })
            .catch(error => {
                dispatch(fetchProductByColorAndCategoryFailure(error))
            });
    }
}

export const fetchProductBySearchedTextRequest = ()=>({
    type : FETCH_PRODUCTBYSEARCHEDTEXT_REQUEST,
});
export const fetchProductBySearchedTextSuccess = (searchedText)=>({
    type : FETCH_PRODUCTBYSEARCHEDTEXT_SUCCESS,
    payload : searchedText,
});
export const fetchProductBySearchedTextFailure = (error)=>({
    type : FETCH_PRODUCTBYSEARCHEDTEXT_FAILURE,
    payload : error
});

export const fetchProductBySearchedText = (search) => {
    return dispatch => {
        dispatch(fetchProductBySearchedTextRequest());

        return axios({
            method: 'GET',
            url:  `${apiUrl}${searchedText}${search}`,
            headers : endOfApi,
        }).then(response => {
            const searchedTextData = response && response.data && response.data.product_details;
            dispatch(fetchProductBySearchedTextSuccess(searchedTextData))
        })
            .catch(error => {
                dispatch(fetchProductBySearchedTextFailure(error))
            });
    }
}

export const fetchProductSubImageRequest = ()=>({
    type : FETCH_PRODUCTSUBIMAGE_REQUEST
});
export const fetchProductSubImageSuccess = (productSubImage)=>({
    type : FETCH_PRODUCTSUBIMAGE_SUCCESS,
    payload : productSubImage
});
export const fetchProductSubImageFailure = (error)=>({
    type : FETCH_PRODUCTSUBIMAGE_FAILURE,
    payload : error
});

export const fetchProductSubImage = () => {
    return dispatch => {
        dispatch(fetchProductSubImageRequest());
        return axios({
            method: 'POST',
            url:  `${apiUrl}`,
            headers : endOfApi,
        }).then(response => {
            const subImageData = response.data
            dispatch(fetchProductSubImageSuccess(subImageData))
        })
            .catch(error => {
                dispatch(fetchProductSubImageFailure(error))
            });
    }
}

export const fetchUpdateProductByProductIdRequet =()=>({
    type : FETCH_UPDATEPODUCTBYPRODUCTID_REQUEST
});
export const fetchUpdateProductByProductIdSuccess = (updateProductByProductId)=>({
    type : FETCH_UPDATEPODUCTBYPRODUCTID_SUCCESS,
    payload : updateProductByProductId
});
export const fetchUpdateProductByProductIdFailure = (error)=>({
    type : FETCH_UPDATEPODUCTBYPRODUCTID_FAILURE,
    payload : error
});

export const fetchUpdateProductByProductId = (id,user) => {
    return dispatch => {
        dispatch(fetchUpdateProductByProductIdRequet());
        return axios({
            method: 'PUT',
            url:  `${apiUrl}${updateProductById}${id}`,
            headers : endOfApi,
            data : user,
        }).then(response => {
            const updateProductByProductIdData = response.data
            dispatch(fetchUpdateProductByProductIdSuccess(updateProductByProductIdData))
        })
            .catch(error => {
                dispatch(fetchUpdateProductByProductIdFailure(error))
            });
    }
}


