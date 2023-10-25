import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { FaOtter } from 'react-icons/fa6';
import Footer from '../Footer/Footer';

const NavBar = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default NavBar;