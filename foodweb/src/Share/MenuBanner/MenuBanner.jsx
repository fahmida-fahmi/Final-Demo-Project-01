import React from 'react';
import banner from '../../../assets/home/chef-service.jpg'
const MenuBanner = ({banner,name}) => {
    return (
        <div className='w-100% h-[600px] py-20 mb-20' style={{background: `url(${banner})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
           <div className='cinzel p-32  w-1/2 mx-auto flex justify-center items-center flex-col text-white' style={{ background: ' rgba(21, 21, 21, 0.60)' }}>
                <h1 className='text-5xl cinzel'>{name}</h1>
                <p className='inter text-lg text-center py-4'>
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>

        </div>
    );
};

export default MenuBanner;