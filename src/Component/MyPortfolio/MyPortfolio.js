import React from 'react';
import { Link } from 'react-router-dom';
import MyPic from '../../Assets/Images/CSC_4393.jpg';
import project1 from '../../Assets/Images/4-14-2020-5-26-43-PM.7788dec95e7c61cea1b0.jpg';
import project2 from '../../Assets/Images/banner2.png';
import project3 from '../../Assets/Images/online-banking_24908-60033.jpg';
import { Card } from 'react-bootstrap';
import './MyPortfolio.css';

const MyPortfolio = () => {
    return (
        <div >
            
            <div className='Myprotfolio'>
                <div className='text-start'>
                    <h1 className='mb-4'>Hi, I'm Mazhar <br></br><span>WebDeveloper</span>
                    </h1>
                    <h4>Md. Mazharul Islam</h4>
                    <p>B.Sc in EEE</p>
                </div>
                <div>
                    <img src={MyPic} className="img-fluid rounded" alt="" />
                </div>
            </div>
            <h2 className='text-primary text-center text-decoration-underline fw-bold mb-5'>Technology I Use for my Project</h2>
            <h3 className='text-center'><span className='text-info'>React </span><span className='text-warning'> JavaScript </span>
            <span className='text-success'> MongoDB </span>
            <span className='text-danger'> ExpressJs </span>
            </h3>
            <h3 className='text-center text-decoration-underline fw-bold text-primary fs-3'>Some of My Works</h3>
            <div className='websiteLink'>
                <div>
                    <Card>
                    <img src={project1} alt="" className='img-fluid' />
                    <button className='btn btn-primary rounded p-3'> <a className='text-decoration-none text-white fw-bold' href='https://sunvi-laptop.web.app/'>Got To Live Website</a> </button>
                    </Card>
                </div>
                <div>
                    <Card>
                    <img src={project2} alt="" className='img-fluid'/>
                    <button className='btn btn-primary rounded p-3'> <a className='text-decoration-none text-white fw-bold' href='https://hungry-aryabhata-5e7666.netlify.app/'>Got To Live Website</a> </button>
                    </Card>
                </div>
                <div>
                    <Card>
                    <img src={project3} alt="" className='img-fluid '/>
                    <button className='btn btn-primary rounded p-3'> <a className='text-decoration-none text-white fw-bold' href='https://zealous-yonath-4adb39.netlify.app/'>Got To Live Website</a> </button>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;