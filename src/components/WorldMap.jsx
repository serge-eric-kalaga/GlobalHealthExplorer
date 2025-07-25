import React, { useState } from 'react';
import { Map, Info } from 'lucide-react';
import './WorldMap.css';

// Données géographiques plus réalistes (formes simplifiées des pays)
const worldCountries = {
  FRA: {
    name: "France",
    path: "M 280 140 L 285 135 L 295 138 L 300 145 L 295 155 L 285 158 L 275 155 L 270 148 Z"
  },
  DEU: {
    name: "Germany",
    path: "M 300 130 L 315 128 L 320 135 L 318 148 L 308 152 L 295 150 L 290 142 L 295 132 Z"
  },
  USA: {
    name: "United States",
    path: "M 50 160 L 180 155 L 190 165 L 185 185 L 170 190 L 140 188 L 80 192 L 45 185 L 40 170 Z"
  },
  BRA: {
    name: "Brazil",
    path: "M 200 220 L 240 225 L 250 245 L 245 270 L 235 285 L 215 290 L 195 285 L 185 265 L 190 245 Z"
  },
  CHN: {
    name: "China",
    path: "M 480 150 L 530 145 L 550 155 L 545 175 L 535 185 L 515 188 L 485 185 L 470 170 L 475 155 Z"
  },
  GBR: {
    name: "United Kingdom",
    path: "M 260 125 L 270 120 L 275 128 L 272 138 L 265 142 L 255 140 L 252 132 Z"
  },
  ITA: {
    name: "Italy",
    path: "M 310 155 L 318 152 L 325 165 L 322 180 L 315 185 L 308 182 L 305 170 Z"
  },
  ESP: {
    name: "Spain",
    path: "M 250 155 L 280 158 L 285 168 L 280 175 L 265 178 L 245 175 L 240 165 Z"
  }
};

const getColorFromValue = (value, min, max) => {
  if (value === null || isNaN(value) || max === min) return '#e5e7eb';

  const intensity = (value - min) / (max - min);

  // Palette de couleurs améliorée : du bleu (faible) au rouge (élevé)
  if (intensity < 0.2) return '#3b82f6'; // Bleu
  if (intensity < 0.4) return '#06b6d4'; // Cyan
  if (intensity < 0.6) return '#10b981'; // Vert
  if (intensity < 0.8) return '#f59e0b'; // Orange
  return '#ef4444'; // Rouge
};

const Legend = ({ data, indicator }) => {
  if (!data || data.length === 0) return null;

  const values = data.map(d => d.Value).filter(v => v !== null && !isNaN(v));
  if (values.length === 0) return null;

  const min = Math.min(...values);
  const max = Math.max(...values);

  return (
    <div className="map-legend">
      <h4 className="legend-title">
        <Info size={16} />
        Légende
      </h4>
      <div className="legend-content">
        <div className="legend-scale">
          <div className="legend-gradient" />
          <div className="legend-labels">
            <span>{min.toFixed(1)}</span>
            <span>{max.toFixed(1)}</span>
          </div>
        </div>
        <p className="legend-unit">{indicator?.IndicatorName || 'Valeur'}</p>
      </div>
    </div>
  );
};

const WorldMap = ({ data, indicator, selectedYear }) => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  if (!data || data.length === 0) {
    return (
      <div className="map-container">
        <div className="map-header">
          <h2 className="map-title">
            <Map size={24} />
            Carte mondiale des données de santé
          </h2>
        </div>
        <div className="no-map-data">
          <Map size={48} />
          <h3>Aucune donnée cartographique disponible</h3>
          <p>Sélectionnez un indicateur et des pays pour voir la visualisation sur carte</p>
        </div>
      </div>
    );
  }

  // Filtrer les données pour l'année sélectionnée
  const yearData = data.filter(d => d.Year === selectedYear);
  const dataMap = yearData.reduce((acc, item) => {
    acc[item.CountryCode] = item.Value;
    return acc;
  }, {});

  // Calculer min/max pour les couleurs
  const values = yearData.map(d => d.Value).filter(v => v !== null && !isNaN(v));
  const min = values.length > 0 ? Math.min(...values) : 0;
  const max = values.length > 0 ? Math.max(...values) : 0;

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="map-container">
      <div className="map-header">
        <h2 className="map-title">
          <Map size={24} />
          {indicator?.IndicatorName || 'Données de santé'} - {selectedYear}
        </h2>
        {indicator?.Description && (
          <p className="map-description">{indicator.Description}</p>
        )}
      </div>

      <div className="map-content">
        <div className="svg-map-container">
          <svg
            viewBox="0 0 600 400"
            className="world-map-svg"
            onMouseMove={handleMouseMove}
          >
            {/* Fond océan */}
            <rect width="600" height="400" fill="#e0f2fe" />

            {/* Pays */}
            {Object.entries(worldCountries).map(([countryCode, country]) => {
              const value = dataMap[countryCode];
              const hasData = value !== undefined;

              return (
                <path
                  key={countryCode}
                  d={country.path}
                  fill={hasData ? getColorFromValue(value, min, max) : '#f3f4f6'}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className={`country-path ${hasData ? 'has-data' : 'no-data'}`}
                  onMouseEnter={() => setHoveredCountry({ countryCode, country, value })}
                  onMouseLeave={() => setHoveredCountry(null)}
                />
              );
            })}
          </svg>

          {/* Tooltip */}
          {hoveredCountry && (
            <div
              className="map-tooltip"
              style={{
                position: 'fixed',
                left: mousePos.x + 10,
                top: mousePos.y - 10,
                zIndex: 1000
              }}
            >
              <h4>{hoveredCountry.country.name}</h4>
              <p><strong>{indicator?.IndicatorName || 'Indicateur'}:</strong></p>
              <p className="tooltip-value">
                {hoveredCountry.value !== undefined ? hoveredCountry.value.toFixed(2) : 'Aucune donnée'}
              </p>
              <p className="tooltip-year">Année: {selectedYear}</p>
            </div>
          )}
        </div>

        <Legend data={yearData} indicator={indicator} />
      </div>
    </div>
  );
};

export default WorldMap;