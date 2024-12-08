import { Link } from "react-router-dom";

const JobListing = ( { job }) => {
  return (
    <div className="job-preview">
      <h2>{job.title}</h2>
      <p>{job.type}</p>
      <p>{job.description}</p>
      <p>{job.company.name}</p>
      <Link to={`/jobs/${job.id}`}>View Job</Link>
    </div>
  );
};

export default JobListing;
