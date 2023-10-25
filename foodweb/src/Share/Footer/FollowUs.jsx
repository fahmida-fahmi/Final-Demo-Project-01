import React from 'react';
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
const FollowUs = () => {
    return (
        <div className='bg-[#111827] py-24 text-center'>
            <h1 className='capitalize text-3xl'>follow US</h1>
            <p className='text-md py-5'>Join us on social media</p>
            <div className='flex justify-evenly w-1/6 text-3xl mx-auto'>
                <FaFacebookF></FaFacebookF>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
            </div>
        </div>
    );
};

export default FollowUs;