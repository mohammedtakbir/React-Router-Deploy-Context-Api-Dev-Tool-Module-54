import React from 'react';

const Summery = ({cart, handleRemove}) => {
    //? 1. use elements in a variable and use if else to set a value
    let message;
    if(cart.length === 0){
        message = <p>Please add at least one item</p>
    }else if(cart.length === 5){
        message = <p>yo, you have added 5 items</p>
    } 
    else{
        message = <p>thanks for buying</p>
    }
    return (
        <div className='sticky top-0'>
            <h1 className={`text-3xl font-medium3 ${cart.length === 0 ? 'text-blue-600' : 'text-teal-400'} ${cart.length === 2 ? 'bg-blue-600' : 'bg-yellow-400'}`}>Order Summery</h1>
            <h2 className='mt-3 font-medium text-xl mb-4'>Total Selected: {cart.length}</h2>
            {
                cart.map(ts => <p key={ts._id} className='my-1'>{ts.name} <button onClick={() => handleRemove(ts)} className='bg-teal-500 w-6 h-6 text-white rounded-full ml-5'>X</button></p>)
            }
            {message}

            {/* //? Ternary operator */}
            {cart.length === 2 ? <p>you have added two items</p> : ''} 

            {/* //? && operator */}
            {cart.length === 3 && <p>you have added three items</p>}

            {/* //? || operator */}
            {cart.length === 0 || <p>feel free to add more items on your cart</p>}
        </div>
    );
};

export default Summery;