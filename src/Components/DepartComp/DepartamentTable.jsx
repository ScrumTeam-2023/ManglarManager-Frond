import React from 'react'

import {useState, useEffect, useContext} from 'react';
import { Departament } from './Departament.jsx';
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from '../../index.jsx';

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

export const DepartamentTable = ({depart, getD}) =>{
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
    //Delete
    const deleteDep = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You are about to Mark as readed (Cannot be Reverted)",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {

                if (result.isConfirmed) {
                    const { data } = axios.delete(`http://localhost:3000/dep/deleteDep/${id}`)
                    Swal.fire(
                        'Erradicated!',
                        'This task has been read!.',
                        'success'
                    )
                    getD()
                }
            })

        } catch (err) {
            console.log(err)

        }
    }

    return (
        <>
            <MDBTable hover>
                <MDBTableHead>
                    <tr className='table-secondary'>
                        <th></th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Desc</th>
                        <th>Options</th>

                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                       /* Departament.length > 0 ? (*/
                            depart.map(({_id, name, desc}, index)=>{
                                return(
                                    <tr item key={index}>
                                        <td>
                                            <MDBIcon fas icon/>
                                    </td>
                                    <Departament 
                                        name={name}
                                        desc={desc}>
                                    </Departament>

                                    <td>
                                        <MDBBtn className="btn" color="danger" onClick={()=> deleteDep(_id)}>Delete</MDBBtn>
                                        <span></span>
                                        <Link to={`update/${_id}`}>
                                            <MDBBtn className="btn" color='muted'>Edit</MDBBtn>
                                        </Link>
                                        
                                    </td>

                                    </tr>
                                )
                            })
                       /* ) :(
                            <h1><MDBIcon fas icon="quiestion-circule x-3"/>There is no departament</h1>
                        )*/
                    }
                </MDBTableBody>
            </MDBTable>
        </>
    )
} 