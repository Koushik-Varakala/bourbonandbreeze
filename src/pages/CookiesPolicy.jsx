import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiesPolicy() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0B1A18] text-gray-300 pt-28 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-[#CBA875] mb-6">
          Cookies Policy
        </h1>

        <p className="mb-4 italic">Last updated: Feb 06, 2025</p>

        <p className="mb-6">
          This Cookies Policy explains what Cookies are and how We use them. You
          should read this policy to understand what type of cookies We use, the
          information We collect using Cookies, and how that information is used.
        </p>

        <p className="mb-6">
          Cookies do not usually contain personal information, but information
          stored in Cookies may be linked to personal information stored by us.
          For more information, refer to our Privacy Policy.
        </p>

        <p className="mb-6">
          We do not store sensitive personal information (such as passwords or mailing addresses) in Cookies.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">
          Interpretation & Definitions
        </h2>

        <ul className="list-disc ml-5 mb-6 space-y-2">
          <li>
            <b>Company</b> refers to Bourbon & Breeze Rooftop Bar & Kitchen,
            Hyderabad, Telangana.
          </li>
          <li>
            <b>Cookies</b> are small files stored on your device.
          </li>
          <li>
            <b>Website</b> refers to our official site.
          </li>
          <li>
            <b>You</b> refers to the user accessing the website.
          </li>
        </ul>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">
          Types of Cookies We Use
        </h2>

        <p className="mb-6">
          Cookies may be "persistent" (remain after browser is closed) or
          "session" (deleted when closed). We use both for the reasons below:
        </p>

        <h3 className="text-lg text-[#CBA875] font-semibold mt-6 mb-2">
          Necessary / Essential Cookies (Session)
        </h3>
        <p className="mb-6">
          These are required to operate core website functions and prevent fraud.
        </p>

        <h3 className="text-lg text-[#CBA875] font-semibold mt-6 mb-2">
          Functionality Cookies (Persistent)
        </h3>
        <p className="mb-6">
          These remember your preferences — for example language settings or
          sign-in details.
        </p>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">
          Your Choices Regarding Cookies
        </h2>

        <p className="mb-6">
          You may disable Cookies in your browser settings. However, some
          features of the Website may not function properly if Cookies are
          disabled.
        </p>

        <p className="mb-6">
          To delete or disable cookies, refer to your browser help section:
        </p>

        <ul className="list-disc ml-5 mb-6 space-y-2">
          <li>Chrome: https://support.google.com/accounts/answer/32050</li>
          <li>Safari: https://support.apple.com/guide/safari/manage-cookies</li>
          <li>Firefox: https://support.mozilla.org/en-US/kb/delete-cookies</li>
          <li>Edge/IE: http://support.microsoft.com/kb/278835</li>
        </ul>

        <h2 className="text-[#CBA875] text-xl font-semibold mt-8 mb-2">
          Contact Us
        </h2>

        <p className="mb-2">
          If you have questions about our Cookies Policy, contact us at:
        </p>

        <p className="text-[#CBA875] font-semibold">bourbonandbreeze@gmail.com</p>
        <p>WhatsApp: +91 8008510202</p>
        <p>Banjara Hills, Hyderabad, Telangana</p>
      </main>

      <Footer />
    </>
  );
}
