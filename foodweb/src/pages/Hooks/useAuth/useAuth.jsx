import  { useContext } from 'react';
import { AuthProvider } from '../../Share/Context/Context';

const useAuth = () => {
    const auth = useContext(AuthProvider)

    return auth
};

export default useAuth;