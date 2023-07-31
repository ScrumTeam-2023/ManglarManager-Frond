import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, createContext, useEffect } from "react";
import App from './App';
import { DashboardPage } from "../src/Pages/Dashboard/DashboarPage"
import { NotFound } from "./Pages/NotFound"
import { LoginPage } from "../src/LoginPage/LoginPage";
import { UserPage } from './Pages/User/UserPage';
import { UserUpdate } from './Pages/User/UserUpdate';
import { ProfilePage } from './Pages/Profile/ProfilePage';
import { ProfileUpdate } from './Pages/Profile/ProfileUpdate';
import { TaskPage } from './Pages/Tasque/TaskPage';
import { TaskStatus } from './Pages/Tasque/TaskStatus';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DepPage } from './Pages/Departaments/DepPage';
import { DepUpdate } from './Pages/Departaments/DepUpdate';
import { CompPage } from './Pages/Complaints/CompPage';
import { UserTask } from './Pages/UserTask/UserTask';
import { UserTaskStatus } from './Pages/UserTask/UserTaskStatus';
import { HomePage } from './Pages/HomePage/HomePage';
import { PanelMain } from './Pages/PanelMain/PanelMain';
import { ContactListPage } from './Pages/ContacListPage/ContactListPage';
import { ChatPage } from './Pages/ChatPage/ChatPage';

export const AuthContext = createContext();

export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({

        name: '',
        surname: '',
        username: '',
        phone: '',
        email: '',
        role: '',

    })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) setLoggedIn(true)


        //mantener sesion
        let user = JSON.parse(localStorage.getItem('lario'))
        if (user) {
            setDataUser(user)
        }
    }, [])

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />,

            children: [
                {
                    path: '/',
                    element: <HomePage />

                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>
                },
                {
                    path: '/panel',
                    element: loggedIn ? <DashboardPage /> : <LoginPage />,
                    children: [
                        {
                            path: 'panel',
                            element: <PanelMain/>
                        },
                        {
                            // user
                            path: 'user',
                            element: <UserPage />,
                        },
                        {

                            path: 'user/update/:id',
                            element: <UserUpdate />

                        },
                        {
                            //profile
                            path: 'profile',
                            element: <ProfilePage />
                        },
                        {
                            path: 'profile/update/:id',
                            element: <ProfileUpdate />
                        },
                        {
                            //task,
                            path: 'task',
                            element: <TaskPage />
                        },
                        {
                            path: 'profile/status/:id',
                            element: <TaskStatus />
                        },
                        {
                            path: 'userTask',
                            element: <UserTask />

                        },
                        {
                            path: 'userTask/status/:id',
                            element: <UserTaskStatus />

                        },
                        //Departamento
                        {
                            path: 'dep',
                            element: <DepPage />
                        },
                        {
                            path: 'dep/update/:id',
                            element: <DepUpdate />
                        },
                        //Quejas (Complaint)
                        {
                            path: 'comp',
                            element: <CompPage />

                        },
                        //CHAT
                        {
                            path: 'list',
                            element: <ContactListPage/>
                        },
                        {
                            path: 'list/chat/:id',
                            element: <ChatPage/>
                        }
                    ]
                }
            ]


        }])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
    )
}