import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plantData from './plantData';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left" onClick={onHomeClick}>
          <span className="logo-emoji" role="img" aria-label="plant">🌿</span>
          <div>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </div>
        </div>
        <div className="navbar-links">
          <a
            href="#plants"
            onClick={(e) => {
              e.preventDefault();
              setShowCart(false);
            }}
          >
            Plants
          </a>
          <a
            href="#cart"
            className="cart-link"
            onClick={(e) => {
              e.preventDefault();
              setShowCart(true);
            }}
            aria-label="Shopping cart"
          >
            <span className="cart-icon" role="img" aria-hidden="true">🛒</span>
            <span className="cart_quantity_count">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantData.map((group) => (
            <section key={group.category}>
              <h1 className="category-title">
                <div>{group.category}</div>
                <div className="underline" />
              </h1>
              <div className="product-list">
                {group.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">${plant.cost}</div>
                    <button
                      className={`product-button ${isInCart(plant.name) ? 'added-to-cart' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
