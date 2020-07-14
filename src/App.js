import React , {useReducer} from 'react';
import './App.css';
import Header from './Common/Header'
import Footer from './Common/Footer'
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
import Home from './Components/Home'
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Order from './Components/Order';
import Product from './Components/Product';
import Login from './Components/Login'
import Resgister from './Components/Register';
import Forgotten from './Components/Forgotten';
import ContactForm from './Components/ContatForm';
import Cart from './Components/Cart'
import  productDetail  from './Components/ProductDetail';
import Logout from './Components/Logout';
import DeliveryAddress from './Components/DeliveryAddress';
import AddressEdit from './Components/AddressEdit';
import ChangePassword from './Components/ChangePassword'
import Address from './Components/Address';
import OrderSidebar from './Components/OrderSideBar';
import ProfileEdit from './Components/ProfileEdit';
import OrderPlaced from './Components/OrderPlaced';

function App() {
  return (
    <Provider store = {store}>
    <BrowserRouter>
    <div >
     
      <Header/>
      <Route path ="/" exact component = {Home} />
       <Route path ="/home" component = {Home} />
       <Route path ="/product" component = {Product} />
       <Route path = "/register" component = {Resgister}/>
       <Route path ="/login" component = {Login}/>
       <Route path = "/forgotten" component = {Forgotten}/>
       <Route path = "/contactform" component={ContactForm}/>
       <Route path = "/productDetails" component={productDetail}/>
       <Route path = "/cart" component={Cart}/>
       <Route path="/orderPlaced" component={OrderPlaced}/>
       <Route path = "/logout" component={Logout}/>
      <Route path = "/deliveryAddress" component={DeliveryAddress}/>
      <Route path={["/order"]} component={OrderSidebar}/>
     
                        {/* <Route path="/profile" exact component={Profile}/>
                        <Route path="/address" exact component={Address}/>
                        <Route path="/changePassword" exact component={ChangePassword}/>
                        <Route path="/editAddress" exact component={AddressEdit}/>
                        <Route path="/editProfile" exact component={ProfileEdit}/>  */}
                       
      <Footer/>
      </div>  
    </BrowserRouter>


    </Provider>
  );
}

export default App;
