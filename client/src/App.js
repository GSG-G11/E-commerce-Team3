import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';

import Swal from 'sweetalert2';
import './App.css';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetails/MealDetails';

export default class App extends Component {
  state = {
    isLoggedIn: localStorage.isLoggedIn ? true : false,
    displayLogin: false,
    meals: [],
    isEdit: false,
    isOpen: false,
    currentMeal: {},
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    filteredMeals: [],
    isFiltered: false,
    price: 'none',
    selectedCategory: 'all',
    mealDetails: {},
  };

  // ! Add to Local Storage Function
  addToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // ! Login Function
  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    if (!username.value.trim() || !password.value.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username and Password are required',
      });
    } else {
      this.addToLocalStorage('isLoggedIn', true);
      this.setState({ isLoggedIn: true });
      this.closeModal('login');
    }
  };

  // ! Logout Function
  handleLogout = (e) => {
    this.addToLocalStorage('isLoggedIn', false);
    this.setState({ isLoggedIn: false });
  };

  // ! Modal Functions
  openModal = (value, id) => {
    this.setState({ isOpen: true });
    if (value === 'update') {
      this.setState({ isEdit: true });
      const currentMeal = this.state.meals.filter((meal) => meal.id === id);
      this.setState({ currentMeal: currentMeal[0] });
    } else if (value === 'login') {
      this.setState({ displayLogin: true });
      this.setState({ isOpen: false });
    } else {
      this.setState({ isEdit: false });
      this.setState({ displayLogin: false });
    }
  };

  closeModal = (value) => {
    if (value === 'update') this.setState({ isEdit: false });
    else if (value === 'login') this.setState({ displayLogin: false });
    else this.setState({ isEdit: false });
    this.setState({ isOpen: false });
  };

  // ! Meal Function - Add
  addMeal = (e) => {
    e.preventDefault();
    const { name, price, description, img, categories } = e.target;
    const meal = {
      name: name.value,
      price: price.value,
      description: description.value,
      img: img.value,
      category: categories.value,
    };

    fetch('/api/v1/meal', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(meal),
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          meals: [data.rows[0], ...this.state.meals],
        })
      );

    this.closeModal('add');
  };

  // ! Meal Function - Delete
  deleteMeal = (id) => {
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
          fetch(`/api/v1/meal/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
            },
          })
            .then((res) => {
              if (res.status === 200) {
                this.setState({
                  meals: this.state.meals.filter((meal) => meal.id !== id),
                });
              }
            })
            .catch(console.log);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Don't worry, Your meal is safe!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // ! Meal Function - Update
  editMeal = (e) => {
    e.preventDefault();
    const { meals, currentMeal } = this.state;
    const { name, price, description, img, categories } = e.target;
    const id = currentMeal.id;
    const upadateMeal = {
      id: id,
      name: name.value,
      price: price.value,
      description: description.value,
      img: img.value,
      category: categories.value,
    };

    fetch(`/api/v1/meal/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(upadateMeal),
    })
      .then((res) => res.json())
      .then((data) => {
        const allMeals = meals.map((meal) => {
          if (meal.id === data.rows[0].id) {
            return upadateMeal;
          } else {
            return meal;
          }
        });
        this.setState({ meals: allMeals });
      });
    this.closeModal('update');
  };

  // ! Meal Function - Add to Cart
  addToCart = (e, id) => {
    e.preventDefault();
    const { cart } = this.state;
    const currentMeal = this.state.meals.filter((meal) => meal.id === id);
    let check = [];
    if (cart.length > 0) {
      check = cart.filter((meal) => meal.id === id);
    }
    if (!check.length > 0) {
      cart.push(currentMeal[0]);
      this.setState({
        cart: cart,
      });
      this.addToLocalStorage('cart', cart);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your meal added successfully',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your meal is already added',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // ! Meal Function - Remove from Cart
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
          const newCart = cart.filter((meal) => meal.id !== id);
          this.setState({
            cart: newCart,
          });
          this.addToLocalStorage('cart', newCart);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your meal deleted successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Don't worry, Your meal is safe!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // ! ! Meal Function - Search by name
  searchByName = (word) => {
    if (!word) {
      this.setState({ isFiltered: false });
    }
    const { meals } = this.state;
    const filtered = meals.filter((meal) =>
      meal.name.toLowerCase().includes(word.toLowerCase())
    );
    this.setState({ filteredMeals: filtered, isFiltered: true });
  };

  // ! Meal Function - Handle change
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // ! ! Meal Function - Meal Details
  getMealDetails = (id) => {
    fetch(`/api/v1/meal/${id}`, {
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
          mealDetails: data[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    fetch('/api/v1/meals', {
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
          meals: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      displayLogin,
      isOpen,
      meals,
      isEdit,
      currentMeal,
      cart,
      isLoggedIn,
      filteredMeals,
      isFiltered,
      selectedCategory,
      price,
      mealDetails,
    } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path='/'
              render={(props) => (
                <Home
                  {...props}
                  isLoggedIn={isLoggedIn}
                  handleLogout={this.handleLogout}
                  meals={meals}
                  filteredMeals={filteredMeals}
                  isFiltered={isFiltered}
                  deleteMeal={this.deleteMeal}
                  openModal={this.openModal}
                  addToCart={this.addToCart}
                  handleLogin={this.handleLogin}
                  displayLogin={displayLogin}
                  isOpen={isOpen}
                  addMeal={this.addMeal}
                  isEdit={isEdit}
                  currentMeal={currentMeal}
                  editMeal={this.editMeal}
                  searchByName={this.searchByName}
                  filterMeals={this.filterMeals}
                  handleChange={this.handleChange}
                  selectedCategory={selectedCategory}
                  price={price}
                  page='main'
                  getMealDetails={this.getMealDetails}
                />
              )}
              exact
            />
            <Route
              path='/cart'
              render={(props) => (
                <Cart
                  {...props}
                  meals={cart}
                  deleteFromCart={this.deleteFromCart}
                  isLoggedIn={isLoggedIn}
                  handleLogout={this.handleLogout}
                  openModal={this.openModal}
                />
              )}
            />
            <Route
              path='/meal/:id'
              render={(props) => (
                <MealDetail
                  {...props}
                  mealDetails={mealDetails}
                  isLoggedIn={isLoggedIn}
                  handleLogout={this.handleLogout}
                  handleLogin={this.handleLogin}
                  displayLogin={displayLogin}
                  isOpen={isOpen}
                  openModal={this.openModal}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
