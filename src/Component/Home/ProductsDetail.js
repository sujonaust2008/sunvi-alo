import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Home.css';
import PurcessInfo from './PurcesesInfo';

const ProductsDetails = () => {
    const {productId} = useParams();
    const [productDetail, setproductDetail]= useState({});
     
    useEffect(()=>{
        const URL = `https://pacific-river-57240.herokuapp.com/manufacturer/${productId}`;
        fetch(URL)
        .then(res=>res.json())
        .then(data=>setproductDetail(data))
    },[])

    // const handleQuantity = (itemQuantity) => {
        
        // console.log(itemQuantity);
        // const oldQuantity = parseInt(productDetail.stock);
        // const name= productDetail.name;
        // const img=productDetail.img;
        // const description = productDetail.description;
        // const minimumOrder= productDetail.minimumOrder;
        // const Price = productDetail.Price;
        // const stock = oldQuantity-1000;
        // console.log(quantity);
        // const update = { quantity,name,img,supName,price,description };
        // console.log(update);
        // const URL = `https://pacific-river-57240.herokuapp.com/manufacturer//${productId}`;
        // console.log(URL);
        // fetch(URL, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(update)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //     alert('Product delivered successfully')
        //         console.log('success', data);
        //         setproductDetail(data);
                
        //     })
            
    // }

   
    // const handleRestock = event => {
       
    //     event.preventDefault();
    //     const restock = event.target.number.value;
    //     const newStock = parseInt(restock);
    //     const oldQuantity = parseInt(productDetail.quantity);
    //     const name= productDetail.name;
    //     const img=productDetail.img;
    //     const description = productDetail.description;
    //     const supName= productDetail.supName;
    //     const price = productDetail.price;
    //     const quantity = oldQuantity+newStock;
    //     console.log(quantity);
    //     const update = { quantity,name,img,supName,price,description };
    //     console.log(update);
    //     const URL = `https://pacific-river-57240.herokuapp.com/manufacturer/manufacturer/${productId}`;
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
    //         alert('Product added successfully')
    //             console.log('success', data);
    //             setproductDetail(data);
                
    //         })
            
    // }
    return (
        <div>
            <h2 className='text-info text-decoration-underline text-center mt-5 '>Product Information</h2>
            
            <div className='mx-auto productDetail mb-3'>
                
                    <div>
                    <Card>
                        <Card.Img variant="top" src={productDetail?.img} className="productsImg "/>
                        <Card.Body>
                        <Card.Title>{productDetail?.name}</Card.Title>
                        <Card.Text>{productDetail?.description}
                        </Card.Text>
                        <Card.Text className='fw-bold'>Price: ${productDetail?.Price}
                        </Card.Text>
                        <Card.Text className='fw-bold'>Min Order: {productDetail?.minimumOrder}
                        </Card.Text>
                        <Card.Text className='fw-bold'>Stock: {productDetail?.stock}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </div>
                    <div>
                    <Card>
                    <Card.Body>
                        
                        <PurcessInfo></PurcessInfo>
                    </Card.Body>
                    
                    </Card>
                    </div>
                
            </div>
            

            
        
            <div className='text-center mt-4'>
                    
                

            </div>
        </div>
        
    );
};

export default ProductsDetails;