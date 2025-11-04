import React from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="pt-20 bg-bgPrimary text-gray-200">
      <Hero />
      <Menu />
      <Events />
      <Reservation />
      <Gallery />
      <Footer />
    </main>
  );
}
