import React, { useEffect, useState } from "react";

export default function AdminPage() {
  const [reservations, setReservations] = useState([]);
  const [pastReservations, setPastReservations] = useState([]);

  // Load reservations from storage
  useEffect(() => {
    const active = JSON.parse(localStorage.getItem("reservations")) || [];
    const history = JSON.parse(localStorage.getItem("reservations_history")) || [];

    setReservations(active);
    setPastReservations(history);
  }, []);

  // Move reservation to history
  const completeReservation = (index) => {
    const updated = [...reservations];
    const [finished] = updated.splice(index, 1);

    const updatedHistory = [...pastReservations, finished];

    setReservations(updated);
    setPastReservations(updatedHistory);

    localStorage.setItem("reservations", JSON.stringify(updated));
    localStorage.setItem("reservations_history", JSON.stringify(updatedHistory));
  };

  // Delete history item
  const deleteHistoryItem = (index) => {
    const updated = [...pastReservations];
    updated.splice(index, 1);
    setPastReservations(updated);
    localStorage.setItem("reservations_history", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#0E2726] text-white p-10">
      <h1 className="text-4xl font-serif text-[#CBA875] mb-8 text-center">
        Admin Reservation Panel
      </h1>

      {/* Upcoming Reservations */}
      <div className="mb-12">
        <h2 className="text-2xl text-[#CBA875] mb-4">Upcoming Reservations</h2>

        {reservations.length === 0 ? (
          <p className="text-gray-400">No upcoming reservations</p>
        ) : (
          <div className="space-y-3">
            {reservations.map((r, i) => (
              <div key={i} className="p-4 bg-[#09312F] rounded border border-[#CBA875]/30">
                <p><b>Name:</b> {r.fullName}</p>
                <p><b>Guests:</b> {r.partySize}</p>
                <p><b>Date:</b> {r.date} at {r.time}</p>
                <p><b>Phone:</b> {r.phone}</p>

                <button
                  onClick={() => completeReservation(i)}
                  className="mt-3 bg-[#CBA875] text-black px-4 py-2 rounded"
                >
                  ✅ Mark Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Past Reservations */}
      <div>
        <h2 className="text-2xl text-[#CBA875] mb-4">Reservation History</h2>

        {pastReservations.length === 0 ? (
          <p className="text-gray-400">No history yet</p>
        ) : (
          <div className="space-y-3">
            {pastReservations.map((r, i) => (
              <div key={i} className="p-4 bg-[#201a16] rounded border border-[#CBA875]/30">
                <p><b>{r.fullName}</b> — {r.partySize} people</p>
                <p>{r.date} at {r.time}</p>

                <button
                  onClick={() => deleteHistoryItem(i)}
                  className="mt-2 bg-red-500/80 px-4 py-2 rounded"
                >
                  🗑 Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
