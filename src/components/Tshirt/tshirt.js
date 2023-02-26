import React from 'react';
import './Tshirt.css';

const tshirt = ({ tshirt }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='tshirt'>
            <img alt='t-shirt img' src={picture}></img>
            <h2 className='text'>{name}</h2>
            <h4 className='text'>{price}</h4>
            <button className='btn'>Buy Now</button>
        </div>
    );
};

export default tshirt;