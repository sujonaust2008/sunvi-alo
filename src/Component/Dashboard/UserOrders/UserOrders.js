import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const MyAppointments = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orderProduct?buyer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])


    const handleDelete = id =>{
        const arr = orders.filter(item=>item._id !==id);
        setOrders(arr);

        const proceed = window.confirm('Are you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/orderProduct/${id}`;
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
            <h2 className='my-5 text-center text-decoration-underline text-primary'>Your Added Services</h2>
            <Table>
                <tbody>
                    <tr className='tableStyle Myitems  bg-dark text-white rounded-top'>
                        <td className='fw-bold'>Name</td>
                        <td className='fw-bold text-center'>Price</td>
                        <td className='fw-bold text-center' >Quantity</td>
                        <td className='fw-bold text-center'>Delete</td>
                    </tr>
                </tbody>
            </Table>
            
            {
                orders.map(addItemsToCart => <div key={addItemsToCart._id}>
                    <Table striped>
                        <tbody>
                            <tr className='tableStyleMyitems '>
                            
                                <td>{addItemsToCart.name}</td>
                                <td className='text-center'>{addItemsToCart.price}</td>
                                <td className='text-center'>{addItemsToCart.quantity}</td>
                                
                                <td className='text-center'>
                                    <button className='btn rounded px-4' onClick={()=>handleDelete(addItemsToCart._id)}>
                                        X
                                    </button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>   
                </div>)
            }

            <div className='text-center mt-5'>
                <Link to='/addItems'>
                 <button className='btn btn-primary rounded px-5 text-white fw-bold fs-3'>Add New Items</button>
                </Link>
            </div>
        </div>
    );
};

export default MyAppointments;