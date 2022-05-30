import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactUs from './ContactUs';

import Products from './Products';
import ReChart from './ReChart';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <ReChart></ReChart>
            
        </div>
    );
};

export default Home;