import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div>
            <div className='w-50 text-center mx-auto py-4 mt-5'>
                <h5 className='fw-bold text-center text-decoration-underline text-primary mt-4'>Contact With Us</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        
                            <Form.Control as="textarea" rows={3} placeholder="your text" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ContactUs;
