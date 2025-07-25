import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import './ErrorMessage.css';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-message">
      <div className="error-content">
        <AlertCircle className="error-icon" size={32} />
        <div className="error-text">
          <h3 className="error-title">Une erreur s'est produite</h3>
          <p className="error-description">{message}</p>
        </div>
        {onRetry && (
          <button className="retry-button" onClick={onRetry}>
            <RefreshCw size={16} />
            Réessayer
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;