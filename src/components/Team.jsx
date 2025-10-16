import React from "react";
import "./Team.css";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    bio: "John is the visionary leader of our company.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO",
    bio: "Jane drives our technological innovation forward.",
  },
  {
    id: 3,
    name: "Peter Jones",
    title: "Marketing Director",
    bio: "Peter leads our marketing and brand strategy.",
  },
];

const Team = () => {
  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-card">
            <h3>{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
