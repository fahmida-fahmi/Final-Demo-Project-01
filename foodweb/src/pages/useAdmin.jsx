import React from 'react';
import useAuth from './useAuth/useAuth';
import useAxiosCart from './useCart/useAxiosCart';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user, loading} = useAuth() 
    const [axiosSecure] = useAxiosCart()
    const { data: isAdmin, isLoading : isAdminLoading} =  useQuery({
        queryKey: [ 'admins', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosSecure.get(`/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;