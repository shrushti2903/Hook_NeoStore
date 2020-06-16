import React from 'react';
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

function App() {
  return (
    <Provider store = {store}>
    <BrowserRouter>
    <div >
      <Header/>
      
      <Route path ="/" exact component = {Home} />
       <Route path ="/home" component = {Home} />
       <Route path ="/product" component = {Product} />
       <Route path ="/order" component = {Order} />
       <Route path = "/register" component = {Resgister}/>
       <Route path ="/login" component = {Login}/>
       <Route path = "/forgotten" component = {Forgotten}/>
       <Route path = "/contactform" component={ContactForm}/>
       <Route path = "/productDetails" component={productDetail}/>
       <Route path = "/cart" component={Cart}/>

    
      <Footer/>
      </div>  
    </BrowserRouter>
    </Provider>
  );
}

export default App;
