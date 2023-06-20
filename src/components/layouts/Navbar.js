import React, { useState, useContext } from 'react';
import "./layouts.css";
import { Link } from 'react-router-dom';
import food_icon from "../icon-image/food_icon.png";
import FoodData from '../../context/FoodData';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const { clickedFood } = useContext(FoodData);

  function searchRecipe(){
    if(location.pathname === "/" && value.length >= 1){
      clickedFood(value, '');
    }
    else if(value.length <= 1){} // Do nothing
    else{
      navigate("/");
      clickedFood(value, '');
    }
  }

  return (
    <nav className='navbar'>
      <div className='nav-icon'>
        <Link to="/">
          <img src={food_icon} alt='icon' />
          <h3>Foody</h3>
        </Link>
      </div>
      <div style={{ marginLeft: "250px", display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "30%" }}>
        <div className='search-con'>
          <input type='search' placeholder='Search for food' onChange={(e) => setValue(e.target.value)} />
          <button onClick={searchRecipe}>Search</button>
        </div>
        <div className='cart-icons'>
          <Link to="/card">Cart<i className="fa-sharp fa-solid fa-cart-shopping"></i></Link>
          <Link to="/fevorite">Fevorite<i className="fa-sharp fa-solid fa-heart"></i></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;