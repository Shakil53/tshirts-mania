import React from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h2>GrandPa</h2>
            <section className='flex'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
            <div className='explanation' >
                <h4>How can we send props with multiple components</h4>
            </div>
        </div>
    );
};

export default Grandpa;