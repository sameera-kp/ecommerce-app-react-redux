// src/components/TodaysOffer.js
import React from "react";

const TodaysOffer = ({ products = [] }) => {
  if (!products.length) return null;

  return (
    <div className="todays-offer container my-4">
      <h2 className="offer-title">🔥 Today's Offers</h2>
      <div className="offer-cards row">
        {products.map((p) => (
          <div className="col-md-3 mb-3" key={p.id}>
            <div className="card h-100">
              <img
                src={p.image}
                alt={p.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">${p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysOffer;
