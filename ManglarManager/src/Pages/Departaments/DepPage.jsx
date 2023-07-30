import { AuthContext } from '../..';
import React, { useState, useEffect, useContext } from 'react'
import Swal from 'sweetalert2'
import axios from "axios";
import { DepartamentTable } from '../../Components/DepartComp/DepartamentTable';
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
    MDBTableHead

} from 'mdb-react-ui-kit';




export const DepPage = () => {
    //const { setLoggedIn, dataUser } = useContext(AuthContext)
    const [depart, setDepart] = useState([])
    const [departamentA, setDepartamentA] = useState(false)
    const toggleADepar = () => setDepartamentA(!departamentA)

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

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

    const addDepartament = async () => {
        try {
            let Depa = {
                name: document.getElementById('inputName').value,
                desc: document.getElementById('inputDesc').value
            }
            const { data } = await axios.post(`http://localhost:3000/dep/saveDep`, Depa, { headers: headers })
            if (data.message) {
                getDepartments();
                Swal.fire({
                    icon: 'success',
                    title: "Time to Work!",
                    text: `Departament was Created!`
                    ,

                    timer: 4000

                })
            }
        } catch (err) {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: " Oh oh!",
                text: err.message,
                timer: 100000,
                showConfirmButton: false
            })
        }
    }

    const addThem = async () => {
        addDepartament();
        getDepartments();
    }
    useEffect(() => {
        getDepartments();

    }, [])

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
            <DepartamentTable departs={depart} getD={getDepartments} />

            <MDBModal show={departamentA} setShow={setDepartamentA} tabIndex='-1' id='profileDep'>
                <MDBModalDialog size="lg">
                    <MDBModalContent>

                        <MDBModalHeader className=' bg-success text-white'>
                            <MDBModalTitle>Make a Departament</MDBModalTitle>
                            <MDBModalDialog>Create a departament for Our pretty Users!</MDBModalDialog>
                            <MDBBtn className='btn-close' color='none' onClick={toggleADepar}></MDBBtn>
                        </MDBModalHeader>
                        <div className='modal-body p-4'>
                            <form>
                                <MDBRow>
                                    <MDBCol col='6'>
                                        <label htmlFor="inputName" className="form-label">Name</label>
                                        <p className='text-muted'>Max of 50 text</p>
                                        <input type="text" className="form-control mb-4" placeholder='Cleaning' id="inputName" required />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol col='6'>
                                        <label htmlFor="inputDesc" className="form-label">Description </label>
                                        <MDBTextArea label='Message' id='inputDesc' placeholder='Maximum of 100 text' rows={5} maxLength="200" minLength='5' required />
                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </div>
                        <MDBModalFooter>
                            <p className="text-muted mb-1">Your changes will be saved</p>
                            <MDBBtn color='seconadry' onClick={toggleADepar}>
                                Close
                            </MDBBtn>
                            <MDBBtn color='success' onClick={() => { addThem(); toggleADepar(); }}>Create!</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}
