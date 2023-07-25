import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { TaskTable } from '../../Components/TaskComp/TaskTable.jsx';
import axios from "axios";



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

export const TaskPage = () => {
  const [tasks, setTasks] = useState([])
  const [users, setUsers] = useState([])
  const [depart, setDepart] = useState([{}])

  //modal add
  const [taskA, setTaskA] = useState(false)
  const toggleAtask = () => setTaskA(!taskA)

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getDepartments = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/dep/getDeps',)
      if (data.department) {
        setDepart(data.departament)
      }
    } catch (err) {
      console.error(err)

    }
  }

  const getTask = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/task/get', { headers: headers })
      if (data.gettasks) {
        setTasks(data.gettasks)

      }
    } catch (err) {
      console.error(err)

    }
  }

  const getUsers = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/user/get', { headers: headers })

      if (data.getUsers) {
        setUsers(data.getUsers)

      }
    } catch (err) {
      console.error(err)

    }
  }


  const addTask = async () => {
    try {
      let newTask = {
        desc: document.getElementById('inputTodo').value,
        idUser: document.getElementById('inputUser').value
      }
      const { data } = await axios.post(`http://localhost:3000/task/assign`, newTask, { headers: headers })
      if (data) {
        getTask();
        Swal.fire({
          icon: 'success',
          title: "Time to Work!",
          text: `User was Succesfully assigned to work`
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

  const addThem = async () => {
    try {
      addTask()
      getTask();
      toggleAtask();
    } catch (err) {
      console.error(err)
    }
  }




  useEffect(() => {
    getTask();
    getUsers();
    getDepartments();
  }
    , [])


  return (
    <>

      <div className=''>
        <div className="left binding color">

          <div className="py-1 h-75">
            <MDBCard className="p-4">
              <p></p>
              <MDBTypography tag="h2"><MDBIcon fas icon="clipboard-list fa-2x " /><span>   </span>Task Panel</MDBTypography>
              <p>See all Tasks ASSIGNED to them</p>
              <p></p>

              <MDBBtn color='info' onClick={toggleAtask}>Assign new task</MDBBtn>
            </MDBCard>
          </div>
          <span>  </span>
          <div className="left binding color">
          <MDBTypography note noteColor='info'>
        <strong>Note:</strong>
        <p></p>
        If a task is set to <strong tag='em'>COMPLETED</strong>
        <p></p>
       Must Read it to mark it
      </MDBTypography>
            <br></br>
           
          </div>
        </div></div>
      <TaskTable task={tasks} getT={getTask} />








      {/* add modal */}

      <MDBModal show={taskA} setShow={setTaskA} tabIndex='-1' id='profileTask'>
        <MDBModalDialog size="lg">
          <MDBModalContent>

            <MDBModalHeader className=' bg-success text-white'>
              <MDBModalTitle>Assign Task</MDBModalTitle>
              <MDBModalDialog>Make them work</MDBModalDialog>
              <MDBBtn className='btn-close' color='none' onClick={toggleAtask}></MDBBtn>
            </MDBModalHeader>
            <div className='modal-body p-4'>

              <p className="text-muted mb-1">Here you can assign any employee to work</p>
              <p className="text-muted mb-1">The Status by Default is INCOMPLETE so dont Worry!</p>
              <br></br>

              <form>
                <MDBRow>
                  <MDBCol col='6'>
                    <label htmlFor="inputTodo" className="form-label">Task toDo </label>
                    <input type="text" className="form-control mb-4" placeholder='Clean The roof' id="inputTodo" label='todo' required />
                  </MDBCol>

                  <MDBCol col='6'>
                    <label htmlFor="inputUser" className="form-label" label='user'>Employee to Assign </label>
                    <select className="form-control" id="inputUser">
                      {
                        users.map(({ _id, name, surname, departament }, i) => {
                          return (
                            <option key={i} value={_id}>{name} {surname}</option>
                          )
                        })
                      }
                    </select>
                  </MDBCol>

                </MDBRow>
              </form>
            </div>
            <MDBModalFooter>
              <p className="text-muted mb-1">Your changes will be saved</p>
              <MDBBtn color='primary' onClick={toggleAtask}>
                Close
              </MDBBtn>
              <MDBBtn color='success' onClick={() => { addThem(); toggleAtask(); }}>Assign</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>


  )
}
