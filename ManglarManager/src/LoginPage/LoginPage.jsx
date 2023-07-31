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
  MDBTypography,
  MDBCheckbox,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,


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
                      <h4 className="mb-4">Our Main Goal:</h4>
                      <p className="small mb-0 text-white">At our company, our foremost mission is to enhance the overall experience of working for you. We are committed to making your time here both more efficient and delightfully friendly. As we value the significance of your contributions, we strive to create an environment where you can thrive both professionally and personally.

                        Collaboration lies at the heart of our work culture. You will find yourself working closely with your boss and colleagues, fostering a sense of teamwork and mutual support. We firmly believe that by joining forces, we can achieve remarkable results together.

                        Monitoring your progress and growth within the enterprise is essential to us. Through constructive feedback and continuous evaluation, we ensure that you have the necessary tools and support to excel in your role. Your success is a reflection of our commitment to nurturing talent and fostering professional development.

                        But it's not all about work!

                        Thank you for being a part of our dynamic and inclusive company. Together, let's create an exciting future filled with growth, friendship, and accomplishment!
                      </p>
                    </div>
                    <MDBBtn style={{backgroundColor: '#4C3F59'}} className='btn' href='/'>Return to Home</MDBBtn>
                  </div>

                </MDBCol>

              </MDBRow>

            </MDBContainer>
          </MDBCardBody>
          <br></br>
          <br></br>
        </MDBCard>

        <br></br>

      </div>
      <MDBCard>
        <MDBCardBody>
          <MDBCardHeader>Copyright © 2023 Manglar Manager. All rights reserved.
            <span></span>
            <p></p>

          </MDBCardHeader>
          <MDBTypography blockquote className='mb-1'>

          </MDBTypography>
        </MDBCardBody>
      </MDBCard>


    </>

  )
}