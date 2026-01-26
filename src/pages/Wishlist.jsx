import React from 'react';
import './Wishlist.css';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems, addToWishlist, addToCart } = useShop();
  const navigate = useNavigate();

  // "addToWishlist" toggles presence, so calling it on an item in wishlist will remove it.
  const handleRemove = (product) => {
    addToWishlist(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  }

  return (
    <div className="wishlist-container">
      <header className="wishlist-header">
        <h2 className="wishlist-title">My wishlist</h2>
        <p className="wishlist-subtitle">Your favorite beauty products all in one place</p>
      </header>

      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist" style={{ textAlign: 'center', padding: '50px' }}>
          <h3>Your wishlist is empty</h3>
          <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#FDC040', border: 'none', cursor: 'pointer' }}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img src={product.img || product.image} alt={product.name} />
              </div>
              <div className="product-info-wishlist" style={{ padding: '10px' }}>
                <h3>{product.name}</h3>
                <p>Rs {product.price}</p>
              </div>
              <div className="card-actions">
                <button
                  className="icon-btn heart-btn"
                  onClick={() => handleRemove(product)}
                  title="Remove from Wishlist"
                >
                  <span className="heart-icon">💔</span>
                </button>
                <button
                  className="icon-btn cart-btn"
                  onClick={() => handleAddToCart(product)}
                  title="Add to Cart"
                >
                  <span className="bag-icon">🛍️</span>
                  <span className="plus-sign">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;