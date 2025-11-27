// src/components/Header.js
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import "../styles/Header.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search}`);
      setSearch("");
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyShop</Link>
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <nav>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/cart">Cart ({cartItems.length})</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
