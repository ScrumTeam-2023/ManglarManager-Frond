import React, { useState, useContext } from 'react'
import './panel.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../index'
import Swal from 'sweetalert2'
import { Outlet, Link } from 'react-router-dom'
import logo from '../../assets/mmLogo2.png'


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
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography 
}

  from 'mdb-react-ui-kit';

export const DashboardPage = () => {

  //*---------------------------------LOGICA---------------------------------------------
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(true)

  const logOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you Really want to log Out?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#7f82ba',
      confirmButtonText: 'Log me Out'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear()
        setLoggedIn(false)
        navigate('/login')
      }
    })
  }

  return (
    <>
      <div id="body">
        <section id="sidebar">
          <a className="brand ms-3">

            <div className='d-flex flex-row mt-1'>
              {/* <MDBIcon fas icon="piggy-bank fa-3x me-3" style={{ color: '#ffffff' }}/> */}
              <MDBContainer fluid >
                <img src={logo} className="img-fluid rounded" />
              </MDBContainer>
            </div>

          </a>
          <ul className="side-menu top">
            <li className="active">
              <MDBTypography note noteColor='dark' className='mb-0'>
                <strong>Main Panel</strong>
              </MDBTypography>
            </li>

            {dataUser.role === "ADMIN" && (
              <>
                <li>
                  <Link to="user">
                    <button>
                      <MDBIcon fas icon="user-check" />
                      <span>  </span>
                      <span className="text">User</span>
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="task">
                    <button>
                      <MDBIcon fas icon="tasks" />
                      <span>  </span>
                      <span className="text">Tasks</span>
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="comp">
                    <button>
                      <MDBIcon fas icon="bullhorn" />
                      <span>  </span>
                      <span className="text">Complaints</span>
                    </button>
                  </Link>
                </li>
              </>

            )}

            <li>
              <Link to="dep">
                <button>
                  <MDBIcon fas icon="industry" />
                  <span>  </span>
                  <span className="text">Departaments</span>
                </button>
              </Link>
            </li>






          </ul>
          <ul className="side-menu bottom">

            <br></br>
            <li>
              <Link to='profile'>
                <button>

                  <span>
                    <MDBIcon fas icon="user-alt" />
                  </span>
                  <span>  </span>
                  <span className='text'>Profile</span>


                </button>
              </Link>

            </li>
            <li>
              <button onClick={logOut}>
                <span>

                </span>
                <MDBIcon fas icon="sign-out-alt" />
                <span>  </span>

                <span className="text">LogOut</span>
              </button>
            </li>
          </ul>
        </section>
        <section id="content">
          <Outlet></Outlet>
        </section>
      </div>

    </>
  )

}
