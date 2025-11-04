import React, { useState, useRef } from 'react';
import emailjs from "emailjs-com";


export default function Reservation() {
  const [step, setStep] = useState(1);
  const [availabilityMsg, setAvailabilityMsg] = useState('');
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const formRef = useRef(null);

  function handleFindAvailability(e) {
    e.preventDefault();
    const party = e.target.partySize.value;
    const date = e.target.date.value;
    const time = e.target.time.value;

    setAvailabilityMsg(`🎉 Table available for ${party} guests on ${date} at ${time}.`);
    setStep(2);

    // Scroll to form smoothly
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth" }), 200);
  }

  function handleConfirm(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());

  emailjs.send(
    "service_bh7ea4w",
    "template_bq8twhm",
    {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      date: data.date,
      time: data.time,
      partySize: data.partySize
    },
    "guk99grmUKEIfLMKn"
  )
  .then(() => {
    alert("Reservation Sent! You will receive confirmation soon!");
    e.target.reset();
    setStep(1);
  })
  .catch(err => console.error("EmailJS Error:", err));
}


  return (
    <section id="reservations" className="py-20 bg-[#0A1211]">
      <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-10">

        {/* ✅ Reservation Form */}
        <div className="relative bg-[#121E1C]/95 p-8 rounded-xl border border-[#CBA875]/20 backdrop-blur overflow-hidden">
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://b.zmtcdn.com/data/pictures/8/21499898/dc30b2e5759bde8e1d35ed514942fe26.jpg')"
            }}
          />

          <div ref={formRef} className="relative z-10">
            <h3 className="text-3xl text-[#CBA875] font-serif mb-2 text-center tracking-wide">
              Reserve Your Table
            </h3>
            <p className="text-center text-gray-400 mb-6 text-sm">
              Rooftop • Cocktails • Live Vibes
            </p>

            {step === 1 && (
              <form onSubmit={handleFindAvailability} className="space-y-5">
                
                {/* Party Size */}
                <div>
                  <label className="text-xs text-[#CBA875] uppercase">Party Size</label>
                  <select
                    name="partySize"
                    className="w-full mt-1 p-2 bg-[#0E2726] border border-[#CBA875]/30 rounded text-white"
                    required
                  >
                    <option value="" disabled selected>Select Guests</option>
                    {[1,2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n} Guests</option>)}
                    <option value="10+">10+ (Group Table)</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-xs text-[#CBA875] uppercase">Date</label>
                    <input
                      name="date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full mt-1 p-2 bg-[#0E2726] border border-[#CBA875]/30 rounded text-white"
                      required
                    />
                  </div>
                  <div className="flex-1">
  <label className="text-xs text-[#CBA875] uppercase">Time</label>
  <select
    name="time"
    className="w-full mt-1 p-2 bg-[#0E2726] border border-[#CBA875]/30 rounded text-white"
    required
  >
    <option value="" disabled selected>Select Time</option>

    {/* 12 PM - 5 PM */}
    <option value="12:00 PM">12:00 PM</option>
    <option value="12:30 PM">12:30 PM</option>
    <option value="01:00 PM">01:00 PM</option>
    <option value="01:30 PM">01:30 PM</option>
    <option value="02:00 PM">02:00 PM</option>
    <option value="02:30 PM">02:30 PM</option>
    <option value="03:00 PM">03:00 PM</option>
    <option value="03:30 PM">03:30 PM</option>
    <option value="04:00 PM">04:00 PM</option>
    <option value="04:30 PM">04:30 PM</option>
    <option value="05:00 PM">05:00 PM</option>
    <option value="05:30 PM">05:30 PM</option>

    {/* 6 PM - 11:30 PM */}
    <option value="06:00 PM">06:00 PM</option>
    <option value="06:30 PM">06:30 PM</option>
    <option value="07:00 PM">07:00 PM</option>
    <option value="07:30 PM">07:30 PM</option>
    <option value="08:00 PM">08:00 PM</option>
    <option value="08:30 PM">08:30 PM</option>
    <option value="09:00 PM">09:00 PM</option>
    <option value="09:30 PM">09:30 PM</option>
    <option value="10:00 PM">10:00 PM</option>
    <option value="10:30 PM">10:30 PM</option>
    <option value="11:00 PM">11:00 PM</option>
    <option value="11:30 PM">11:30 PM</option>
  </select>
</div>

                </div>

                <button className="w-full btn-gold py-3 text-black font-semibold tracking-wide rounded bg-[#CBA875] hover:bg-[#d8b983] transition">
                  CHECK AVAILABILITY
                </button>
              </form>
            )}

            {step === 2 && (
  <form onSubmit={handleConfirm} className="space-y-4">
    <p className="text-center text-gold">{availabilityMsg}</p>

    <input name="fullName" placeholder="Full Name" className="w-full p-2 bg-[#0F2A29] border border-teal-700/50 rounded text-white" required />
    <input name="email" type="email" placeholder="Email Address" className="w-full p-2 bg-[#0F2A29] border border-teal-700/50 rounded text-white" required />
    <input name="phone" placeholder="Phone Number" className="w-full p-2 bg-[#0F2A29] border border-teal-700/50 rounded text-white" required />

    {/* Hidden reservation meta fields for EmailJS */}
    <input type="hidden" name="partySize" value={availabilityMsg.match(/\d+/)?.[0]} />
    <input type="hidden" name="date" value={availabilityMsg.split(" on ")[1]?.split(" at ")[0]} />
    <input type="hidden" name="time" value={availabilityMsg.split(" at ")[1]?.replace(".", "")} />

    <button className="w-full btn-gold" type="submit">
      CONFIRM BOOKING
    </button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full py-2 border border-white/20 rounded text-gray-300 hover:bg-white/10 transition"
                >
                  BACK
                </button>
              </form>
            )}

            {confirmationVisible && (
              <p className="text-center text-green-400 mt-4 font-medium">
                ✅ Booking request sent! We will confirm shortly.
              </p>
            )}
          </div>
        </div>

        {/* ✅ Contact Info */}
        <div className="bg-[#121E1C]/95 p-8 rounded-xl border border-[#CBA875]/20">
          <h3 className="text-3xl text-[#CBA875] font-serif text-center tracking-wide mb-4">
            Contact & Visit Us
          </h3>

          <div className="space-y-5 text-sm text-gray-300">
            <p><span className="font-semibold text-[#CBA875]">Location:</span><br/>
              3rd Floor, Road No. 14, Banjara Hills, Hyderabad
            </p>

            <p><span className="font-semibold text-[#CBA875]">Call:</span><br/>
              <a href="tel:+918008510202" className="hover:text-[#CBA875]">+91 80085 10202</a>
            </p>

            <p><span className="font-semibold text-[#CBA875]">Email:</span><br/>
              <a href="mailto:bourbonandbreeze@gmail.com" className="hover:text-[#CBA875]">
                bourbonandbreeze@gmail.com
              </a>
            </p>

            <p><span className="font-semibold text-[#CBA875]">Hours:</span><br/>
              Daily — 12 PM to 11:30 PM
            </p>

            <p><span className="font-semibold text-[#CBA875]">Cost for Two:</span><br/>~ ₹1000</p>

            <div className="flex gap-6 justify-center pt-3 text-lg text-[#CBA875]">
              <a href="https://instagram.com/bourbonandbreeze" target="_blank" className="hover:opacity-80">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
