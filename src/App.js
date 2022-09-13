import React from 'react';
import './App.css';
import Signup from './Signup.js'
import Login from "./Login.js"
import WelcomePage from "./WelcomePage.js"
import Home from "./Home.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}