import  {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../useAuth/useAuth';

const useAxiosCart = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = axios.create({
        // baseURL: 'https://demo-project-api.vercel.app',
        baseURL: 'http://localhost:8000',
    })

    useEffect(()=>{
        axiosSecure.interceptors.request.use((config) =>{
            const token = localStorage.getItem('access-token')
            if(token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) =>{
                if(error.response && (error.response.status === 401 ||error.response.status === 403)) {
                    await logOut()
                    navigate('/login')
                    // console.log('hello');
                }
                return Promise.reject(error)
            }
        )
    }, [logOut, navigate, axiosSecure])
    
    return [axiosSecure]
};

export default useAxiosCart;