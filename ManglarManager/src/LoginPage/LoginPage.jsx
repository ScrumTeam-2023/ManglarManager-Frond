import React from 'react'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../src/index';
import axios from 'axios'
import { useContext, useState } from 'react';
import '../LoginPage/LoginStyles.css'
import logo from '../assets/mmLogo.png'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,


}
  from 'mdb-react-ui-kit';



export const LoginPage = () => {
  //Codigo
  const { loggedIn, setLoggedIn, setDataUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const LogIn = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post(`http://localhost:3000/user/login`, form)
      if (data.message) {
        Swal.fire({
          icon: 'success',
          title: `Logged Successfully!`
          , text: 'Welcome back!',
          timer: 100000
        })
        localStorage.setItem(`token`, data.token)
        setDataUser(data.userLogged)
        setLoggedIn(true)
        localStorage.setItem('lario', JSON.stringify(data.userLogged))
        navigate('/panel')
      }
    } catch (err) {
      console.error(err)
      Swal.fire({
        title: 'Error: Invalid Credentials',
        text: 'Please Enter your Valid Credentials',
        icon: 'error',
        timer: 5000

      })
    }

  }

  return (
    <>

      <div>

        <MDBCard className='justify-content-center'>
          <MDBCardBody>

            <MDBContainer className="my-5 gradient-form d-flex align-items-sm-center">

              <MDBRow>

                <MDBCol col='6' className="mb-5">
                  <div className="d-flex flex-column ms-5">
                    
                    <div className="text-center">
                    <h4 className="text-muted">Welcome to..</h4>
                      <img src={logo} className="img-fluid rounded" style={{ width: 500 }} />
                      <br></br>
                      <p></p>

                      <br></br>
                      <a className="text-muted">The New Way to Experience Work!</a>
                      <p>Log in With Your Given Account</p>
                      {/* Image goes here */}

                    </div>




                    <MDBInput onChange={handleChange} wrapperClass='mb-4' name='username' className='form-control' label='username' type="text" size="lg" required />
                    <MDBInput onChange={handleChange} wrapperClass='mb-4' name='password' className='form-control' label='password' type="password" size="lg" required />


                    <div className="text-center pt-1 mb-5 pb-1">
                      <MDBBtn className=" btn-sm mb-4 w-100 gradient-custom-2" onClick={(e) => LogIn(e)} style={{ padding: 14 }}>Login</MDBBtn>
                      <a className="text-muted">Forgot password?</a>
                      <span></span>
                      <br></br>
                      <a className="text-muted">You must Talk to your Organization Superior</a>
                    </div>



                  </div>

                </MDBCol>

                <MDBCol col='6' className="mb-5">
                  <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">Our Main Goal:</h4>
                      <p class="small mb-0">Our job is to make the experience of Working at your company more
                        efficient and also Friendly Experience, You and Your boss will be working and monitoring your
                        Progress in the Enterprise.
                      </p>
                    </div>

                  </div>

                </MDBCol>

              </MDBRow>

            </MDBContainer>
          </MDBCardBody>
          <br></br>
          <br></br>
        </MDBCard>

        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          style={{ width: '100px' }} alt="logo" />
      </div>

    </>

  )
}