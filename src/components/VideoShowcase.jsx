import React, { useState } from "react";
import { ZoomIn, X } from "lucide-react"; // ✅ icon library (already included in your project)

export default function VideoShowcase() {
  const videos = {
    tall: "/videos/long1.mp4",
    small1: "/videos/short1.mp4",
    small2: "/videos/short2.mp4",
  };

  const [activeVideo, setActiveVideo] = useState(null);

  const videoStyle =
    "w-full h-full object-cover rounded-none border border-[#CBA875]/20";

  const VideoBox = ({ src }) => (
    <div
      className="relative group h-full w-full overflow-hidden cursor-pointer"
      onClick={() => setActiveVideo(src)}
    >
      <video src={src} autoPlay muted loop playsInline className={videoStyle} />

      {/* Hover Zoom Icon */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
        <ZoomIn className="text-[#CBA875] size-14 opacity-90" />
      </div>
    </div>
  );

  return (
    <>
      {/* Section */}
      <section className="bg-black py-16">
        <h2 className="font-serif text-[#CBA875] text-3xl text-center mb-10">
          Our Atmosphere
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {/* Column 1 — Tall Video */}
          <div className="h-[600px]">
            <VideoBox src={videos.tall} />
          </div>

          {/* Column 2 — Stacked Videos */}
          <div className="flex flex-col gap-4">
            <div className="h-[295px]">
              <VideoBox src={videos.small1} />
            </div>
            <div className="h-[295px]">
              <VideoBox src={videos.small2} />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Fullscreen Modal Viewer */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[999] animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-[#CBA875]"
          >
            <X size={36} />
          </button>

          {/* Video */}
          <video
            src={activeVideo}
            controls
            autoPlay
            className="w-[90vw] max-w-5xl max-h-[85vh] rounded-lg border border-[#CBA875]/40 shadow-[0_0_30px_rgba(201,148,80,0.3)] animate-scaleIn"
          />
        </div>
      )}
    </>
  );
}
