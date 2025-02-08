import React from 'react';
import { Link } from 'react-router-dom';
import cisco from '../logos/cisco1.jpg';
// import googleImg from '../logos/google.png';
import jpmorgan from '../logos/JPMorgan.png'
import salesforce from '../logos/salesforce.png'
import microsoft from '../logos/Microsoft.png'
import googleImg from "../logos/Google-Logo (1).png"
import './company-logo.css';  // Add this import to apply the styles


function CompanyLogo() {
  const companies = [
    { name: 'GOOGLE', logo: googleImg },
    { name: 'CISCO', logo: cisco },
    { name: 'JP MORGAN', logo: jpmorgan },
    { name: 'SALESFORCE', logo:  salesforce},
    { name: 'MICROSOFT', logo: microsoft },
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
