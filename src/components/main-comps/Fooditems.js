import React from 'react';
import "./home.css";
import { useLocation } from 'react-router-dom';

function Fooditems({ data, foodinfo, removeItem }) {
  const location = useLocation().pathname;
  const { image, title } = data;

  return (
    <div className='food-con'>
      <div onClick={() => foodinfo(data)} className='image'>
        <img src={image} alt='failed to load' />
      </div>
      <div className='title'>
        <p onClick={() => foodinfo(data)}>{title}</p>
        {location === "/fevorite" && <span onClick={() => removeItem(data)}><i className="fa-solid fa-trash"></i></span>}
      </div>
    </div>
  );
};

export default Fooditems;