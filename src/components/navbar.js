import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.min.css";
import '../css/styles.css';
import {NavLink} from 'react-router-dom';
import Arrow from '../images/up-arrow.png';
import Profile from '../images/profile.jpg'

class Navbar extends Component {
    
    componentDidMount(){
        let elem = document.querySelector('.sidenav');
        M.Sidenav.init(elem, {
            closeOnClick: true
        });
        setTimeout(() => {
            document.getElementById('social').style.right = '0';            
            document.getElementById('social-mobile').style.right = '0';            
        }, 3000);
        document.addEventListener('scroll', () => {
            if(document.documentElement.scrollTop || document.body.scrollTop > 10){
                document.getElementById('arrow').style.opacity = '1';
                document.querySelector('nav').style.top = '0';
            }else if(document.documentElement.scrollTop || document.body.scrollTop <= 10){
                document.getElementById('arrow').style.opacity = '0';
                document.querySelector('nav').style.top = '30px';
            }
        })
    }
    toTop = () => {
        document.querySelector('#navbar').scrollIntoView({
            behavior: 'smooth'
        });
        console.log('radi')
    }
    render(){
        return(            
            <div id='navbar'>
                <div className="navbar-fixed">
                    <nav className='nav-wrapper white'>
                        <div className="container">
                            <NavLink to="/" className='brand-logo teal-text text-darken-4'>BV</NavLink>
                            <a href="/" className="sidenav-trigger" data-target='mobile-links'>
                                <i className='material-icons grey-text text-darken-3'>menu</i>
                            </a>
                            <ul className='right hide-on-med-and-down'>
                                <li><NavLink className='teal-text text-darken-3' to="/">About</NavLink></li>
                                <li><NavLink className='teal-text text-darken-3' to="/work">My Work</NavLink></li>
                            </ul>                    
                        </div>                        
                    </nav>
                </div>
                <ul className="sidenav" id='mobile-links'>
                    <li className='center'>
                        <img src={Profile} className='circle' alt="profile img"/>
                    </li>
                    <li><NavLink to="/">About</NavLink></li>
                    <li><NavLink to="/work">My Work</NavLink></li>
                </ul>
                <div id="social" className='hide-on-small-only'>
                    <ul>
                        <li><a href="https://www.facebook.com/banebangula" className='social waves-effect waves-light btn-small indigo'>facebook</a></li>
                        <li><a href="https://www.linkedin.com/in/branko-vuković-92a703169" className='social waves-effect waves-light btn-small #0277bd light-blue darken-3'>linkedin</a></li>
                        <li><a href="https://github.com/Bangula" className='social waves-effect waves-light btn-small ##263238 blue-grey darken-4'>github</a></li>
                    </ul>
                </div>
                <div id="social-mobile" className='show-on-small'>
                    <ul>
                        <li><a href="https://www.facebook.com/banebangula" className='social waves-effect waves-light btn-floating indigo center'>f</a></li>
                        <li><a href="https://www.linkedin.com/in/branko-vuković-92a703169" className='social waves-effect waves-light btn-floating #0277bd light-blue darken-3 center'>in</a></li>
                        <li><a href="https://github.com/Bangula" className='social waves-effect waves-light btn-floating ##263238 blue-grey darken-4 center'>git</a></li>
                    </ul>
                </div>
                <img src={Arrow} id='arrow' alt="up arrow" onClick={this.toTop} />
            </div>
        )
    }
    
}
export default Navbar;