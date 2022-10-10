import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='bg-black mt-2 p-10 footer'>
            <p className='text text-white'>About</p>
            <p className='text text-white'>Terms of Use</p>
            <p className='text text-white'>Privacy Policy</p>
            <p className='text text-white'>Knowledge Base</p>
            <p className='text text-white'>Customer Support</p>
            <hr />
        </div>
    );
};

export default Footer;