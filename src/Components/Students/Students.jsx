import React from "react";
import "./Students.css";
const Students = () => {
  return (
    <div className="students">
      <h1>Life at Springdale</h1>

      <section>
        <h2>Extracurricular Activities</h2>
        <p>
          Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
        </p>
      </section>

      <section>
        <h2>Clubs and Societies</h2>
        <p>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
      </section>

      <section>
        <h2>Achievements</h2>
        <ul>
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>
            Tech Innovators Club - Winners of Inter-School Robotics Competition
          </li>
        </ul>
      </section>

      <section>
        <h2>Student Council</h2>
        <ul>
          <li>
            <strong>President:</strong> Amy Parker, Grade 12
          </li>
          <li>
            <strong>Vice President:</strong> Rajiv Mehta, Grade 11
          </li>
          <li>
            <strong>Secretary:</strong> Lisa Wong, Grade 10
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Students;
