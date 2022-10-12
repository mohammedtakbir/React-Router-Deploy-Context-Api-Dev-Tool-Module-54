import React from 'react';

const Cart = ({tShirt, handlerAddToCart}) => {
    const {picture, name, price} = tShirt;
    return (
        <div className='border text-center p-4'>
            <img className='h-[250px] mx-auto' src={picture} alt="" />
            <h3 className='text-2xl font-medium mb-2 mt-4'>{name}</h3>
            <p className='mb-2'>Price: ${price}</p>
            <button onClick={() => handlerAddToCart(tShirt)} className='bg-teal-500 py-1 px-3 rounded-md text-white font-medium cursor-pointer'>Add to Cart</button>
        </div>
    );
};

export default Cart;