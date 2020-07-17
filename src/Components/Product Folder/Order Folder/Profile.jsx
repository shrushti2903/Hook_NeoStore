import React from "react";
import "../../../Assets/css/profile.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const loginDataList = JSON.parse(localStorage.getItem("customer"));
  return (
    <div>
      <h3 className="profile-tittle">Profile</h3>
      <hr className="profile-tittle" />
      <Row>
        <Col lg={3}>
          <div>
            <span className="details-fields">FirstName :</span>
            <br />
            <span className="details-fields">LastName :</span>
            <br />
            <span className="details-fields">Gender :</span>
            <br />
            <span className="details-fields">Date of Birth :</span>
            <br />
            <span className="details-fields">Mobile Number :</span>
            <br />
            <span className="details-fields">Email :</span>
          </div>
        </Col>
        <Col lg={6}>
          <span className="details-fields">{loginDataList.first_name} </span>
          <br />
          <span className="details-fields">{loginDataList.last_name} </span>
          <br />
          <span className="details-fields">{loginDataList.gender} </span>
          <br />
          <span className="details-fields">{loginDataList.dob}</span>
          <br />
          <span className="details-fields">{loginDataList.phone_no}</span>
          <br />
          <span className="details-fields">{loginDataList.email}</span>
        </Col>
      </Row>
      <Row>
        <Col lg={9}>
          <hr className="profile-tittle" />
          <Link
            to={{
              pathname: "/Order/editProfile",
              state: {
                data: loginDataList,
              },
            }}
          >
            <Button className="edit-profile">
              <MdModeEdit className="edit-icon" />
              Edit
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
