import React, { useContext, useEffect, useRef, useState } from 'react';
import logoImg from '../../../assets/others/authentication2.png'
import bg from '../../../assets/others/authentication.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import { AuthProvider } from '../../Share/Context/Context';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const {logIn, googleSignIN, gitHubSignIn,facebookSignIn} = useContext(AuthProvider)

    const captchaRef = useRef(null)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = (e) =>{
        e.preventDefault()

        const form = e.target 
        const email = form.email.value
        const password = form.password.value
        const userInfo = {password,email}
        console.log(userInfo);

        logIn(email,password)
        .then((result)=>{
            const loggedUser = result.user
            console.log(loggedUser);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You have successfully logged in.',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(from, {replace: true})

        })
        .catch(err =>{
            console.log(err);
        })
    }

    const handleFacebookSignIn = () =>{
        facebookSignIn()
        .then(result =>{
            const loggedUser = result.user 
            console.log(loggedUser);

            alert('User has been successfully created')
        })
        .catch(err =>{
            console.log(err);
        })
    }
    const handleGoogleSignIn = () =>{
        googleSignIN()
        .then(result =>{
            const loggedUser = result.user 
            console.log(loggedUser);
            alert('User has been successfully created')
        })
        .catch(err =>{
            console.log(err);
        })
    }
    const handleGithubSignIn = () =>{
        gitHubSignIn()
        .then(result =>{
            const loggedUser = result.user 
            console.log(loggedUser);

            alert('User has been successfully created')
        })
        .catch(err =>{
            console.log(err);
        })
    }
    const validedCaptcha = (e) =>{
        const user_captcha_value = e.target.value
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
            captchaRef.current.value = ''
        }
        else {
            alert(`captcha didn't match`)
            setDisabled(true)

        }
    }

    return (
        <div className='h-[100vh] flex items-center inter' style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className='grid grid-cols-2 w-2/3 mx-auto items-center border-2 p-20 shadow-xl' style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <img src={logoImg} alt="" />
                <div>
                    <form  className='' onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="">Email</label>
                            <br />
                            <input type="email" name='email' placeholder='Type here' required/>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <br />
                            <input type="password" name='password' placeholder='Enter your password' required/>
                        </div>
                        <div>
                            <label className='label'><LoadCanvasTemplate/></label>
                            <input type="text" placeholder='Type here' onBlur={validedCaptcha}/>
                            {/* <button className='w-full btn btn-primary'>Validated</button> */}
                        </div>
                        {/* <input type='submit' disabled={disabled}  value='Sign In' className='w-full text-center mt-5 p-5 text-white text-xl font-bold rounded-lg cursor-pointer' style={{
                            background: 'rgba(209, 160, 84, 0.70)'
                        }}/> */}
                        <button className='btn btn-primary w-full mt-5' disabled={false}>Sign In</button>
                    </form>
                    <div className='text-[#D1A054] text-center '>
                        <p className='my-3'>New here? <Link to='/register' className='font-bold'>Create a New Account</Link></p>
                        <p >Or sign in with</p>
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
            </div>
        </div>
    );
};

export default Login;