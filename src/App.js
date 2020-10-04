import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Orders from './components/Orders';
import Contacts from './components/Contacts';

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Header/>
      <div className="body-container">
        <Switch>
          <Route exact path="/">
            <Carousel/>
            <Orders/>
          </Route>
        <Route exact path="/contactos" component={Contacts}/>
        </Switch>
      </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
