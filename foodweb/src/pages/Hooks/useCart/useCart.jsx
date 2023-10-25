import { useQuery } from '@tanstack/react-query'
import useAxiosCart from './useAxiosCart';
import useAuth from '../useAuth/useAuth';

const useCart = () => {
    const { user , loading} = useAuth()
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosCart()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:8000/carts?email=${user?.email}`,
        //         {
        //             headers:{
        //                 authorization : `bearer ${token}`
        //             }
        //         }
        //     )
        //     return res.json()
        // },
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            console.log(res.data);
            return res.data
        },
    })
    return [cart, refetch]
};

export default useCart;