import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => (
  <div className="card h-100 shadow-sm">
    <img src={product.image} alt={product.title} className="card-img-top p-3" style={{height:260, objectFit:"contain"}}/>
    <div className="card-body d-flex flex-column">
      <h6 className="card-title">{product.title}</h6>
      <p className="fw-bold text-primary">$ {product.price}</p>
      <Link to={`/product/${product.id}`} className="btn btn-outline-primary mt-auto">View Details</Link>
    </div>
  </div>
);

export default ProductCard;
