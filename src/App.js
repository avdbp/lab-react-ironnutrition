import React, { useState } from 'react';
import './App.css';
import foodsData from './foods.json';
import { Row, Col } from 'antd';
import FoodBox from '../src/componets/FoodBox';
import AddFoodForm from '../src/componets/AddFoodForm';
import Search from '../src/componets/Search';



function App() {
  const [foods, setFoods] = useState(foodsData);
  const [filteredFoods, setFilteredFoods] = useState([...foodsData]);

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
    setFilteredFoods([...filteredFoods, newFood]);
  };

  const handleDeleteFood = (foodName) => {
    const updatedFoods = foods.filter((food) => food.name !== foodName);
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };



  return (
    <div className="App">
      <h1>Food List</h1>
      <Search foods={foods} setFilteredFoods={setFilteredFoods} />
      <Row gutter={[1, 1]}>
        {filteredFoods.map((food) => (
          <Col span={5} key={food.name}>
            <FoodBox food={food} onDelete={() => handleDeleteFood(food.name)} />
          </Col>
        ))}
      </Row>
      <div>
        <AddFoodForm onAddFood={handleAddFood} />
      </div>
    </div>
  );
}

export default App;
