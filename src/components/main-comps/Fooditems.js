import React from 'react';
import "./home.css";

function Fooditems({data, foodinfo}) {
  const { image, title } = data;

  return (
    <div onClick={()=> foodinfo(data)} className='food-con'>
        <div className='image'>
            <img src={image} alt='failed to load'/>
        </div>
        <div className='title'>
            <p>{title}</p>
        </div>      
    </div>
  );
};

export default Fooditems;