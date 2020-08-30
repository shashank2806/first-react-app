import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default withRouter(App);
