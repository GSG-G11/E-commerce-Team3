import React from 'react';

export default function Search({searchByName}) {
  return <input type="search" placeholder='Search...' className='search' name='search' onChange={({target})=>searchByName(target.value)}/>;
}
