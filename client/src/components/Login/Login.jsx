import React from 'react';
import './login.css';

export default function Login({ handleLogin, closeModal }) {
  return (
    <div className="modal">
      <form onSubmit={handleLogin}>
        <div className="header-modal">
          <p className="modal-title">Login</p>
          <i
            onClick={() => closeModal('login')}
            className="fa-solid fa-xmark"
          ></i>
        </div>
        <div className="field">
          <span className="fa fa-user"></span>
          <input
            className="form-control"
            placeholder="Username"
            name="username"
          />
        </div>
        <div className="field">
          <span className="fa fa-lock"></span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name='password'
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

// {
/* <div className="modal">
        <form onSubmit={handleLogin}>
          <div className="header-modal">
            <p className='modal-title'>Login</p>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <label>
            Username
            <input
              type="text"
              className="user-name"
              name="username"
              placeholder="Enter your name"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              className="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>
          <button type="submit"> Login </button>
        </form>
      </div> */
// }
