import React from 'react';
import BasketItem from '../BasketItem';

function BasketContainer({basket}) {

  return (
    <div>
     
    {
      basket.map(item => <BasketItem key={item.id} {...item}/>)
    }
    </div>
  );
}

export default BasketContainer;
