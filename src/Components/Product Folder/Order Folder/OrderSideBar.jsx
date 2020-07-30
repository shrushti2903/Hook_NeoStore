import React from "react";
import "../../../Assets/css/order.css";
import { RiOrderPlayLine } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { FaAddressCard, FaExchangeAlt } from "react-icons/fa";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { fetchCustomerAddress } from "../../../redux/action/customerDataAction";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import ChangePassword from "../../User Folder/ChangePassword";
import Address from "../../Product Folder/Order Folder/Address";
import AddressEdit from "../../Product Folder/Order Folder/AddressEdit";
import Profile from "../../Product Folder/Order Folder/Profile";
import ProfileEdit from "../../Product Folder/Order Folder/ProfileEdit";
import AddAddress from "../../Product Folder/Order Folder/AddAddress";
import OrderDetails from "../../Product Folder/Order Folder/OrderDetails";
import FullLoader from "../../../Common/FullLoader";

const OrderSidebar = () => {
  const customerAddressList = useSelector(
    (state) => state.customerData.customerAddress
  );

  const dispatch = useDispatch();
  const handlerChangeOrder = () => {
    const id = localStorage.getItem("token");
    dispatch(fetchCustomerAddress(id));
  };
  let match = useRouteMatch();
  const loginDataList = JSON.parse(localStorage.getItem("customer"));
  return (
    <div>
      
      <Row>
        <Col lg={12}>
          <h2 className="myAccount">My Account</h2>
          <hr />
        </Col>
        <Col lg={4}>
          <img
            className="profile-pic"
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          />
          <span _ngcontent-yuw-c19="" id="imgTitle">
            {" "}
            {loginDataList.first_name}&nbsp; {loginDataList.last_name}&nbsp;
          </span>
          <div className="profileOptions">
            <Link to={`${match.url}/orderdetails`}>
              <button className="order-btn">
               <span className="tittle">Order</span>  &nbsp;
                <RiOrderPlayLine className="mat-icon" />
              </button>
            </Link>
          </div>
          <div className="profileOptions">
            <Link to={`${match.url}/profile`}>
              <button className="order-btn">
              <span className="tittle">Profile</span>   &nbsp; 
                <MdPermContactCalendar className="mat-icon" />
              </button>
            </Link>
          </div>
          <div className="profileOptions">
            <Link to={`${match.url}/address`}>
              <button className="order-btn" onClick={handlerChangeOrder}>
             <span className="tittle">Address</span>   &nbsp; 
                <FaAddressCard className="mat-icon" />
              </button>
            </Link>
          </div>
          <div className="profileOptions">
            <Link to={`${match.url}/changePassword`}>
              <button className="order-btn">
               <span className="tittle">Change Password</span>  &nbsp;
                <FaExchangeAlt className="mat-icon" />
              </button>
            </Link>
          </div> 
        </Col>
        <Col lg={8}>
          <Switch>
            <Route
              path={`${match.path}/orderdetails`}
              component={OrderDetails}
            ></Route>
            <Route path={`${match.path}/profile`} component={Profile}></Route>
            <Route path={`${match.path}/address`} component={Address}></Route>
            <Route
              path={`${match.path}/changePassword`}
              component={ChangePassword}
            ></Route>
            <Route
              path={`${match.path}/editProfile`}
              component={ProfileEdit}
            ></Route>
            <Route
              path={`${match.path}/editAddress`}
              component={AddressEdit}
            ></Route>
            <Route
              path={`${match.path}/addaddress`}
              component={AddAddress}
            ></Route>
          </Switch>
        </Col>
      </Row>

    </div>
  );
};

export default OrderSidebar;
