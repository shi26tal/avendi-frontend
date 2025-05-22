"use client";

import { useState, useEffect } from "react";
import "../ComponentStyle/Review.css";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote:
        "We are able to see and monitor guests requests in real time. Thank you Avendi team for your best service to our valued guests who are really impressed using the app.",
      author: "Mr.Anuj Karki",
      position: "Operations Manager",
      company: "Buddha Maya Gardens",
      location: "Lumbini",
      avatar: "/buddha.png",
    },
    {
      id: 2,
      quote:
        "Thanks to the Avendi app, our food and beverage services have become incredibly convenient for both guests and staff at Shanker Hotel. We are highly pleased with this solution and express our gratitude to you and your company for providing such a valuable app.",
      author: "Mr.Birendra Himalaya",
      position: "Supervisor, Room Service Department",
      company: "Shanker Hotel",
      location: "Lazimpat",
      avatar: "/shanker.png",
    },
    {
      id: 3,
      quote:
        "Avendi exemplifies exceptional hospitality by seamlessly addressing guest needs, fostering effortless communication with guests, and harmoniously collaborating with various hotel departments such as F&B Service, Front Desk, and Housekeeping. I highly recommend this system for hotels and resorts.",
      author: "Mr.Rabin Shrestha",
      position: "F&B Manager",
      company: "Nomad Hotel",
      location: "Lazimpat",
      avatar: "/nomand.png",
    },
    {
      id: 4,
      quote:
        "Avendi has revolutionized the way we interact with our guests, making it easier for them to request services and customize their stay. Our guests appreciate the user-friendly interface, which allowas them to request room service, housekeeping, spa and more with just a few taps on their smartphones.",
      author: "Mr.Rajendra Sedai",
      position: "Group F&B Manager",
      company: "ACE Hotels (Club Himalaya & Hotel Ambassador)",
      location: "Kathmandu",
      avatar: "/nagarkot.png",
    },
    {
      id: 5,
      quote:
        "Avendi offers an efficient solution for both service takers and providers. It's the top choice for in-room services!",
      author: "Mr.Nabaraj Acharya",
      position: "Hotel Manager",
      company: "Waterfront Resort",
      location: "Pokhara",
      avatar: "/waterfrontre.png",
    },
    {
      id: 6,
      quote:
        "Avendi - must have software that helps to eliminate the hassle of the traditional way of taking the orders & uses the modern concept that helps to maximize the customer satisfaction within a limited time.",
      author: "Mr.Santosh KC",
      position: "Front Office Manager",
      company: "Square Hotel",
      location: "Lalitpur",
      avatar: "/square.png9oii",
    },
  ];

  //autoplay function

  useEffect(() => {
    let interval;

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds
    }

    // Clean up interval on component unmount or when autoplay is disabled
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
    pauseAutoplay();
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    pauseAutoplay();
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    pauseAutoplay();
  };

  // Pause autoplay when user interacts with navigation
  const pauseAutoplay = () => {
    setAutoplay(false);

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Get visible testimonials (3 cards starting from activeIndex)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="section-title">
          Hear what our customers
          <br />
          have to say about us.
        </h2>

        {/* Desktop View - 3 cards */}
        <div className="testimonial-grid desktop-only">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="hotel-logo">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt="Hotel logo"
                />
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="testimonial-footer">
                <p className="author">{testimonial.author}</p>
                <p className="position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - 1 card */}
        <div className="mobile-only">
          <div className="testimonial-card">
            <div className="hotel-logo">
              <img
                src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                alt="Hotel logo"
              />
            </div>
            <p className="quote">"{testimonials[activeIndex].quote}"</p>
            <div className="testimonial-footer">
              <p className="author">{testimonials[activeIndex].author}</p>
              <p className="position">{testimonials[activeIndex].position}</p>
            </div>
          </div>
        </div>

        <div className="controls">
          <button onClick={handlePrevious} className="nav-button">
            &lt;
          </button>

          <div className="dots">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => handleDotClick(testimonial.id)}
                className={
                  activeIndex === testimonial.id ? "dot active" : "dot"
                }
                aria-label={`Go to testimonial ${testimonial.id}`}
              />
            ))}
          </div>

          <button onClick={handleNext} className="nav-button">
            &gt;
          </button>
        </div>

        {/* Autoplay toggle button */}
        {/* <button
          onClick={() => setAutoplay(!autoplay)}
          className="autoplay-toggle"
          aria-label={autoplay ? "Pause autoplay" : "Start autoplay"}
        >
          {autoplay ? "Pause" : "Play"}
        </button> */}
      </div>
    </section>
  );
}

// function TestimonialCard({ testimonial }) {
//   return (
//     <div className="testimonial-card">
//       <blockquote className="testimonial-quote">
//         <p>"{testimonial.quote}"</p>
//       </blockquote>
//       <div className="testimonial-author">
//         <div className="author-avatar">
//           <img
//             src={testimonial.avatar || "/placeholder.svg"}
//             alt={testimonial.author}
//             width={60}
//             height={60}
//           />
//         </div>
//         <div className="author-info">
//           <p className="author-name">{testimonial.author}</p>
//           <p className="author-position">{testimonial.position}</p>
//           <p className="author-company">
//             {testimonial.company}, {testimonial.location}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
