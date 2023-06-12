import React from 'react';
import "./layouts.css";
import food_icon from "../icon-image/food_icon.png";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-icon'>
        <img src={food_icon} alt='icon'/>
        <h3>Foody</h3>
      </div>
      <div style={{marginLeft: "250px", display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "30%"}}>
        <div className='search-con'>
          <input type='search' placeholder='Search for food'/>
          <button>Search</button>
        </div>
        <div className='cart-icons'>
        <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        <i class="fa-sharp fa-solid fa-heart"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;