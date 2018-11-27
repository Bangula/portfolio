import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.min.css";
import '../css/styles.css';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    
    componentDidMount(){
        M.AutoInit();
        setTimeout(() => {
            document.getElementById('social').style.right = '0';            
        }, 2000);
    }
    render(){
        return(            
            <div>
                <nav className='nav-wrapper #1e88e5 blue darken-1'>
                    <div className="container">
                        <a href="/" className='brand-logo'>Portfolio</a>
                        <a href="/" className="sidenav-trigger hide-on-small-only" data-target='mobile-links'>
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className='right hide-on-med-and-down'>
                            <li><NavLink to="/">About</NavLink></li>
                            <li><NavLink to="/work">My Work</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>                    
                    </div>
                    
                </nav>
                <ul className="sidenav" id='mobile-links'>
                    <li><a href="/">About</a></li>
                    <li><a href="/work">My Work</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div id="social" className='hide-on-small-only'>
                    <ul>
                        <li><a href="https://www.facebook.com/banebangula" className='social waves-effect waves-light btn-small indigo'>facebook</a></li>
                        <li><a href="https://www.linkedin.com/in/branko-vuković-92a703169" className='social waves-effect waves-light btn-small #0277bd light-blue darken-3'>linkedin</a></li>
                        <li><a href="https://github.com/Bangula" className='social waves-effect waves-light btn-small ##263238 blue-grey darken-4'>github</a></li>
                    </ul>
                </div>
            </div>
        )
    }
    
}
export default Navbar;