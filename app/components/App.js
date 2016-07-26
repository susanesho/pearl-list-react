import React, { Component } from 'react';
import logo from './Inventory-Manager_03.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App
