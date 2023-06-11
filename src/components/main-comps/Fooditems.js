import React from 'react';
import "./home.css";

function Fooditems({ imgUrl, title }) {

  return (
    <div className='food-con'>
        <div className='image'>
            <img src={imgUrl} alt='failed to load'/>
        </div>
        <div className='title'>
            <p>{title}</p>
        </div>

    </div>
  );
};

export default Fooditems;