import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, selectedType, onTypeChange }) => {
  const types = [
    '', 'fire', 'water', 'grass', 'electric', 'poison', 'flying', 'bug', 'normal', 'ground',
    'fairy', 'fighting', 'psychic', 'rock', 'steel', 'ice', 'dragon', 'ghost', 'dark'
  ];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <select value={selectedType} onChange={onTypeChange}>
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>{type.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
