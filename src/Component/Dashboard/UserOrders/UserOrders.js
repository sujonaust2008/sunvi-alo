import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserOrders = () => {
    const {productId} = useParams();
    
    return (
        <div>
            
            <h3>This is my order Pages</h3>
        </div>
    );
};

export default UserOrders;