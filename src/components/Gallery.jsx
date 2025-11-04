import React, { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const images = [
    "/gallery/1.avif",
    "/gallery/2.avif",
    "/gallery/3.avif",
    "/gallery/4.avif",
    "/gallery/5.avif",
    "/gallery/6.avif",
    "/gallery/7.avif",
    "/gallery/8.avif",
    "/gallery/9.avif",
  ];

  const loopImages = [...images, ...images, ...images];

  // track indices for both rows
  const [index1, setIndex1] = useState(images.length);
  const [index2, setIndex2] = useState(images.length);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  // Row 1 interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex1((prev) => prev + 1);
    }, 3500); // 2s
    return () => clearInterval(interval);
  }, []);

  // Row 2 interval (different rhythm)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex2((prev) => prev + 1);
    }, 4500); // 2.7s
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (slider, indexSetter, index) => {
    if (!slider.current) return;

    slider.current.style.transition = "transform 0.7s ease-in-out";
    slider.current.style.transform = `translateX(-${index * 280}px)`;

    if (index >= loopImages.length - images.length) {
      setTimeout(() => {
        slider.current.style.transition = "none";
        indexSetter(images.length);
      }, 700);
    }
  };

  useEffect(() => handleScroll(slider1, setIndex1, index1), [index1]);
  useEffect(() => handleScroll(slider2, setIndex2, index2), [index2]);

  return (
    <div className="w-full bg-[rgba(18,28,26,0.9)] py-10">
      <h2 className="font-serif text-center text-gold text-2xl  mb-6">GALLERY</h2>

      {/* Row 1 */}
      <div className="overflow-hidden w-full mb-1">
        <div ref={slider1} className="flex gap-1">
          {loopImages.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              className="w-[350px] h-[250px] object-cover flex-shrink-0"
              alt=""
            />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="overflow-hidden w-full">
        <div ref={slider2} className="flex gap-1">
          {loopImages.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              className="w-[300px] h-[160px] object-cover flex-shrink-0"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
