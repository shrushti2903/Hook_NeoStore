import { combineReducers } from "redux";
import categoriesReducer from "./reducer/categoriesReducer";
import colorREducer from "./reducer/colorReducer";
import productCardReducer from "./reducer/productCardReducer";
import cartDataReducer from "./reducer/cartDataReducer";
import footerReducer from "./reducer/footerReducer";
import CustomerDataReducer from "./reducer/customerDataReducer";
import orderReducer from "./reducer/orderReducer";

const rootReducer = combineReducers({
  categoriesData: categoriesReducer,
  colorData: colorREducer,
  productCardData: productCardReducer,
  cartData: cartDataReducer,
  footerData: footerReducer,
  customerData: CustomerDataReducer,
  orderData: orderReducer,
});

export default rootReducer;
