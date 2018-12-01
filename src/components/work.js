import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.min.css";
import Neoprint from '../images/neoprint.png';
import Coffee from '../images/coffee.png';
import Headlines from '../images/headlines.png';

//https://docs.google.com/forms/d/e/1FAIpQLSenuTZ90qsh95Imf8kytbITpPCqlDDjlLRZcwqLASmdFNWv7Q/viewform?usp=pp_url&entry.1927068138=bane&entry.562054209=bane@gmail.com&entry.78786637=askdjf+asdlfkj
class Work extends Component {

    componentDidMount(){
        M.AutoInit();
        document.querySelector('#navbar').scrollIntoView({});
    }
    render(){
        return(
            <div id="work">
                <div className="container work-header">
                    <h5 className='grey-text text-darken-2'>Here is some of my work</h5>
                    <p className='grey-text text-darken-3'>You can also visite my <a href='https://github.com/Bangula' target='_blank'>Github repositories</a> to see my projects and all source code. </p>

                </div>
                <div className="container row">
                    <div className="col s12 m6 l6">
                        <div className="card small hoverable">
                            <div className="card-image">
                                <img src={Neoprint} className='responsive-img' alt="neoprint website"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title teal-text lighten-2">NeoPrintFactory</span>
                                <p>NeoPrintFactory is a company with 10 years of experience in screen and digital printing.</p>
                            </div>
                            <div className="card-action">
                                <a href="#neoprint" className='modal-trigger'>Description</a>
                                <a href="https://www.neoprintfactory.co.rs" target='_blank'>Visite website</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l6">
                        <div className="card  small hoverable">
                            <div className="card-image">
                                <img src={Coffee} className='responsive-img' alt="neoprint website"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title teal-text lighten-2">CooffeeNearMe</span>
                                <p>It'll help you find some coffee nearby.</p>
                            </div>
                            <div className="card-action">
                                <a href="#coffee" className='modal-trigger'>Description</a>
                                <a href="https://bangula.github.io/CoffeeNearMe/"  target='_blank'>Visite website</a>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l6">
                        <div className="card small hoverable">
                            <div className="card-image">
                                <img src={Headlines} className='responsive-img' alt="neoprint website"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title teal-text lighten-2">Worldwide News Headlines</span>
                                <p>Get the latest news headlines from hundreds of portals all around the globe.</p>
                            </div>
                            <div className="card-action">
                                <a href="#headlines" className='modal-trigger'>Descirpiton</a>
                                <a href="https://bangula.github.io/headlines/" target='_blank'>Visite website</a>
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
                        <p>It'll help you find some coffee nearby. The app is created in educational purpose and it's pretty useful. Only HTML5, CSS3 and JavaScript is used for building this app.</p>
                    </div>
                </div>
                <div className="modal" id="headlines">
                <div className="modal-content">
                        <h4>News Headlines</h4>
                        <p>Get the latest news headlines from hundreds of portals all around the globe, or get latest weather forecast for your location or any other city around the world.</p>
                    </div>
                </div>
            </div>            
        )
    }

}
export default Work;