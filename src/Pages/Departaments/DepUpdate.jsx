import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../..';
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
  MDBCardText
}
  from 'mdb-react-ui-kit';

export const DepUpdate = () => {
  const [departament, setDeparts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const headers = {
    'Context-Type': 'aplication/json',
    'Authorization': localStorage.getItem('token')
  }

  const getSingleDeparts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/dep/getODep/${id}`,{headers:headers})
      if (data.findDep) {
        setDeparts(data.findDep)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const DepUpdate = async () => {
    try {
      let upDeparts = {
        name: document.getElementById('inputName').value,
        desc: document.getElementById('inputDesc').value
      }

      const { data } = await axios.put(`http://localhost:3000/dep/edit/${id}`, upDeparts, { headers: headers })
      if (data.message) {

        Swal.fire({
          title: `Departament Update Succesfully`,
          text: `Departament ${departament.name} was Update`,
          icon: 'success',
          timer: 5000,
          showCloseButton: false
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getSingleDeparts();
  }, []);

  return (
    <>
      <div className='modal-body p-4'>
        <MDBCard className="p-4">
          <p></p>
          <MDBTypography tag="h2"><MDBIcon fas icon="building fa-2x " /><span>   </span>Edit Departament</MDBTypography>
          <p></p>
          <p className='text-muted mb-1'>You are about to edit {departament.name}</p>
        </MDBCard>

        <br></br>

        <form>


          {departament.name !== "ON HOLD" && (
            <>
              <MDBCol col='6'>
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control mb-4" defaultValue={departament.name} id="inputName" label='name' required />
              </MDBCol>

              <MDBCol col='6'>
                <label htmlFor="inputDesc" className="form-label">Desc</label>
                <input type="text" className="form-control mb-4" defaultValue={departament.desc} id="inputDesc" required />
              </MDBCol>

            </>
          )}

          {departament.name === "ON HOLD" && (
            <>
              <MDBTypography note noteColor='danger'>
                <strong>WARNING:</strong> You are Trying to Update {departament.name} which
                is a crucial Department to make our users wait in the line while we asign them.
                you have to be very Careful with it. If this one is Changed or Deleted there will be
                <strong>UNFORSEEN CONSEQUENCES λ</strong>
              </MDBTypography>

            </>
          )}



          <MDBModalFooter>
            {departament.name === "ON HOLD" && (
              <>
                <Link to='/panel/dep'>
                  <MDBBtn color='dark' style={{ margin: 10 }}>Wont Happen again...</MDBBtn>
                </Link><span> </span>{"  "}
              </>
            )}

            {departament.name !== "ON HOLD" && (
              <>
                <Link to='/panel/dep'>
                  <MDBBtn color='dark' style={{ margin: 10 }}>Return to "Departaments"</MDBBtn>
                </Link><span> </span>{"  "}

                <Link to='/panel/dep'>
                  <MDBBtn color='success' onClick={() => DepUpdate()}>Save Changes</MDBBtn>
                </Link>


              </>
            )}




          </MDBModalFooter>
        </form>
      </div>
    </>
  )

}