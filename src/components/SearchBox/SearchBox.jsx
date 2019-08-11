import React from 'react';
import './SearchBox.css';

export const SearchBox = ({ placeholder, onSearchChange }) => (
  <input className="search-box" type="search" placeholder={placeholder} onChange={onSearchChange} />
);

export default SearchBox;
