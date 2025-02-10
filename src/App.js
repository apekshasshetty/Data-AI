import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CompanyLogo from './components/CompanyLogo';
import Page from './components/Page'; // Import FrontPage as Page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* FrontPage component as home page */}
          <Route path="/" element={<Page />} /> 
          
          {/* Define company page with dynamic routing */}
          <Route path="/company/:companyName" element={<CompanyLogo />} /> 
          {/* <Route path="/Clients" */}
          {/* Other Route for Page */}
          <Route path="/Page" element={<Page />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
