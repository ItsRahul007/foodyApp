import React, {useContext} from 'react'
import Fooditems from './Fooditems';
import FoodData from '../../context/FoodData';

function Home() {
  const {sampleFoodData} = useContext(FoodData);

  return (
    <>
      <div className='container'>
        {sampleFoodData.map(data => {
          return (
            <Fooditems key={data.id} imgUrl={data.image} title={data.title}/>
          )
        })}
      </div>
    </>
  )
}

export default Home;