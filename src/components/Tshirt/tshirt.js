import React from 'react';
import './Tshirt.css';

const tshirt = ({ tshirt, handleAddToCart }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='tshirt'>
            <img alt='t-shirt img' src={picture}></img>
            <h3 className='text'> {name}</h3>
            <h5 className='text'>Price {price}$</h5>
            <button onClick={handleAddToCart} className='btn'>Buy Now</button>
        </div>
    );
};

export default tshirt;