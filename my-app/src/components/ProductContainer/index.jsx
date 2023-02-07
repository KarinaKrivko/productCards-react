import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product';
import s from './style.module.css';


function ProductContainer() {

    const [ products, setProducts] = useState([]);
    const [ basket, setToBasket] = useState([]);

  useEffect(() => {
    (async () =>{
    const resp = await fetch('https://dummyjson.com/products');
    const data = await resp.json();
    const result = data.products.map(({id, title, price, description, images}) =>
    ({id, title, price, description, image: images[0]}));
    setProducts(result);
  })()
}, []); 

const deleteProduct = delId => console.log(products.find(({id}) => id === delId).title); 

const addToBasket = value => {
    const target = products.find(({id}) => id === value);
    setToBasket([...basket, {...target, count:1}]);
};

console.log(basket);

  return (
    <div className={s.container}>
        {
         products.map(product => 
         <Product key={product.id}
         {...product} deleteProduct={deleteProduct} 
        addToBasket={addToBasket}
         />)
        }
    </div>
  )
}

export default ProductContainer;