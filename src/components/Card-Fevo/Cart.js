import React, { useContext } from 'react';
import FoodData from '../../context/FoodData';
import CartItems from './CartItems';

function Cart() {
  const { sampleCartData, removeCartItem } = useContext(FoodData);
  
  return (
    <section className='cart'>
      <div className='cart-head'>
        <h3>Shoping Cart</h3>
        <p>{sampleCartData.length} items in your cart</p>
      </div>
      <div className='cart-head2'>
        <span>Product</span>
        <div className='price-quan-head'>
          <span>Quantity</span>
          <span>Price</span>
        </div>
      </div>
      {sampleCartData.map(data => {
        return <CartItems key={data.image} data={data} remove={removeCartItem} />
      })}
      <div style={{height: "30px"}}></div>
    </section>
  );
};

export default Cart;