import React, { useState } from 'react';
import '../style/SearchBar.css';

const SearchBar = ({ onSearch, placeholder = "Пошук аніме..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <button type="submit" className="search-btn">
        Шукати
      </button>
    </form>
  );
};

export default SearchBar;
