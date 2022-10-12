import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Summery from '../Summery/Summery';
import './Home.css'
const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handlerAddToCart = (tShirt) => {
        const exist = cart.find(ts => ts._id === tShirt._id);
        if (exist) {
            alert('already added');
            return;
        } else {
            const newCart = [...cart, tShirt]
            setCart(newCart);
        }
    };
    const handleRemove = (tShirt) => {
        const remaining = cart.filter(ts => ts._id !== tShirt._id);
        setCart(remaining);
    }
    return (
        <div>
            <div className="main-container container mx-auto custom-grid1 mt-10">
                <div className="tshirt-container custom-grid2">
                    {
                        tShirts.map(tShirt => <Cart
                            key={tShirt._id}
                            tShirt={tShirt}
                            handlerAddToCart={handlerAddToCart}
                        />)
                    }
                </div>
                <div className="cart-container">
                    <Summery cart={cart} handleRemove={handleRemove} />
                </div>
            </div>
        </div>
    );
};

export default Home;