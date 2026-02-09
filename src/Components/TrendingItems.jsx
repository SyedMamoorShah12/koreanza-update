import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import "./TrendingItems.css";
import { useShop } from "../context/ShopContext";
import facenew from '../assets/Images/face/new.jpeg';
import img from "../assets/Images/skincaree/skincare-removebg-preview.png";
import glowCreamImg from "../assets/Images/face/facenew3.jpeg";
import eyeCoverImg from "../assets/Images/Eye/cover-removebg-preview.png";
import wrinkleCreamImg from "../assets/Images/face/wrinkle_cream-removebg-preview.png";
import foundationImg from "../assets/Images/face/peachmanu_foundation-removebg-preview.png";
import faceWashImg from "../assets/Images/skincaree/jas_perfect_face_wash.png";
import lipShadesImg from "../assets/Images/lip/Tag.jpg";
import lipGlowSerumImg from "../assets/Images/lip/peachmanu glow lip serum.jpg";
import lipnew from "../assets/Images/lip/lipnew.jpeg";
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

const TrendingItems = () => {
  return (
    <section className="trending-container">
      {/* ROW 1 */}
      <h2 className="section-title heading-line">Trending Items</h2>
      <ProductGrid products={trendingProducts} />

      {/* ROW 2 */}
      <h2 className="section-title second heading-line">Top Beauty Products</h2>
      <ProductGrid products={topBeautyProducts} />
    </section>
  );
};

export default TrendingItems;
