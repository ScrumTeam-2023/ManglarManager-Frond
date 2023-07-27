import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../index';
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

export const UserUpdate = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const [departs, setDeparts] = useState([{}])
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getDeparts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/dep/getDeps`, { headers: headers })
      if (data.department) {
        setDeparts(data.department)
      }
    } catch (err) {
      console.error(err)

    }
  }

  const getSingleUser = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/user/getOne/${id}`, { headers: headers })
      if (data.findUser) {
        setUser(data.findUser)
      }
    } catch (err) {
      console.error(err)

    }
  }


  const updateUser = async () => {
    try {
      let upUser = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSur').value,
        username: document.getElementById('inputUser').value,
        age: document.getElementById('inputAge').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputPhone').value,
        departament: document.getElementById('inputDep').value,
        DPI: document.getElementById('inputDPI').value,
        role: document.getElementById('inputRole').value
      }

      const { data } = await axios.put(`http://localhost:3000/user/update/${id}`, upUser, { headers: headers })
      if (data.message) {

        Swal.fire({
          title: `User Updated Succesfully!`,
          text: `User ${user.name} was Upated!`,
          icon: 'success',
          timer: 5000,
          showCloseButton: false
        })

      }
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getSingleUser();
    getDeparts();
  }, []);

  return (
    <>
      <div className='modal-body p-4'>
        <MDBCard className="p-4">
          <p></p>
          <MDBTypography tag="h2"><MDBIcon fas icon="user-edit fa-2x " /><span>   </span>Edit user</MDBTypography>
          <p></p>
          <p className="text-muted mb-1">you are about to edit {user.name}'s account</p>
        </MDBCard>

        <br></br>

        <form>
          <MDBRow>
            <MDBCol col='6'>
              <label htmlFor="inputName" className="form-label">Name</label>
              <input type="text" className="form-control mb-4" defaultValue={user.name} id="inputName" label='name' required />
            </MDBCol>

            <MDBCol col='6'>
              <label htmlFor="inputSur" className="form-label">Last Name</label>
              <input type="text" className="form-control mb-4" defaultValue={user.surname} id="inputSur" label='surname' required />
            </MDBCol>

            <MDBCol col='6'>
              <label htmlFor="inputUser" className="form-label">Username</label>
              <input type="text" className="form-control mb-4" id="inputUser" defaultValue={user.username} label='user' required />
            </MDBCol>


            <MDBCol col='6'>
              <label htmlFor="inputAge" className="form-label" style={{ width: 2 }}>Age</label>
              <input type="number" className="form-control mb-4" defaultValue={user.age} placeholder='MUST BE ABOVE 15' id="inputAge" label='age' required />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol col='6'>
              <label htmlFor="inputPass" className="form-label " style={{ width: 500 }}>Password to Set</label>
              <input type="text" className="form-control mb-4" disabled placeholder='Password is not Allowed to be change' id="inputPass" label='age' required />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol className='col-sm-5'>
              <label htmlFor="inputDPI" className="form-label" style={{ width: 1000 }}>Personal Identification Document</label>
              <input type="text" className="form-control mb-4" defaultValue={user.DPI} placeholder='3294 491321 0101' id="inputDPI" label='DPI' required minLength={8} />
            </MDBCol>

            <MDBCol col='6'>
              <label htmlFor="inputEmail" className="form-label">Email Address</label>
              <input type="text" className="form-control mb-4" defaultValue={user.email} id="inputEmail" label='email' required />
            </MDBCol>

            <MDBCol col='6'>
              <label htmlFor="inputPhone" className="form-label">Phone Number</label>
              <input type="text" className="form-control mb-4" defaultValue={user.phone} id="inputPhone" label='phone' required />
            </MDBCol>

            <MDBCol col='6'>
              <label htmlFor="inputDep" className="form-label">Respective Department</label>
              <select className="form-control" id="inputDep" defaultValue={user.departs?._id} >
                {
                  departs.map(({ _id, name }, i) => {
                    return (

                      <option key={i} value={_id}>{name}</option>
                    )
                  })
                }
              </select>
            </MDBCol>



          </MDBRow>
          <p className="text-muted mb-1">Select {user.name}'s Role.</p>
          <MDBRow>
            <MDBCol md='2'>
              <label className="visually-hidden" for="inlineFormSelectPref">Role</label>
              <select name='status' id="inputRole" className="form-control" defaultValue={user.role}>
                <option selected="selected" disabled hidden>
                  {user.role}
                </option>
                <option value="ADMIN">ADMIN</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
              </select>
            </MDBCol>
          </MDBRow>
          <br></br>

          <MDBTypography note noteColor='info'>
            <strong>Note:</strong>
            <p></p>
            Once you edit {user.name}'s account, it Can be Edited again.
          </MDBTypography>

          <MDBModalFooter>



            <Link to='/panel/user'>
              <MDBBtn color='dark' style={{ margin: 10 }}>Return to "Users"</MDBBtn>
            </Link> <span>  </span>{"  "}

            <Link to='/panel/user'>
              <MDBBtn color='success' onClick={() => updateUser()}>Save Changes</MDBBtn>
            </Link>




          </MDBModalFooter>


        </form>
      </div>
    </>
  )
}
