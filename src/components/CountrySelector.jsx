import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import './CountrySelector.css';

const CountrySelector = ({ countries, selectedCountries, onCountryChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredCountries = countries.filter(country =>
    country.CountryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountryToggle = (countryCode) => {
    const newSelection = selectedCountries.includes(countryCode)
      ? selectedCountries.filter(code => code !== countryCode)
      : [...selectedCountries, countryCode];
    
    onCountryChange(newSelection);
  };

  const removeCountry = (countryCode) => {
    onCountryChange(selectedCountries.filter(code => code !== countryCode));
  };

  const getCountryName = (countryCode) => {
    const country = countries.find(c => c.CountryCode === countryCode);
    return country ? country.CountryName : countryCode;
  };

  return (
    <div className="country-selector">
      <div className="selected-countries">
        {selectedCountries.map(countryCode => (
          <div key={countryCode} className="selected-country">
            <span>{getCountryName(countryCode)}</span>
            <button
              className="remove-country"
              onClick={() => removeCountry(countryCode)}
              aria-label={`Supprimer ${getCountryName(countryCode)}`}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className="country-dropdown">
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input
            style={{color:"black"}}
            type="text"
            className="country-search text-red"
            placeholder="Rechercher un pays..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
          />
        </div>

        {isOpen && (
          <>
            <div className="dropdown-overlay" onClick={() => setIsOpen(false)} />
            <div className="country-list">
              {filteredCountries.slice(0, 10).map(country => (
                <button
                  key={country.CountryCode}
                  className={`country-option ${
                    selectedCountries.includes(country.CountryCode) ? 'selected' : ''
                  }`}
                  onClick={() => handleCountryToggle(country.CountryCode)}
                >
                  <span>{country.CountryName}</span>
                  {selectedCountries.includes(country.CountryCode) && (
                    <span className="selected-indicator">✓</span>
                  )}
                </button>
              ))}
              {filteredCountries.length === 0 && (
                <div className="no-results">Aucun pays trouvé</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountrySelector;