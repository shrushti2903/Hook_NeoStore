import React from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
 import Card from 'react-bootstrap/Card';
import '../Assets/css/sidebar.css';
import Col from 'react-bootstrap/Col';
import {IoIosArrowDown} from 'react-icons/io'
import Row from 'react-bootstrap/Row';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchCategory} from '../redux/action/categoriesAction';
import { render } from '@testing-library/react';



const SlideBar = (props) => {
      
 const {categoryList , colorList} = props
const handleCategory = (event) =>{
    props.getCategoryId(event.target.id)
    console.log('id ',event.target.id)
}
            return (
                <div className="side-nav">
                    <div  >
                        <button size="lg" className="all-product-btn"  ><span className="all-Product-tittle">All Products</span></button>
                    </div>
                    <div>
                        <Accordion>
                            <Accordion.Toggle className="categeries-btn" eventKey="0"><span className="category-tittle"><IoIosArrowDown className='category-down-arrow'/>Categories</span>
                                
                               </Accordion.Toggle>
                            {
                                categoryList && categoryList.map((categories) => {
                                    return (
                                        <Accordion.Collapse className="categeries-drop" eventKey="0">
                                            <Card.Body>
                                                <span
                                                    className="cat-btn-dropdown" 
                                                    id={categories.category_id}
                                                onClick={handleCategory}
                                                >
                                                        {categories.category_name}

                                                </span>
                                                <hr />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    )
                                }
                                )}
                            <br />
                            <Accordion.Toggle className="categeries-btn" eventKey="1"><span className="color-tittle"><IoIosArrowDown className="color-down-arrow"/> Color</span>         
                              
                                </Accordion.Toggle>
                            <div>
                                <Row className="color-row">
                                    {
                                        colorList && colorList.map((color) => {
                                            return (
                                                        <Accordion.Collapse className="color-drop" eventKey="1">
                                                <Card.Body>
                                                                        <Col lg={6}>
                                                            <button class="blue"
                                                                id={color.color_id}
                                                                data-type="color"
                                                                style={{ backgroundColor: color.color_code ,}}

                                                                >
                                                            </button>
                                    </Col>
                                    </Card.Body>
                                </Accordion.Collapse>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </Accordion>
                    </div>
                </div>
        )
    }
    



export default SlideBar
