import React, { useContext } from "react"
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Box, Modal, Typography } from '@mui/material'
import { AuthContext } from '../..'

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


export const ComplainmentCard = ({ id, title, desc, departament, date }) => {

  // const [complainment, setComplainment] = useState([{}])
  const { setLoggedIn, dataUser } = useContext(AuthContext)
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  // const getComplainment = async () => {
  //   try {
  //     const { data } = await axios.get('http://localhost:3000/comp/getComp')
  //     if (data) {
  //       setComplainment(data.getComp)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const DeleteComp = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "This will be considered as READ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          const { data } = axios.delete(`http://localhost:3000/comp/delComp/${id}`, { headers: headers })
          Swal.fire({

            title: 'Deleting...',
            text: 'this will take a moment',
            icon: 'info',
            showCloseButton: false
          })
          window.location.reload()
        }
      })

    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {

  }, [])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="card text-white bg-success mb-3 m-3 g-0" style={{ maxWidth: '20rem', maxHeight: '30rem' }}>
        <div className="card-body">


          <h5 className="card-header"><strong>Title: </strong> {title}</h5>
          <p className="card-text"><strong>Desc: </strong> {desc}</p>
          <p className="card-text"><strong>Date: </strong>{date}</p>
          <p className="card-text"><strong>From: </strong> {departament?.name}</p>

          {dataUser.role === "ADMIN" && (
            <div className='grid gap-3 card-footer'>
              {/* ELIMINAR */}
              <center>
                <span className='p-2 g-col-6' onClick={() => DeleteComp(id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                    <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                  </svg>
                </span>
              </center>
            </div>
          )}

        </div>
      </div>
    </>
  )
}
