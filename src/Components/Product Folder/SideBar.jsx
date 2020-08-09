import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "../../Assets/css/sidebar.css";
import Col from "react-bootstrap/Col";
import { IoIosArrowDown } from "react-icons/io";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../../redux/action/categoriesAction";
import { render } from "@testing-library/react";

const SlideBar = (props) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedColor, setSelectedcolor] = useState();

  /**
   * Function Name - addToCart
   * Parameters - id
   * this function add products in cart
   */

  const handlerCategory = (event) => {
    console.log("id", event.target.id);
    props.getCategoryId(event.target.id);
    const id = event.target.id;
    setSelectedCategory(id);
  };

  /**
   * Function Name - handlerColor
   * Parameters - event
   * this function pass the id as a props to the call back function used in product page
   */

  const handleColor = (event) => {
    props.getColorId(event.target.id);
    const id = event.target.id;
    setSelectedcolor(id);
  };

  /**
   * Function Name - getAllProduct
   * Parameters -
   * in this function on click all category product api get call
   */

  const getAllProduct = () => {
    setSelectedcolor('');
    setSelectedCategory('');
    props.getAllCategoryProduct();
  };
  const { categoryList, colorList } = props;
  return (
    <div className="side-nav">
      <div>
        <button size="lg" className="all-product-btn" onClick={getAllProduct}>
          <span className="all-Product-tittle">All Products</span>
        </button>
      </div>
      <div>
        <Accordion>
          <Accordion.Toggle className="categeries-btn" eventKey="0">
            <span className="category-tittle">Categories</span>
            <IoIosArrowDown className="category-down-arrow" />
          </Accordion.Toggle>
          {categoryList &&
            categoryList.map((categories) => {
              return (
                <Accordion.Collapse className="categeries-drop" eventKey="0">
                  <Card.Body>
                    <span
                      className="cat-btn-dropdown"
                      id={categories.category_id}
                      style={{
                        backgroundColor:
                          categories.category_id == selectedCategory
                            ? "red"
                            : "white",
                        color:
                          categories.category_id == selectedCategory
                            ? "white"
                            : "black",
                      }}
                      onClick={handlerCategory}
                    >
                      {categories.category_name}
                    </span>
                    <hr />
                  </Card.Body>
                </Accordion.Collapse>
              );
            })}
          <br />
          <Accordion.Toggle className="categeries-btn" eventKey="1">
            <span className="color-tittle">Color</span>
            <IoIosArrowDown className="color-down-arrow" />
          </Accordion.Toggle>
          <div>
            <Row className="color-row">
              {colorList &&
                colorList.map((color) => {
                  return (
                    <Accordion.Collapse className="color-drop" eventKey="1">
                      <Card.Body>
                        <Col lg={6}>
                          <button
                            class="blue"
                            id={color.color_id}
                            data-type="color"
                            style={{
                              backgroundColor: color.color_code,
                              borderColor:
                                selectedColor == color.color_id
                                  ? "black"
                                  : "grey",
                            }}
                            onClick={handleColor}
                          ></button>
                        </Col>
                      </Card.Body>
                    </Accordion.Collapse>
                  );
                })}
            </Row>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default SlideBar;
