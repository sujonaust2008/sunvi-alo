import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='mb-5'>
            <h2 className='text-center fw-bold pt-5'>How will you improve the performance of a React Application?</h2>
            <div className='jsVsnode'>
                <ul>
                    <li>Keeping component state local where necessary.</li>
                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React.</li>
                    <li>Lazy loading images in React.</li>
                    
                </ul>
            </div>



            <h2 className='text-center fw-bold pt-5'>What are the different ways to manage a state in a React application?</h2>
            <div className='jsVsnode'>
                <div>
                    <h4 className=' '>Four way to manage a state in React Application</h4>
                    <h6>01. Local State</h6>
                    <h6>02. Global State</h6>
                    <h6>03. Server State</h6>
                    <h6>04. URL state</h6>
                </div>
               
            </div>

            <div className='w-75 mx-auto'>
                <h2 className='fw-bold text-decoration-underline text-center mb-3'>How does prototypical inheritance work?</h2>
                <h6>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. 
                </h6>
            </div>
            <div className='w-75 mx-auto'>
                <h2 className='fw-bold text-decoration-underline text-center mb-3'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <h6>Because state cannot fixed value, it may change or not to be change. 
                </h6>
            </div>
            <div className='w-75 mx-auto'>
                <h2 className='fw-bold text-decoration-underline text-center mb-3'>What is a unit test? Why should write unit tests?</h2>
                <h6>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently. 
                </h6>
            </div>

        </div>
    );
};

export default Blogs;