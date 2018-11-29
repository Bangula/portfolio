import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.min.css";


class Contact extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render(){
        return(
            <div id="contact">
                <h1 className='center red white-text'>Contact page</h1>
            </div>            
        )
    }

}
export default Contact;