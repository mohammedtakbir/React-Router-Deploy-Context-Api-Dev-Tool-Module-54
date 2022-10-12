import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    // const ring = useContext(RingContext);
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h1>Friend</h1>
            <p><small>{house}</small></p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;