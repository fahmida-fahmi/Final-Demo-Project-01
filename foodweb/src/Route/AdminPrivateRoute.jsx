import React, { useContext } from 'react';
import Context, { AuthProvider } from '../Share/Context/Context';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../pages/useAuth/useAuth';
import useAdmin from '../pages/useAdmin';
import useUsers from '../pages/useUsers/useUsers';

const AdminPrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()

    const [users] = useUsers()
    const adminUser = users.find( adminUser => adminUser.role === 'admin')
    const location = useLocation()

    // if(loading || isAdminLoading) {
    //     return <div className="radial-progress" style={{"--value":70}}>70%</div>
    // }
    if(user && adminUser){
        return children
    }
    return <Navigate to='/' state={{from: location} } replace></Navigate>
};

export default AdminPrivateRoute;