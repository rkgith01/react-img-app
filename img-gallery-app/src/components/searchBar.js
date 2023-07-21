import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search images..." value={searchTerm} onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;
