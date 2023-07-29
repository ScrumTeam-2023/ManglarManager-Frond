import React, { useContext, useEffect, useState } from 'react'
import './ProfileStyle.css'
import { AuthContext } from '../..';
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
  MDBTextArea

} from 'mdb-react-ui-kit';
import axios from 'axios';
import { TaskProfileTable } from '../../Components/TaskComp/TaskProfileTable';

export const ProfilePage = () => {

  const [profile, setProfile] = useState([])
  const [departs, setDeparts] = useState([])
  const [comp, setCompl] = useState({})
  const [tasks, setTasks] = useState({})

  //modal 1 Complaiment
  const [compModal, setCompModal] = useState(false)
  const toggleComp = () => setCompModal(!compModal);
  //modal 2 EditUsername
  const [upModal, setUpModal] = useState(false)
  const toggleUpModal = () => setUpModal(!upModal)

  //DisableButton
  const [buttonDisable, setButtonDisable] = useState(
    localStorage.getItem('isButtonDisabled') === 'true' || false)

  const handleButtonClick = () => {
    setButtonDisable(true);

    const cooldownTime = 20000;
    const lastClickTime = Date.now();
    localStorage.setItem('lastClickTime', lastClickTime.toString());
    setTimeout(() => {
      setButtonDisable(false);

      localStorage.removeItem('lastClickTime');
    }, cooldownTime);
  };


  const { setLoggedIn, dataUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const { id } = useParams()

  const headers = {
    'Content-type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }



  const getProfile = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/user/getProfile', { headers: headers })
      if (data.findToken) {
        setProfile(data.findToken)
        console.log(data.findToken)
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


  const addComplaiment = async () => {
    try {
      let Addcomp = {
        title: document.getElementById('inputTitle').value,
        desc: document.getElementById('inputDesc').value,
        departament: document.getElementById('inputDep').value
      }

      const { data } = await axios.post('http://localhost:3000/comp/addComp', Addcomp, { headers: headers })
      if (data) {

        Swal.fire({
          icon: 'success',
          title: " Complaiment Submited succesfully!",
          text: `We will be working on you Complaiment\n `
          ,

          timer: 4000,
          showCancelButton: false

        })
      }
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: 'error',
        title: "A rat ate the Line!",
        text: `Complaiment wasn't Submited succesfully!`
        ,

        timer: 4000,
        showCancelButton: false

      })

    }
  }

  const getYourTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/task/LoginTask', { headers: headers })
      if (data.findTask) {
        setTasks(data.findTask)

      }
    } catch (err) {
      console.error(err)

    }
  }

  const addThem = async () => {
    addComplaiment();
    toggleComp();
  }


  const complaintVerify = async () => {
    handleButtonClick();
    toggleComp()
  }


  useEffect(() => {
    getYourTasks();
    getProfile();
    getDeparts();

    const lastClickTime = localStorage.getItem('lastClickTime');
    if (lastClickTime) {
      const currentTime = Date.now();
      const cooldownTime = 20000;
      const timeSinceLastClick = currentTime - parseInt(lastClickTime, 10);
      if (timeSinceLastClick < cooldownTime) {
        // If cooldown hasn't finished yet, disable the button
        setButtonDisable(true);

        // Start the remaining cooldown time
        const remainingCooldownTime = cooldownTime - timeSinceLastClick;
        setTimeout(() => {
          setButtonDisable(false);
          localStorage.removeItem('lastClickTime');
        }, remainingCooldownTime);
      }
    }

  }, [])

  return (
    <>

      <section className="vh-100" style={{ backgroundColor: '#B3C6CF' }}>


        <MDBContainer className="py-1 h-75">

          <MDBRow className="justify-content-center align-items-center h-100">

            <MDBCol lg="6" className="mb-4 mb-lg-0">


              {dataUser.role !== "ADMIN" && (
                <>
                  {buttonDisable == true && (<p>You have to wait a Certain amount of time to use "Make a Complaiment" again</p>)}


                  <MDBBtn className='btn-md btn-warning' onClick={complaintVerify} disabled={buttonDisable}><MDBIcon fas icon="headset ms-1" /> Make a Complainment...</MDBBtn>

                  <span>  </span>

                  <Link to={`update/${profile._id}`}>
                    <button className='btn btn-warning'>
                      <MDBIcon fas icon="cogs" />
                      <span>Edit Profile</span>
                    </button>
                  </Link>


                </>
              )}
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>

                <MDBRow className="g-0">





                  {dataUser.role !== "ADMIN" && (
                    <>
                      <MDBCol md="4"
                        className="gradient-custom text-center text-white"
                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                        <br></br>
                        <MDBTypography tag="h5">Profile</MDBTypography>
                        <MDBCardText>Manglar Employee:</MDBCardText>
                        <MDBTypography tag="h5">{profile.name} {profile.surname}</MDBTypography>
                        <br></br>

                        <MDBIcon fas icon="user-circle fa-10x" className="rounded-ci  rcle" style={{ width: '150px' }} />

                      </MDBCol>
                    </>
                  )}


                  {dataUser.role === "ADMIN" && (
                    <>
                      <MDBCol md="4"
                        className="admin-gradient text-center text-white"
                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                        <br></br>
                        <MDBTypography tag="h5">Profile</MDBTypography>
                        {dataUser.role === "ADMIN" && (
                          <>
                            <MDBCardText>Manglar Superior :</MDBCardText>

                          </>
                        )}

                        {dataUser.role !== "ADMIN" && (
                          <>
                            <MDBCardText>Manglar root :</MDBCardText>

                          </>
                        )}
                        <MDBTypography tag="h5">{profile.name} {profile.surname}</MDBTypography>
                        <br></br>
                        <br></br>
                        <MDBIcon fas icon="user-circle fa-10x" className="rounded-ci  rcle" style={{ width: '150px' }} />

                      </MDBCol>
                    </>
                  )}


                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography note noteColor='info' tag="h6">Primary Info</MDBTypography>




                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">

                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">{profile.email}</MDBCardText>
                        </MDBCol>

                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">{profile.phone}</MDBCardText>
                        </MDBCol>

                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Username</MDBTypography>
                          <MDBCardText className="text-muted">{profile.username}</MDBCardText>
                        </MDBCol>

                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Age</MDBTypography>
                          <MDBCardText className="text-muted">{profile.age} Years old</MDBCardText>
                        </MDBCol>




                      </MDBRow>
                      <MDBTypography note noteColor='info' tag="h6">Misc</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">

                        {dataUser.role === "ADMIN" && (
                          <>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Role</MDBTypography>
                              <MDBCardText style={{ borderRadius: 3 }} className="admin-gradient text-white">  {profile.role}   <MDBIcon fas icon="user-tie" className='me-2 text-danger' /> </MDBCardText>
                            </MDBCol>

                          </>
                        )}

                        {dataUser.role !== "ADMIN" && (
                          <>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Role</MDBTypography>
                              <MDBCardText className="text-muted">{profile.role}</MDBCardText>
                            </MDBCol>

                          </>
                        )}

                        {dataUser.role !== "ADMIN" && (
                          <>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Department</MDBTypography>
                              <MDBCardText className="text-muted">{profile.departament?.name}</MDBCardText>
                            </MDBCol>
                          </>
                        )}
                        
                      </MDBRow>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">PID</MDBTypography>
                        <MDBCardText className="text-muted">{profile.DPI}</MDBCardText>
                      </MDBCol>


                    </MDBCardBody>
                  </MDBCol>

                </MDBRow>
                <br></br>



              </MDBCard>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {dataUser.role !== "ADMIN" && (
          <>
            <div className='d-flex p-2 justify-content-center' style={{ backgroundColor: '#B3C6CF' }}>
              <MDBCard  >
                <TaskProfileTable task={tasks} getT={getYourTasks} />
              </MDBCard>
            </div>

          </>
        )}
      </section>

      {/* Complaint Modal */}
      <MDBModal show={compModal} setShow={setCompModal} tabIndex='-1' id='complaint'>
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader className=' bg-danger text-white'>
              <MDBIcon fas icon="headset" />
              <MDBModalTitle>Make an Complaint</MDBModalTitle>
              <MDBModalDialog>Here, You can give any complaint or incident inside your corporation...</MDBModalDialog>

            </MDBModalHeader>
            <div className='modal-body p-4' style={{ alignContent: 'fixed' }}>


              <form>
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBModalBody>Title</MDBModalBody>
                    <p className="text-muted mb-1">Type what happend or the main Situation</p>
                    <span> </span><MDBInput label='title' placeholder='A rat stole my Lunch' id='inputTitle' type='text' />
                  </MDBCol>


                  <MDBCol col='6'>
                    <MDBModalBody>Department</MDBModalBody>
                    <label htmlFor="inputDep" className="form-label">Respective Department</label>
                    <select className="form-control" id="inputDep">
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
                <MDBRow>
                  <MDBCol col='6' >
                    <MDBModalBody>Description</MDBModalBody>
                    <p className="text-muted mb-1">Type about the incident or inconvinience</p>
                    <MDBTextArea label='Message' id='inputDesc' placeholder='Maximum of 200 text' rows={5} maxLength="200" minLength='5' />
                  </MDBCol>
                </MDBRow>
              </form>


              <br></br>
              <p className="text-muted mb-1">WARINIG: Abusing this
                system will result on a Temporal Disable of using it or A Permanent Disable</p>
            </div>

            <MDBModalFooter>

              <br></br>
              <MDBBtn color='secondary' onClick={() => { toggleComp() }}>
                Close
              </MDBBtn>
              <MDBBtn color='danger' onClick={() => { toggleComp(); addThem(); }} >Send</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* End Complaint modal */}



      {/* Tasque Status */}










    </>
  )
}
