import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, clearSelected } from "../features/products/productsSlice";
import { useCart } from "../context/cartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selected, status } = useSelector((s) => s.products);
  const { addToCart } = useCart();

  useEffect(() => {
    dispatch(fetchProductById(id));
    return () => { dispatch(clearSelected()); };
  }, [dispatch, id]);

  if (status === "loading" || !selected) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <img src={selected.image} alt={selected.title} className="img-fluid" />
        </div>
        <div className="col-md-7">
          <h3>{selected.title}</h3>
          <p className="text-muted">{selected.category}</p>
          <h4>${selected.price}</h4>
          <p>{selected.description}</p>
          <button className="btn btn-primary me-2" onClick={() => { addToCart(selected); navigate("/cart"); }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
