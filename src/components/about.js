import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.js";
import '../css/styles.css';
import Webimg from '../images/web-development2.png'
import Skills from './skills';
import Aboutme from './aboutme';
import Contact from './contact';
import { NavLink } from 'react-router-dom';

class About extends Component {
    
    componentDidMount(){
        M.AutoInit();        
    }
    
    toSkills = (elem) => {
        document.getElementById(elem).scrollIntoView({
            behavior: 'smooth'
        })
    }
    render(){
        return(
            <div id="about" className=''>
                <div id="hello-msg" className=''>
                    <img src={Webimg} alt="asd"/>
                    <div className="container">
                        <h5 className='center grey-text text-darken-1'>Hi, my name is Bane. I am a front-end developer from Kragujevac, Serbia.</h5>
                        <q className='center grey-text text-darken-1'>Currently available and looking for opportunity to work with some great team of developers, on a new and interesting projects. <NavLink to='/contact'>Let me know</NavLink> if you need some front-end job done, or just wanna share some experience with a cup of coffee :)</q>
                    </div>
                    <div id="btns" className='center'>
                        <button className='btn btn-small light-blue darken-2 hoverable' onClick={() => {this.toSkills('aboutme')}}>About Me</button>
                        <button className='btn btn-small eal darken-2 hoverable' onClick={() => {this.toSkills('skills')}}>My Skills</button>
                    </div>
                    <Aboutme />
                    <Skills />  
                    <Contact />                  
                </div>                
            </div>  
            
                      
        )
    }

}
export default About;