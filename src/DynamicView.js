import React, { Component } from 'react';

class DynamicView extends Component {
  render() {
    const Username = this.props.match.params.id;

    return <h1>{Username}</h1>;
  }
}

export default DynamicView;
