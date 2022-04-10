import React, { Component } from 'react';
import swal from 'sweetalert';
import './App.css';
import Card from './components/Card/Card';
import Login from './components/Login/Login';
import Products from './components/Modal/Products';

export default class App extends Component {
  state = {
    login: '',
    displayLogin: false,
    displayProducts: false,
    products: [],
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

  handleLoginButton = (e) => {
    this.setState({ displayLogin: !this.state.displayLogin });
  };

  displayProduct = (e) => {
    this.setState({ displayProducts: !this.state.displayProducts });
  };

  addProduct = (e) => {
    e.preventDefault();
    const { name, price, description, img, categories } = e.target;
    const product = {
      name: name.value,
      price: price.value,
      description: description.value,
      img: img.value,
      category: categories.value,
    };
    
    fetch('/api/v1/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(res=> res.json())
    .then(data=> this.setState({
      products: [data.rows[0], ...this.state.products],
    }));
  };

  
  componentDidMount() {
   
    fetch('/api/v1/products', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => { if (response.status === 200) {return response.json()}})
      .then((data) => {this.setState({
        products: data,
      });})
      .catch((err) => { console.log(err)})
  }

  render() {
    const { login, displayLogin, displayProducts, products} = this.state;
    return (
      <>
        {!login && <button onClick={this.handleLoginButton}>Login</button>}
        {displayLogin && <Login handleLogin={this.handleLogin} />}
        {login && <button onClick={this.displayProduct}>Add</button>}
        {displayProducts && <Products addProduct={this.addProduct} />}
        <Card products={products}/>
      </>
    );
  }
}
