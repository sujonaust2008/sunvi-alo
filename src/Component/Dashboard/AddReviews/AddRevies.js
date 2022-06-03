import React from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
const AddRevies = () => {
    const [user] = useAuthState(auth);

    const handleRatting = event =>{
        event.preventDefault();
        const userName= user.displayName;
        const comment = event.target.Comment.value;
        const ratting = event.target.ratting.value;
        const userComment = {userName,comment, ratting};
        fetch('https://pacific-river-57240.herokuapp.com/userComment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userComment)
            })
            .then(res=> res.json())
            .then(result =>{
                console.log(result);
                toast('Your comment Successfully added ');
                
            } )
    }
    return (
        <div className='w-50 mx-auto'>
            <h4 className='text-center '>Hello <span className='text-primary'>{user.displayName}</span>  ! Please Review us</h4>
            <Card className='p-2 border-primary '>
            <form onSubmit={handleRatting} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                    
                    <label className='text-info fw-bold'>Your Comment</label>
                    <input type="text" name="Comment" placeholder='Your Comment' className="w-100 fw-bold py-2 my-2 text-primary" /><br></br>
                    
                    <label className='text-info fw-bold'>Enter Your Ratting</label>
                    <input type="number" name="ratting" min='1' max='5' placeholder="Ratting 1-5" className="w-100 py-2 my-2" /><br></br>
                   
                    <input type="submit"  value="Submit" className="btn btn-primary text-white fw-bold w-100 orderButton py-3" />
                </form>
            </Card>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddRevies;