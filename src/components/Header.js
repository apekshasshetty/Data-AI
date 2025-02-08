import React from 'react';
import companyLogo from '../logos/relanto.webp';  // Import the company logo image

function Header() {
  return (
    <header>
      <div className="header-top-block"></div>  {/* Blue block at the top */}
      <div className="header-content">
        <img src={companyLogo} alt="Company Logo" className="relanto-logo" />
        <div className="header-text">
          <h1 className="relanto-title">Relanto</h1>  {/* Apply class to the title */}
          <p>Company XYZ - We Make Things Happen</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
