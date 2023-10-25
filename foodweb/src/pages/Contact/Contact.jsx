import React from 'react';
import SectionTitle from '../../Share/SectionTitle/SectionTitle';
import { GrSend } from "react-icons/gr";
import PageBanner from '../../Share/PageBanner/PageBanner';
import banner from '../../../assets/contact/banner.jpg'
import ContactCardMap from './ContactCardMap';

const Contact = () => {
    
    return (
        <div className=''>
            <PageBanner
                menuBanner={banner}
                header={'contact us'}
            ></PageBanner>
            <div className='w-2/3 mx-auto inter'>

                
                <ContactCardMap></ContactCardMap>
                <SectionTitle
                    subtitle={'send us a message'}
                    header={'contact form'}
                ></SectionTitle>
                <form action="" className='p-20 bg-[#F3F3F3] mb-48'>
                    <div className='grid grid-cols-2 gap-10'>
                        <div>
                            <label htmlFor="">Name*</label> <br />
                            <input type="text" placeholder='Enter your name' />
                        </div>
                        <div>
                            <label htmlFor="">Email*</label> <br />
                            <input type="email" placeholder='Enter your email' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Phone*</label> <br />
                        <input type="number" placeholder='Enter your phone number' />
                    </div>
                    <div>
                        <label htmlFor="">Message*</label> <br />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Write your message here'></textarea>
                    </div>
                    <div className='text-center flex justify-center' >
                        <button className='flex items-center py-3 px-5 text-white font-bold text-xl ' style={{ background: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}>
                            <p className='pe-3 '>Send Message</p>
                            <GrSend className='' style={{ color: 'white' }}></GrSend>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;