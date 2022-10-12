import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt, handleAddToCart}) => {
    const {name, picture, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <h3>Price: {price}</h3>
            <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;