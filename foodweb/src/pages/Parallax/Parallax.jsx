import React from 'react';
import SectionTitle from '../../Share/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Parallax.css'
const Parallax = () => {
    return (
        <div className='bg-fixed parallax z-0' style={{backgroundImage: `url(${featured})`}}>
            <div className='z-10 absolute'>
            <SectionTitle
                subtitle={'check it out'}
                header={'from our menu'}
            ></SectionTitle>
            <div className='w-2/3 mx-auto grid grid-cols-2 items-center gap-10'>
                <img src={featured} alt="" />
                <div className='inter text-white'>
                    <h3 className='text-2xl'>March 20, 2023</h3>
                    <h2 className='uppercase text-2xl py-2'>WHERE CAN I GET SOME?</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <button className='py-4 px-6 border-b-2 border-white rounded-lg'>read more</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Parallax;