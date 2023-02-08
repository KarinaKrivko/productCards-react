import React from 'react';
import s from './style.module.css';


function BasketCalculation({basket, clearBasket}) {

  const totalSum = basket.reduce((acc, {count, price})=> acc + count * price, 0);
  const totalCount= basket.reduce((acc, {count})=> acc + count, 0);
console.log(clearBasket)


  return (
    <div className={s.basket}>
      <p>Total sum: {totalSum}</p>
      <p>Total count: {totalCount}</p>
      <button onClick={clearBasket}>Clear basket</button>
    </div>
  );
}

export default BasketCalculation;
