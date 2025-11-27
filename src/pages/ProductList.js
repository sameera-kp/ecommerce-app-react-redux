// src/pages/ProductList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { items: products, status, error } = useSelector((state) => state.products);

  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts());
  }, [dispatch, products.length]);

  if (status === "loading") return <div>Loading products...</div>;
  if (status === "failed") return <div className="text-danger">{error}</div>;

  // Filter products by search query
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredProducts.length === 0 ? (
          <div className="col-12">No products found.</div>
        ) : (
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
