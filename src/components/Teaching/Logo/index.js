import React from 'react';
import TeachingImg from '../../../assets/images/Teaching.png';
import './index.scss';

const TeachingLogo = () => {
  return (
    <div className="teaching-logo-container">
      <img className="solid-logo animated fadeIn" src={TeachingImg} alt="Teaching" />
    </div>
  );
};

export default TeachingLogo;
