import React from 'react';

const ContactCard = ({card}) => {
    const {name, details, icon} = card
    return (
        <div >
            <div className='bg-[#D1A054] py-5 text-white flex justify-center text-3xl' >
                {icon}
            </div>
            <div className='border px-8 border-[#E8E8E8] pb-8 border-t-0'>
                <div className='bg-white text-center' style={{background: 'var(--Dark-07, #F3F3F3)'}}>
                <h2 className='text-3xl uppercase text-black pt-10'>{name}</h2>
                <p className='text-black pt-2 pb-10'>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;