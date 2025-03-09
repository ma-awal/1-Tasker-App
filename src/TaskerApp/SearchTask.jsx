import React, { useState } from 'react';

function SearchTask({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  function handleClick() {
    onSearch(searchTerm);
  }
  return (
    <div className="flex justify-center ">
      <input
        type="search"
        className="px-3 py-2 bg-gray-100  text-[#777]  w-2/5   outline-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="bg-orange-500 py-1 px-3 text-white capitalize"
      >
        Search
      </button>
    </div>
  );
}

export default SearchTask;
