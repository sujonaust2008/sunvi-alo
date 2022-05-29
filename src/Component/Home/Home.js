import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Products from './Products';

const home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ContactUs></ContactUs>
        </div>
    );
};

export default home;