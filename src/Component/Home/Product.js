import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Home.css';

const Product = ({product}) => {
    const{_id}= product;
    const navigate = useNavigate();
   
    const productDetailPage = id =>{
        navigate(`/manufacturer/${id}`);
       
    }
    return (
        <div>
            <Card className='p-3 cardHeight'>
                <Card.Img variant="top" src={product.img} className="productsImg"/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}
                    </Card.Text>
                    <Card.Text className='fw-bold'>Price: <span className='text-danger'>${product.Price}</span>
                    </Card.Text>
                    <Card.Text className='fw-bold'>Min Order: <span className='text-danger'>{product.minimumOrder}</span> nos
                    </Card.Text>
                    <Card.Text className='fw-bold'>Stock: <span className='text-danger'>{product.stock}</span>
                    </Card.Text>
                </Card.Body>
                
                <Card.Body className='text-center'>
                    <button onClick={()=> productDetailPage(_id)} className='btn btn-primary rounded px-3'>Buy Now</button>
                </Card.Body>
            </Card>
           
        </div>
    );
};

export default Product;