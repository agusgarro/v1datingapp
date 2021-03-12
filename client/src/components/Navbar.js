import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
               <Link to="/mymatches" className="navbar-logo">
                   <img className="logo"
          src={'https://res.cloudinary.com/dzazbwnnx/image/upload/v1615549547/hashedbyte-datingapp%20prototype/perfil-avatar-mujer-icono-redondo_24640-14048_v5zgul.jpg'} 
          alt="calendar-logo">
        </img>
                   </Link>
               <Link to="/" className="navbar-logo">
                   <img className="logo"
          src={'https://res.cloudinary.com/dzazbwnnx/image/upload/v1613571593/hashedbyte-datingapp%20prototype/image_1_rdqplq.png'} 
          alt="calendar-logo">
        </img>
                   </Link>
               <Link to="/" className="navbar-logo">
                   <img className="logo"
          src={'https://res.cloudinary.com/dzazbwnnx/image/upload/v1613571594/hashedbyte-datingapp%20prototype/image_4_lkrc4i.png'} 
          alt="calendar-logo">
        </img>
                   </Link>
                   <Link to="/" className="navbar-logo">
                   <img className="logo"
          src={'https://res.cloudinary.com/dzazbwnnx/image/upload/v1613571594/hashedbyte-datingapp%20prototype/image_3_jthgj4.png'} 
          alt="message-logo">
        </img>
                   </Link>
                   <Link to="/" className="navbar-logo">
                   <img className="logo"
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
