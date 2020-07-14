import React , {useEffect}from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import '../Assets/css/header.css'
import {Dropdown} from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { MdShoppingCart } from "react-icons/md";
import { MdPermContactCalendar , MdAccountCircle} from "react-icons/md";
import {IoMdSearch} from 'react-icons/io'
import Badge from 'react-bootstrap/Badge'
import { ButtonGroup } from 'react-bootstrap'
import {fetchAllCartData} from '../redux/action/cartDataAction';
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useMemo } from 'react'
import { fetchCartProductDetail } from '../redux/action/productCardAction'
import { useCallback } from 'react'
import { fetchAddProductToCartCheckout } from '../redux/action/customerDataAction'



const Header =(props)=> {
  const productCartDetails = useSelector((state) => state.productCardData)
  const addProductToCheckoutList = useSelector((state)=> state.customerData.addProductToCheckout)
  let productDetails = productCartDetails.cartData
  const cartValue = JSON.parse(localStorage.getItem('cart')) || []
  const id = localStorage.getItem('token')
  console.log('cart details', cartValue)
  useEffect(()=>{
  
  })
  const dispatch = useDispatch()
  // const [product , setProduct] = useState(productCartDetails)
  // useEffect(()=>{
  //   setProduct(product)
  //   console.log('header product cart' , product.length)
  // },[product])
  const addProductToCheckout = ()=>{
    const cartDataList = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cartDataList) 
        const user = [{
            _id: cartDataList[0]._id,
            product_id: cartDataList[0].product_id,
            quantity: cartDataList[0].quantity ,
        },{flag : "logout"}];
    
    console.log(user )
   
    
    const token = localStorage.getItem('token')
    dispatch(fetchAddProductToCartCheckout(user , token))
    // // history.push('/orderPlaced');
  }
        return (   

            <div>
                <Navbar className="navbar" expand="lg" variant = "dark"  >
                    <Navbar.Brand className="brand"><Link to="/home" className="link">Neo<b>STORE</b></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />    
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Nav.Link ><Link to="/home" className ="link-option" >Home</Link></Nav.Link>
      <Nav.Link ><Link to="/Product" className ="link-option" >Product</Link></Nav.Link>
     <Nav.Link ><Link to="/Order" className ="link-option" >Order</Link></Nav.Link>
    </Nav>
    <Form inline>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text className="search-inpur-grp" id="basic-addon1">
          <IoMdSearch className='search-icon'/></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
      type="search"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        id="gsearch"
        name="gsearch"
      className="mr-sm-2 search-bar "
      />
    </InputGroup>
    <Link to="/cart">
    <Button variant="light" className = "cart-button" onClick={addProductToCheckout}>
    <MdShoppingCart color="black" size = "1.5rem">
    </MdShoppingCart>
    
      <Badge className="count" variant="danger">{cartValue.length}</Badge>
    
      Cart  
    </Button>
    </Link>
    {
      id ?
      <Dropdown  alignRight className="drop-down-btn">
  <Dropdown.Toggle variant="light" id="dropdown-basic" className="dropdown-btn">
    <MdAccountCircle color = "black" size = "2rem"/>
  </Dropdown.Toggle>
  <Dropdown.Menu>
  <Dropdown.Item >
    <Link to="/Order/profile" className="link-drop" >Profile</Link>
    </Dropdown.Item>
   <Dropdown.Item >Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
:
<Dropdown  alignRight className="drop-down-btn">
  <Dropdown.Toggle variant="light" id="dropdown-basic" className="dropdown-btn">
    <MdPermContactCalendar color = "black" size = "2rem"/>
  </Dropdown.Toggle>
  <Dropdown.Menu>
  <Dropdown.Item >
    <Link to="/login" className="link-drop" >Login</Link>
    </Dropdown.Item>
   <Dropdown.Item ><Link to="/register" className="link-drop" >Register</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    }
   
  </Form>
  </Navbar.Collapse>
</Navbar>  
</div>
        )
    }



export default Header