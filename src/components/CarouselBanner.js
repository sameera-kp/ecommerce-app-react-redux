import React from "react";
import "../styles/CarouselBanner.css";

const SLIDES = [
  { id: 0, src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", alt: "Slide 1" },
  { id: 1, src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d", alt: "Slide 2" },
  { id: 2, src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f", alt: "Slide 3" },
];

const CarouselBanner = () => (
  <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {SLIDES.map((s, idx) => (
        <div key={s.id} className={`carousel-item ${idx===0 ? "active" : ""}`}>
          <img src={s.src} className="d-block w-100" alt={s.alt} style={{height:380, objectFit:"cover"}} />
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
);

export default CarouselBanner;
