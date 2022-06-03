import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './UserOrders.css';


const MyAppointments = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://pacific-river-57240.herokuapp.com/orderProduct?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])


    const handleDelete = id =>{
        const arr = orders.filter(item=>item._id !==id);
        setOrders(arr);

        const proceed = window.confirm('Are you want to delete?');
        if(proceed){
            const url = `https://pacific-river-57240.herokuapp.com/orderProduct/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            })
        }
    }

    return (
        <div className='w-75 mx-auto'>
            <h2 className='my-5 text-center text-decoration-underline text-primary'>Your Orders</h2>
            <Table>
                <tbody>
                    <tr className='bg-dark text-white rounded-top text-center tableStyle'>
                        <td className='fw-bold'>Name</td>
                        <td className='fw-bold '>Picture</td>
                        <td className='fw-bold '>Price</td>
                        <td className='fw-bold ' >Quantity</td>
                        <td className='fw-bold '>Delete</td>
                        <td className='fw-bold '>Payment</td>
                    </tr>
                </tbody>
            </Table>
            
            {
                orders.map(addItemsToCart => <div key={addItemsToCart._id}>
                    <Table striped>
                        <tbody>
                            <tr className='text-center tableStyle'>
                                <td className='fw-bold'>{addItemsToCart.productName}</td>
                                <td className='p-0 m-0'><img src={addItemsToCart.img} alt='' className='imgStyle p-0 m-0'></img></td>
                                <td className='fw-bold '>{addItemsToCart.Price}</td>
                                <td className='fw-bold '>{addItemsToCart.userOrder}</td>
                                <td className='fw-bold p-0 m-0'>
                                    <button className='btn rounded px-4 btn-danger' onClick={()=>handleDelete(addItemsToCart._id)}>
                                        X
                                    </button>
                                </td>
                                <td className='fw-bold p-0 m-0'>
                                    <button className='btn btn-primary rounded px-4' onClick={()=>handleDelete(addItemsToCart._id)}>
                                        Payment
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>   
                </div>)
            }

            
        </div>
    );
};

export default MyAppointments;