import React from 'react';
import BasketCalculation from '../BasketCalculation';
import BasketItem from '../BasketItem';

function BasketContainer({basket, increment, decrement, clearBasket, deleteFromBasket }) {

  return (
    <div>
    {
      basket.map(item => <BasketItem key={item.id} {...item} 
        increment={increment} 
        decrement={decrement} 
        deleteFromBasket={deleteFromBasket}/>)
    }
    <div>
      <BasketCalculation basket={basket}
      clearBasket={clearBasket} 
      deleteFromBasket={deleteFromBasket}/>
    </div>
    </div>
  );
}

export default BasketContainer;
