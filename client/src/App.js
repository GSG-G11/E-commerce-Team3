import React, { Component } from 'react';
import Card from './components/Card/Card';
import Login from './components/Login/Login';
import Products from './components/Modal/Products';
// <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>;

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import swal from 'sweetalert';
import Swal from 'sweetalert2';

import './App.css';
export default class App extends Component {
  state = {
    login: '',
    displayLogin: false,
    displayProducts: false,
    products: [],
    isEdit: false,
    currentTask: {},
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

  displayProduct = (value, id) => {
    this.setState({ displayProducts: !this.state.displayProducts });
    if (value === 'update') {
      this.setState({ isEdit: true });
      const currentTask = this.state.products.filter(
        (product) => product.id === id
      );
      this.setState({ currentTask: currentTask[0] });
    } else {
      this.setState({ isEdit: false });
    }
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
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: [data.rows[0], ...this.state.products],
        })
      );
  };

  componentDidMount() {
    fetch('/api/v1/products', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({
          products: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteProduct = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn-alert btn-success',
        cancelButton: 'btn-alert btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'No, cancel!',
        confirmButtonText: 'Yes, delete it!',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`/api/v1/product/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
            },
          })
            .then((res) => {
              if (res.status === 200) {
                this.setState({
                  products: this.state.products.filter(
                    (product) => product.id !== id
                  ),
                });
              }
            })
            .catch(console.log);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Don't worry, Your product is safe!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  editProductButton = (id) => {
    this.setState({ isEdit: true });
  };
  editProduct = (e) => {
    e.preventDefault();
    const { products , currentTask } = this.state;
    const { name, price, description, img, categories } = e.target;
    const id = currentTask.id;

    const upadateProduct = {
      id:id,
      name: name.value,
      price: price.value,
      description: description.value,
      img: img.value,
      category: categories.value,
    };

    // const allProducts = products.map((product) => {
   
    //   if (product.id === id) {
    //     return upadateProduct;
    //   } else {
    //     return product;
    //   }
    // });
    fetch(`/api/v1/product/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(upadateProduct),
    })
      .then((res) => res.json())
      .then((data) =>
       const  allProducts = products.map((product) => {
   
        if (product.id === data.rows[0].id) {
          return upadateProduct;
        } else {
          return product;
        }
      });
         this.setState({ products: allProducts })
      );
  };
  render() {
    const {
      login,
      displayLogin,
      displayProducts,
      products,
      isEdit,
      currentTask,
    } = this.state;
    return (
      <BrowserRouter>
        <div>
          <>
            {!login && <button onClick={this.handleLoginButton}>Login</button>}
            {displayLogin && <Login handleLogin={this.handleLogin} />}
            {login && (
              <button onClick={() => this.displayProduct('add')}>Add</button>
            )}
            {displayProducts && (
              <Products
                addProduct={this.addProduct}
                editProductButton={this.editProductButton}
                isEdit={isEdit}
                currentTask={currentTask}
                editProduct={this.editProduct}
              />
            )}
          </>
          <Switch>
            <Route
              path='/'
              render={(props) => (
                <Card
                  products={products}
                  {...props}
                  deleteProduct={this.deleteProduct}
                  displayProduct={this.displayProduct}
                  login={login}
                />
              )}
              exact
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
