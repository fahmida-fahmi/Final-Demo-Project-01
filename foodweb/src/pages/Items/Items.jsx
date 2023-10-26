import SectionTitle from '../../Share/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import '../Home/Banner.css'

const Items = () => {
    
    return (
        <div className='w-2/3 mx-auto my-12'>
            <SectionTitle
                subtitle={'From 11:00am to 10:00pm'}
                header={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide1} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>Salad</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide2} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>pizzas</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide3} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>Soups</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide4} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>desserts</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide5} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>Salad</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide1} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>Salad</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide2} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>pizzas</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide3} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>Soups</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide4} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>desserts</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '270px' }}>
                    <img src={slide5} alt="" />
                    <p className='cinzel text-3xl uppercase absolute bottom-5 text-gray-200 left-[30%]'>Salad</p>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Items;