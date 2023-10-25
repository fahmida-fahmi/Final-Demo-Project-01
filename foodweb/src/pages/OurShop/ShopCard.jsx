import React from 'react';
import { Tab, TabList, TabPanel } from 'react-tabs';
import Button from '../../Share/Button/Button';

const ShopCard = ({ menu }) => {
    const { _id, name, recipe, image, category, price } = menu
    // console.log(menu);
    const addToCart = (menu) =>{
        console.log(menu);

    }
    return (
        <div className='bg-[#F3F3F3] pb-10 relative -z-10'>
            <img className='w-full' src={image} alt="" />
            <p className='absolute top-5 right-5 bg-black text-white p-2 rounded-md '>${price}</p>
            <div className='my-5 px-5'>
                <h1 className='text-black text-2xl font-semibold text-center'>{name}</h1>
                <p className='my-3'>{recipe}</p>
            </div>
            <button className='cursor-pointer' onClick={()=> addToCart(name)}>add to cart</button>
                <Button className='cursor-pointer' button={'add to cart'} onclick={()=> addToCart(menu)}></Button>
        </div>
    );
};

export default ShopCard;