import React from 'react';

export default function Filter({handleChange}) {
  return (
    <>
     <button onClick={handleChange}  name='selectedCategory' value='Women'>Women</button>
     <button onClick={handleChange} name='selectedCategory' value='Man'>Man</button>
     <button onClick={handleChange} name='selectedCategory' value='Accessories'>Accessories</button>
     <button  onClick={handleChange}  name='selectedCategory' value='all'>All</button>
     <select  onChange={handleChange} name='price' >
       <option value="none" >Select Price</option>
       <option value="9" >9</option>
       <option value="15" >15</option>
       <option value="20">20</option>
     </select>
    </>
  );
}