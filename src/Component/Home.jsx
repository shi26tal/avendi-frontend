import React from "react";
import "../ComponentStyle/Home.css";
import "../ComponentStyle/logos.css";

const logos = [
  "/Ambassador.png",
  "/Chandragiri.png",
  "/Countryvilla.png",
  "/HimalayanDrishya.png",
  "/Kasara.png",
  "/logo1.png",
  "/logo2.png",
  "/logo4.png",
  "/logo5.png",
  "/logo7.png",
  "/logo8.png",
  "/logo10.png",
  "/logo12.png",
  "/logo13.png",
  "/logo14.png",
  "/Mallahotel.png",
  "/Siddhartha.png",
  "/tranquilityspa.png",
  "/Waterfront.png",
  "/yny.png",
];

export const Home = () => {
  return (
    <>
      {/* video */}
      <div className="video-container">
        <video autoPlay loop muted playsInline id="bg-video">
          <source src="/avendi.mp4" />
        </video>
      </div>

      {/* text */}
      <section className="guest-love-section">
        <h1 className="guest">Guests love this.</h1>
        <p className="guest-description">
          We enable guest requests from their phone without requiring downloads
          or signups.
        </p>
      </section>

      {/* slide logos banner */}
      <div className="logo-banner">
        <div className="logo-track">
          {/* Duplicate the logos to make seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              src={logo}
              alt={`logo-${index}`}
              className="logo"
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};
