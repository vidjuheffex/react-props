import React, { Component } from 'react';

export default class Header extends Component {
  render() {

    let style={
      width: "100%",
      padding: "1rem",
      background: "cornflowerblue"
    };
    
    
    return (
        <nav style={style}>I am the Navigation Bar</nav>
    );
  }
}
