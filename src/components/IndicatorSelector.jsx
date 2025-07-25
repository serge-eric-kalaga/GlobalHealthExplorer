import React from 'react';
import './IndicatorSelector.css';

const IndicatorSelector = ({ indicators, selectedIndicator, onIndicatorChange }) => {
  const handleChange = (event) => {
    onIndicatorChange(event.target.value);
  };

  return (
    <div className="indicator-selector">
      <select
        className="indicator-select"
        value={selectedIndicator}
        onChange={handleChange}
      >
        <option value="">Sélectionner un indicateur...</option>
        {indicators.map((indicator) => (
          <option key={indicator.IndicatorCode} value={indicator.IndicatorCode}>
            {indicator.IndicatorName}
          </option>
        ))}
      </select>
      
      {selectedIndicator && (
        <div className="indicator-info">
          {indicators.find(i => i.IndicatorCode === selectedIndicator)?.Description && (
            <p className="indicator-description">
              {indicators.find(i => i.IndicatorCode === selectedIndicator).Description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default IndicatorSelector;