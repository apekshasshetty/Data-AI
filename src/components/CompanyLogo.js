import React from 'react';
import { Link } from 'react-router-dom';
import cisco from '../logos/cisco.png';
import googleImg from '../logos/google.png';
import jpmorgan from '../logos/JPMorgan.png'
import salesforce from '../logos/salesforce.png'
import microsoft from '../logos/Microsoft.png'

function CompanyLogo() {
  const companies = [
    { name: 'Company A', logo: googleImg },
    { name: 'Company B', logo: cisco },
    { name: 'Company C', logo: jpmorgan },
    { name: 'Company D', logo:  salesforce},
    { name: 'Company E', logo: microsoft },
  ];

  return (
    <div className="company-logos">
      {companies.map((company, index) => (
        <Link key={index} to={`/company/${company.name}`}>
          <div className="company-logo">
          <img src={company.logo} alt={company.name} />
            <p>{company.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CompanyLogo;
