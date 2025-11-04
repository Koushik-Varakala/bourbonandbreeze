import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B1A18] text-gray-300 pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-[#CBA875] mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4 italic">
          Last updated: Feb 06, 2025
        </p>

        <p className="mb-6">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You. By using the Service, You agree to the collection and
          use of information in accordance with this Privacy Policy.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Interpretation & Definitions</h2>

        <p className="mb-4">
          Words with capital letters have meanings defined here. Definitions apply whether singular or plural.
        </p>

        <h3 className="text-lg text-[#CBA875] font-semibold mt-6 mb-2">
          Definitions
        </h3>

        <ul className="space-y-2 mb-6">
          <li><b>Account</b> — A unique account for You to access our Service.</li>
          <li><b>Company</b> — Bourbon & Breeze Rooftop Bar & Kitchen.</li>
          <li><b>Cookies</b> — Small files stored on Your device to enhance experience.</li>
          <li><b>Country</b> — India</li>
          <li><b>Device</b> — Any device capable of accessing the service.</li>
          <li><b>Personal Data</b> — Information that identifies an individual.</li>
          <li><b>Service</b> — Our website.</li>
          <li><b>Usage Data</b> — Data collected automatically during usage.</li>
          <li><b>You</b> — The user accessing our website.</li>
        </ul>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Personal Data We Collect</h2>
        
        <p className="mb-4">We may collect:</p>
        <ul className="ml-5 list-disc space-y-2 mb-6">
          <li>First & Last Name</li>
          <li>Phone Number</li>
          <li>Address Details</li>
          <li>Usage Data (IP, browser info, visit duration, etc.)</li>
        </ul>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Use of Your Data</h2>
        <p className="mb-6">
          We use your data to operate and improve our service, contact you,
          process requests, and for security, analytics, and legal compliance.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Cookies & Tracking</h2>
        <p className="mb-6">
          We use cookies to improve your experience. You may refuse cookies, but some features may not work.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Security & Data Retention</h2>
        <p className="mb-6">
          We take reasonable measures to secure your data but cannot guarantee
          100% security. Data is retained only as long as required.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Children's Privacy</h2>
        <p className="mb-6">
          Our service is not intended for children under 13. We do not knowingly collect their data.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Links to Third Party Sites</h2>
        <p className="mb-6">
          We may link to third-party services. We do not control and are not responsible for their policies.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Contact Us</h2>
        <p className="mb-2">
          If you have any questions about this policy, contact us at:
        </p>
        <p className="text-[#CBA875] font-semibold">
          bourbonandbreeze@gmail.com
        </p>
        <p>WhatsApp: +91 8008510202</p>
      </main>

      <Footer />
    </>
  );
}
