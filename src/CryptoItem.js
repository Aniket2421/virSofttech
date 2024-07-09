// CryptoItem.js
import React, { useState } from 'react';

function CryptoItem({ name, price, addToCart }) {
    const [quantity, setQuantity] = useState('');

    const handleAddToCart = () => {
        addToCart({ name, price, quantity: Number(quantity) });
        setQuantity('');
    };

    return (
        <div className="crypto-item">
            <div>
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <div>
                <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Qty"
                />
            </div>
            <button onClick={handleAddToCart}>
                Add
            </button>
        </div>
    );
}

export default CryptoItem;
