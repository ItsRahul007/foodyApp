import React, { useContext } from 'react';
import "./cart-fev.css";
import FoodData from '../../context/FoodData';
import Fooditems from '../main-comps/Fooditems';

function Fevorite() {
  const { fevoriteItem, foodinfo, removeFevoriteItem } = useContext(FoodData);
  
  return (
    <div className='fevorite'>
      <h1>Your Fevorites</h1>
      <div className='fev-items'>
        {fevoriteItem.length !== 0? fevoriteItem.map(data => {
          return <Fooditems key={data.image} data={data} removeItem={removeFevoriteItem} foodinfo={foodinfo} />
        }) : <h3>You did not add any fevorite food</h3> }
      </div>
    </div>
  )
}

export default Fevorite;