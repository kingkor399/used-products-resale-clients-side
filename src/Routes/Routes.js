import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import Allsellers from "../Pages/Dashboard/Allsellers/Allsellers";
import Allusers from "../Pages/Dashboard/AllUsers/Allusers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Myorders from "../Pages/Dashboard/MyOrders/Myorders";
import Myproducts from "../Pages/Dashboard/Myproducts/Myproducts";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Login/Signin";
import ResaleProductCategory from "../Pages/ResaleProductCategory/ResaleProductCategory";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoute/AdminRoutes";
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
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproduct',
                element: <Myproducts></Myproducts>
            },
            {
                path: '/dashboard/allselers',
                element: <Allsellers></Allsellers>
            }

        ]
    }
])

export default router