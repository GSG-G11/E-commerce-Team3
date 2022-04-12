import React from 'react';
import './login.css';

export default function Login({ handleLogin }) {
  return (
    <>
      <div className="modal">
        <form onSubmit={handleLogin}>
          <div className="header-modal">
            <p>Login</p>
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
      </div>
    </>
  );
}
