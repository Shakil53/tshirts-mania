import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {

    return (
        <div>
            <h2> Order Summary</h2>
            <p>Order quantity: {cart.length}</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;