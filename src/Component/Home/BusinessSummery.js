import React from 'react';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import { BeakerIcon } from '@heroicons/react/solid';



const BusinessSummery = () => {
    return (
        <section >
            <h4 className='text-center fs-3 text-primary text-decoration-underline'>Business Summery</h4>
            <div className='business mx-auto py-5'>
            <div>
                <Card className='border border-info border-2 p-3 fw-bold'><BeakerIcon className="heroIcon"/> <br></br><CountUp className='fw-bold text-danger fs-1' end={100} duration={2}/><br></br>Customer every day</Card>
            </div>
            <div>
                <Card className='border border-info border-2 p-3 fw-bold'>Annual Revenue : <br></br><CountUp className='fw-bold text-danger fs-1' end={120} duration={2}/><br></br>Milion per Year</Card>
            </div>
            <div>
                <Card className='border border-info border-2 p-3 fw-bold'>Annual Revenue : <br></br><CountUp className='fw-bold text-danger fs-1' end={33} duration={2}/><br></br>Thousand subscribe</Card>
            </div>
            <div>
                <Card className='border border-info border-2 p-3 fw-bold'>We have : <br></br><CountUp className='fw-bold text-danger fs-1' end={50} duration={2}/><br></br>Products</Card>
            </div>
            </div>
            
        </section>
    );
};

export default BusinessSummery;