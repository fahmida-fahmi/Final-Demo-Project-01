import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../pages/Hooks/useAuth/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    // if(loading) {
    //     return <div className="radial-progress" style={{"--value":70}}>70%</div>
    // }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location} } replace></Navigate>
};

export default PrivateRoute;