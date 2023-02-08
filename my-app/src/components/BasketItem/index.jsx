import React from 'react';
import s from './style.module.css';

function BasketItem({id, title, price, count, increment, decrement, deleteFromBasket}) {

  return (
    <div className={s.item}>
    <p>{title}</p>
    <p>{price}</p>
    <p>{count}</p>
    <div className={s.btn}>
    <button onClick={() => decrement(id)}>-</button>
    <button onClick={() => increment(id)}>+</button>
    <button onClick={() => deleteFromBasket(id)}>x</button>

    </div>
    </div>
  );
}

export default BasketItem;
