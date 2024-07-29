import React from "react";
import "./Faculty.css";
const facultyMembers = [
  {
    name: "John Doe",
    title: "Principal",
    degree: "M.Ed",
    experience: "20 years of experience in educational administration",
    imgurl: "https://via.placeholder.com/150?text=John+Doe",
  },
  {
    name: "Jane Smith",
    title: "Vice Principal",
    degree: "M.Sc. in Physics",
    experience: "15 years of teaching experience",
    imgurl: "https://via.placeholder.com/150?text=Jane+Smith",
  },
  {
    name: "Emily Johnson",
    title: "English Teacher",
    degree: "M.A. in English",
    experience: "10 years of teaching experience",
    imgurl: "https://via.placeholder.com/150?text=Emily+Johnson",
  },
  {
    name: "Michael Brown",
    title: "Mathematics Teacher",
    degree: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience",
    imgurl: "https://via.placeholder.com/150?text=Michael+Brown",
  },
  {
    name: "Sophia Davis",
    title: "Science Teacher",
    degree: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience",
    imgurl: "https://via.placeholder.com/150?text=Sophia+Davis",
  },
  {
    name: "David Wilson",
    title: "Computer Science Teacher",
    degree: "B.Tech in Computer Science",
    experience: "5 years of teaching experience",
    imgurl: "https://via.placeholder.com/150?text=David+Wilson",
  },
];

const Faculty = () => {
  return (
    <div className="faculty">
      <h1>Faculty Profiles</h1>
      <div className="faculty-grid">
        {facultyMembers.map((member) => (
          <div className="faculty-card" key={member.name}>
            <img src={member.imgurl} alt={member.name} />
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>
            <p>
              <strong>Degree:</strong> {member.degree}
            </p>
            <p>
              <strong>Experience:</strong> {member.experience}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
