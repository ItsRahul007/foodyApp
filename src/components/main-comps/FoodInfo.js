import React, {useContext} from 'react';
import FoodData from '../../context/FoodData';
import { toast } from 'react-toastify';

function FoodInfo() {
  const { addFevoriteItem, addCartItem } = useContext(FoodData);
  const data = JSON.parse(localStorage.getItem("recipeInfo"));
  const moreData = JSON.parse(localStorage.getItem("moreRecipeInfo"));
  const { image, title } = data;
  const moreDataArr = Object.entries(moreData); // making the array of the object

  return (
    <div className='foodInfo-main'>
      <div className='left-main'>
        <div>
          <span onClick={()=> { addFevoriteItem(data); toast("Item added to fevorite")}}>
            <i className="fa-sharp fa-solid fa-heart"></i>
          </span>
          <img src={image} alt='failed to load' />
        </div>
        <button className='btn-add' onClick={()=> {
          addCartItem(data)
          toast("Item added to cart")
        }}>
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>ADD TO CART
        </button>
        <button className='btn-buy'>
          <i className="fa-solid fa-bolt-lightning"></i>BUY NOW
        </button>
      </div>
      <div className='right-main'>
        <div className='recipe-title'>
          <span>
            Item Title :
          </span>
          {title}
        </div>
        <div style={{marginTop: "15px"}}>
          {moreDataArr.map((e) => {
            if( typeof e[1] === 'boolean'){
              return(
                <div key={e[0]} style={{fontSize: "15px", margin: "6px 0"}}>
                  <span style={{fontWeight: "500"}}>{e[0]} : </span>
                  {e[1] === false? "No": "Yes"}
                </div>
              );
            }
            else {
              return(
                <div key={e[0]} style={{fontSize: "15px", margin: "6px 0"}}>
                  <span style={{fontWeight: "500"}}>{e[0]} : </span>
                  {e[1]}
                </div>
              )
            }
            
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodInfo;