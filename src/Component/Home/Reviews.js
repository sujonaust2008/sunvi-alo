import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import pic1 from '../../Assets/Images/person 1.png';
import pic2 from '../../Assets/Images/person 2.png';
import pic3 from '../../Assets/Images/person 3.png';
import './Home.css';

const Reviews = () => {

    const [comments, setComments] = useState([])
    useEffect(()=>{
        fetch('https://pacific-river-57240.herokuapp.com/userComment')
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])
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

        <div>
            <h2 className='text-primary text-center text-decoration-underline fw-bold my-3 p-2 '>Users Comment </h2>
            <Table>
                <tbody>
                    <tr className='bg-dark text-white rounded-top text-center tableStyleReviews'>
                        <td className='fw-bold'>Name</td>
                        <td className='fw-bold '>Comment</td>
                        <td className='fw-bold '>Ratting</td>
                    </tr>
                </tbody>
            </Table>
            {
                comments.map(comment=><div key={comment._id}>
                    <Table striped>
                        <tbody>
                            <tr className='text-center tableSytleReviews'>
                                <td className='fw-bold'>{comment?.userName}</td>
                                <td className='fw-bold '>{comment?.comment}</td>
                                <td className='fw-bold '>{comment?.ratting}</td>
                               
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>)
            }
        </div>
    </section>
    );
};

export default Reviews;