import React from 'react';
import { Link } from 'react-router-dom';
import './Frontpage.css'; // Optional: Add custom CSS for the front page

const Page = () => {
  return (
    <div className="front-page">
      <h1>Welcome to Our Website!</h1>
      <p>Click below to explore Data Analytics and Company Logos.</p>
      
      {/* Change this link to a correct path you wish to navigate */}
      <Link to="/company-logos">
        <button className="cta-button">Data Analytics</button>
      </Link>
    </div>
  );
};

export default Page;
