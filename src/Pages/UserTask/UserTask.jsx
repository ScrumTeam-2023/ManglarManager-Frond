
import React, { useState, useEffect,useContext } from 'react'
import Swal from 'sweetalert2'
import { TaskProfileTable } from '../../Components/TaskComp/TaskProfileTable.jsx';
import axios from "axios";
import { AuthContext } from '../..';
import { useNavigate, useParams, Link } from 'react-router-dom';



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

export const UserTask = () => {


    const [tasks, setTasks] = useState([])
    const [profile, setProfile] = useState([])
    const [departs, setDeparts] = useState([])

    //modal add
    const [taskA, setTaskA] = useState(false)
    const toggleAtask = () => setTaskA(!taskA)

    const { setLoggedIn, dataUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const { id } = useParams()

    const headers = {
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')
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

    useEffect(() => {
        getYourTasks();
        getProfile();
        getDeparts();

    }, [])
    return (
        <>
            <div className=''>
                <div className="left binding color">

                    <div className="py-1 h-75">
                        <MDBCard className="p-4">
                            <p></p>
                            <MDBTypography tag="h2"><MDBIcon fas icon="clipboard-check fa-2x " /><span>  </span>Todo Tasks</MDBTypography>
                            <p>See Your Tasks <strong> {profile.name} {profile.surname}</strong></p>
                            <p>Your Current Departament is: <strong>{profile.departament?.name}</strong></p>
                            <h6 className='text-muted'>{profile.departament?._id}</h6>
                        </MDBCard>
                    </div>
                    <span>  </span>
                    <div className="left binding color">
                        <MDBTypography note noteColor='info'>
                            <strong>Reminder:</strong>
                            <p></p>
                            Set your task to <strong tag='em'>COMPLETED</strong>!

                        </MDBTypography>
                        <br></br>

                    </div>
                </div></div>
            <TaskProfileTable task={tasks} getT={getYourTasks} />
        </>
    )
}
