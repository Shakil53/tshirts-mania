import React from 'react';
import './Tshirt.css';

const tshirt = ({ tshirt }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='tshirt'>
            <img alt='t-shirt img' src={picture}></img>
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button>Buy Now</button>
        </div>
    );
};

export default tshirt;