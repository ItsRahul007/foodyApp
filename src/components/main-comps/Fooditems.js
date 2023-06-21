import React, { useRef } from 'react';
import "./home.css";
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function Fooditems({ data, foodinfo, removeItem }) {
  const location = useLocation().pathname;
  const ref = useRef(null);
  const { image, title } = data;

  function remove(item, message){
    ref.current.style.display = "none";
    removeItem(item);
    toast(message);
  };

  return (
    <div ref={ref} className='food-con'>
      <div onClick={() => foodinfo(data)} className='image'>
        <img src={image} alt='failed to load' />
      </div>
      <div className='title'>
        <p onClick={() => foodinfo(data)}>{title}</p>
        {location === "/fevorite" && <span onClick={() => remove(data, "Item removed")}><i className="fa-solid fa-trash"></i></span>}
      </div>
    </div>
  );
};

export default Fooditems;