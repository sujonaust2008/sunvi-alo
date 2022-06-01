import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Home.css';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/manufacturer')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const sliceProducts = products.slice(0,6);
    return (
        <div>
            <div className='productsStyle'>
                {
                    sliceProducts.map(product=><Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;