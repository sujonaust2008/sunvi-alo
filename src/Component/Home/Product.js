import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Home.css';

const Product = ({product}) => {
    const{_id}= product;
    const navigate = useNavigate();
   
    const productDetailPage = id =>{
        navigate(`/service/${id}`);
       
    }
    return (
        <div>
            <Card className='p-3 cardHeight'>
                <Card.Img variant="top" src={product.img} className="productsImg"/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}
                    </Card.Text>
                    <Card.Text className='fw-bold'>Price: ${product.price}
                    </Card.Text>
                    <Card.Text className='fw-bold'>Supplier: {product.supName}
                    </Card.Text>
                    <Card.Text className='fw-bold'>Quantity: {product.quantity}
                    </Card.Text>
                </Card.Body>
                
                <Card.Body className='text-center'>
                    <button onClick={()=> productDetailPage(_id)} className='btn btn-primary rounded px-3'>Update Now</button>
                </Card.Body>
            </Card>
           
        </div>
    );
};

export default Product;