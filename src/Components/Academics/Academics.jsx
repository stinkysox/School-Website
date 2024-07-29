import React from "react";
import "./Academics.css";

const Academics = () => {
  return (
    <div className="academics-section">
      <h1>Academics</h1>

      <div className="section">
        <h2>Curriculum</h2>
        <div className="curriculum">
          <h3>Primary (Grades 1-5)</h3>
          <p>
            English, Mathematics, Science, Social Studies, Art, Physical
            Education
          </p>
          <h3>Secondary (Grades 6-10)</h3>
          <p>
            English, Mathematics, Science (Physics, Chemistry, Biology), Social
            Studies, Computer Science, Physical Education, Art
          </p>
          <h3>Senior Secondary (Grades 11-12)</h3>
          <div className="curriculum-stream">
            <h4>Science Stream</h4>
            <p>
              Physics, Chemistry, Biology, Mathematics, Computer Science,
              English
            </p>
            <h4>Commerce Stream</h4>
            <p>
              Accountancy, Business Studies, Economics, Mathematics, English
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Teaching Methodologies</h2>
        <p>
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles.
        </p>
      </div>

      <div className="section">
        <h2>Educational Resources</h2>
        <p>
          Digital classrooms, interactive learning modules, and access to online
          educational platforms.
        </p>
      </div>
    </div>
  );
};

export default Academics;
