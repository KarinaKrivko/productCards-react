import React from 'react';
import BasketCalculation from '../BasketCalculation';
import BasketItem from '../BasketItem';

function BasketContainer({basket, increment, decrement }) {

  return (
    <div>
    {
      basket.map(item => <BasketItem key={item.id} {...item} increment={increment} decrement={decrement}/>)
    }
    <div>
      <BasketCalculation basket={basket}/>
    </div>
    </div>
  );
}

export default BasketContainer;
