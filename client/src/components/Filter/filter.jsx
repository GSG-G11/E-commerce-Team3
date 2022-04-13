import React from 'react';
import './filter.css';

export default function Filter({ handleChange }) {
  return (
    <div className="filter-section">
      <button
        onClick={handleChange}
        name="selectedCategory"
        value="all"
        className="category"
      >
        All
      </button>

      <button
        onClick={handleChange}
        name="selectedCategory"
        value="Soups"
        className="category"
      >
        Soups
      </button>
      <button
        onClick={handleChange}
        name="selectedCategory"
        value="Salads"
        className="category"
      >
        Salads
      </button>
      <button
        onClick={handleChange}
        name="selectedCategory"
        value="Sandwiches"
        className="category"
      >
        Sandwiches
      </button>
      <button
        onClick={handleChange}
        name="selectedCategory"
        value="Pasta"
        className="category"
      >
        Pasta
      </button>
      <button
        onClick={handleChange}
        name="selectedCategory"
        value="Meat"
        className="category"
      >
        Meat
      </button>
      <select onChange={handleChange} name="price" className="price">
        <option value="none">Select Price</option>
        <option value="9">9</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}
