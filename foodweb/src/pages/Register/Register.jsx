import React, { useContext } from 'react';
import logoImg from '../../../assets/others/authentication2.png'
import bg from '../../../assets/others/authentication.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import { AuthProvider } from '../../Share/Context/Context';
import Swal from 'sweetalert2';
const Register = () => {

    const { register, googleSignIN, gitHubSignIn, facebookSignIn } = useContext(AuthProvider)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const userInfo = { name, password, email }
        console.log(userInfo);



        register(email, password)
            .then((result) => {
                result.user.displayName = name
                const loggedUser = result.user
                console.log(loggedUser);
                fetch('http://localhost:8000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'You have been successfully sign up',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

                navigate('/login')
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIN()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
                fetch('http://localhost:8000/users',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        navigate(from, {replace: true})
                    }
                })

                alert('User has been successfully created')
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                alert('User has been successfully created')
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleGithubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);

                alert('User has been successfully created')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='h-[100vh] flex  items-center inter' style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className='grid grid-cols-2 w-2/3 mx-auto items-center border-2 p-20 shadow-xl' style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div>
                    <form onSubmit={handleRegister}>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Type here' name='name' />

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Type here' name='email' />

                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter your password' name='password' />
                        <button className='w-full mt-5 p-5 text-white text-xl font-bold rounded-lg' style={{
                            background: 'rgba(209, 160, 84, 0.70)'
                        }}>Sign Up</button>
                    </form>
                    <div className='text-[#D1A054] text-center '>
                        <p className='my-3'>Already registered? <Link to='/login' className='font-bold'>Go to log in</Link></p>
                        <p >Or sign up with</p>
                    </div>
                    <div className='flex gap-5 justify-center text-[#444444] mt-3'>
                        <div className='rounded-full p-3 border-2 border-[#444444] cursor-pointer' onClick={handleFacebookSignIn}>
                            <FaFacebookF></FaFacebookF>
                        </div>
                        <div className='rounded-full p-3 border-2 border-[#444444] cursor-pointer' onClick={handleGoogleSignIn}>
                            <FaGoogle></FaGoogle>
                        </div>
                        <div className='rounded-full p-3 border-2 border-[#444444] cursor-pointer' onClick={handleGithubSignIn}>
                            <FaGithub></FaGithub>
                        </div>
                    </div>
                </div>
                <img src={logoImg} alt="" />

            </div>
        </div>
    );
};

export default Register;