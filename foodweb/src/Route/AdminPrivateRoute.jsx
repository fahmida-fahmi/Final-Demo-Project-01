
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../pages/Hooks/useAuth/useAuth';
import useAdmin from '../pages/Hooks/useAdmin';
import useUsers from '../pages/Hooks/useUsers/useUsers';

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