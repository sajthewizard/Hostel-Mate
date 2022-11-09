import Home from "../Home/Home";
import MAin from "../Layout/Main/MAin";
import Login from "../Login/Login";
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
            }
        ]
    }
]

)
