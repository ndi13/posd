import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    if (this.props.authState == "signedIn") {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
