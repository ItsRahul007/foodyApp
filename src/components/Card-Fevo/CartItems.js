import React, { useState, useRef } from 'react'

function CartItems({ data, remove }) {
  const ref = useRef(null);
  const value = useRef(null);
  const [amount, setAmount] = useState(1);
  const {image, title} = data;

  function removeItem(item){
      ref.current.style.display = "none";
      remove(item);
  };

  return (
    <div ref={ref} className='cart-items'>
        <div className='img-title'>
          <img src={image} alt='' />
          <p>{title}</p>
        </div>
        <div className='price-quan'>
          <span>
            <input type='number' value={amount} minLength={1} onChange={e => setAmount(e.target.value)} />
          </span>
          <span ref={value}> {100 * amount} </span>
        </div>
        <div className='remove-btn'>
            <button onClick={()=>removeItem(data)}><i className="fa-solid fa-xmark"></i></button>
        </div>
    </div>
  );
};

export default CartItems;