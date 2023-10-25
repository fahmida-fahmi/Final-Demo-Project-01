import React from 'react';

const PageBanner = ({menuBanner, header}) => {
    return (
        <div className='h-[800px] w-full  py-60' style={{ backgroundImage: `url(${menuBanner})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className='cinzel p-32  w-1/2 mx-auto flex justify-center items-center flex-col text-white' style={{ background: ' rgba(21, 21, 21, 0.60)' }}>
            <h1 className='text-7xl'>{header}</h1>
            <p className='text-xl'>would you like to try our dish?</p>
        </div>
    </div>
    );
};

export default PageBanner;