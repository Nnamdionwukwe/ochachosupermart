import JobListing from "../components/JobListing";
import "./CareersPage.css";
import BackBtn from "./BackBtn";

const jobOpenings = [
  {
    id: 1,
    title: "Product Adviser",
    location: "On-Site, Abuja",
    department: "Product Manager",
    description:
      "We are looking for an experienced product adviser to join our team...",
  },
  {
    id: 2,
    title: "Customer Review Representative",
    location: "Abuja, NG",
    department: "Customer Care",
    description:
      "As a product review representative, you will work closely with our customers...",
  },
  {
    id: 3,
    title: "Marketing Manager",
    location: "Abuja, NG",
    department: "Marketing",
    description: "We are seeking a creative and strategic marketing manager...",
  },
];

const CareersPage = () => {
  return (
    <div className="careers-page">
      <BackBtn />
      <section className="careers-hero">
        <div className="hero-content">
          <h1>Join Our Team</h1>
          <p>
            Be a part of a dynamic and innovative team that is shaping the
            future of retail. We believe in creativity, collaboration, and
            continuous growth.
          </p>
        </div>
      </section>

      <section className="open-positions-section">
        <div className="positions-container">
          <h2 className="section-title">Open Positions</h2>
          <div className="job-listings">
            {jobOpenings.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      <section className="culture-section">
        <div className="culture-container">
          <h2 className="section-title">Our Culture</h2>
          <p>
            We foster an environment where every voice is heard. Our commitment
            to work-life balance and professional development makes us a great
            place to build your career.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
