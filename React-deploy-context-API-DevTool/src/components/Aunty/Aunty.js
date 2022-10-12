import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ house }) => {
    return (
        <div>
            <h1>Aunty</h1>
            <p><small>House: {house}</small></p>
            <section className="flex">
                <Cousin house={house} />
                <Cousin house={house} />
            </section>
        </div>
    );
};

export default Aunty;