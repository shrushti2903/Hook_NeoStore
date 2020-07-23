import React, { useReducer } from "react";
import "./App.css";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Dashboard/Home";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Order from "./Components/Product Folder/Order Folder/Order";
import Product from "./Components/Product Folder/Product";
import Login from "./Components/User Folder/Login";
import Resgister from "./Components/User Folder/Register";
import Forgotten from "./Components/User Folder/Forgotten";
import ContactForm from "./Components/User Folder/ContatForm";
import Cart from "./Components/Product Folder/Order Folder/Cart Folder/Cart";
import productDetail from "./Components/Product Folder/ProductDetail";
import Logout from "./Components/User Folder/Logout";
import DeliveryAddress from "./Components/Product Folder/Order Folder/DeliveryAddress";
import AddressEdit from "./Components/Product Folder/Order Folder/AddressEdit";
import ChangePassword from "./Components/User Folder/ChangePassword";
import Address from "./Components/Product Folder/Order Folder/Address";
import OrderSidebar from "./Components/Product Folder/Order Folder/OrderSideBar";
import ProfileEdit from "./Components/Product Folder/Order Folder/ProfileEdit";
import OrderPlaced from "./Components/Product Folder/Order Folder/OrderPlaced";
import LocateUs from "./Components/User Folder/LocateUs";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          {/* {localStorage.length == 0 ? ( */}
            <Route path="/login" component={Login} />
            {/* ) : (
              <Redirect to="/" />
              )}
          {localStorage.length == 0 ? ( */}
            <Route path="/register" component={Resgister} />
            {/* ) : (
              <Redirect to="/" />
          )} */}

          <Route path="/forgotten" component={Forgotten} />
          <Route path="/contactform" component={ContactForm} />
          <Route path="/productDetails" component={productDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/orderPlaced" component={OrderPlaced} />
          <Route path="/logout" component={Logout} />
          <Route path="/deliveryAddress" component={DeliveryAddress} />
          <Route path={["/order"]} component={OrderSidebar} />
          <Route path={"/locateUs"} component={LocateUs} />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
