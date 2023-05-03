import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEye, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-banner text-center mb-4'>
            <div className='py-5' >
                <div className='text-white mt-5'>
                    <h1>A Recipe Website</h1>
                </div>
                <div className='text-center text-white'>
                    <FaThumbsUp className='text-white'></FaThumbsUp> 12
                    <FaEye className='ms-4'></FaEye> 14
                    <FaThumbsDown className='text-white ms-4'></FaThumbsDown> 0
                </div>
                <div className='text-white mt-2'><small>published on April 4 2023</small></div>
            </div>
        </div>
    );
};

export default Footer;