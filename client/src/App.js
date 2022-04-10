import React, { Component } from 'react';
import swal from 'sweetalert';
import './App.css';
import Login from './components/Login/Login';

export default class App extends Component {
  state = {
    login: '',
    displayLogin:false
  };
  addToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    if (!username.value.trim() || !password.value.trim()) {
      swal('error', 'Username and Password are required', 'error');
    }
    this.addToLocalStorage('username', username.value);
    this.setState({ login: username.value });
  };
  handleLoginButton= (e) =>{
    this.setState({displayLogin:!this.state.displayLogin})
  }
  render() {
    const { login ,displayLogin} = this.state;
    return (
      <>
        {!login && <button onClick={this.handleLoginButton}>Login</button>}
        {displayLogin && <Login handleLogin={this.handleLogin}  />}
      </>
    );
  }
}
