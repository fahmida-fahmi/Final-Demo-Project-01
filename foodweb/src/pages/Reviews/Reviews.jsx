import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Share/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { FaQuoteLeft } from "react-icons/fa";
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className='w-2/3 mx-auto my-32'>
            <SectionTitle
                subtitle={'what our clients say'}
                header={'testimonials'}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='flex flex-col justify-center items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className='text-6xl my-10'></FaQuoteLeft>
                                <p className='text-center px-32'>{review.details}</p>
                                <h1 className='text-3xl py-3 text-[#cd9003]'>{review.name}</h1>
                            </div>
                        </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;