import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B1A18] text-gray-300 pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-[#CBA875] mb-6">
          Terms of Service
        </h1>

        <p className="mb-4 italic">Last updated: Feb 06, 2025</p>

        <p className="mb-6">
          Please read these Terms and Conditions carefully before using Our
          Service. By accessing or using the Service, You agree to be bound by
          these Terms. If You disagree with any part of these Terms, You may
          not access the Service.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">
          Interpretation & Definitions
        </h2>
        <ul className="list-disc ml-5 mb-6 space-y-2">
          <li><b>Company</b> refers to Bourbon & Breeze Rooftop Bar & Kitchen.</li>
          <li><b>Service</b> refers to our website.</li>
          <li><b>You</b> refers to the user accessing or using the Service.</li>
          <li><b>Affiliate</b> means a company under common ownership or control.</li>
          <li><b>Device</b> means any device capable of accessing our service.</li>
        </ul>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Acknowledgment</h2>
        <p className="mb-6">
          By using our website, you confirm you are over the age of 18 and agree
          to comply with these Terms. Your use is also subject to our Privacy
          Policy, which explains how we collect and use personal data.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Links to Third-Party Websites</h2>
        <p className="mb-6">
          Our Service may contain links to external sites. We do not control or
          take responsibility for their content or policies. You acknowledge
          that we are not liable for any harm or loss related to third-party
          sites.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Termination</h2>
        <p className="mb-6">
          We may suspend or terminate access to our Service at any time for
          violations of these Terms. Upon termination, You must stop using the
          Service immediately.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">
          Limitation of Liability
        </h2>
        <p className="mb-6">
          To the maximum extent permitted by law, the Company shall not be
          liable for indirect, incidental, or consequential damages. Our maximum
          liability will not exceed ₹8,000 (or $100 if you paid nothing through
          the Service).
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">
          Disclaimer
        </h2>
        <p className="mb-6">
          The Service is provided on an “AS IS” and “AS AVAILABLE” basis. We do
          not guarantee uninterrupted access, accuracy, or error-free service.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by the laws of India. Any disputes will be
          resolved in Hyderabad, Telangana.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">Severability & Waiver</h2>
        <p className="mb-6">
          If any part of these Terms is invalid, the rest remains in effect.
          Failure to enforce any right does not waive it.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">
          Changes to Terms
        </h2>
        <p className="mb-6">
          We may modify these Terms at any time. Continued use of the Service
          after changes means You accept the revised Terms.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">
          Contact Us
        </h2>

        <p className="mb-2">For questions regarding these Terms:</p>
        <p className="text-[#CBA875] font-semibold">bourbonandbreeze@gmail.com</p>
        <p>WhatsApp: +91 8008510202</p>
        <p>Banjara Hills, Hyderabad, Telangana</p>
      </main>

      <Footer />
    </>
  );
}
