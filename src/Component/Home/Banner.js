import React from 'react';
import BannerImg from '../../Assets/Images/Banner.jpg';
import './Home.css';
const Banner = () => {
    return (
        <div className='bannerStyle'>
            <div>
                <h1>Unbelievable Visual <br></br>& Performance</h1>
                <p>Want a computer that is smart, secure, and ready when you are? It's time for come to us.All designed to run fast and stay fast, We provide with the best of Google built-in.</p>
                <button className='btn btn-primary rounded-3 px-3 '>Buy Now</button>
            </div>
            <div>
                <img src={BannerImg} className="img-fluid bannerImg" alt="" />
            </div>
        </div>
    );
};

export default Banner;