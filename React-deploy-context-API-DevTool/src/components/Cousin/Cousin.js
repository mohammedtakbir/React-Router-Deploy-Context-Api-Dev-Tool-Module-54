import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ house }) => {
    return (
        <div>
            <h1>Cousin</h1>
            <p><small> House: {house}</small></p>
            <section>
                <Friend />
            </section>
        </div>
    );
};

export default Cousin;