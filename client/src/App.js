import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'; 
import Navbar from './Navbar';
import Home from './Home';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      {/* <Route path="/" exact strict component={Home}/> */}
      <Route exact path="/">
          <Redirect to="/user" />
      </Route>
      <Route path="/" exact strict component={PageOne}/>
      <Route path="/user" exact strict  component={PageOne} />
      <Route path="/page2" exact strict component={PageTwo}/>
      <Route path="/page3" exact strict component={PageThree}/>
      <Route path="/exchangeRates" exact strict component={PageFour}/>
      <Route path="/converter" exact strict component={PageFive}/>
      <footer className="bg-dark text-white-50 footer">
        <div className="footerText">
          <small>Copyright &copy; Venkatesh Adigicherla</small>
        </div>
      </footer>
    </div>
    </Router>
  );

}

export default App;
