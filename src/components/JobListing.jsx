import React from "react";
import "./JobListing.css";

const JobListing = ({ job }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      <div className="job-meta">
        <span className="job-location">{job.location}</span>
        <span className="job-department">{job.department}</span>
      </div>
      <p className="job-description">{job.description}</p>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobListing;
