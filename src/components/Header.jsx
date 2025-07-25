import React from 'react';
import { Activity, Globe } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Activity className="logo-icon" size={32} />
          <h1 className="logo-text">
            <span className="logo-primary">Global Health</span>
            <span className="logo-secondary">Explorer</span>
          </h1>
        </div>
        
        <div className="header-info">
          <Globe size={20} />
          <span className="header-subtitle">
            Données de santé publique mondiale - OMS
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;