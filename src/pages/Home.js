import React, { useEffect, useState } from "react";
import CarouselBanner from "../components/CarouselBanner";
import TodaysOffer from "../components/TodaysOffer";
import { getProducts } from "../services/productService";

const Home = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const data = await getProducts();
      setOffers(data.slice(0, 4)); // First 4 products as today's offers
    };
    fetchOffers();
  }, []);

  return (
    <div>
      <CarouselBanner /> {/* Banner on top */}
      <TodaysOffer products={offers} /> {/* Today's Offer just below banner */}
    </div>
  );
};

export default Home;
