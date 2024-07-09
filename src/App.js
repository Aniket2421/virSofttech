// App.js
import React, { useState } from 'react';
import CryptoItem from './CryptoItem';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });

    setTotal((prevTotal) => prevTotal + (item.price * item.quantity));
  };

  return (
    <div className="app">
      <div>
        <CryptoItem name="BTC" price={25000} addToCart={addToCart} />
        <CryptoItem name="DOGE" price={0.75} addToCart={addToCart} />
        <CryptoItem name="RIPPLE" price={1.5} addToCart={addToCart} />
      </div>

      <div className="cart">
        <h2>My Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Qty.</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">
          Total: ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default App;
