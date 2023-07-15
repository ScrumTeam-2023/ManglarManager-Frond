import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from "axios";
import { UserTable } from '../../Components/UserComp/UserTable';

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

export const UserPage = () => {


  const [users, setUsers] = useState([])
  const [departs, setDeparts] = useState([{}])

  //modal 1
  const [userA, setUserA] = useState(false)
  const toggleUserA = () => setUserA(!userA)

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }



  const getUsers = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/user/get', { headers: headers })

      if (data.getUsers) {
        setUsers(data.getUsers)
        console.log(data.getUsers)
      }
    } catch (err) {
      console.error(err)

    }
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


  const addUser = async () => {
    try {
      let user = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSur').value,
        username: document.getElementById('inputUser').value,
        age: document.getElementById('inputAge').value,
        password: document.getElementById('inputPass').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputPhone').value,
        departament: document.getElementById('inputDep').value
      }
      const { data } = await axios.post(`http://localhost:3000/user/save`, user, { headers: headers })
      if (data) {
        getUsers();

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
      console.error(err)

      Swal.fire({
        icon: 'error',
        title: " Oh oh!",
        text: err.message
        ,

        timer: 100000,
        showConfirmButton: false


      })



    }
  }

  const addAndClose = () => {
    addUser();
    toggleUserA();
  }

  useEffect(() => {
    getUsers();
    getDeparts();
  }, [])


  return (
    <>

      <br></br>
      <MDBCard className="p-4">
        <p></p>
        <MDBTypography tag="h2"><MDBIcon fas icon="user-astronaut fa-2x " /><span>   </span>User Panel</MDBTypography>
        <p></p>
        <MDBBtn onClick={toggleUserA}>Create New User</MDBBtn>
      </MDBCard>
      <div></div>
      <p>See all the users on it</p>
      <br></br>
      <br></br>
      <UserTable user={users} getU={getUsers} />

      {/* Modal */}
      <MDBModal show={userA} setShow={setUserA} tabIndex='-1'>
        <MDBModalDialog size='xl'>
          <MDBModalContent>
            <MDBModalHeader className=' bg-success text-white'>
              <MDBModalTitle><MDBIcon fas icon="user-plus x-3" />  Create new user</MDBModalTitle>
              <MDBModalDialog>The name Speaks for itself</MDBModalDialog>
              <MDBBtn className='btn-close' color='none' onClick={toggleUserA}></MDBBtn>

            </MDBModalHeader>
            <div className='modal-body p-4'>
              <p className="text-muted mb-1">Here you can Create new Accounts only if Authorized</p>
              <br></br>

              <form>
                <MDBRow>
                  <MDBCol col='6'>
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control mb-4" id="inputName" label='name' required />
                  </MDBCol>

                  <MDBCol col='6'>
                    <label htmlFor="inputSur" className="form-label">Last Name</label>
                    <input type="text" className="form-control mb-4" id="inputSur" label='surname' required />
                  </MDBCol>

                  <MDBCol col='6'>
                    <label htmlFor="inputUser" className="form-label">Username</label>
                    <input type="text" className="form-control mb-4" id="inputUser" label='user' required />
                  </MDBCol>


                  <MDBCol col='9'>
                    <label htmlFor="inputAge" className="form-label " style={{ width: 2 }}>Age</label>
                    <input type="number" className="form-control mb-4" placeholder='MUST BE ABOVE 15' id="inputAge" label='age' required />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol className='col-sm-5'>
                    <label htmlFor="inputPass" className="form-label" style={{ width: 500 }}>Password to Set</label>
                    <input type="text" className="form-control mb-4" placeholder='MUST BRING TO THE USER WHEN ADVISED' id="inputPass" label='age' required />
                  </MDBCol>
                </MDBRow>

                <MDBRow>


                  <MDBCol col='6'>
                    <label htmlFor="inputEmail" className="form-label">Email Address</label>
                    <input type="text" className="form-control mb-4" id="inputEmail" label='email' required />
                  </MDBCol>

                  <MDBCol col='6'>
                    <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                    <input type="text" className="form-control mb-4" id="inputPhone" label='phone' required />
                  </MDBCol>

                  <MDBCol col='6'>
                    <label htmlFor="inputDep" className="form-label">Respective Department</label>
                    <select className="form-control" id="inputDep" placeholder='Please Select one Department'>
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
                  </MDBCol>

                </MDBRow>


              </form>
            </div>
            <MDBModalFooter>
              <p className="text-muted mb-1">The user Will be created once you press "Save"</p>
              <MDBBtn color='primary' onClick={toggleUserA}>
                Close
              </MDBBtn>  <MDBBtn color='success' onClick={() => { addAndClose(); toggleUserA(); }}>Save</MDBBtn>
              
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>


  )
}
