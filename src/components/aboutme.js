import React from 'react';
import myImg from '../images/bane.png'

const Aboutme = () => {
    return(
        <div id="aboutme">            
            <div className="parallax-container ">
                <h5 className="center grey-text text-lighten-1">About Me</h5>
                <div className='container'>
                    <q className="center grey-text text-lighten-1">My full name is Branko Vuković, and i live in Kragujevac, Serbia. I attended the First Technical School in Kragujevac, educational profile 'Electrical technician of automation'. Then I graduated from the High Technical School - Informatics Department. I also have certificates from the Cluster Academy of ICT Cluster of Central Serbia - HTML5/CSS3/JavaScript Department. </q>
                    <q className="center grey-text text-lighten-1">I do my best to build my career as a reliable and responsible Web Developer. I have a lot of experience in team work, acquired working as Team leader in the car production company 'Fiat Automobiles Serbia'.</q>
                </div>
            
                <div className="paral-section parallax">
                    <img src={myImg} id='myImg' alt="about me" className='responive-img' />    
                </div>
            </div>
        </div>
    )
}

export default Aboutme;