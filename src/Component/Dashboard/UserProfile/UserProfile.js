import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import './UserProfile.css';

const UserProfile = () => {
    const [user]= useAuthState(auth);
    const [userProfile, setUserProfile] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/userProfile?email=${user.email}`)
                .then(res => res.json())
                .then(data => setUserProfile(data));
        }
    }, [user]) 

    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const name = user.displayName;
        const email= user.email;
        const school= '';
        const collage = '';
        const university = '';
        const address = '';
        const phone = '';
        const userProfile = {name, email, school, collage, university, address, phone };
        const url = `http://localhost:5000/userProfile?email=${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };

    
    return (
        <div className='profileStyle'>
            <div>
                <img src={user?.photoURL} alt="" className='userPhoto' />
                <h2>name: {user?.displayName}</h2>
                <h3>Email: {user?.email}</h3>
                <h6 className='text-decoration-underline text-primary fw-bold'>Education</h6>
                <p>School: {userProfile.School}</p>
                <p>Collage: {userProfile.School}</p>
                <p>University: {userProfile.School}</p>
                <h6 className='text-decoration-underline text-primary fw-bold'>Your Address</h6>
                <p>Address: {userProfile.Location}</p>
                <p>Phone: {userProfile?.Phone}</p>


                
            </div>
            <div>
                <form className='d-flex flex-column shadow card p-3 border-info' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='School' {...register("school", { required: true, maxLength: 20 })} />

                    <input className='mb-2' placeholder='Collage ' type="text" {...register("collage",{ required: true, maxLength: 20 })} />

                    <textarea className='mb-2' placeholder='University' {...register("university",{ required: true, maxLength: 200 })} />

                    <input className='mb-2' placeholder='Address' type="text" {...register("address",{ required: true, maxLength: 20 })} />

                    <input className='mb-2' placeholder='Phone' type="number" {...register("phone",{ required: true, maxLength: 20 })} />
                    
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img",{ required: true})} />
                    <button type="submit" value="Add Service" className='btn btn-info text-white fw-bold'>Update Profile</button>
                </form>
                
            </div>
        </div>
    );
};

export default UserProfile;