import React from "react";
import Gallery from "../components/Gallery"; // your existing gallery component
import Footer from "../components/Footer";

export default function GalleryPage() {
  return (
    <div className="pt-24 bg-[rgba(18,28,26,0.9)] min-h-screen">
      <h1 className="font-serif text-center text-[#CBA875] text-4xl tracking-wide mb-10">
        
      </h1>
      
      <Gallery />

      <div className="text-center text-gray-400 text-sm mt-8 pb-10">
        Experience the ambience, flavours, and moments at Bourbon & Breeze
      </div>
      <Footer />
    </div>
  );
}
