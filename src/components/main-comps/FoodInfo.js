import React from 'react';

function FoodInfo() {
  const data = JSON.parse(localStorage.getItem("recipeInfo"));
  const moreData = JSON.parse(localStorage.getItem("moreRecipeInfo"));
  const { image, title } = data;
  const key = Object.keys(moreData);
  const value = Object.values(moreData);

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
        <div className='more-recipe-info'>
          {key.map((e, index) => console.log(e, index))}
          TODO: value gulo ke display kor with style
        </div>
      </div>
    </div>
  );
};

export default FoodInfo;