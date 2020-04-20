import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Student from './components/Student';
import History from './components/History';
import Redirect from './components/Redirect';
import handleRedirectClick from './components/Redirect';

class App extends React.Component {
  
  render() { 
    return ( 
      <BrowserRouter history={History}>
        <div>
          <ul>
            <Navigation link="/" name="Home"/>
            <Navigation link="/about" name="About"/>
            <Navigation link="/contact" name="Contact"/>
            <Navigation link="/student/Jim Smith" name="Student:Jim Smith"/>
            <Navigation link="/student/Jane Smith/50001" name="Student:Jane Smith, Student No:50001"/>
            <Navigation link="/redirect" name="Redirect"/>            
          </ul>
          <button onClick={handleRedirectClick}>Redirect</button>
        <Switch>  
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/student/:studentname/:studentno?" component={Student} />
          <Route path="/redirect" component={Home} />
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;
