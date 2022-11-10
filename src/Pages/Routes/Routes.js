import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import MAin from "../Layout/Main/MAin";
import Login from "../Login/Login";
import Myreviews from "../Myreviews/Myreviews";
import ServiceCard from "../ServiceCard/ServiceCard";
import Services from "../Services/Services";
import Signup from "../Signup/Signup";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

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
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><Myreviews></Myreviews></PrivateRoutes>
            },
        ]
    }, { path: '*', element: <div className="text-5xl text-center text-error-content my-36"><h1>404! Check and try again</h1></div> }
]

)
