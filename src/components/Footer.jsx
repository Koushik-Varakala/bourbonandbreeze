import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B1A18] text-gray-300 border-t border-[#CBA875]/30 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo & Tagline */}
        <div>
          <h2 className="font-serif text-[#CBA875] text-2xl mb-2">Bourbon & Breeze</h2>
          <p className="text-sm">Dine-In | Takeaway</p>
          <p className="mt-3 text-sm">Serving Happiness Daily!</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-serif text-[#CBA875] text-lg mb-2">Contact Us</h3>
          <p className="text-sm">bourbonandbreeze@gmail.com</p>
          <p className="text-sm mt-1">WhatsApp: +91 8008510202</p>

          <p className="mt-3 text-sm leading-relaxed">
            3rd Floor, 8-2-293/174, Road No. 14,<br />
            Above Pint & Play Sports Bar,<br />
            BNR Colony, Banjara Hills,<br />
            Hyderabad, Telangana 500034
          </p>
        </div>

        {/* Hours & Cost */}
        <div>
          <h3 className="font-serif text-[#CBA875] text-lg mb-2">Visit Us</h3>
          <p className="text-sm">Open: 12:00 PM – 11:30 PM</p>
          <p className="text-sm mt-2">Cost for Two: ₹1000</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-serif text-[#CBA875] text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-[#CBA875] transition">Home</Link></li>
            <li><Link to="/menu" className="hover:text-[#CBA875] transition">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-[#CBA875] transition">Gallery</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-[#CBA875] transition">
  Privacy Policy
</Link>
</li>
            <li><Link to="/terms-of-service" className="hover:text-[#CBA875] transition">
  Terms Of Service
</Link>
</li>
            <li><Link to="/cookies-policy" className="hover:text-[#CBA875] transition">
  Cookies Policy
</Link>
</li>
            <li><a href="#" className="hover:text-[#CBA875] transition">Sitemap</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#CBA875]/20 mt-10 pt-6 text-center text-xs text-gray-400">
        <p className="mb-2">© 2021 M/S. CAFE POECILE | Vidayananda Moorty Potluri</p>
        <p>License Number: 13622011000291</p>
        
      </div>
    </footer>
  );
}
