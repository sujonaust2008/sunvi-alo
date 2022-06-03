import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './UserProfile.css';

const UserProfile = () => {
    const [user]= useAuthState(auth);
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`https://pacific-river-57240.herokuapp.com/userProfileCreate?email=${user.email}`)
                .then(res => res.json())
                .then(data => setUserInfo(data));
        }
    }, [user]) 

    
    
    return (
        <div className='profileStyle'>
            <div>
                <img src={user?.photoURL} alt="" className='userPhoto' />
                <h2>name: {user?.displayName}</h2>
                <h3>Email: {user?.email}</h3>
                <h6 className='text-decoration-underline text-primary fw-bold'>Education</h6>
                <p>School: {userInfo?.School}</p>
                <p>Collage: {userInfo?.School}</p>
                <p>University: {userInfo?.School}</p>
                <h6 className='text-decoration-underline text-primary fw-bold'>Your Address</h6>
                <p>Address: {userInfo?.Location}</p>
                <p>Phone: {userInfo?.Phone}</p>  
                <button className='btn btn-primary w-100 mt-3 text-center'><Link className='text-decoration-none text-center text-white fw-bold' to='/dashboard/profile '>Update Now</Link></button> 
            </div>
            
        </div>
    );
};

export default UserProfile;