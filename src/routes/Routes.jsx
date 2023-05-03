import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

import RecipePage from "../Layouts/RecipePage/RecipePage";
import Recipes from "../Pages/Recipes/Recipes";
import Blog from "../Pages/Blog/Blog";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefData')
                
                
            },

            {
                path: 'blog',
                element: <Blog></Blog>
            },

            {
                path: 'login',
                element: <Login></Login>
            },

            {
                path: 'register',
                element: <Register></Register>
            }

            
        ]
      },

      {
         path: 'recipes',
         element: <RecipePage></RecipePage>,
         children: [
            {
                path: ':id',
                element: <PrivateRoute> <Recipes></Recipes></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)
            }
         ]
      },

      

      
])

export default router;