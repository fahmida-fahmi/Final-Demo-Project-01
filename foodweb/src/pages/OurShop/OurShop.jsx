import React from 'react';
import bannerShop from '../../../assets/shop/banner2.jpg'
import PageBanner from '../../Share/PageBanner/PageBanner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from './ShopCard';
import UseMenuItem from '../../Share/UseMenuItem/UseMenuItem';
const OurShop = () => {
    const [newServices] = UseMenuItem()
    const category = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
    console.log(newServices);
    console.log(category);


    return (
        <div>
            <PageBanner
                menuBanner={bannerShop}
                header={'our shop'}
            ></PageBanner>
            <div className='w-2/3 mx-auto my-32 '>
                <Tabs>
                    <TabList className='uppercase sticky top-16 flex justify-center bg-orange-500 '>
                        {
                            category.map(name => <Tab key={category.indexOf(name)}>{name}</Tab>)
                        }
                    </TabList>
                    {
                        newServices.map(card => <TabPanel
                            key={card._id}
                        >
                            <div className='grid grid-cols-3 gap-5 pt-10'>
                                {
                                    card.map(menu => <ShopCard
                                        key={menu._id}
                                        menu={menu}
                                    ></ShopCard>)
                                }
                            </div>
                        </TabPanel>)
                    }
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;