import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneVolume } from 'react-icons/fa';
import ContactCard from './ContactCard';
import SectionTitle from '../../Share/SectionTitle/SectionTitle';

const ContactCardMap = () => {
    const contactCard = [
        {
            id: 1,
            name: 'phone',
            details: '+38 (012) 34 56 789',
            icon: <FaPhoneVolume></FaPhoneVolume>
        },
        {
            id: 2,
            name: 'address',
            details: '+38 (012) 34 56 789',
            icon: <FaMapMarkerAlt></FaMapMarkerAlt>
        },
        {

            id: 3,
            name: 'working hours',
            details: `Mon - Fri: 08:00 - 22:00`,
            icon: <FaClock></FaClock>
        }
    ]
    return (
        <div>
            <SectionTitle
                    subtitle={'visit us'}
                    header={'our location'}
                ></SectionTitle>
            <div className=' grid grid-cols-3 gap-10'>
                    {contactCard.map(card => <ContactCard
                        key={card.id}
                        card={card}
                    ></ContactCard>)}
                </div>
        </div>
    );
};

export default ContactCardMap;