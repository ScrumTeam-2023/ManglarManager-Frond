import { AuthContext } from '../..';
import React, { useState, useEffect, useContext } from 'react'
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





export const DepPage = () => {
    const { setLoggedIn, dataUser } = useContext(AuthContext)
    return (
        <>

            <br></br>
            <MDBCard className="p-4">
                <p></p>
                <MDBTypography variant='h1'>Welcome to:</MDBTypography>
                <MDBTypography tag="h2"><MDBIcon fas icon="industry fa-2x " /><span>   </span>Departaments Panel</MDBTypography>
                <p>See all The Departaments</p>
                <p></p>

                {dataUser.role === "ADMIN" && (
                    <>
                        <MDBBtn color='info' >Create new Departament</MDBBtn>
                    </>
                )}


            </MDBCard>
            <div></div>

            <br></br>
            <br></br>

        </>
    )
}
