import React from 'react';
import Banner from './Banner';
import Items from '../Items/Items';
import Card from '../Card/Card';
import MenuSection from '../MenuSection/MenuSection';
import CallUs from '../CallUs';
import Parallax from '../Parallax/Parallax';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Card></Card>
            <MenuSection></MenuSection>
            <CallUs></CallUs>
            <Parallax></Parallax>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;