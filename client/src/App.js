import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  goToProfile = () => {
    this.props.history.replace('/login');
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Whistlr</h2>
        </div>
        <p className="App-intro">
        <Link to="/login"><button type="button" className="btn btn-primary">Login</button></Link>
        <Link to="/signup"><button type="button" className="btn btn-danger">Signup</button></Link>
        </p>
      </div>
    );
  }
}

export default App;
