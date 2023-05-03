import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='my-2'>
            <div className='text-center mb-4'> <h1>Query to Answer</h1></div>
            <div>
                <h4>Tell us the differences between uncontrolled and controlled components.</h4>
                <p>In React, an uncontrolled component is a form element whose value is managed by the DOM. <br /> An example of an uncontrolled component in React is an input field where the user can enter text. <br /> <br />On the other hand, a controlled component is a form element whose value is managed by React. <br />An example of a controlled component in React is an input field where the value is passed down as a prop and any changes to the input value are handled by a callback function that updates the component's state.</p>
                <h4>How to validate React props using PropTypes</h4>
                <p>To validate React props using PropTypes, you first need to import the PropTypes library from the 'prop-types' module. Then, you can define the expected data types for each prop in the component's propTypes object, which is a static property of the component class</p>
                <h4>Tell us the difference between nodejs and express js.</h4>
                <p>Node.js is a runtime environment for executing JavaScript code, while Express.js is a framework built on top of Node.js. <br />Node.js provides a low-level API for handling HTTP requests, while Express.js provides a higher-level API that makes it easier to handle HTTP requests and responses.</p>
                <h4>What is a custom hook, and why will you create a custom hook?</h4>
                <p>In React, a custom hook is a JavaScript function that uses one or more of the built-in hooks (such as useState, useEffect, or useContext) to provide some reusable behavior or functionality to a component. <br />  custom hooks are useful for creating reusable functionality and logic that can be shared across multiple components. </p>
            </div>
        </Container>
    );
};

export default Blog;