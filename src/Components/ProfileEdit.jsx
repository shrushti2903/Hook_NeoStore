import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Assets/css/editProfile.css'
import {IoMdSave} from 'react-icons/io'
import {TiCancel} from 'react-icons/ti'

const ProfileEdit = () => {
    return ( 
        <div className="main-editProfile">
            <h3 className="address-tittle">Edit Profile</h3>
            <hr className="address-tittle"/>
                              <Form className="edit-profile-form">
                            <Form.Group controlId="formGroupFirstName">
                                <Form.Control id="formGroupFirstName" 
                                type="text" 
                                placeholder="First Name" 
                               />
                            </Form.Group>
                            <Form.Group controlId="formGroupLastName">
                                <Form.Control id="formGroupLastName" 
                                type="text" 
                                placeholder="Last Name"/>
                            </Form.Group>
                            <span id="head">Gender : </span>
                            <Form.Group id="formGridCheckbox">
                            <Form.Check type="radio" inline label="Male" />
                            <Form.Check type="radio" inline label="Female" />
                            </Form.Group>
                        <Form.Group controlId="formGroupNumber">
                                <Form.Control id="formGroupNumber" 
                                type="text" 
                                placeholder="Enter Phone Number"
                                 />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control id="formGroup-Email" 
                                type="email" 
                                placeholder="Enter email" 
                                />
                            </Form.Group>
                            
                            <Button className="profile-btn"
                            size="sm" 
                            type = "submit"
                            value="send" >
                                <IoMdSave/>
                               Save
                            </Button>
                            <Button className="profile-btn"
                            size="sm" 
                            type = "submit"
                            value="send" >
                                <TiCancel/>
                               Cancel
                            </Button>
                            </Form>
        </div>
     );
}
 
export default ProfileEdit;