import React from 'react';
import s from './style.module.css';

function BasketItem({title, price, count}) {

  return (
    <div className={s.item}>
    <p>{title}</p>
    <p>{price}</p>
    <p>{count}</p>
    <div className={s.btn}>
    <button>-</button>
    <button>+</button>
    </div>
    </div>
  );
}

export default BasketItem;
