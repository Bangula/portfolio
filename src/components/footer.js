import React from 'react';

const Footer = () => {
    return(
        <footer class="page-footer teal darken-3">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="white-text">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="white-text" href="#!">Link 1</a></li>
                  <li><a class="white-text" href="#!">Link 2</a></li>
                  <li><a class="white-text" href="#!">Link 3</a></li>
                  <li><a class="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container center">
                <p className='white-text'>© 2018 Copyright Vuković Branko - bvukovic082@gmail.com</p> 
            </div>
          </div>
        </footer>

    )
}
export default Footer;