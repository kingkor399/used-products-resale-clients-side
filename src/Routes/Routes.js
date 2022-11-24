import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import ResaleProductCategory from "../Pages/ResaleProductCategory/ResaleProductCategory";

const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            element: <ResaleProductCategory></ResaleProductCategory>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        }
    ]
    }
])

export default router