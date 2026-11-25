import React from 'react';

const CandidateCard = ({ candidate }) => (
  <div className="card">
    <h3>{candidate.name}</h3>
    <p>Skills: {candidate.skills.join(", ")}</p>
    <p>Job Title: {candidate.jobTitle}</p>
    <p>Location: {candidate.location}</p>
    <a href={candidate.resumeUrl} target="_blank" rel="noreferrer">View Resume</a>
  </div>
);
export default CandidateCard;
