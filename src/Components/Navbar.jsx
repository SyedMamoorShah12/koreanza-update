import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import "./Navbar.css";

import { useShop } from "../context/ShopContext";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems, wishlistItems } = useShop();

  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <nav className="navbar">
      <div className="nav-logo">MyBrand</div>

      <div className="menu-toggle" onClick={() => setSearchOpen(false) || setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>

        <li className="search-link">
          <div className={`search-wrapper ${searchOpen ? "active" : ""}`}>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <Search
              size={20}
              className="search-icon"
              onClick={toggleSearch}
            />
          </div>
        </li>
      </ul>

      <div className="nav-icons">
        {/* LOGIN ICON */}
        <Link to="/auth" className="icon-wrapper">
          <User size={22} />
        </Link>

        {/* WISHLIST */}
        <Link to="/heart" className="icon-wrapper badge">
          <Heart size={22} />
          {wishlistItems.length > 0 && <span className="dot"></span>}
        </Link>

        {/* CART */}
        <Link to="/cart" className="icon-wrapper badge">
          <ShoppingCart size={22} />
          {cartItems.length > 0 && <span className="dot"></span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
