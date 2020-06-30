import React from 'react'
import {  Link, Redirect } from 'react-router-dom'
import { useEffect } from 'react'


const Logout = (props) => {
    useEffect(()=>{
       const token = localStorage.removeItem('token')
    },[])
  
    return ( 
        <div>
            <Link to='/login'>
            login Again
            </Link>
               
           
        </div>
     );
}
 
export default Logout;