import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthProvider } from '../../Share/Context/Context';
import useAxiosCart from '../useCart/useAxiosCart';
import useAuth from '../useAuth/useAuth';

const useBookings = () => {
    const { user , loading} = useAuth()
    const [axiosSecure] = useAxiosCart()
    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?email=${user?.email}`)
            console.log(res.data);
            return res.data
        },
    })
    return [booking, refetch]
};

export default useBookings;