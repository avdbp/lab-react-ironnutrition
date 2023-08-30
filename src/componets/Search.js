import React, { useState } from 'react';

function Search({ foods = [], setFilteredFoods = () => {} }) {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  
    if (foods) { // Check if foods is defined
      const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFoods(filteredFoods);
    }
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
