// FoodBox.js

import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { id, name, calories, image, servings } = props.food;

  const handleDeleteClick = () => {
    props.onDelete(id);
  };

  return (
    <Col>
      <Card className='card'
        title={name}
        style={{ width: 250, height: 350, marginLeft: 200, marginTop: 40 }}
      >
        <img src={image} height={80} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} kcal</b>
        </p>
        <Button type="primary" onClick={handleDeleteClick}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
