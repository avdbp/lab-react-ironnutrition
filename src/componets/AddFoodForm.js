import React, { useState } from 'react';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
    };
    onAddFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div >
        <label htmlFor="name">Name:</label>
        <input
          className='input'
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          className='input'
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          className='input'
          id="calories"
          value={calories}
          type="number"
          onChange={(e) => setCalories(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="servings">Servings:</label>
        <input
          className='input'
          id="servings"
          value={servings}
          type="number"
          onChange={(e) => setServings(e.target.value)}
          required
        />
      </div>
      <div>
        <button className='button-add' type="submit">Add Food</button>
      </div>
    </form>
  );
}

export default AddFoodForm;
