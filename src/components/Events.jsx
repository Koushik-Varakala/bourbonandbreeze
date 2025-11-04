import React from 'react'
import { eventData } from '../data/events'

export default function Events() {
  return (
    <section id="events" className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-gold font-serif mb-2">Events & Vibe</h2>
          <p className="muted">Curated DJ sets, live acoustic music, and special tasting events every weekend.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {eventData.map(ev => (
            <div key={ev.id} className="rounded-lg overflow-hidden border border-[rgba(201,148,80,0.06)]">
              <div style={{backgroundImage:`url(${ev.image})`, backgroundSize: 'cover', backgroundPosition:'center'}} className="h-48"></div>
              <div className="p-4 bg-[rgba(18,58,56,0.85)]">
                <div className="text-gold text-xs font-semibold mb-2">{ev.date}</div>
                <h4 className="text-white font-serif text-lg mb-1">{ev.title}</h4>
                <p className="muted text-sm mb-3">{ev.desc}</p>
                <a href="#reservations" className="text-gold text-sm font-semibold">VIEW DETAILS</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
