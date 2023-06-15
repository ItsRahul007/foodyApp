import React, { useContext } from 'react';
import FoodData from '../../context/FoodData';
import {useNavigate} from 'react-router-dom'

function FoodInfo() {
  const navigate = useNavigate();
  const { recipeInfo } = useContext(FoodData);
  const {image, title} = recipeInfo;

  // <i className="fa-sharp fa-solid fa-cart-shopping"></i>
  return (
    <div className='foodInfo-main'>
      <div className='left-main'>
        <div>
          <span><i className="fa-sharp fa-solid fa-heart"></i></span>
          <img src={image} alt='failed to load'/>
        </div>
        <button>ADD TO CARD</button>
        <button>BUY NOW</button>
      </div>
      <div className='right-main'></div>
    </div>
  );
};

export default FoodInfo;