import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Components/MainRoot";
import Home from "../Pages/Home/Home"
import Add from "../Pages/Add/Add"

export const Routes = createBrowserRouter([
    {
        path:"",
        element:<MainRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/add",
                element:<Add/>
            }
        ]
    }
])

export default Routes