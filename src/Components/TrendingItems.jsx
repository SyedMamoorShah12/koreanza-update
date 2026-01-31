import React from "react";
import { Link } from "react-router-dom";
import "./TrendingItems.css";
import { useShop } from "../context/ShopContext";

import img from "../assets/Images/skincaree/skincare-removebg-preview.png";
import glowCreamImg from "../assets/Images/face/peachmnu_glow_cream-removebg-preview.png";
import eyeCoverImg from "../assets/Images/Eye/cover-removebg-preview.png";
import wrinkleCreamImg from "../assets/Images/face/wrinkle_cream-removebg-preview.png";
import foundationImg from "../assets/Images/face/peachmanu_foundation-removebg-preview.png";
import faceWashImg from "../assets/Images/skincaree/jas_perfect_face_wash.png";
import lipShadesImg from "../assets/Images/lip/Tag.jpg";
import lipGlowSerumImg from "../assets/Images/lip/peachmanu glow lip serum.jpg";
import eyeShimmerImg from "../assets/Images/Eye/twoedit_eye_shimmer_1-removebg-preview.png";
import faceWashCollagenImg from "../assets/Images/skincaree/jas_perfect_face_wash__2.png";

/* FIRST ROW */
const trendingProducts = [
  { id: 9, name: "Firming Face Cream", price: "2999", image: wrinkleCreamImg },
  { id: 7, name: "Peachmanu Foundation", price: "4500", image: foundationImg },
  { id: 24, name: "Jas Perfect Foam", price: "1850", image: faceWashImg },
  { id: 12, name: "Peachmanu Glow Lip Serum", price: "1400", image: lipGlowSerumImg },
];

/* SECOND ROW */
const topBeautyProducts = [
  { id: 30, name: "Lip Shades Palette", price: "2500", image: lipShadesImg },
  { id: 23, name: "Jas Perfect Foam - Collagen", price: "1850", image: faceWashCollagenImg },
  { id: 8, name: "Glow Cream", price: "3200", image: glowCreamImg },
  { id: 5, name: "Twoedit Eye Shimmer", price: "1500", image: eyeShimmerImg },
];

const ProductGrid = ({ products }) => {
  const { addToCart, addToWishlist, isInWishlist } = useShop();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`} className="product-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
          </Link>

          <div className="action-bar">
            {/* Wishlist */}
            <button
              className="icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(product);
              }}
              style={{ color: isInWishlist(product.id) ? 'red' : 'inherit' }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill={isInWishlist(product.id) ? "red" : "none"} strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            {/* Cart */}
            <button
              className="icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>

          <Link to={`/product/${product.id}`} className="product-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
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
          </Link>
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
