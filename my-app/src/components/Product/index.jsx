import React from 'react';
import s from './style.module.css';

function Product({id, title, description, price, image, deleteProduct, addToBasket}) 
{

    return (
        <div className={s.card}>
            <img src={image} alt={title}/>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <button onClick={()=>deleteProduct(id)}>Delete</button>
            <button onClick={()=>addToBasket(id)}>Add</button>

        </div>
    )
}

export default Product;