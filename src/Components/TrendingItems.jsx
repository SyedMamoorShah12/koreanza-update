import React from "react";
import "./TrendingItems.css";
import img from "../assets/Images/3.jpg";
import img2 from "../assets/Images/4.jpg";
import img3 from "../assets/Images/2.jpg";

/* FIRST ROW */
const trendingProducts = [
  { id: 1, name: "Firming Face Cream", price: "3999", image: img2 },
  { id: 2, name: "Peachmanu", price: "3999", image: img3 },
  { id: 3, name: "CINDERELLA", price: "3999", image: img2 },
  { id: 4, name: "Cleaderm", price: "3999", image: img },
];

/* SECOND ROW */
const topBeautyProducts = [
  { id: 5, name: "Nails Polish", price: "2999", image: img2 },
  { id: 6, name: "Jas Perfect Foam", price: "3499", image: img },
  { id: 7, name: "Glow Cream", price: "2499", image: img2 },
  { id: 8, name: "Glow Cream", price: "2499", image: img3 },
];

import { useShop } from "../context/ShopContext";

const ProductGrid = ({ products }) => {
  const { addToCart, addToWishlist, isInWishlist } = useShop();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>

          <div className="action-bar">
            {/* Wishlist */}
            <button
              className="icon-btn"
              onClick={() => addToWishlist(product)}
              style={{ color: isInWishlist(product.id) ? 'red' : 'inherit' }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill={isInWishlist(product.id) ? "red" : "none"} strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            {/* Cart */}
            <button className="icon-btn" onClick={() => addToCart(product)}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>

          <div className="product-info2">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">
              Rs. {Number(product.price).toLocaleString()}
            </p>

            <div className="stars">
              {"★★★★★".split("").map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TrendingItems = () => {
  return (
    <section className="trending-container">
      {/* ROW 1 */}
      <h2 className="section-title">Trending items</h2>
      <ProductGrid products={trendingProducts} />

      {/* ROW 2 */}
      <h2 className="section-title second">Top beauty products</h2>
      <ProductGrid products={topBeautyProducts} />
    </section>
  );
};

export default TrendingItems;
