import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../Assets/css/fullLoader.css";
const FullLoader = () =>  {
  
    return (
      <div className="loader-container">
        <Spinner animation="border" className="loader" />
      </div>
    );
  
}

export default FullLoader;