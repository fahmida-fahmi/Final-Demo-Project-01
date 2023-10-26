import { useQuery } from '@tanstack/react-query';
import useAuth from '../useAuth/useAuth';
import useAxiosCart from '../useCart/useAxiosCart';


const usePayments = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosCart()

    const {data: payments = [], refetch} = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data
        }
    })
    return [payments, refetch]
};

export default usePayments;