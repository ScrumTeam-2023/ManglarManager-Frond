import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../..';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
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
  MDBCardTitle,
  MDBCardFooter

} from 'mdb-react-ui-kit';

export const ProfileUpdate = () => {


  const [user, setUser] = useState([]);
  const { id } = useParams();
  const { setLoggedIn, dataUser } = useContext(AuthContext);

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
  const navigate = useNavigate();

  const getSingleProfile = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/user/getOne/${id}`, { headers: headers })
      setUser(data.findUser)
    } catch (err) {
      console.warn(err)

    }
  }


  const editProfile = async () => {
    try {
      let editProfile = {
        username: document.getElementById('inputUser').value
      }
      const { data } = await axios.put(`http://localhost:3000/user/updateProfile/${id}`, editProfile, { headers: headers })
      if (data.message) {
        Swal.fire({
          icon: 'success',
          title: " Username Updated!",
          text: `You can enjoy yourself now`
          ,

          timer: 4000,
          showCancelButton: false

        })
      }
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: 'error',
        title: " Opsie Daisy",
        text: `Your username wasn't changed `
        ,

        timer: 4000,
        showCancelButton: false

      })

    }
  }


  const editThenSend = () => {
    editProfile();
    navigate('/login')
    Swal.fire({
      title: 'Profile updated Succesfully',
      text: 'Your profile is now updated\n' + ' Please Log in Again',
      icon: 'success',
      timer: 5000,
      showCloseButton: false
    })



  }

  useEffect(() => {
    getSingleProfile();
  }, []);
  return (
    <>
      {/* Edit profile Modal */}



      {/* End Profile Modal */}

      <section className="h-100 " style={{ backgroundColor: '#B3C6CF' }}>
        <MDBContainer className="h-100 modal-body p-4">

          <div className='modal-body p-4 h-100 ' style={{ alignContent: 'fixed' }}>

            <MDBCard shadow='0' border='info' background='white' className='mb-3'>
              <MDBCardBody>
                <MDBCardTitle>Edit Username</MDBCardTitle>
                <MDBCardText>
                  You are about to change your Username
                </MDBCardText>

                <div className='modal-body p-4'>

                  <p className="text-muted mb-1">Due to Corporation Reglaments you are only allowed to change username</p>
                  <p className="text-muted mb-1">In case to switch more sensitive data Talk to your Closest administrator</p>
                  <br></br>

                  <form>
                    <MDBCol col='6'>
                      <label htmlFor="inputUser" className="form-label">Username</label>
                      <input type="text" className="form-control mb-4" placeholder='GarderWarfarer2002' id="inputUser" label='User' defaultValue={user.username} required />
                    </MDBCol>
                  </form>
                </div>

                <p className="text-muted mb-1">Your changes will be saved</p>


                <MDBCardFooter background='transparent' border='info'>

                  <MDBTypography note noteColor='warning'>
                    <strong>Note:</strong>
                    <p></p>
                   After Changing your username you <strong>MUST</strong> Log in again
                 
                  </MDBTypography>

                  <Link to='/panel/profile'>
                    <span><button className="btn btn-danger" style={{ margin: 10 }} >Cancel</button></span>
                  </Link>
                  <MDBBtn color='success' onClick={() => editThenSend()}>Update</MDBBtn>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </div>

        </MDBContainer>
      </section>
    </>
  )
}
