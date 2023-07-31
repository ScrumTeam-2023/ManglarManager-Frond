import React from 'react'

import { useState, useEffect, useContext } from "react";
import { Task } from './Task.jsx';
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from '../../index.jsx'

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
    MDBBadge,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalFooter,
}
    from 'mdb-react-ui-kit';

export const TaskProfileTable = ({ task, getT }) => {

    const [upProfile, setUpProfile] = useState(false)
    const toggleUpProfile = () => setUpProfile(!upProfile)

    const { setLoggedIn, dataUser } = useContext(AuthContext);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const markCompleted = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You are about to Mark as readed (Cannot be Reverted)",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    const { data } = axios.delete(`http://localhost:3000/task/delete/${id}`, { headers: headers })
                    Swal.fire(
                        'Erradicated!',
                        'This task has been read!.',
                        'success'
                    )
                    getT()
                }
            })

        } catch (error) {
            console.error(err)

        }
    }
    return (
        <>
            <MDBTable hover>
                <MDBTableHead>
                    <tr className='table-primary'>
                        <th></th>
                        <th scope='col' >Task</th>
                        <th scope='col'>Status</th>
                        <th>Date of Assign</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>surname</th>
                        <th scope='col'>departament</th>
                        <th scope='col'>Actions</th>

                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        task.length > 0 ? task.map(({_id, desc,date, status, idUser, surname, departament }, index) => {
                            return (
                                <tr item key={index}>
                                    <td>
                                        <h1><MDBIcon fas icon="tasks fa-1x" /></h1>
                                    </td>
                                    <Task
                                        desc={desc}
                                        status={status} 
                                        date={date}
                                        idUser={idUser?.name}
                                        surname={idUser?.surname}
                                        departament={idUser?.departament}
                                    ></Task>
                                    <td>
                                        <Link to={`status/${_id}`}>
                                            <MDBBtn color='warning'>Status</MDBBtn>
                                        </Link>
                                    </td>
                                </tr>
                            )

                        }) : (<h1 className='text-black'><MDBIcon fas icon="check 3x" />You are up Date!</h1>)

                    }


                </MDBTableBody>
            </MDBTable>


        </>
    )
}
