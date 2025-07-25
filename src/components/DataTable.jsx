import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { Download, Table, Search, SortAsc, SortDesc } from 'lucide-react';
import './DataTable.css';

const DataTable = ({ data, indicator, countries }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'Year', direction: 'desc' });

  if (!data || data.length === 0) {
    return (
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">
            <Table size={24} />
            Tableau des données
          </h2>
        </div>
        <div className="no-table-data">
          <Table size={48} />
          <h3>Aucune donnée disponible</h3>
          <p>Sélectionnez un indicateur et des pays pour voir le tableau</p>
        </div>
      </div>
    );
  }

  // Enrichir les données avec les noms de pays
  const enrichedData = data.map(item => {
    const country = countries.find(c => c.CountryCode === item.CountryCode);
    return {
      ...item,
      CountryName: country ? country.CountryName : item.CountryCode
    };
  });

  // Filtrage
  const filteredData = enrichedData.filter(item =>
    item.CountryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.Year.toString().includes(searchTerm)
  );

  // Tri
  const sortedData = [...filteredData].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === 'string') {
      return sortConfig.direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return sortConfig.direction === 'asc'
      ? aValue - bValue
      : bValue - aValue;
  });

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) return null;
    return sortConfig.direction === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />;
  };

  const exportToCSV = () => {
    const csvData = sortedData.map(item => ({
      'Pays': item.CountryName,
      'Année': item.Year,
      'Valeur': item.Value,
      'Indicateur': indicator?.IndicatorName || 'Indicateur'
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const filename = `donnees-sante-${indicator?.IndicatorCode || 'data'}-${new Date().toISOString().split('T')[0]}.csv`;
    saveAs(blob, filename);
  };

  const exportToExcel = () => {
    // Simulation d'export Excel (format CSV avec extension .xlsx)
    const csvData = sortedData.map(item => ({
      'Pays': item.CountryName,
      'Année': item.Year,
      'Valeur': item.Value,
      'Indicateur': indicator?.IndicatorName || 'Indicateur'
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const filename = `donnees-sante-${indicator?.IndicatorCode || 'data'}-${new Date().toISOString().split('T')[0]}.xlsx`;
    saveAs(blob, filename);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className="table-title">
          <Table size={24} />
          {indicator?.IndicatorName || 'Données de santé'}
        </h2>
        {indicator?.Description && (
          <p className="table-description">{indicator.Description}</p>
        )}
      </div>

      <div className="table-controls">
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input
            // style={{ textTransform: 'capitalize' }}
            className="search-input text-gray-900"
            placeholder="Rechercher par pays ou année..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="export-buttons">
          <button className="export-button csv" onClick={exportToCSV}>
            <Download size={16} />
            Exporter CSV
          </button>
          <button className="export-button excel" onClick={exportToExcel}>
            <Download size={16} />
            Exporter Excel
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th
                className="sortable"
                onClick={() => handleSort('CountryName')}
              >
                <span>Pays</span>
                {getSortIcon('CountryName')}
              </th>
              <th
                className="sortable"
                onClick={() => handleSort('Year')}
              >
                <span>Année</span>
                {getSortIcon('Year')}
              </th>
              <th
                className="sortable"
                onClick={() => handleSort('Value')}
              >
                <span>Valeur</span>
                {getSortIcon('Value')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={`${item.CountryCode}-${item.Year}`} className={index % 2 === 0 ? 'even' : 'odd'}>
                <td className="country-cell">{item.CountryName}</td>
                <td className="year-cell">{item.Year}</td>
                <td className="value-cell">
                  {item.Value !== null ? item.Value.toFixed(2) : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <p className="table-info">
          {sortedData.length} entrée(s) • {[...new Set(sortedData.map(d => d.CountryCode))].length} pays •
          {[...new Set(sortedData.map(d => d.Year))].length} année(s)
        </p>
      </div>
    </div>
  );
};

export default DataTable;