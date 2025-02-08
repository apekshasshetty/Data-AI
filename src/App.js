import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CompanyLogo from './components/CompanyLogo';
import CompanyPage from './components/CompanyPage';
import ProjectDetail from './components/ProjectDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CompanyLogo />} />
          <Route path="/company/:companyName" element={<CompanyPage />} />
          <Route path="/project/:projectId" component={ProjectDetail} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
