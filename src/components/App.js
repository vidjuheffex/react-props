import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './baseLayout';
import ParentComponent from './parentComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
        <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
