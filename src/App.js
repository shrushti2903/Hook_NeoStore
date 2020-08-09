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
import ScrollToTop from "./Common/ScrollToTop";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop>
        <div>
          <Header />
          <Route
            path="/"
            onUpdate={() => window.scrollTo(0, 0)}
            exact
            component={Home}
          />
          <Route
            path="/home"
            onUpdate={() => window.scrollTo(0, 0)}
            component={Home}
          />
          <Route
            path="/product"
            onUpdate={() => window.scrollTo(0, 0)}
            component={Product}
          />
          {/* {localStorage.length == 0 ? ( */}
          <Route
            path="/login"
            onUpdate={() => window.scrollTo(0, 0)}
            component={Login}
          />
          {/* ) : (
              <Redirect to="/" />
              )}
          {localStorage.length == 0 ? ( */}
          <Route
            path="/register"
            onUpdate={() => window.scrollTo(0, 0)}
            component={Resgister}
          />
          {/* ) : (
              <Redirect to="/" />
          )} */}

          <Route
            path="/forgotten"
            onUpdate={() => window.scrollTo(0, 0)}
            component={Forgotten}
          />
          <Route
            path="/contactform"
            onUpdate={() => window.scrollTo(0, 0)}
            component={ContactForm}
          />
          <Route
            path="/productDetails"
            onUpdate={() => window.scrollTo(0, 0)}
            component={productDetail}
          />
          <Route
            path="/cart"
            onUpdate={() => window.scrollTo(0, 0)}
            component={Cart}
          />
          <Route
            path="/orderPlaced"
            onUpdate={() => window.scrollTo(0, 0)}
            component={OrderPlaced}
          />
          <Route
            path="/logout"
            onUpdate={() => window.scrollTo(0, 0)}
            component={Logout}
          />
          <Route
            path="/deliveryAddress"
            onUpdate={() => window.scrollTo(0, 0)}
            component={DeliveryAddress}
          />
          <Route
            path={["/order"]}
            onUpdate={() => window.scrollTo(0, 0)}
            component={OrderSidebar}
          />
          <Route
            path={"/locateUs"}
            onUpdate={() => window.scrollTo(0, 0)}
            component={LocateUs}
          />
          <Footer />
        </div>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
