import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

// import img from "../assets/Images/img1.jpg";
import skinCoverImg from "../assets/Images/skincaree/cover.png";
import lipShadesImg from "../assets/Images/lip/shades.jpeg";
import faceWashHydroImg from "../assets/Images/skincaree/jas_perfect_facewash__2_.png";
import glowCreamImg from "../assets/Images/face/peachmnu_glow_cream-removebg-preview.png";
import lipSerumBlueImg from "../assets/Images/lip/cleaderm lip serum milky blue.jpg";
import hyaluronMaskImg from "../assets/Images/skincaree/hydration.png";

/* FIRST ROW */
// const trendingProducts = [
//   { id: 1, name: "Firming Face Cream", price: "3999", image: img },
//   { id: 2, name: "Peachmanu", price: "3999", image: img },
//   { id: 3, name: "CINDERELLA", price: "3999", image: img },
//   { id: 4, name: "Cleaderm", price: "3999", image: img },
// ];

/* SECOND ROW */
const topBeautyProducts = [
  { id: 21, name: "Hyaluronic Acid Mask", price: "350", image: hyaluronMaskImg },
  { id: 26, name: "Jas Perfect Foam - Hydro", price: "1850", image: faceWashHydroImg },
  { id: 8, name: "Peachmanu Glow Cream", price: "3200", image: glowCreamImg },
  { id: 10, name: "Cleaderm Lip Serum - Milky Blue", price: "1200", image: lipSerumBlueImg },
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

const Newarrival = () => {
  return (
    <section className="trending-container">
      {/* ROW 1 */}
      {/* <h2 className="section-title">New Arrival</h2>
      <ProductGrid products={trendingProducts} /> */}

      {/* ROW 2 */}
      <h2 className="section-title second">All products</h2>
      <ProductGrid products={topBeautyProducts} />
    </section>
  );
};

export default Newarrival;
