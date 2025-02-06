import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { projectId } = useParams();

  const projectDetails = {
    1: { teamLead: 'John', employees: ['Alice', 'Bob'], techStack: 'React, Node', startDate: '2025-01-01', deadline: '2025-06-01' },
    2: { teamLead: 'Sarah', employees: ['Charlie', 'Diana'], techStack: 'Angular, Java', startDate: '2025-02-01', deadline: '2025-07-01' },
    3: { teamLead: 'David', employees: ['Eve', 'Frank'], techStack: 'Vue, Python', startDate: '2025-03-01', deadline: '2025-08-01' },
  };

  const project = projectDetails[projectId];

  return (
    <div className="project-detail">
      <h2>Project Details</h2>
      <h3>Team Lead: {project.teamLead}</h3>
      <p><strong>Employees:</strong> {project.employees.join(', ')}</p>
      <p><strong>Tech Stack:</strong> {project.techStack}</p>
      <p><strong>Start Date:</strong> {project.startDate}</p>
      <p><strong>Deadline:</strong> {project.deadline}</p>
    </div>
  );
}

export default ProjectDetail;
