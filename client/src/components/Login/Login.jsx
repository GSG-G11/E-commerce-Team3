import React from 'react';

export default function Login({handleLogin})  {
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
