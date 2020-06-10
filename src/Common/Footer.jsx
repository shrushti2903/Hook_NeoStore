import React, { useEffect }  from 'react'
import '../Assets/css/footer.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import {  useSelector , useDispatch } from "react-redux";
import {fetchGetFooterData , fetchGetTermsAndConditions ,fetchGetGaurentee} from '../redux/action/footerAction'






 const Footer = () =>{ 
   const footerDataList = useSelector((state) => state.footerData.getFooterData[0]);
   const getTermsAndConditionList = useSelector((state)=> state.footerData.getTermsAndConditions[0]);
   const getGuaranteeList = useSelector((state)=> state.footerData.getGuarantee[0]);

   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(fetchGetFooterData());
    dispatch(fetchGetTermsAndConditions());
    dispatch(fetchGetGaurentee())
  }, []);
        return (
            <div className="main-footer">
                <Row className="row">
                   
                        <Col lg={4} className="about-company">
                        <h5>About Company</h5>
                            <br />
                            <ul className="list-unstyled">
                                <li>{footerDataList && footerDataList.about_company}</li>
                                <li>Contact information</li>
                                <li>Email: {footerDataList && footerDataList.email}</li>
                                <li>Phone: {footerDataList && footerDataList.phone_no}</li>
                                <li>{footerDataList && footerDataList.address}</li>
                            </ul>
                        </Col>
                    
                  
                       <Col lg={4} className="information">
                       <h5>Information</h5>
                           <br />
                           <ul className="list-unstyled">
                               <li className="a" >
                                   {
                                       getTermsAndConditionList && getTermsAndConditionList.fileName && (
                                           <a  className="a" href= {"http://180.149.241.208:3022/" + getTermsAndConditionList && getTermsAndConditionList.fileName} download>Terms and Conditions</a>
                                       )
                                   }
                               </li>
                               <li className="a">
                                   {
                                       getGuaranteeList && getGuaranteeList.fileName && (
   
                                           <a className="a" href={"http://180.149.241.208:3022/" + getGuaranteeList && getGuaranteeList.fileName} download>Gurantee and Return Policy</a>
                                       )
                                   }
                               </li>
                               <Link className="a" to="contactform">Contact Us</Link>
                               <li><a className="a" href="#/">Privacy Policy</a></li>
                               <li><a className="a" href="#/location">Locate Us</a></li>
                           </ul>
                       </Col>
                 
                  
                      <Col lg={4} className="news-letter">
                      <h5>Newsletter</h5>
                          <br />
                          <p>Signup to get exclusive offer from our favorite brands and to be well up in the news</p>
                          <input id="subscibe-text" typeof="text" placeholder=" your mail..." ></input>
                          <br />
                          <Button id="subscribeBtn" className="mx-auto" variant="light">Subscribe</Button>
                  <br />
                      </Col>
                  
                </Row>
                        <Row>
                            <Col className="copy-right">
                            &copy;2019 NeoSOFT Technologies All rights reserved | Design By Shrushti Vyas
                            </Col>
                        </Row>
                   
            </div>
        )
}

export default Footer