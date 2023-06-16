import React, { useContext, useEffect } from 'react';
import FoodData from '../../context/FoodData';
import {useNavigate} from 'react-router-dom'

function FoodInfo() {
  const navigate = useNavigate();
  const { recipeInfo } = useContext(FoodData);
  const {image, title} = recipeInfo;  

  return (
    <div className='foodInfo-main'>
      <div className='left-main'>
        <div>
          <span><i className="fa-sharp fa-solid fa-heart"></i></span>
          <img src={image} alt='failed to load'/>
        </div>  
        <button className='btn-add'><i className="fa-sharp fa-solid fa-cart-shopping"></i>ADD TO CARD</button>
        <button className='btn-buy'><i class="fa-solid fa-bolt-lightning"></i>BUY NOW</button>
      </div>
      <div className='right-main'>{title}</div>
    </div>
  );
};

export default FoodInfo;