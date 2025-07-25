import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import DataVisualization from './components/DataVisualization';
import WorldMap from './components/WorldMap';
import DataTable from './components/DataTable';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { whoAPI } from './services/whoAPI';
import './App.css';

function App() {
  const [indicators, setIndicators] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedIndicator, setSelectedIndicator] = useState('');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedYearRange, setSelectedYearRange] = useState({ start: 2010, end: 2020 });
  const [healthData, setHealthData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeView, setActiveView] = useState('charts');

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    setLoading(true);
    try {
      const [indicatorData, countryData] = await Promise.all([
        whoAPI.getIndicators(),
        whoAPI.getCountries()
      ]);
      
      setIndicators(indicatorData);
      setCountries(countryData);
      
      // Sélectionner des indicateurs par défaut
      if (indicatorData.length > 0) {
        setSelectedIndicator(indicatorData[0].IndicatorCode);
      }
      
      // Sélectionner quelques pays par défaut
      const defaultCountries = countryData.slice(0, 5).map(c => c.CountryCode);
      setSelectedCountries(defaultCountries);
      
    } catch (err) {
      setError('Erreur lors du chargement des données initiales');
      console.error('Initialization error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchHealthData = async () => {
    if (!selectedIndicator || selectedCountries.length === 0) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await whoAPI.getIndicatorData(
        selectedIndicator,
        selectedCountries,
        selectedYearRange
      );
      setHealthData(data);
    } catch (err) {
      setError('Erreur lors de la récupération des données de santé');
      console.error('Fetch data error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedIndicator && selectedCountries.length > 0) {
      fetchHealthData();
    }
  }, [selectedIndicator, selectedCountries, selectedYearRange]);

  const handleIndicatorChange = (indicatorCode) => {
    setSelectedIndicator(indicatorCode);
  };

  const handleCountryChange = (countryCodes) => {
    setSelectedCountries(countryCodes);
  };

  const handleYearRangeChange = (yearRange) => {
    setSelectedYearRange(yearRange);
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <ControlPanel
          indicators={indicators}
          countries={countries}
          selectedIndicator={selectedIndicator}
          selectedCountries={selectedCountries}
          selectedYearRange={selectedYearRange}
          onIndicatorChange={handleIndicatorChange}
          onCountryChange={handleCountryChange}
          onYearRangeChange={handleYearRangeChange}
          onViewChange={handleViewChange}
          activeView={activeView}
        />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <div className="visualization-container">
            {activeView === 'charts' && (
              <DataVisualization
                data={healthData}
                indicator={indicators.find(i => i.IndicatorCode === selectedIndicator)}
                countries={countries}
              />
            )}
            
            {activeView === 'map' && (
              <WorldMap
                data={healthData}
                indicator={indicators.find(i => i.IndicatorCode === selectedIndicator)}
                selectedYear={selectedYearRange.end}
              />
            )}
            
            {activeView === 'table' && (
              <DataTable
                data={healthData}
                indicator={indicators.find(i => i.IndicatorCode === selectedIndicator)}
                countries={countries}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;