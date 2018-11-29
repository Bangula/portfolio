import React from 'react';
import myImg from '../images/bane.png'

const Aboutme = () => {
    return(
        <div id="aboutme">
            
            <div className="parallax-container">
            <h5 className="center grey-text text-lighten-1">About Me</h5>
            <div className='container'>
                <q className="center grey-text text-lighten-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quae repudiandae excepturi dignissimos! Animi ratione accusantium sit omnis aut tenetur quisquam tempora quibusdam doloremque ex! Deserunt nesciunt debitis minima esse.</q>
            </div>
            
                <div className="paral-section parallax">
                    <img src={myImg} id='myImg' alt="about me" className='responive-img' />    
                </div>
            </div>
        </div>
    )
}

export default Aboutme;