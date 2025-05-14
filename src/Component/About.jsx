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
    </div>
  );
};
