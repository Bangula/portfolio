import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <footer class="page-footer #1e88e5 blue darken-1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Menu</h5>
                <ul>
                    <li><NavLink className='grey-text text-lighten-4' to="/">About</NavLink></li>
                    <li><NavLink className='grey-text text-lighten-4' to="/work">My Work</NavLink></li>
                    <li><NavLink className='grey-text text-lighten-4' to="/contact">Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright #1e88e5 blue darken-3">
            <div class="container">
            © 2018 Copyright Branko Vuković - bvukovic082@gmail.com
            </div>
          </div>
        </footer>
    )
}
export default Footer;