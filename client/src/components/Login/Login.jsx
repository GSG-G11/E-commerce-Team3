import React from 'react';

const Login = ({handleLogin}) => {
 
  return (
    <>
      <form onSubmit={handleLogin}>
        <input type='text' className='user-name' name='username'/>
        <input type='password' className='password' name='password'/>

        <button type='submit'> Login </button>
      </form>
    </>
  );
};

export default Login;
