import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import useSeller from '../../hooks/useSeller';
import Loading from '../../Pages/Shared/Loading/Loading';

const SellerRoutes = ({children}) => {
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation();
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    if(loading || isSellerLoading){
        return <Loading></Loading>
    }

    if(user && isSeller){
        return children
    }
    return <Navigate to='/signin' state={{from: location}} replace></Navigate>
};

export default SellerRoutes;