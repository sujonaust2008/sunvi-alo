import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './UserProfile.css';

const UpdateInformation = () => {
    const [user]= useAuthState(auth);
    const { register, handleSubmit } = useForm();
    
    const handleUpdateInfo = event => {
        event.preventDefault();
        
        
        const school= event.target.school.value;
        const collage = event.target.collage.value;
        const university = event.target.university.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const userProfileCreate = { school, collage, university, address, phone };
        console.log(userProfileCreate)
        
        fetch("https://pacific-river-57240.herokuapp.com/userProfileCreate", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfileCreate)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log("button clicked");
            console.log(result)
        } )
    };


    return (
        <div className='updateInformation mx-auto'>
                 <form onSubmit={handleUpdateInfo} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    
                    
                    <input type="text" name="name" placeholder={user.displayName} disabled  className="w-100 fw-bold py-2 my-2 text-primary" /><br></br>
                    
                    <input type="email" name="email" placeholder={user.email} disabled className="w-100 py-2 my-2" /><br></br>
                    <input type="text" name="school" placeholder="School" className="w-100 py-2 my-2" /><br></br>
                    <input type="text" name="collage" placeholder='Collage' className="w-100 py-2 my-2" /><br></br>
                    <input type="text" name="university" placeholder='university' className="w-100 py-2 my-2" /><br></br>
                    <input type="text" name="address" placeholder='address' className="w-100 py-2 my-2" /><br></br>
                    <input type="text" name="phone" placeholder='Phone' className="w-100 py-2 my-2" /><br></br>
                   
                    <input type="submit"  value="Submit" className="btn btn-primary text-white fw-bold w-100 orderButton py-3" />
                </form>
                <button className='btn btn-primary w-100 mt-3 text-center'><Link className='text-decoration-none text-center text-white fw-bold' to='/userProfile '>See my Profile</Link></button>
            </div>
    );
};

export default UpdateInformation;