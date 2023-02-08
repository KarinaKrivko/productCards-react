import React from 'react';

function BasketCalculation({basket}) {

  const totalSum = basket.reduce((acc, {count, price})=> acc + count * price, 0);
  const totalCount= basket.reduce((acc, {count})=> acc + count, 0);


  return (
    <div>
      <p>Total sum: {totalSum}</p>
      <p>Total count: {totalCount}</p>
    </div>
  );
}

export default BasketCalculation;
