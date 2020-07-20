import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../Assets/css/productrating.css";
import { IoIosStarOutline, IoIosStar, IoIosStarHalf } from "react-icons/io";
import axios from "axios";
import { ratingTotalCount } from "../../Constants/enum";
import { apiUrl } from "../../Constants/api";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductRating = (props) => {
  const { ProductDataList } = props;
  return (
    <div>
      <Row className="rating-row-home">
        {ProductDataList &&
          ProductDataList.map((value) => {
            return <ProductCard ProductDataList={value.DashboardProducts} />;
          })}
      </Row>
    </div>
  );
};


export default ProductRating;
