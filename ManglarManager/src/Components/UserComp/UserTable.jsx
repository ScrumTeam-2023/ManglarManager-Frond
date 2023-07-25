import React from 'react'

import { useState, useEffect, useContext } from "react";
import { User } from "./User.jsx"
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from '../../index.jsx'

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBTypography,
    MDBIcon,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBTextArea,
    MDBTable,
    MDBTableHead,
    MDBTableBody
}
    from 'mdb-react-ui-kit';

export const UserTable = ({ user, getU }) => {
    const { setLoggedIn, dataUser } = useContext(AuthContext)

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const deleteUser = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    const { data } = axios.delete(`http://localhost:3000/user/delete/${id}`, { headers: headers })
                    Swal.fire(
                        'Deleted!',
                        'Your User has been deleted forever!.',
                        'success'
                    )
                    getU()
                }
            })

        } catch (err) {
            console.error(err)
        }

    }


    return (
        <>

            <MDBTable hover>
                <MDBTableHead>
                    <tr className='table-secondary'>
                        <th></th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>email Address</th>
                        <th scope='col'>PID</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Age</th>
                        <th scope='col'>Role</th>
                        <th scope='col'>departament</th>
                        <th> Options </th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        user.length > 0 ? (
                            user.map(({ _id, name, surname, username, email,DPI, phone, age, role, departament }, index) => {
                                return (
                                    <tr item key={index}>
                                        <td>
                                            <MDBIcon fas icon="user-tie fa-1x" />
                                        </td>
                                        <User
                                            name={name}
                                            surname={surname}
                                            username={username}
                                            email={email}
                                            DPI={DPI}
                                            phone={phone}
                                            age={age + ' Years'}
                                            role={role}
                                            departament={departament?.name}
                                        >
                                        </User>

                                        <td>
                                            <MDBBtn className="btn" color="danger" onClick={() => deleteUser(_id)}>Ban</MDBBtn>
                                            <span>  </span>
                                            <Link to={`update/${_id}`}>
                                                <MDBBtn className="btn" color='muted'>Edit</MDBBtn>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (

                            <h1><MDBIcon fas icon="question-circle x-3" />there is nobody Here</h1>

                        )
                    }
                </MDBTableBody>
            </MDBTable >
        </>
    )
}
