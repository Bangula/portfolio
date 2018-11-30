import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.min.css";


class Contact extends Component {
    componentDidMount(){
        M.AutoInit();
        document.querySelector('#navbar').scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    render(){
        return(
            <div id="contact" className='valign-wrapper'>
                <div className="container row">
                    <div className="info col s12 m6 l6">
                        <h5 className='grey-text text-darken-1'>Feel free to contact me at any time.</h5>
                        <p className='grey-text text-darken-1'><i className='material-icons teal-text left'>mail</i> bvukovic082@gmail.com</p>
                    </div>
                    <div className="form col s12 m6 l6" id="form">
                        
                        <form name="portfolio" id="portfolio" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSenuTZ90qsh95Imf8kytbITpPCqlDDjlLRZcwqLASmdFNWv7Q/viewform?" target='_blank' onSubmit={this.handleSubmit}>
                            <label>Your name:</label>
                            <input type="text" name='entry.1927068138' id='entry.1927068138' />   
                            <label>Email:</label>
                            <input type="text" name='entry.562054209' id='entry.562054209' />   
                            <label>Message:</label>
                            <input name="entry.78786637" id="entry.78786637" cols="30" rows="50" />
                            <input id='send-btn' type="submit" value='Send' className='right btn' />   
                        </form>
                    </div>
                </div>
            </div>            
        )
    }

}
export default Contact;