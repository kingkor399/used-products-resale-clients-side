import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Myorders from "../Pages/Dashboard/MyOrders/Myorders";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Login/Signin";
import ResaleProductCategory from "../Pages/ResaleProductCategory/ResaleProductCategory";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            element: <PrivateRoute><ResaleProductCategory></ResaleProductCategory></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        
        {
            path: '/signin',
            element: <Signin></Signin>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
    ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Myorders></Myorders>
            }
        ]
    }
])

export default router