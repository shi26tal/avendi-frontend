import React, { useState } from "react";
import "../ComponentStyle/Display.css";

export const Display = () => {
  const contentList = [
    {
      image: "/food1.png",
      icon: "/food.svg",
      text: "FOOD",
      title: "Order-In Room Dining",
      description: `Create your own user-friendly food delivery interface without the need to code. Your guests no longer need to pick up a paper-based menu and make a phone call to order - they can simply do this with a few taps. Additionally, you can customize the menu, improving the conversion with exclusive offers.`,
    },
    {
      image: "/experience2.png",
      icon: "/experience.svg",
      text: "EXPERIENCE",
      title: "Book Experiences",
      description: `Whether it is a restaurant booking or an outdoor excursion, provide engaging contents for guests to choose from. They can stay connected to these experiences outside the realm of the concierge desk at the hotel lobby. Enable them to explore and book these experiences from anywhere, 24/7.`,
    },
    {
      image: "/service2.png",
      icon: "/service.svg",
      text: "SERVICE",
      title: "Make Requests",
      description: `Guests can easily make requests 24/7. Whether it is to request housekeeping or extra amenities, guests can enjoy an exceptional service standard. Providing this contactless channel keeps guests closer to the hotels and ensures they are pleased during their stay.`,
    },
    {
      image: "/directory2.png",
      icon: "/directory.svg",
      text: "DIRECTORY",
      title: "Digital compendium, at your fingertips",
      description: `Make vital information easily accessible to your guests with a hotel directory that's always at their fingertips and simple to locate.`,
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="display-container">
      <div className="sidebar">
        {contentList.map((item, i) => (
          <button key={item.title} onClick={() => setIndex(i)}>
            <div className={`sidebar-icon ${index === i ? "active" : ""}`}>
              <img src={item.icon} alt={`icon-${i}`} />
              <span className="icon-text">{item.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* <div className="phone-display">
        <img src="/phone-mockup.png" alt="Phone display" />
      </div> */}

      <div className="phone-display">
        <img src={contentList[index].image} alt={contentList[index].title} />
      </div>

      <div className="content-area">
        <h1>{contentList[index].title}</h1>
        <p>{contentList[index].description}</p>
      </div>
    </div>
  );
};
