import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import Allsellers from "../Pages/Dashboard/Allsellers/Allsellers";
import Allusers from "../Pages/Dashboard/AllUsers/Allusers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Myorders from "../Pages/Dashboard/MyOrders/Myorders";
import Myproducts from "../Pages/Dashboard/Myproducts/Myproducts";
import Payment from "../Pages/Dashboard/Payment/Payment";
import DisplayEroor from "../Pages/DisplayError/DisplayEroor";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Login/Signin";
import ResaleProductCategory from "../Pages/ResaleProductCategory/ResaleProductCategory";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoute/AdminRoutes";
import PrivateRoute from "./PrivateRoute";
import SellerRoutes from "./SellerRoutes/SellerRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayEroor></DisplayEroor>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><ResaleProductCategory></ResaleProductCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },

            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <DisplayEroor></DisplayEroor>,
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
                path: '/dashboard/allsellers',
                element: <AdminRoutes><Allsellers></Allsellers></AdminRoutes>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoutes><AddProducts></AddProducts></SellerRoutes>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoutes><Myproducts></Myproducts></SellerRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },

        ]
    }
])

export default router