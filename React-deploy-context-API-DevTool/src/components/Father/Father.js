import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div>
            <h1>father</h1>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Myself house={house}/>
                <Brother house={house} />
                <Sister house={house} />
            </section>
        </div>
    );
};

export default Father;