import React, {useContext} from 'react'
import Fooditems from './Fooditems';
import FoodData from '../../context/FoodData';
import indian_food from "../icon-image/Indian-Food.png";
import Slider from './Slider';

function Home() {
  const {sampleFoodData} = useContext(FoodData);

  return (
    <>
      <div className='main-image'>
        <h1>Order Your Fevorite Food <br/> Online</h1>
        <img src={indian_food} alt=''/>
      </div>
      <Slider/>
      <div className='container'>
        <div>
          {sampleFoodData.map(data => {
            return (
              <Fooditems key={data.id} imgUrl={data.image} title={data.title}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home;