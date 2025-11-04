import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import GalleryPage from "./pages/GalleryPage";
import InstagramFeed from "./components/InstagramFeed";
import VideoShowcase from "./components/VideoShowcase";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import AdminPage from "./pages/AdminPage";


// Menu Page Wrapper
function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Menu />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>

        {/* ✅ Home */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main className="pt-24">
                <Hero />
                
                <Reservation />
                <VideoShowcase />
                <InstagramFeed />
                <Gallery />
              </main>
              <Footer />
            </>
          }
        />

        {/* ✅ Menu */}
        <Route path="/menu" element={<MenuPage />} />

        {/* ✅ Gallery */}
        <Route path="/gallery" element={<><Navbar /> <GalleryPage /></>} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
<Route path="/cookies-policy" element={<CookiesPolicy />} />

          <Route path="/admin" element={<AdminPage />} />

      </Routes>
    </Router>
  );
}
