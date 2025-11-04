import React from 'react'
import Logof from "../assets/gallery/logofull.png"
import Logofb from "../assets/gallery/logofullb.png"
export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center" style={{ backgroundImage: `url('https://b.zmtcdn.com/data/pictures/8/21499898/dc30b2e5759bde8e1d35ed514942fe26.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }}>
      <div className="container mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center bg-[rgba(0,0,0,0.65)] border border-[rgba(201,148,80,0.12)] p-10 rounded shadow-lg">
            <img src={Logofb} alt="Bourbon & Breeze" className="h-50 w-50 mr-2" />
          <h1 className="text-4xl md:text-5xl leading-tight font-serif mb-4">THE REFINED NIGHT</h1>
          <p className="uppercase tracking-widest muted mb-8">Urban chic meets rustic warmth</p>
          <div className="flex justify-center gap-4">
            <a href="#reservations" className="btn-gold">SECURE YOUR TABLE</a>
            <a href="/menu" className="border border-[rgba(201,148,80,0.7)] px-6 py-2 rounded text-white font-semibold hover:bg-[rgba(201,148,80,0.9)]">EXPLORE MENUS</a>
          </div>
        </div>
      </div>
    </section>
  )
}
