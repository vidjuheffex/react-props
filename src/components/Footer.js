import React, { Component } from 'react';

export default function Footer(){
  let style= {
    width: "100%",
    background: "cornflowerblue",
    padding: "1rem",
    position: "fixed",
    bottom: 0
    
  };
  
    return (
        <footer style={style}>I am the Footer</footer>
    );
}
