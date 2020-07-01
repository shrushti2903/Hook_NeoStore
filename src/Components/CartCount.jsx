import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { MdShoppingCart } from "react-icons/md";
import Badge from 'react-bootstrap/Badge'
import { useSelector } from 'react-redux';


const CartCount = (props) => {
    const productCartDetails = useSelector((state) => state.productCardData.cartData)
    useEffect(()=>{
        console.log('props',productCartDetails)

    })
    return ( 
        <div>
            <Link to="/cart">
    <Button variant="light" className = "cart-button" >
    <MdShoppingCart color="black" size = "1.5rem">
    </MdShoppingCart>
    
      <Badge className="count" variant="danger">{productCartDetails.length}</Badge>
    
      Cart  
    </Button>
    </Link>
        </div>
     );
}
 
export default CartCount;