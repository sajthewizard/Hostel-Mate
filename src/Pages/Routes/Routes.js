import Home from "../Home/Home";
import MAin from "../Layout/Main/MAin";
import Login from "../Login/Login";
import Services from "../Services/Services";
import Signup from "../Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MAin></MAin>
        ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/Blog',
                element: <Services></Services>
            }
        ]
    }
]

)
