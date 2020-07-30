import React from "react";
import "../../../Assets/css/profile.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const Profile = () => {
  const loginDataList = JSON.parse(localStorage.getItem("customer"));
  return (
    <div>
      <h3 className="profile-tittle">Profile</h3>
      <hr className="profile-tittle" />
      <Card className='contact '>
      <Row>
        <Col sm={4} className="heading-col" >
            <label className="details-fields">FirstName :</label>
            <label className="details-fields">LastName :</label>
            <label className="details-fields">Gender :</label>
            <label className="details-fields">Date of Birth :</label>
            <label className="details-fields">Mobile Number :</label>
            <label className="details-fields">Email :</label>
        </Col>
        <Col lg={8} className="detail-col">
          <label className="details-fields">{loginDataList.first_name} </label>
          <label className="details-fields">{loginDataList.last_name} </label>
          <label className="details-fields">{loginDataList.gender} </label>
          {
            loginDataList.dob?
            <label className="details-fields">{loginDataList.dob}</label>
            
            :
            <label className="details-fields">-</label>
          
          }
          <label className="details-fields">{loginDataList.phone_no}</label>
          <label className="details-fields">{loginDataList.email}</label>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Link
            to={{
              pathname: "/Order/editProfile",
              state: {
                data: loginDataList,
              },
            }}
          >
            <Button className="edit-profile" type="submit">
            Edit
            </Button>
          </Link>
        </Col>
      </Row>
      </Card>

    </div>
  );
};

export default Profile;
