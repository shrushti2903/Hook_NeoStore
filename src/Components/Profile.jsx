import React from 'react';
import '../Assets/css/profile.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {MdModeEdit} from 'react-icons/md';


const Profile = () => {
    return (  
        <div className="main-profile">
            <h3 className="profile-tittle">Profile</h3>
            <hr className ="profile-tittle" />
            <Row>
                <Col lg={3}>
                    <div>
                    <span className="details-fields">FirstName :</span>
                    <br/>
                    <span className="details-fields">LastName :</span>
                    <br/>
                    <span className="details-fields">Gender :</span>    
                    <br/>
                    <span className="details-fields">Date of Birth :</span>
                    <br/>
                    <span className="details-fields">Mobile Number  :</span>
                    <br/>
                    <span className="details-fields">Email :</span>
                    </div>
                </Col>
                <Col lg={6}>
                <span className="details-fields">Aparna </span>
                <br/>
                    <span className="details-fields">Deshmukh </span>
                    <br/>
                    <span className="details-fields">Female </span>
                    <br/>    
                    <span className="details-fields">Invalid</span>
                    <br/>
                    <span className="details-fields">9665835719</span>
                    <br/>
                    <span className="details-fields">aparna@gmail.com</span>
                </Col> 
            </Row>
            <Row>
                    <Col lg={9}>
                    <hr className ="profile-tittle" />
                <Button className="edit-profile">
                <MdModeEdit className="edit-icon"/>
                Edit</Button>
                    </Col>
                </Row>
        </div>
    );
}
 
export default Profile;