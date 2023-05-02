import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

import RecipePage from "../Layouts/RecipePage/RecipePage";
import Recipes from "../Pages/Recipes/Recipes";

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
        ]
      },

      {
         path: 'recipes',
         element: <RecipePage></RecipePage>,
         children: [
            {
                path: ':id',
                element: <Recipes></Recipes>,
                loader: ({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)
            }
         ]
      }
])

export default router;