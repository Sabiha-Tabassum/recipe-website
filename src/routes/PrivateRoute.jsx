import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return   <Spinner  animation="border" variant="dark" />
    }

   if(user){
     return children;
   }
   return <Navigate state={{from: location}} to= '/login' replace></Navigate>;
};

export default PrivateRoute;