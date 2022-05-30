import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import './Home.css';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurcessInfo = () => {
    const { register, handleSubmit } = useForm();
    const [user]= useAuthState(auth);

    const onSubmit = data => {
        console.log(data);
        // const url = `https://floating-sands-97390.herokuapp.com/service`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res=> res.json())
        // .then(result =>{
        //     console.log(result);
        // } )
        
        const orderNum= parseInt(data.orderQuantity);
        if(orderNum<1000){
            toast('Your order quantity must be equal or more than minimum order quantity');
        }
        if(orderNum>150000){
            toast('Your order quantity must be less then stock quantity');
        }
        console.log(orderNum);
    };


    return (
        <div className='formStyle  mx-auto'>
            <h2 className='text-center my-5 text-decoration-underline text-success'>Place Your Order</h2>
            <form className='d-flex flex-column shadow card p-3 border-info' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder={user?.displayName} {...register("name", { required: true, maxLength: 20 })} />

                <input className='mb-2' placeholder={user?.email} type="email" {...register("email",{ required: true, maxLength: 20 })} />

                <textarea className='mb-2' placeholder='Address' {...register("address",{ required: true, maxLength: 200 })} />

                <input className='mb-2' placeholder='Order ' type="number" {...register("orderQuantity",{ required: true, maxLength: 20 })} />

                <button type="submit" value="Add Service" className='btn btn-info text-white fw-bold'>Buy Now</button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default PurcessInfo;