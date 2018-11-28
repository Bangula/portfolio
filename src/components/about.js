import React, { Component } from 'react';
import '../css/styles.css';
import Webimg from '../images/web-development2.png'
import Skills from './skills';
import { showAbout, stopAbout } from './main';

class About extends Component {
    
    componentDidMount(){
        showAbout();
    }
    componentWillUnmount(){
        stopAbout();
    }
    render(){
        return(
            <div id="about-container">
                <div id="about" className=''>
                <h1 className='center grey-text text-darken-1' id='welcome'>Welcome!</h1>
                <div id="hello-msg" className='container'>
                    <img src={Webimg} alt="asd"/>
                    <h5 className='center grey-text text-darken-1'>Hi, my name is Bane.I am a front-end developer from Kragujevac, Serbia</h5>
                    <q className='center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sed hic culpa impedit, iure laborum beatae obcaecati perspiciatis tempore fugiat doloremque excepturi, non amet repudiandae necessitatibus veritatis! Tempora, fuga excepturi.</q>
                    <div id="btns" className='center'>
                        <a href="/" className='btn "waves-effect waves-light teal lighten-2'>My Skills</a>
                        <a href="/" className='btn "waves-effect waves-light teal lighten-2'>About Me</a>
                    </div>
                </div>
                
            </div>  
            <Skills />
            </div>
                      
        )
    }

}
export default About;