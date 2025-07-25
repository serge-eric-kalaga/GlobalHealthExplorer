import React from 'react';
import { Loader2 } from 'lucide-react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ message = "Chargement des données..." }) => {
  return (
    <div className="loading-spinner">
      <div className="spinner-container">
        <Loader2 className="spinner-icon" size={40} />
        <p className="spinner-message">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;