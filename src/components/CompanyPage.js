import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CompanyPage() {
  const { companyName } = useParams();

  const projects = [
    { id: 1, name: 'Project A', teamLead: 'John', techStack: 'React, Node', startDate: '2025-01-01', deadline: '2025-06-01' },
    { id: 2, name: 'Project B', teamLead: 'Sarah', techStack: 'Angular, Java', startDate: '2025-02-01', deadline: '2025-07-01' },
    { id: 3, name: 'Project C', teamLead: 'David', techStack: 'Vue, Python', startDate: '2025-03-01', deadline: '2025-08-01' },
  ];

  return (
    <div className="company-page">
      <h2>{companyName} Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <div className="project">
              <h3>{project.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
