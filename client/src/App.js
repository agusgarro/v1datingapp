import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>

      <Navbar/>
      <Switch>
        <Route path="/" exact component={UserProfile} />
        
      </Switch>
      </Router>
    </>
  );
}

export default App;
