import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Main from "../layouts/Main";
import Login from "./Login";
import Registration from "./Registration";
import PrivateRoute from "./PrivateRoute";
import Orders from "./Orders";
 export  const router = createBrowserRouter([
    {
        path:'/', 
        element:<Main></Main>,
        errorElement: <div>
            <h1 className="text-2xl ">Undefined Dada vaiya </h1>
        </div>,
        children:[
            {
                path:'/',
                element: <PrivateRoute><Home></Home></PrivateRoute>,
            },
            {
                path:'/home',
                element: <PrivateRoute><Home></Home></PrivateRoute>,
                loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
            }, 
            {
                path:'/login', 
                element:<Login/>,
            },
            {
                path:'/orders', 
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path:'/registration', 
                element:<Registration></Registration>,
            },
        ]
    }
 ])