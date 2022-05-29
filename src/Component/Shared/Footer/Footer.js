import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerSection'>
            <div className='footerStyle'>
        <div>
            <h3 className='text-decoration-underline'>Your Order</h3>
            <h6>Track Order</h6>
            <h6>Delivery</h6>
            <h6>Click & Collect</h6>
            <h6>Online returns</h6>

        </div>
        <div>
            <h3 className='text-decoration-underline'>Security & payment</h3>
            <h6>Security & payment</h6>
            <h6>Delivery</h6>
            <h6>Click & Collect</h6>
            <h6>Online returns</h6>

        </div>
        <div>
            <h3 className='text-decoration-underline'>Stores</h3>
            <h6>Store finder</h6>
            <h6>Current mailers</h6>
            <h6>Competitions</h6>
            <h6>Store returns</h6>

        </div>
        <div>
            <h3 className='text-decoration-underline'>Customer Services</h3>
            <h6>FAQs</h6>
            <h6>Price promise</h6>
            <h6>Contact us</h6>
            <h6>Careers</h6>

        </div>
    </div>
        </div>
    );
};

export default Footer;