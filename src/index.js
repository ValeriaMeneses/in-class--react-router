import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';


class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  }
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));
