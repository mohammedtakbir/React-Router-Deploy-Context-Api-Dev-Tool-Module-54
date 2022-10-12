import React from 'react';
import { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h1>Uncle</h1>
            <p><small> House: {house}</small></p>
            <p><small> House: {money}</small></p>
        </div>
    );
};

export default Uncle;