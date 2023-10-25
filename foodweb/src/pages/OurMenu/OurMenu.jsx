import React, { useEffect, useState } from 'react';
import menuBanner from '../../../assets/menu/banner3.jpg'
import SectionTitle from '../../Share/SectionTitle/SectionTitle';
import ServiceCard from '../MenuSection/ServiceCard';
import Button from '../../Share/Button/Button';
import dessert from '../../../assets/menu/dessert-bg.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import ItemSingle from './ItemSingle';
import PageBanner from '../../Share/PageBanner/PageBanner';
import UseMenuItem from '../../Share/UseMenuItem/UseMenuItem';


const OurMenu = () => {
    // const [services, setServices] = useState([])
    // const category = ['offered', 'pizza', 'soup', 'salad', 'dessert', 'drinks']
    // useEffect(() => {
    //     fetch('http://localhost:8000/services')
    //         .then(res => res.json())
    //         .then(data => {
    //             const menu = category.map(item => {
    //                 return data.filter(items => items.category === item)
    //             })
    //             setServices(menu)
    //             console.log(menu);
    //         })
    //     console.log(services);
    // }, [])
    const [services] = UseMenuItem()
    // console.log(services);
    // let count = 1

    return (
        <div className='relative'>

            <PageBanner
                menuBanner={menuBanner}
                header={'our menu'}
            ></PageBanner>
            <div className=''>

                <SectionTitle
                    subtitle={`don't miss`}
                    header={`today's offer`}
                ></SectionTitle>


                {
                    services.map((services, index) =><ItemSingle
                        key={index}
                        services={services}
                    ></ItemSingle>)
                }
            </div>


        </div>

    );
};

export default OurMenu;