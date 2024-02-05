import { useQuery } from '@tanstack/react-query';
import useAuth from '../useAuth/useAuth';
import useAxiosCart from '../useCart/useAxiosCart';


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