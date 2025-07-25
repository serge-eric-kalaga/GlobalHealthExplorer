import React from 'react';
import './YearRangeSelector.css';

const YearRangeSelector = ({ selectedYearRange, onYearRangeChange }) => {
  const currentYear = new Date().getFullYear();
  const minYear = 1990;
  const maxYear = currentYear;

  const handleStartYearChange = (event) => {
    const startYear = parseInt(event.target.value);
    onYearRangeChange({
      ...selectedYearRange,
      start: startYear,
      end: Math.max(startYear, selectedYearRange.end)
    });
  };

  const handleEndYearChange = (event) => {
    const endYear = parseInt(event.target.value);
    onYearRangeChange({
      ...selectedYearRange,
      end: endYear,
      start: Math.min(selectedYearRange.start, endYear)
    });
  };

  return (
    <div className="year-range-selector">
      <div className="year-inputs">
        <div className="year-input-group">
          <label className="year-label">De</label>
          <select
            className="year-select"
            value={selectedYearRange.start}
            onChange={handleStartYearChange}
          >
            {Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="year-separator">à</div>

        <div className="year-input-group">
          <label className="year-label">À</label>
          <select
            className="year-select"
            value={selectedYearRange.end}
            onChange={handleEndYearChange}
          >
            {Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="year-range-info">
        <span className="year-range-text">
          Période sélectionnée: {selectedYearRange.end - selectedYearRange.start + 1} année(s)
        </span>
      </div>
    </div>
  );
};

export default YearRangeSelector;