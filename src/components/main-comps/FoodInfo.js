import React, { useContext } from 'react';
import FoodData from '../../context/FoodData';

function FoodInfo() {
  const { recipeInfo } = useContext(FoodData);
  const { moreData } = recipeInfo;
  const data = JSON.parse(localStorage.getItem("recipeInfo"));
  const { image, title } = data;

  return (
    <div className='foodInfo-main'>
      <div className='left-main'>
        <div>
          <span><i className="fa-sharp fa-solid fa-heart"></i></span>
          <img src={image} alt='failed to load' />
        </div>
        <button className='btn-add'><i className="fa-sharp fa-solid fa-cart-shopping"></i>ADD TO CARD</button>
        <button className='btn-buy'><i className="fa-solid fa-bolt-lightning"></i>BUY NOW</button>
      </div>
      <div className='right-main'>
        <div className='recipe-title'>
          <span>
            Item Title :
          </span>
          {title}
        </div>
        <div className='more-recipe-info'></div>
      </div>
    </div>
  );
};

export default FoodInfo;