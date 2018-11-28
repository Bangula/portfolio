import React, { Component } from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Work from './components/work';
import Footer from './components/footer';
import './css/styles.css';

import { HashRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={About} />
          <Route path='/work' component={Work} />
          <Route path='/contact' component={Contact} />          
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
