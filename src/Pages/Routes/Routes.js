import Home from "../Home/Home";
import MAin from "../Layout/Main/MAin";

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
            }
        ]
    }
]

)
