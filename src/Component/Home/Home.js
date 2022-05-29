import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactUs from './ContactUs';

import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;