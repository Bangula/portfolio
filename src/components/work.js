import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.min.css";
import Neoprint from '../images/neoprint.png';
import Coffee from '../images/coffee.png';
import Headlines from '../images/headlines.png';


class Work extends Component {

    componentDidMount(){
        M.AutoInit();
    }
    render(){
        return(
            <div id="work">
                <h1 className='center green white-text'>Work page</h1>
                <div className="container row">
                    <div className="col s12 m6 l6">
                        <div className="card medium">
                            <div className="card-image">
                                <img src={Neoprint} className='responsive-img' alt="neoprint website"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title teal-text lighten-2">NeoPrintFactory</span>
                                <p>This website is created for a digital printing company. At the request of the client, it was made in Wordpress.</p>
                            </div>
                            <div className="card-action">
                                <a href="#neoprint" className='modal-trigger'>Description</a>
                                <a href="https://www.neoprintfactory.co.rs">Visite website...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l6">
                        <div className="card  medium">
                            <div className="card-image">
                                <img src={Coffee} className='responsive-img' alt="neoprint website"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title teal-text lighten-2">CooffeeNearYou</span>
                                <p>It'll help you find some coffee nearby. The app is created in educational purpose and it's pretty useful. Only HTML5, CSS3 and JavaScript is used for building the app.</p>
                            </div>
                            <div className="card-action">
                                <a href="#coffee" className='modal-trigger'>Description</a>
                                <a href="https://www.neoprintfactory.co.rs">Visite website...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l6">
                        <div className="card medium">
                            <div className="card-image">
                                <img src={Headlines} className='responsive-img' alt="neoprint website"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title teal-text lighten-2">NeoPrintFactory - Printing Service</span>
                                <p>Get latest Headlines.</p>
                            </div>
                            <div className="card-action">
                                <a href="#headlines" className='modal-trigger'>Descirpiton</a>
                                <a href="https://www.neoprintfactory.co.rs">Visite website...</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" id="neoprint">
                    <div className="modal-content">
                        <h4>Digital Printing</h4>
                        <p>This website is created for a digital printing company. At the request of the client, it was made in Wordpress.</p>
                    </div>
                </div>
                <div className="modal" id="coffee">
                <div className="modal-content">
                        <h4>Find coffee nearby.</h4>
                        <p>It'll help you find some coffee nearby. The app is created in educational purpose and it's pretty useful. Only HTML5, CSS3 and JavaScript is used for building the app.</p>
                    </div>
                </div>
                <div className="modal" id="headlines">
                <div className="modal-content">
                        <h4>Hot Headlines</h4>
                        <p>Get latest Headlines.</p>
                    </div>
                </div>
            </div>            
        )
    }

}
export default Work;