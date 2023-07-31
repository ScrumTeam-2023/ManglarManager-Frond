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
        departament: document.getElementById('inputDep').value,
        DPI: document.getElementById('inputDPI').value
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
        <p>See all the users on it</p>
        <p></p>
        <MDBBtn color='info' onClick={toggleUserA}>Create New User</MDBBtn>

      </MDBCard>
      <div></div>

      <br></br>
      <MDBTypography note noteColor='info'>
        <strong>Note:</strong>
        <p></p>
        Users MUST ask you to change any kind of Sensitive data like <strong tag='em'>PID, Name, Email.</strong>
        <p></p>
        In case of being password you MUST contact your superior to ask him if you can gain access to the DB
      </MDBTypography>
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
                    <div id='textExample1' className='form-text'>
                      Insert the password to the User
                    </div>
                    <input type="text" className="form-control mb-4" placeholder='MUST BRING TO THE USER WHEN ADVISED' id="inputPass" label='age' required />
                  </MDBCol>
                  <MDBCol className='col-sm-5'>
                    <label htmlFor="inputDPI" className="form-label" style={{ width: 1000 }}>Personal Identification Document</label>
                    <div id='textExample1' className='form-text'>
                      Must have Above 8 Characters to be Valid
                    </div>
                    <input type="text" className="form-control mb-4" placeholder='3294 491321 0101' id="inputDPI" label='dpi' required minLength={8} />

                  </MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>


                  <MDBCol col='6'>
                    <label htmlFor="inputEmail" className="form-label">Email Address</label>
                    <div id='textExample1' className='form-text'>
                      Insert the Email from the user
                    </div>
                    <input type="text" className="form-control mb-4" id="inputEmail" label='email' required />
                  </MDBCol>

                  <MDBCol col='6'>
                    <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                    <div id='textExample1' className='form-text'>
                      Must have 9 characters
                    </div>
                    <input type="text" className="form-control mb-4" id="inputPhone" label='phone' required minLength={9} />
                    <div id='textExample1' className='form-text'>
                   Please add '-' after the first 4 Numbers
                    </div>
                  </MDBCol>

                  <MDBCol col='6'>
                    <label htmlFor="inputDep" className="form-label">Respective Department</label>
                    <div id='textExample1' className='form-text' >
                      Select the Department
                    </div>
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
