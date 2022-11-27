import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoutes = ({children}) => {
    const { user, loading} = useContext(AuthProvider);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if(loading || isAdminLoading){
        return <Loading></Loading>
    }
    
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;