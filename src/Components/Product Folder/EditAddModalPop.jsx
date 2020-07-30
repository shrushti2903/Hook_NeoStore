import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoIosAdd } from "react-icons/io";
import "../../Assets/css/editAddModalPop.css";
import { fetchCategory } from "../../redux/action/categoriesAction";
import { fetchColor } from "../../redux/action/colorAction";
import { fetchUpdateProductByProductId } from "../../redux/action/productCardAction";
import { connect, useSelector, useDispatch } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { useEffect } from "react";
import { useInput } from "../Custom Hooks/useInput";
import FullLoader from "../../Common/FullLoader";

const EditAddModlPop = (props) => {
  const { productId } = props;
  const categoryList = useSelector((state) => state.categoriesData.categories);
  const colorList = useSelector((state) => state.colorData.color);
  const updateProduct = useSelector(
    (state) => state.productCardData.updateProductByProductId
  );
  const allProductList = useSelector(
    (state) => state.productCardData.allProduct
  );
  const loading = useSelector(
    (state) => state.categoriesData.loading,
    (state) => state.colorData.loading
  );
  const productById =
    allProductList &&
    allProductList.filter((product) => product._id == productId);
  const name = productById[0].product_name;
  const category = productById[0].category_id.category_name;
  const color = productById[0].color_id.color_name;
  const describtion = productById[0].product_desc;
  const rating = productById[0].product_rating;
  const producer = productById[0].product_producer;
  const cost = productById[0].product_cost;
  const stock = productById[0].product_stock;
  const dimensions = productById[0].product_dimension;
  const material = productById[0].product_material;

  const { handleClose } = props;
  const { show } = props;
  const [productName, setProductName] = useInput(name);
  const [productDescribtion, setDescibtion] = useInput(describtion);
  const [productRating, setRating] = useInput(rating);
  const [productProducer, setProducer] = useInput(producer);
  const [productCost, setCost] = useInput(cost);
  const [productStock, setStock] = useInput(stock);
  const [productDimension, setDimension] = useInput(dimensions);
  const [productMaterial, setMaterial] = useInput(material);
  const [productCategoryId, setCategoryId] = useInput(category);
  const [productColorId, setColorId] = useInput(color);

  const dispatch = useDispatch();

  /**
 * Function Name - handleSubmit
 * Parameters -  event
 * this function submitted all the field of form 
    after validating all the field value and after validation on submit api  gets called,
 */

  const handlerSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    const user = {
      category_id: productCategoryId,
      color_id: productColorId,
      product_name: productName,
      product_image: "",
      product_desc: productDescribtion,
      product_rating: productRating,
      product_producer: productProducer,
      product_cost: productCost,
      product_stock: productStock,
      product_dimension: productDimension,
      product_material: productMaterial,
    };
    const { Id } = props;

    dispatch(fetchUpdateProductByProductId(Id, user));
    if (updateProduct.status_code == 200) {
      handleClose();
      alert("product updated successfully");
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Form onSubmit={handlerSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Enter Product Name</Form.Label>
              <Form.Control
                type="text"
                value={productName}
                placeholder="Enter Product Name"
                onChange={setProductName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Category</Form.Label>
              <Form.Control as="select">
                {/* <option
                                value="" selected={id.category_name}>{id.category_name}</option> */}
                {categoryList &&
                  categoryList.map((value) => {
                    return (
                      <option
                        value={productCategoryId}
                        selected={productCategoryId === value.category_name}
                        onChange={setCategoryId}
                      >
                        {value.category_name}
                      </option>
                    );
                  })}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Color</Form.Label>
              <Form.Control as="select" name="productColorId">
                {colorList &&
                  colorList.map((value) => {
                    return (
                      <option
                        value={productColorId}
                        selected={productColorId === value.color_name}
                        onChange={setColorId}
                      >
                        {value.color_name}
                      </option>
                    );
                  })}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Product Image</Form.Label>
              <Form.Control type="file" placeholder="Enter Product Image" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Description"
                value={productDescribtion}
                onChange={setDescibtion}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Product Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Product Rating"
                value={productRating}
                onChange={setRating}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Product Producer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Producer"
                value={productProducer}
                onChange={setProducer}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Product Cost</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Cost"
                value={productCost}
                onChange={setCost}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Enter Product Stock</Form.Label>
              <Form.Control
                type="text"
                value={productStock}
                placeholder="Enter Product Stock"
                onChange={setStock}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Enter Product Dimensions</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Dimensions"
                value={productDimension}
                onChange={setDimension}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Product Material</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Material"
                value={productMaterial}
                onChange={setMaterial}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="edit-save" type="submit" value="send">
              Update Product
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default EditAddModlPop;
