import React, { useState } from 'react';

function Search({ foods = [], setFilteredFoods = () => {} }) {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  
    if (foods) { 
      const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFoods(filteredFoods);
    }
  };
  

  return (
    <div>
      <input 
        className='search-bar'
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
