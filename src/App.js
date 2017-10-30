import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from './Home';
import AboutView from './AboutView';
import Nav from './Nav';
import NoMatch from './NoMatch';
import DynamicView from './DynamicView';
import Footer from './Footer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/about" component={AboutView} />
          <Route path="/user/:id" component={DynamicView} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
