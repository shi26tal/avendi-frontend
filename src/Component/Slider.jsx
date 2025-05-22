import React from "react";
import "../ComponentStyle/Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Slider = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="title">
            Hear what our customers have to say about us.
          </h2>
        </div>
        <div className="testimonials-content">
          <div className="swiper testimonials-slider js-testimonials-slider">
            <Swiper
              className="swiper-wrapper"
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
            >
              <SwiperSlide>
                <div className="swiper-slide testimonials-item">
                  <p>
                    "We are able to see and monitor guests requests in real
                    time. Thank you Avendi team for your best service to our
                    valued guests who are really impressed using the app."
                  </p>
                  <div className="info">
                    <img src="/buddha.png" alt="img" />
                    <div className="text-box">
                      <h3 className="name">Mr.Anuj Karki</h3>
                      <span className="job">
                        Operations Manager,Buddha Maya Gardens,Lumbini
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide testimonials-item">
                  <p>
                    "Thanks to the Avendi app, our food and beverage services
                    have become incredibly convenient for both guests and staff
                    at Shanker Hotel. We are highly pleased with this solution
                    and express our gratitude to you and your company for
                    providing such a valuable app."
                  </p>
                  <div className="info">
                    <img src="/shanker.png" alt="img" />
                    <div className="text-box">
                      <h3 className="name">Mr.Birendra Himalaya</h3>
                      <span className="job">
                        Supervisor,Room Service Department,Shanker
                        Hotel,Laximpat
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide testimonials-item">
                  <p>
                    "Avendi exemplifies exceptional hospitality by seamlessly
                    addressing guest needs, fostering effortless communication
                    with guests, and harmoniously collaborating with various
                    hotel departments such as F&B Service, Front Desk, and
                    Housekeeping.I highly recommend this system for hotels and
                    resorts."
                  </p>
                  <div className="info">
                    <img src="/nomand.png" alt="img" />
                    <div className="text-box">
                      <h3 className="name">Mr.Rabin Shrestha</h3>
                      <span className="job">
                        F&B Manager,Nomad Hotel,Laximpat
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide testimonials-item">
                  <p>
                    "Avendi has revolutionized the way we interact with our
                    guests, making it easier for them to request services and
                    customize their stay. Our guests appreciate the
                    user-friendly interface, which allowas them to request room
                    service, housekeeping, spa and more with just a few taps on
                    their smartphones."
                  </p>
                  <div className="info">
                    <img src="/nagarkot.png" alt="img" />
                    <div className="text-box">
                      <h3 className="name">Mr.Rajendra Sedai</h3>
                      <span className="job">
                        Group F&B Manager,ACE Hotels(Club Himalaya & Hotel
                        Ambassador)
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide testimonials-item">
                  <p>
                    "Avendi offers an efficient solution for both service takers
                    and providers. It's the top choice for in-room services!"
                  </p>
                  <div className="info">
                    <img src="/waterfrontre.png" alt="img" />
                    <div className="text-box">
                      <h3 className="name">Mr.Nabaraj Acharya</h3>
                      <span className="job">
                        Hotel Manager,Waterfront Resort,Pokhara
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide testimonials-item">
                  <p>
                    "Avendi - must have software that helps to eliminate the
                    hassle of the traditional way of taking the orders & uses
                    the modern concept that helps to maximize the customer
                    satisfaction within a limited time."
                  </p>
                  <div className="info">
                    <img src="/square.png" alt="img" />
                    <div className="text-box">
                      <h3 className="name">Mr.Santosh KC</h3>
                      <span className="job">
                        Front Office Manager,Square Hotel,Lalitpur
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-pagination js-testimonials-pagination"></div>
        </div>
      </div>
    </section>
  );
};
