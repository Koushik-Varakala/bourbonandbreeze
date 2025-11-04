// src/components/Gallery.jsx
import React from "react";

const images = [
  "/images/1.avif",
  "/images/2.avif",
  "/images/3.avif",
  "/images/4.avif",
  "/images/5.avif",
  "/images/6.avif",
  "/images/7.avif",
  "/images/8.avif",
];

export default function Gallery() {
  // create duplicated array for seamless loop
  const longList = [...images, ...images];

  return (
    <section className="py-16 bg-[#07110f] text-white">
      <h2 className="text-center text-3xl md:text-4xl font-serif mb-10 text-[#C99450] tracking-wide">
        Ambience & Vibe
      </h2>

      <div className="slider-container">
        <div className="slider-row" aria-hidden="false">
          {longList.map((src, i) => (
            <img key={i} src={src} alt={`gallery-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
