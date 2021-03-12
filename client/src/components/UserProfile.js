import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './UserProfile.css';




function UserProfile ()
 {
     return (
         
         <div className="userprofile-container">
             <div className="carousel">

             <Carousel>
                <Carousel.Item interval={1000}>
              <img
                className="d-block w-60 inner-img"
                src="https://res.cloudinary.com/dzazbwnnx/image/upload/v1615560355/hashedbyte-datingapp%20prototype/IMG_0156_xem66f.jpg"
                alt="comp5"
              />
              
            </Carousel.Item>
         
           
            </Carousel>

             </div>


         </div>
     )
 }

 export default UserProfile