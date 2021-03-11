import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                   <img 
          src={'https://res.cloudinary.com/dzazbwnnx/image/upload/v1613571594/hashedbyte-datingapp%20prototype/image_4_lkrc4i.png'} 
          alt="calendar-logo">
        </img>
                   </Link>
                   <Link to="/" className="navbar-logo">
                   <img 
          src={'https://res.cloudinary.com/dzazbwnnx/image/upload/v1613571594/hashedbyte-datingapp%20prototype/image_3_jthgj4.png'} 
          alt="message-logo">
        </img>
                   </Link>
                   <Link to="/" className="navbar-logo">
                   <img 
          src={'https://res.cloudinary.com/dzazbwnnx/image/upload/v1613571594/hashedbyte-datingapp%20prototype/image_2_hishy9.png'} 
          alt="notification-logo">
        </img>
                   </Link>
               </div>
               </nav> 
            
        </>
    )
}

export default Navbar
