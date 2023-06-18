import React, { useContext } from 'react';
import "./cart-fev.css";
import FoodData from '../../context/FoodData';
import Fooditems from '../main-comps/Fooditems';

function Fevorite() {
  const { fevoriteItem } = useContext(FoodData);
  return (
    <div className='fevorite'>
      <h1>Your Fevorites</h1>
      <div className='fev-items'>
        {fevoriteItem.map(data => {
          return <Fooditems data={data}/>
        })}
      </div>
    </div>
  )
}

export default Fevorite;