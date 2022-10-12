import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveItem}) => {
    //? 1. use elements in a variable and use if else to set a value
    let message;
    if(cart.length === 0){
        message = <p>please add at least one item</p>
    }
    else if(cart.length === 1){
        message = <div>
            <p>take one for u</p>
            <p>take one for you</p>
        </div>
    }
    else{
        message = <p>thanks for buying</p>
    }
    return (
        <div>
            <h1 className={cart.length === 2 ? 'purple' : 'orange'}>Order Summery</h1>
            <p className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity: {cart.length}</p>
            {
                cart.map(ts => <p key={ts._id}>
                    {ts.name}
                    <button onClick={() => handleRemoveItem(ts)}>X</button>
                </p>)
            }

            {message}

            {/* //? 2. ternary operator---> condition ? true : false */}
            {cart.length === 3 ? <p>tin jonke gift diba?</p> : <p>kino kino</p>}

            {/* //? 3. && operator (if condition is true, it will execute) */}
            {cart.length === 2 && <h2>double item</h2>}

            {/* //? 4. || operator (if condition is false, it will execute) */}
            {cart.length === 4 || <p>i want four items</p>}
        </div>
    );
};

export default Cart;

//* Conditional rendering
//? 1. use elements in a variable and use if else to set a value
//? 2. ternary operator---> condition ? true : false
//? 3. && operator (if condition is true, it will execute)
//? 4. || operator (if condition is false, it will execute)