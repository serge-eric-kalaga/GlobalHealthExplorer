import React from 'react';
import { BarChart3, Map, Table, Calendar, Globe2, TrendingUp } from 'lucide-react';
import IndicatorSelector from './IndicatorSelector';
import CountrySelector from './CountrySelector';
import YearRangeSelector from './YearRangeSelector';
import './ControlPanel.css';

const ControlPanel = ({
  indicators,
  countries,
  selectedIndicator,
  selectedCountries,
  selectedYearRange,
  onIndicatorChange,
  onCountryChange,
  onYearRangeChange,
  onViewChange,
  activeView
}) => {
  const viewOptions = [
    { id: 'charts', label: 'Graphiques', icon: BarChart3 },
    { id: 'map', label: 'Carte', icon: Map },
    { id: 'table', label: 'Tableau', icon: Table }
  ];

  return (
    <div className="control-panel">
      <div className="control-section">
        <h2 className="section-title">
          <TrendingUp size={20} />
          Sélection des données
        </h2>

        <div className="controls-grid">
          <div className="control-group indicator-group">
            <label className="control-label">
              <Globe2 size={16} />
              Indicateur de santé
            </label>
            <IndicatorSelector
              indicators={indicators}
              selectedIndicator={selectedIndicator}
              onIndicatorChange={onIndicatorChange}
            />
          </div>

          <div className="control-group country-group">
            <label className="control-label">
              <Globe2 size={16} />
              Pays/Régions
            </label>
            <CountrySelector
              countries={countries}
              selectedCountries={selectedCountries}
              onCountryChange={onCountryChange}
            />
          </div>

          <div className="control-group year-group">
            <label className="control-label">
              <Calendar size={16} />
              Période
            </label>
            <YearRangeSelector
              selectedYearRange={selectedYearRange}
              onYearRangeChange={onYearRangeChange}
            />
          </div>
        </div>
      </div>

      <div className="view-selector">
        <h3 className="view-title">Mode d'affichage</h3>
        <div className="view-buttons">
          {viewOptions.map((view) => {
            const IconComponent = view.icon;
            return (
              <button
                key={view.id}
                className={`view-button ${activeView === view.id ? 'active' : ''}`}
                onClick={() => onViewChange(view.id)}
              >
                <IconComponent size={18} />
                <span>{view.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;