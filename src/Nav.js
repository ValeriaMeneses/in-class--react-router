import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Navigation</h3>
        <hr/>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}

export default Nav;
