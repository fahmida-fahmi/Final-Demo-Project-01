import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Share/SectionTitle/SectionTitle';
import ServiceCard from './ServiceCard';
import Button from '../../Share/Button/Button';
const MenuSection = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/services')
            .then(res => res.json())
            .then(data => {
                // const handleBtn = () =>{
                //     setServices(data)
                // }
                const popularItem = data.filter(popular => popular.category === 'popular')
                setServices(popularItem)
            })
    }, [])
    return (
        <div className='w-2/3 mx-auto pb-5'>
            <SectionTitle
                subtitle={'check it out'}
                header={'from our menu'}
            ></SectionTitle>
            <div className=' grid grid-cols-2 gap-10'>
                {services.map(service => <ServiceCard
                    key={service._id}
                    service={service}

                ></ServiceCard>)}
            </div>
            <Button
            button={'view full menu'}
            ></Button>



        </div>
    );
};

export default MenuSection;