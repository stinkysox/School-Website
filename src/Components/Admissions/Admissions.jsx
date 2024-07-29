import React from "react";
import "./Admissions.css";
const Admissions = () => {
  return (
    <div className="admissions">
      <h1>Admissions</h1>
      <div className="banner" />
      <section>
        <h2>Process</h2>
        <p>
          Admission forms are available for download. Submit the completed form
          along with required documents at the school office.
        </p>
      </section>
      <section>
        <h2>Criteria</h2>
        <p>
          Admission is based on merit and availability of seats. Entrance tests
          may be conducted for certain grades.
        </p>
      </section>
      <section>
        <h2>Important Dates</h2>
        <ul>
          <li>
            <strong>Admission Form Availability:</strong> March 1st
          </li>
          <li>
            <strong>Last Date for Submission:</strong> March 31st
          </li>
          <li>
            <strong>Entrance Test:</strong> April 15th
          </li>
          <li>
            <strong>Announcement of Results:</strong> April 30th
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
