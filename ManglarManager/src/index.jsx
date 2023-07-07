import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, createContext, useEffect} from "react";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboarPage } from "./Pages/Dashboard/DashboarPage";
import {NotFound} from "./Pages/NotFound"
import { LoginPage } from "../src/LoginPage/LoginPage";


export const AuthContext = createContext();

export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser, setDataUser] = useState({

        name: '',
        surname: '',
        username: '',
        phone: '',
        email: '',
        role:'',
        
    })

        useEffect(()=> {
            let token = localStorage.getItem('token')
            if(token) setLoggedIn(true)


            //mantener sesion
            let user = JSON.parse(localStorage.getItem('lario'))
                if(user){
                    setDataUser(user)
                }
        }, [])

        const routes = createBrowserRouter([
            {
                path: '/',
                element: <App/>,
                errorElement: <NotFound/>,

                children:[
                    {
                        path:'/login',
                        element: <LoginPage></LoginPage>
                    },
                    {
                        path:'/panel',
                        element: loggedIn ? <DashboarPage/> : <LoginPage/>,
                        children: [
                           
                           ]
                    }
                ]


        }])

        return (
            <AuthContext.Provider value={{loggedIn,setLoggedIn,dataUser,setDataUser}}>
                <RouterProvider router={routes}/>
            </AuthContext.Provider>
          )
        }