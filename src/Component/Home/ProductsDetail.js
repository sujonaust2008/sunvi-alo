import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Home.css';

const ProductsDetails = () => {
    const {productId} = useParams();
    const [productDetail, setproductDetail]= useState({});
     
    useEffect(()=>{
        const URL = `https://floating-sands-97390.herokuapp.com/service/${productId}`;
        fetch(URL)
        .then(res=>res.json())
        .then(data=>setproductDetail(data))
    },[])

    const handleQuantity = (itemQuantity) => {
        
        console.log(itemQuantity);
        const oldQuantity = parseInt(productDetail.quantity);
        const name= productDetail.name;
        const img=productDetail.img;
        const description = productDetail.description;
        const supName= productDetail.supName;
        const price = productDetail.price;
        const quantity = oldQuantity-1;
        console.log(quantity);
        const update = { quantity,name,img,supName,price,description };
        console.log(update);
        const URL = `https://floating-sands-97390.herokuapp.com/service/${productId}`;
        console.log(URL);
        fetch(URL, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
            alert('Product delivered successfully')
                console.log('success', data);
                setproductDetail(data);
                
            })
            
    }

   
    const handleRestock = event => {
       
        event.preventDefault();
        const restock = event.target.number.value;
        const newStock = parseInt(restock);
        const oldQuantity = parseInt(productDetail.quantity);
        const name= productDetail.name;
        const img=productDetail.img;
        const description = productDetail.description;
        const supName= productDetail.supName;
        const price = productDetail.price;
        const quantity = oldQuantity+newStock;
        console.log(quantity);
        const update = { quantity,name,img,supName,price,description };
        console.log(update);
        const URL = `https://floating-sands-97390.herokuapp.com/service/${productId}`;
        console.log(URL);
        fetch(URL, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
            alert('Product added successfully')
                console.log('success', data);
                setproductDetail(data);
                
            })
            
    }
    return (
        <div>
            <h2 className='text-info text-decoration-underline text-center mt-5 '>Product Information</h2>
            <div className='mx-auto productDetail mb-3'>
            <div>
                <Card className='p-3 cardHeight'>
                    <Card.Img variant="top" src={productDetail?.img} className="productsImg"/>
                    <Card.Body>
                        <Card.Title>{productDetail?.name}</Card.Title>
                        <Card.Text>{productDetail?.description}
                        </Card.Text>
                        <Card.Text className='fw-bold'>Price: ${productDetail?.price}
                        </Card.Text>
                        <Card.Text className='fw-bold'>Supplier: {productDetail?.supName}
                        </Card.Text>
                        <Card.Text className='fw-bold'>Quantity: {productDetail?.quantity}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className='text-center'>
                        
                        <button onClick={() => handleQuantity(productDetail.quantity)}
                        className='btn btn-primary rounded px-3'
                        ><Link to='/' className='btn btn-primary rounded px-3'>Delivered</Link></button>
                    </Card.Body>
                </Card>
            </div>
            <div className='text-center mt-2'>
                <form onSubmit={handleRestock}>
                    <input type="text" placeholder='add quantity' name='number'></input>

                    
                    <input id ='btn' value="Restock"type="submit"className='bg-primary text-white border-primary rounded-3'></input>
                </form>
            </div>

            
        </div>
        <div className='text-center mt-4'>
                <Link to='/manageInventory'>
                 <button className='btn btn-primary rounded px-5 text-white fw-bold fs-3'>Manage Inventories</button>
                </Link>
            </div>
        </div>
        
    );
};

export default ProductsDetails;