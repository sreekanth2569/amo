import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(job => job.id === id);
        setJob(found);
      });
  }, [id]);

  if (!job) return <p>Loading job details...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>
        <strong>Company:</strong> {job.company}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Salary:</strong> {job.salary}
      </p>
      <p>
        <strong>Description:</strong> {job.description}
      </p>
    </div>
  );
}

export default JobDetail;
