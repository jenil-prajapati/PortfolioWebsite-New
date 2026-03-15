import React from 'react';
import ResearchImg from '../../../assets/images/ResearchAndLeadership.png';
import './index.scss';

const ResearchLogo = () => {
  return (
    <div className="research-logo-container">
      <img className="solid-logo animated fadeIn" src={ResearchImg} alt="Research & Leadership" />
    </div>
  );
};

export default ResearchLogo;
