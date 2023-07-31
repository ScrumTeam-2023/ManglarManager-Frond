import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from "axios";
import { ComplainmentCard } from '../../Components/ComplainComp/ComplainmentCard';
import { Modal } from "@mui/base";
import { Typography, Box } from "@mui/material";

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

} from 'mdb-react-ui-kit';

export const CompPage = ({ comp }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [departs, setDeparts] = useState([])
  const [complainment, setComplainment] = useState([{}])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }


  const getDeparts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/dep/getDeps`)
      if (data.department) {
        setDeparts(data.department)
      }
    } catch (err) {
      console.error(err)

    }
  }

  const getComplainment = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/comp/getComp', { headers: headers })
      if (data) {
        setComplainment(data.getComp)
        console.log(data.getComp)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const addComp = async () => {
    try {
      let comp = {
        title: document.getElementById('inputTitle').value,
        desc: document.getElementById('inputDescr').value,
        departament: document.getElementById('inputDepart').value
      }
      const { data } = await axios.post(`http://localhost:3000/comp/addComp`, comp)
      if (data) {
        Swal.fire({
          icon: 'success',
          title: " A new Root has Born..",
          text: `User Added succesfully! \n ` +
            '\n Hope the back end is working!'
          ,
          timer: 4000
        })
      }
    } catch (err) {
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: " Oh oh!",
        text: err.message,
        timer: 100000,
        showConfirmButton: false
      })
    }
  }

  const addThem = () => {
    handleClose();
    addComp();
    getComplainment();
  }


  useEffect(() => {
    getComplainment();
    getDeparts();
  }, [])

  return (
    <>

      <br></br>
      <MDBCard className="p-4">
        <p></p>
        <MDBTypography tag="h2"><MDBIcon fas icon="bullhorn fa-2x " /><span>   </span>Complaint Panel</MDBTypography>
        <p>See all Complaints made by our Users:</p>
        <p></p>

        {/* quejas solo lo puede crear usuario */}
        {/* <MDBBtn color='info' onClick={handleOpen}>Create New Complainment</MDBBtn> */}
      </MDBCard>
      <div></div>
      <div>
        <Modal id="Add"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              <i class="fab fa-shopify"></i>
              <span>  </span><br></br>
              <h1>Add One Product</h1>

            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <h4>Fill the Labels to add One Complainment</h4>
              <br></br>
              <form>
                {/*  */}
                <tr>
                  <label htmlFor="inputTitle" className="form-label">Title </label>
                  <input type="text" className="form-control mb-4" id="inputTitle" label='title' required />
                </tr>
                <tr>
                  <label htmlFor="inputDescr" className="form-label">Description </label>
                  <input type="text" className="form-control mb-4" id="inputDescr" label='desc' required />
                </tr>
                <tr>
                  <label htmlFor="inputDepart" className="form-label">Department</label>
                  <div id='textExample1' className='form-text' >
                  </div>
                  <select className="form-control" id="inputDepart" placeholder='Please Select one Department'>
                    {
                      departs.map(({ _id, name }, i) => {
                        return (
                          <>

                            <option key={i} value={_id}>{name}</option>
                          </>

                        )
                      })
                    }
                  </select>
                </tr>

              </form>
              <span><button className="btn btn-success" onClick={() => addThem()}>Add New Complainment</button></span>
              <span>      </span>
              <span><button className="btn btn-danger" onClick={handleClose}>Cancel</button></span>
            </Typography>
          </Box>
        </Modal>

      </div>
      <div className=" row g-0 justify-content-center">
        {
          complainment.map(({_id, title, desc, departament, date }, i) => {
            return (
              <ComplainmentCard
                // ahora algo un tanto pesado
                //colocas ahora el H5 y los P en orden como en la Carta
                key={i}
                id={_id}
                title={title}
                desc={desc}
                departament={departament}
                date={date}

              >
              </ComplainmentCard>
            )
          })
        }
      </div>

    </>
  )
}
