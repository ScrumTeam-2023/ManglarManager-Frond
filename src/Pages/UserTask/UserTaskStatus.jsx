import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../index';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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
  MDBCardFooter,
  MDBCardHeader

} from 'mdb-react-ui-kit';
import axios from 'axios';

export const UserTaskStatus = () => {
  const [tasks, setTasks] = useState([])
  const { id } = useParams();
  const navigate = useNavigate();
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }




  const getSingleTasque = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/task/getOne/${id}`, { headers: headers })
      if (data.findSTask) {
        setTasks(data.findSTask)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const upStatus = async () => {
    try {
      let changeStats = {
        status: document.getElementById('inputStatus').value
      }

      const { status } = await axios.put(`http://localhost:3000/task/updateStatus/${id}`, changeStats, { headers: headers })
      if (status.message) {
        Swal.fire({
          title: `Task Succesfully Updated`,
          text: `Task Status was Set to " ${tasks.status}" `,
          icon: 'success',
          timer: 5000,
          showCloseButton: false
        })
      }

    } catch (err) {
      console.error(err)

      Swal.fire({
        title: `hmmm...`,
        text: `Status was not Changed`,
        icon: 'warning',
        timer: 5000,
        showCloseButton: false
      })

    }
  }







  const statusSend = () => {
    upStatus();
    navigate('/panel/userTask')
    Swal.fire({
      title: `Task Succesfully Updated`,
      text: `Task Status was Set! `,
      icon: 'success',
      timer: 5000,
      showConfirmButton: false
    })

  }







  useEffect(() => {
    getSingleTasque();
  }, [])
  return (
    <>


      <section className="h-100 " style={{ backgroundColor: '#B3C6CF' }}>
        <MDBContainer className="h-100 modal-body p-4">

          <div className='modal-body p-4 h-100 ' style={{ alignContent: 'fixed' }}>

            <MDBCard shadow='0' border='info' background='white' className='mb-3'>
              <MDBCardBody>
                <MDBCardTitle className='text-black'>Edit Task Status</MDBCardTitle>
                <MDBCardHeader>
                  <p>You are about to set: <strong>{tasks.desc}</strong></p>
                  <span> current Status: <strong>{tasks.status}</strong></span>


                </MDBCardHeader>

                <MDBCardText>
                  You are about to change your assigned task STATUS, this means that you already finished it and you MUST send it to your Administrator.
                </MDBCardText>


                <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                <select name='status' className='form-control' id="inputStatus">
                  <option selected="selected">
                    Select the Status to Updates
                  </option>
                  <option value="INCOMPLETE">INCOMPLETE</option>
                  <option value="COMPLETED">COMPLETED</option>
                </select>

                <MDBCardFooter background='transparent' border='info'>
                  <p className="text-muted mb-1">INCOMPLETE 'Default': default and when your task isn't done yet</p>
                  <p className="text-muted mb-1">COMPLETE: When you are sure of your task been already done</p>

                  <Link to='/panel/userTask'>
                    <MDBBtn className='me-1' color='danger' style={{ margin: 10 }}>Supress</MDBBtn>
                  </Link>

                  <span></span>


                  <MDBBtn className='me-1' color='primary' onClick={() => statusSend()}>CHANGE!</MDBBtn>


                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </div>

        </MDBContainer>
      </section>
    </>
  )
}
