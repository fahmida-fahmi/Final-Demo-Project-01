import React from 'react';
import cardImg from '../../../assets/dashboard/Rectangle 9.png'

const Card = () => {
    return (
        <div className='w-2/3 mx-auto relative text-black my-20'>
            <img src={cardImg} alt="" />
            <div className='my-20 mx-36 bg-white p-32 absolute top-0'>
                <h1 className='text-5xl text-center cinzel'>Bistro Boss</h1>
                <p className='text-center pt-3 inter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Card;