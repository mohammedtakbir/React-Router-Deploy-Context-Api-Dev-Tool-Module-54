import React from 'react';
import { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h1>Sister</h1>
            <p><small> House: {house}</small></p>
            <p><small> Money: {money}</small></p>
            <button onClick={() => setMoney(money + 100)}>Add Money</button>
        </div>
    );
};

export default Sister;