// src/components/SearchBar.js

import React from "react";

const SearchBar = ({ handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div className="m-4">
      <input
        type="text"
        placeholder="Search movies..."
        onChange={handleChange}
        className="w-full h-16 text-center border-4 border-red-500 rounded-2xl text-xl font-bold"
      />
    </div>
  );
};

export default SearchBar;
