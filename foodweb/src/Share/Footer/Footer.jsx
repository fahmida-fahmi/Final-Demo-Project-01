import React from 'react';
import Copy from './Copy';
import Contact from './Contact';
import FollowUs from './FollowUs';

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-2'>
                <Contact></Contact>
                <FollowUs></FollowUs>
            </div>
            <Copy></Copy>
        </div>
    );
};

export default Footer;