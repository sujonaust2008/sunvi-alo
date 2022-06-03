import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import './Home.css';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurcessInfo = () => {
    const { register, handleSubmit } = useForm();
    const [user]= useAuthState(auth);
    const [order, setOrder] = useState();

    const {productId} = useParams();
    const [productDetail, setproductDetail]= useState({});
     
    useEffect(()=>{
        const URL = `https://pacific-river-57240.herokuapp.com/manufacturer/${productId}`;
        fetch(URL)
        .then(res=>res.json())
        .then(data=>setproductDetail(data))
    },[])
   
    console.log(setOrder);
    const handleOrder = event => {
        
        // console.log(data);
        event.preventDefault();
        const OrderQuantity = event.target.orderQuantity.value;
        const newOrder = parseInt(OrderQuantity);
        const orderNum= newOrder;
        if(orderNum<1000 || orderNum>150000){
            toast('Your order quantity must be between minimum order and stock quantity');
            //  const btnStyle = document.getElementById('submitButton').style.disabled = 'true'; 
            //  console.log(btnStyle);
        }
        else{
            const orderProduct = {
                userName: user.name,
                userEmail: user.email,
                productName: event.target.productName.value,
                userPhone: event.target.Phone.value,
                userOrder : event.target.orderQuantity.value,
                description: productDetail.description,
                img: productDetail.img,
                Price: productDetail.Price
            }
            // https://pacific-river-57240.herokuapp.com
            fetch('https://pacific-river-57240.herokuapp.com/orderProduct', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderProduct)
            })
            .then(res=> res.json())
            .then(result =>{
                console.log(result);
                toast('Your order Successfully added ');
                
            } )

            
        //     const oldQuantity = parseInt(productDetail.stock);
        //     const name= productDetail.name;
        //     const img=productDetail.img;
        //     const description = productDetail.description;
        //     const minimumOrder= productDetail.minimumOrder;
        //     const Price = productDetail.Price;
        //     const stock = oldQuantity-orderNum;
            
        //     const update = { name, img, description, minimumOrder, Price,stock };
        //     console.log(update);
        //     const URL = `https://pacific-river-57240.herokuapp.com/manufacturer/${productId}`;
        //     console.log(URL);
        //     fetch(URL, {
        //         method: 'PUT',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(update)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //         alert('Product delivered successfully')
        //             console.log('success', data);
        //             setproductDetail(data);
                    
        //         })
        }   
       
    };


    return (
        <div className='formStyle  mx-auto'>
            <h2 className='text-center my-2 text-decoration-underline text-success'>Place Your Order</h2>
                <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    <label className='text-info fw-bold'>Your Name</label>
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="py-2 my-2 w-100 fw-bold text-primary" /><br></br>
                    <label className='text-info fw-bold'>Your Email</label>
                    <input type="email" name="email" disabled value={user?.email || ''} className="w-100 fw-bold py-2 my-2 text-primary" /><br></br>
                    <label className='text-info fw-bold'>Product Name</label>
                    <input type="text" name="productName" disabled value={productDetail?.name} className="w-100 fw-bold py-2 my-2 text-primary" /><br></br>
                    
                    <label className='text-info fw-bold'>Enter Your Phone No</label>
                    <input type="number" name="Phone" placeholder="Phone Number" className="w-100 py-2 my-2" /><br></br>
                    <label className='text-info fw-bold'>Enter order quantity</label>

                    <input type="number" onChange={(e)=>setOrder(e.target.value)} name="orderQuantity" placeholder={productDetail.minimumOrder} className=" py-2 my-2 w-100 orderAmount" /><br></br>

                    <input type="submit" id="submitButton" value="Submit" disabled={order<parseInt(productDetail.minimumOrder) || order>parseInt(productDetail.stock)} className="btn btn-primary text-white fw-bold w-100 orderButton py-3" />
                </form>
            <ToastContainer/>
        </div>
    );
};

export default PurcessInfo;