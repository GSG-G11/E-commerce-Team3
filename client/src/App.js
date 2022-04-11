import React, { Component } from 'react';
import Card from './components/Meals/Card';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Products from './components/Modal/MealsForm';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

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
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  };

  addToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    if (!username.value.trim() || !password.value.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username and Password are required',
      });
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
    const { products, currentTask } = this.state;
    const { name, price, description, img, categories } = e.target;
    const id = currentTask.id;

    const upadateProduct = {
      id: id,
      name: name.value,
      price: price.value,
      description: description.value,
      img: img.value,
      category: categories.value,
    };

    fetch(`/api/v1/product/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(upadateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        const allProducts = products.map((product) => {
          if (product.id === data.rows[0].id) {
            return upadateProduct;
          } else {
            return product;
          }
        });
        this.setState({ products: allProducts });
      });
  };

  addToCart = (e, id) => {
    e.preventDefault();
    const { cart } = this.state;
    const currentTask = this.state.products.filter(
      (product) => product.id === id
    );

    let check = [];

    if (cart.length > 0) {
      check = cart.filter((product) => product.id === id);
    }
    if (!check.length > 0) {
      cart.push(currentTask[0]);
      this.setState({
        cart: cart,
      });
      this.addToLocalStorage('cart', cart);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your product added successfully',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your product is already added',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  deleteFromCart = (id) => {
    const { cart } = this.state;
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
          const newCart = cart.filter((product) => product.id !== id);
          this.setState({
            cart: newCart,
          });
          this.addToLocalStorage('cart', newCart);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your product deleted successfully',
            showConfirmButton: false,
            timer: 1500,
          });
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

  render() {
    const {
      login,
      displayLogin,
      displayProducts,
      products,
      isEdit,
      currentTask,
      cart,
    } = this.state;
    return (
      <BrowserRouter>
        <div>
          <>
            {!login && <Link to='/cart'>cart</Link>}
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
                  addToCart={this.addToCart}
                  page='main'
                />
              )}
              exact
            />
            <Route
              path='/cart'
              render={(props) => (
                <Cart
                  products={cart}
                  {...props}
                  deleteFromCart={this.deleteFromCart}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
