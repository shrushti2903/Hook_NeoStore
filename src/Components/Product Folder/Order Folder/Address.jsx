import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "../../../Assets/css/address.css";
import { MdCancel, MdModeEdit } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCustomerAddress,
  fetchDelAddressByAddressId,
} from "../../../redux/action/customerDataAction";
import FullLoader from "../../../Common/FullLoader";
import Swal from "sweetalert2";

const Address = () => {
  const customerAddressList = useSelector(
    (state) => state.customerData.customerAddress
  );
  const loading = useSelector((state) => state.customerData.loading);
  const data = customerAddressList.customer_address;
  const delAddressData = useSelector(
    (state) => state.customerData.delAddressByAddressId
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const id = localStorage.getItem("token");
    dispatch(fetchCustomerAddress(id));
  }, []);

  /**
   * Function Name - handlerDeletAddress
   * Parameters -  addressId
   * this function delete the addres
   */

  const handlerDeletAddress = (addressId) => {
    const id = localStorage.getItem("token");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000 ",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          confirmButtonColor: "#ff0000 ",
          text: "Deleted! Your file has been deleted success",
        });
        dispatch(fetchDelAddressByAddressId(addressId, id));
      }
    });
  };

  return (
    <div>
      <div>
        <h3 className="address-tittle">Address</h3>
        <hr className="address-tittle" />
        {data &&
          data.map((value) => {
            return (
              <div className="mx-auto md-col-6">
                <Card className="contact ">
                  <MdCancel
                    className="cancel-icon"
                    onClick={() => handlerDeletAddress(value.address_id)}
                  />
                  <span className="address-details">{value.address}</span>
                  <span className="address-details">
                    {value.city} - {value.pincode}
                  </span>
                  <span className="address-details">{value.country}</span>
                  <Link
                    to={{
                      pathname: "/Order/editAddress",
                      state: {
                        data: value,
                      },
                    }}
                  >
                    <Button className="add-address">Edit</Button>
                  </Link>
                </Card>
              </div>
            );
          })}
        <Link to="/Order/addAddress">
          <Button className="add-address">Add Address</Button>
        </Link>
      </div>
    </div>
  );
};

export default Address;
