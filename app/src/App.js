import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import Spinner from 'react-bootstrap/Spinner';
import LandingPage from './components/LandingPage';
import Logo from './logo.png';
import './App.css';

function App() {
  const [displayPage, setDisplayPage] = useState(false);
  const [boroughs, setBoroughs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/result', {
      method: 'GET'
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        setBoroughs(jsonData);
      })
      .then(() =>
        setTimeout(() => {
          setDisplayPage(true);
        }, 500)
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {!displayPage && (
        <div className="spinner-container">
          <Spinner
            className="spinner"
            animation="border"
            role="status"
          ></Spinner>
          <span>Loading...</span>
        </div>
      )}
      {displayPage && (
        <Router>
          <div className="nav-container">
            <div className="logo-container">
              <a href="/">
                <img src={Logo} />
              </a>
            </div>
            <div className="menu-container">
              <a href="/">Home</a>
              <a href="/form">See Magic</a>
            </div>
          </div>
          <Switch>
            <Route path="/form">
              <Form boroughs={boroughs} />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
