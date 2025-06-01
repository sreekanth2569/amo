import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id} style={{ marginBottom: '15px' }}>
            <h3>{job.title}</h3>
            <p>
              {job.company} - {job.location}
            </p>
            <Link to={`/jobs/${job.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsList;
