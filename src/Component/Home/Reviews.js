import React from 'react';
import pic1 from '../../Assets/Images/person 1.png';
import pic2 from '../../Assets/Images/person 2.png';
import pic3 from '../../Assets/Images/person 3.png';

const Reviews = () => {
    return (
        <section className="happy-clint container-fluid mx-auto py-5 w-75">
        <h2 className="text-center fw-bold pb-4 text-decoration-underline text-primary">Happy Clients says</h2>
        <div className="row gx-5 pt-3 text-center align-items-center justify-content-between">
            <div className="col-sm-12 col-md-12 col-lg-4 rounded-3">
                <div className="shadow py-5">
                    <p className="text-wrap w-75 mx-auto">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                    <img src={pic1} alt=""/>
                    <p className="fw-bold pt-2">Regina Miles</p>
                    <p>Banker</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4  rounded-3">
                <div className="shadow py-5">
                    <p className="text-wrap  w-75 mx-auto">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                    <img src={pic2} alt=""/>
                    <p className="fw-bold pt-2">Jone Drake</p>
                    <p>Banker</p>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4  rounded-3">
                <div className="shadow py-5">
                    <p className="text-wrap  w-75 mx-auto">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                    <img src={pic3} alt=""/>
                    <p className="fw-bold pt-2">Cret Yater</p>
                    <p>Banker</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Reviews;