import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/orderPlaced.css'

const OrderPlaced = () => {
    return ( 
        <div className="orderPlace">
            <h1>
            Thank you for your order
            </h1>
            <h5>
            Your order has been placed and is being processed
            </h5>
            <Link to="/home">
            <button>
                Back to HomePage
            </button>
            </Link>
           
        </div>
     );
}
 
export default OrderPlaced;