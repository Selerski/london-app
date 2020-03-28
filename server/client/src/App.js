import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import Form from './components/Form';
import LandingPage from './components/LandingPage';
import About from './components/About';
import { getAllBoroughs } from './ApiClient';
import './App.css';

function App() {
  const [boroughs, setBoroughs] = useState([]);

  useEffect(() => {
    getAllBoroughs()
      .then(jsonData => {
        setBoroughs(jsonData);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <a className="logo-container" href="/">
            <img src="./big-ben.svg" alt="TownCrunchr" />
            <h2>TownCrunchr</h2>
          </a>
          <div className="menu-container">
            <NavLink exact={true} to="/" activeClassName="is-active">
              Home
            </NavLink>
            <NavLink to="/form" activeClassName="is-active">
              Crunchr
            </NavLink>
            <NavLink to="/about" activeClassName="is-active">
              About
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/form">
            <Form boroughs={boroughs} className="form-container" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
