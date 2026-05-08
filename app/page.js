"use client";

import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState(null);
  const [status, setStatus] = useState("");

  function getUserLocation() {
    if (!navigator.geolocation) {
      setStatus("GPS is not supported on this device.");
      return;
    }

    setStatus("Requesting your location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setLocation({ lat, lng });
        setStatus("Location found.");
      },
      () => {
        setStatus("Location permission was denied.");
      }
    );
  }

  return (
    <main>
      <section className="hero">
        <div className="heroLeft">
          <p className="eyebrow">Pilates On Demand • Sydney</p>

          <h1>
            Book Pilates
            <br />
            Near You.
          </h1>

          <p className="heroText">
            Pilates Her connects women with trusted Pilates instructors,
            reformer studios and wellness classes nearby.
          </p>

          <div className="heroButtons">
            <button onClick={getUserLocation}>Use My Live Location</button>

            <a
              href="https://www.google.com/maps/search/pilates+near+me"
              target="_blank"
            >
              Find Pilates Near Me
            </a>
          </div>
        </div>

        <div className="heroRight">
          <div className="appCard">
            <h3>Live GPS Pilates Finder</h3>

            <p>{status}</p>

            {location && (
              <>
                <p>
                  <strong>Your location:</strong>
                  <br />
                  Latitude: {location.lat}
                  <br />
                  Longitude: {location.lng}
                </p>

                <a
                  className="gpsButton"
                  href={`https://www.google.com/maps/search/pilates/@${location.lat},${location.lng},14z`}
                  target="_blank"
                >
                  Search Pilates Near This Location
                </a>
              </>
            )}

            {!location && (
              <p>
                Tap the button to allow location access and find Pilates near you.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
