import React from "react";
import "../ComponentStyle/About.css";

export const About = () => {
  return (
    <div>
      {/* Dashboard Section */}
      <section className="dashboard-section">
        <h1>Not built by hospitality amateurs.</h1>
        <p>
          We've collaborated closely with our hotel partners to create a
          flexible admin dashboard tailored to their operations.
        </p>

        <div className="dashboard-content">
          <div className="dashboard-admin">
            <h3>Admin Portal</h3>
            <p>
              A standard portal for hotels to upload and manage all the
              contents, service offerings and more.
            </p>
          </div>

          <div className="dashboard-image">
            <img src="/dashboard.png" alt="dashboard" />
          </div>

          <div className="dashboard-mobile">
            <h3>Standalone Mobile App</h3>
            <p>
              Staff can access the portal and get real time notification on
              their mobile devices by downloading our dedicated mobile app.
            </p>
          </div>
        </div>
      </section>

      {/* Why us? section */}
      <section className="why-us-section">
        <div className="why-container">
          <div className="why-heading">
            <h1>Why us? We add stars to your guest experience.</h1>
            <img src="/5star.svg" alt="star" />
          </div>
          <div className="why-content">
            <div className="row">
              <div className="col3">
                <div className="col-content">
                  <div className="col-img">
                    <img src="/flexible.svg" alt="flexible" />
                  </div>
                  <div className="col-text">
                    <h2>Flexible</h2>
                    <p>
                      Our service is available in both a standalone model and
                      with integration. Our standalone model can be deployed
                      within 24 hours of our initial discussion/signup.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col3">
                <div className="col-img">
                  <img src="/analytics.svg" alt="flexible" />
                </div>
                <div className="col-text">
                  <h2>Analytics</h2>
                  <p>
                    You can have easy access to insights into your guests'
                    behavior inside and outside the hotel to improve the
                    offerings and engagement.
                  </p>
                </div>
              </div>
              <div className="col3">
                <div className="col-img">
                  <img src="/support.svg" alt="flexible" />
                </div>
                <div className="col-text">
                  <h2>Support</h2>
                  <p>
                    You will be assigned a dedicated support team that can cater
                    to your needs. Our support staff can help you set up your
                    admin panel, customize the menu and provide assistance when
                    required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
