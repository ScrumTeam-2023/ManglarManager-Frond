import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from "axios";


import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBTypography,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
}
    from 'mdb-react-ui-kit';


export const CompPage = () => {
    return (
        <>

            <br></br>
            <MDBCard className="p-4">
                <p></p>
                <MDBTypography tag="h2"><MDBIcon fas icon="bullhorn fa-2x " /><span>   </span>Complaint Panel</MDBTypography>
                <p>See all Complaints</p>
                <p></p>
            </MDBCard>
            <div></div>

            <br></br>
            <br></br>
           
        </>
    )
}
