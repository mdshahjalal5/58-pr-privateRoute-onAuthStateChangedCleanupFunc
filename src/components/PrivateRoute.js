import React, { useContext } from 'react';
import { AuthContext } from './UserContext';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {

    const { user, isLoading} = useContext(AuthContext);
  if (isLoading){
    return <div>
      <h2>Loading vaijan</h2>
    </div>
  }
  if(user && user.uid){
    return children;
  }
  
    return <Navigate to={'/login'}></Navigate>
  }

export default PrivateRoute;