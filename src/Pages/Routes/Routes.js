import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import MAin from "../Layout/Main/MAin";
import Login from "../Login/Login";
import ServiceCard from "../ServiceCard/ServiceCard";
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/:id',
                element: <ServiceCard></ServiceCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
]

)
