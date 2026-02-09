import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useShop } from "../context/ShopContext";
import "./TrendingItems.css";
import "./Newarrival.css";

// import img from "../assets/Images/img1.jpg";


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
  { id: 21, name: "Hyaluronic Acid Mask", price: "899", image: hyaluronMaskImg },
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
          <div className="product-image-container-premium">
            <Link to={`/product/${product.id}`} className="product-card-link-premium">
              <img src={product.image} alt={product.name} className="product-image-premium" />
            </Link>

            {/* Wishlist Overlay */}
            <button
              className="wishlist-btn-premium"
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(product);
              }}
              style={{ color: isInWishlist(product.id) ? 'red' : 'inherit' }}
            >
              <Heart size={20} fill={isInWishlist(product.id) ? "red" : "none"} />
            </button>

            {/* New Badge (optional/simulated for now) */}
            <span className="badge-new">New</span>
          </div>

          <div className="product-details-premium">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 className="product-name-premium">{product.name}</h3>
              <p className="product-desc-premium">Hydrating & Glowing</p> {/* Static for now as description isn't in this prop, using placeholder or could be passed */}
            </Link>

            <div className="price-row-premium">
              <p className="product-price-premium">
                Rs. {Number(product.price).toLocaleString()}
              </p>
              <div className="stars-premium">
                {"★★★★★".split("").map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            <button
              className="add-to-cart-btn-premium"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
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
      <h2 className="section-title second heading-line">All Products</h2>
      <ProductGrid products={topBeautyProducts} />
    </section>
  );
};

export default Newarrival;
