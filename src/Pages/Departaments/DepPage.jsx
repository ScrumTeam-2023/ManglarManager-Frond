import { AuthContext } from '../..';
import React, { useState, useEffect, useContext } from 'react'
import Swal from 'sweetalert2'
import axios from "axios";
import { DepartamentTable } from '../../Components/DepartComp/DepartamentTable';
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
} from 'mdb-react-ui-kit';





export const DepPage = () => {
    //const { setLoggedIn, dataUser } = useContext(AuthContext)
    const [depart, setDepart] = useState([])


    const [departamentA, setDepartamentA] = useState(false)
    const toggleADepar = () => setDepartamentA(!departamentA)

    const getDepartments = async () => {
        try {
          const { data } = await axios.get('http://localhost:3000/dep/getDeps')
          if (data.department) {
            setDepart(data.department)
          }
        } catch (err) {
          console.error(err)
    
        }
    }

    const addDepartament = async()=> {
        try {
        let Depa ={
            name: document.getElementById('inputName').value,
            desc: document.getElementById('inputDesc').value
        }
        const {data} = await axios.post(`http://localhost:3000/dep/saveDep`, Depa)
        if(data){
            getDepartments();
           Swal.fire({
              icon: 'success',
              title: "Time to Work!",
              text: `User was Succesfully assigned to work`
              ,
    
              timer: 4000
    
            })
        }
    }catch (err) {
        console.log(err)
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

    const addThem = async() =>{
        addDepartament();
        getDepartments();
    }
    useEffect(()=>{
        getDepartments();

    },[])

    return (
        <>

            <br></br>
            <div className='left binding color'>
            <MDBCard className="p-4">
                <p></p>
                <MDBTypography variant='h1'>Welcome to:</MDBTypography>
                <MDBTypography tag="h2"><MDBIcon fas icon="industry fa-2x " /><span>   </span>Departaments Panel</MDBTypography>
                <p>See all The Departaments</p>
                <p></p>
                <MDBBtn color='info' onClick={toggleADepar} >Create new Departament</MDBBtn>
            </MDBCard>
            </div>
            <span> </span>
            <br></br>
            <br></br>
           {// <TaskTable  />
           }
            <DepartamentTable depart={depart} getD={getDepartments}/>

            <MDBModal show={departamentA} setShow={setDepartamentA} tabIndex='-1' id='profileDep'>
        <MDBModalDialog size="lg">
          <MDBModalContent>

            <MDBModalHeader className=' bg-success text-white'>
              <MDBModalTitle>Assign Task</MDBModalTitle>
              <MDBModalDialog>Make them work</MDBModalDialog>
              <MDBBtn className='btn-close' color='none' onClick={toggleADepar}></MDBBtn>
            </MDBModalHeader>
            <div className='modal-body p-4'>
              <form>
                <MDBRow>
                  <MDBCol col='6'>
                    <label htmlFor="inputName" className="form-label">Name </label>
                    <input type="text" className="form-control mb-4" placeholder='Clean The roof' id="inputName" required />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol col='6'>
                    <label htmlFor="inputDesc" className="form-label">Description </label>
                    <input type="text" className="form-control mb-4" placeholder='Clean The roof' id="inputDesc" required />
                  </MDBCol>
                </MDBRow>
              </form>
            </div>
            <MDBModalFooter>
              <p className="text-muted mb-1">Your changes will be saved</p>
              <MDBBtn color='primary' onClick={toggleADepar}>
                Close
              </MDBBtn>
              <MDBBtn color='success' onClick={() => { addThem(); toggleADepar(); }}>Agregar</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
        </>
    )
}
