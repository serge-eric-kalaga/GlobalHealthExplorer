import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut, Radar, Scatter, PolarArea, Bubble } from 'react-chartjs-2';
import { TrendingUp, BarChart3, PieChart, Target, ChartScatter as ScatterIcon, Zap, Activity, Layers } from 'lucide-react';
import './DataVisualization.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DataVisualization = ({ data, indicator, countries }) => {
  if (!data || data.length === 0) {
    return (
      <div className="no-data">
        <TrendingUp size={48} />
        <h3>Aucune donnée disponible</h3>
        <p>Sélectionnez un indicateur et des pays pour voir les graphiques</p>
      </div>
    );
  }

  // Préparation des données pour les graphiques
  const years = [...new Set(data.map(d => d.Year))].sort();
  const countryData = countries.reduce((acc, country) => {
    const countryValues = data.filter(d => d.CountryCode === country.CountryCode);
    if (countryValues.length > 0) {
      acc[country.CountryCode] = {
        name: country.CountryName,
        data: years.map(year => {
          const yearData = countryValues.find(d => d.Year === year);
          return yearData ? yearData.Value : null;
        })
      };
    }
    return acc;
  }, {});

  // Configuration des couleurs étendues
  const colors = [
    '#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
    '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#6366f1',
    '#14b8a6', '#f43f5e', '#a855f7', '#3b82f6', '#22c55e',
    '#eab308', '#dc2626', '#9333ea', '#0ea5e9', '#65a30d'
  ];

  // Données pour le graphique linéaire avec zone
  const areaChartData = {
    labels: years,
    datasets: Object.entries(countryData).map(([countryCode, countryInfo], index) => ({
      label: countryInfo.name,
      data: countryInfo.data,
      borderColor: colors[index % colors.length],
      backgroundColor: colors[index % colors.length] + '20',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: colors[index % colors.length],
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 3,
      pointHoverRadius: 6
    }))
  };

  // Données pour le graphique linéaire simple
  const lineChartData = {
    labels: years,
    datasets: Object.entries(countryData).map(([countryCode, countryInfo], index) => ({
      label: countryInfo.name,
      data: countryInfo.data,
      borderColor: colors[index % colors.length],
      backgroundColor: colors[index % colors.length] + '10',
      fill: false,
      tension: 0.3,
      pointBackgroundColor: colors[index % colors.length],
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }))
  };

  // Données pour le graphique en barres (dernière année)
  const latestYear = Math.max(...years);
  const latestData = Object.entries(countryData).map(([countryCode, countryInfo]) => {
    const latestValue = countryInfo.data[countryInfo.data.length - 1];
    return {
      country: countryInfo.name,
      value: latestValue
    };
  }).filter(d => d.value !== null);

  const barChartData = {
    labels: latestData.map(d => d.country),
    datasets: [{
      label: `${indicator?.IndicatorName || 'Indicateur'} (${latestYear})`,
      data: latestData.map(d => d.value),
      backgroundColor: colors.slice(0, latestData.length).map(color => color + '80'),
      borderColor: colors.slice(0, latestData.length),
      borderWidth: 2,
      borderRadius: 6,
      borderSkipped: false
    }]
  };

  // Données pour le graphique en barres horizontales
  const horizontalBarData = {
    labels: latestData.map(d => d.country),
    datasets: [{
      label: `${indicator?.IndicatorName || 'Indicateur'} (${latestYear})`,
      data: latestData.map(d => d.value),
      backgroundColor: colors.slice(0, latestData.length).map(color => color + '70'),
      borderColor: colors.slice(0, latestData.length),
      borderWidth: 2
    }]
  };

  // Données pour le graphique en secteurs
  const doughnutData = {
    labels: latestData.map(d => d.country),
    datasets: [{
      label: `${indicator?.IndicatorName || 'Indicateur'} (${latestYear})`,
      data: latestData.map(d => d.value),
      backgroundColor: colors.slice(0, latestData.length).map(color => color + '80'),
      borderColor: colors.slice(0, latestData.length),
      borderWidth: 3,
      hoverOffset: 8
    }]
  };

  // Données pour le graphique polaire
  const polarAreaData = {
    labels: latestData.map(d => d.country),
    datasets: [{
      label: `${indicator?.IndicatorName || 'Indicateur'} (${latestYear})`,
      data: latestData.map(d => d.value),
      backgroundColor: colors.slice(0, latestData.length).map(color => color + '60'),
      borderColor: colors.slice(0, latestData.length),
      borderWidth: 2
    }]
  };

  // Données pour le graphique radar
  const radarData = {
    labels: years.slice(-6), // 6 dernières années
    datasets: Object.entries(countryData).slice(0, 4).map(([countryCode, countryInfo], index) => ({
      label: countryInfo.name,
      data: countryInfo.data.slice(-6),
      borderColor: colors[index % colors.length],
      backgroundColor: colors[index % colors.length] + '25',
      pointBackgroundColor: colors[index % colors.length],
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: colors[index % colors.length],
      pointRadius: 4,
      pointHoverRadius: 6
    }))
  };

  // Données pour le graphique de dispersion
  const scatterData = {
    datasets: Object.entries(countryData).map(([countryCode, countryInfo], index) => ({
      label: countryInfo.name,
      data: countryInfo.data.map((value, yearIndex) => ({
        x: years[yearIndex],
        y: value
      })).filter(point => point.y !== null),
      backgroundColor: colors[index % colors.length] + '80',
      borderColor: colors[index % colors.length],
      pointRadius: 6,
      pointHoverRadius: 8
    }))
  };

  // Données pour le graphique à bulles
  const bubbleData = {
    datasets: Object.entries(countryData).map(([countryCode, countryInfo], index) => ({
      label: countryInfo.name,
      data: countryInfo.data.map((value, yearIndex) => ({
        x: years[yearIndex],
        y: value,
        r: Math.abs(value) / 10 + 5 // Taille de bulle basée sur la valeur
      })).filter(point => point.y !== null),
      backgroundColor: colors[index % colors.length] + '60',
      borderColor: colors[index % colors.length],
      borderWidth: 2
    }))
  };

  // Options des graphiques
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 15,
          usePointStyle: true,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          maxRotation: 45,
          font: {
            size: 11
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        beginAtZero: false,
        ticks: {
          font: {
            size: 11
          }
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  const horizontalBarOptions = {
    ...chartOptions,
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        beginAtZero: false
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 15,
          usePointStyle: true,
          font: {
            size: 11
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 8,
        padding: 12
      }
    }
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 15,
          usePointStyle: true,
          font: {
            size: 11
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          font: {
            size: 10
          }
        }
      }
    }
  };

  const polarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 15,
          usePointStyle: true,
          font: {
            size: 11
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  return (
    <div className="data-visualization">
      <div className="chart-header">
        <h2 className="chart-title">
          <TrendingUp size={24} />
          {indicator?.IndicatorName || 'Données de santé'}
        </h2>
        {indicator?.Description && (
          <p className="chart-description">{indicator.Description}</p>
        )}
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <div className="chart-header-section">
            <h3 className="chart-section-title">
              <TrendingUp size={18} />
              Évolution temporelle (Zone)
            </h3>
          </div>
          <div className="chart-wrapper">
            <Line data={areaChartData} options={chartOptions} />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header-section">
            <h3 className="chart-section-title">
              <Activity size={18} />
              Tendances linéaires
            </h3>
          </div>
          <div className="chart-wrapper">
            <Line data={lineChartData} options={chartOptions} />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header-section">
            <h3 className="chart-section-title">
              <BarChart3 size={18} />
              Comparaison {latestYear}
            </h3>
          </div>
          <div className="chart-wrapper">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header-section">
            <h3 className="chart-section-title">
              <Layers size={18} />
              Barres horizontales ({latestYear})
            </h3>
          </div>
          <div className="chart-wrapper">
            <Bar data={horizontalBarData} options={horizontalBarOptions} />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header-section">
            <h3 className="chart-section-title">
              <PieChart size={18} />
              Répartition par pays ({latestYear})
            </h3>
          </div>
          <div className="chart-wrapper">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header-section">
            <h3 className="chart-section-title">
              <Zap size={18} />
              Graphique polaire ({latestYear})
            </h3>
          </div>
          <div className="chart-wrapper">
            <PolarArea data={polarAreaData} options={polarOptions} />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header-section">
            <h3 className="chart-section-title">
              <Target size={18} />
              Analyse radar (6 dernières années)
            </h3>
          </div>
          <div className="chart-wrapper">
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header-section">
            <h3 className="chart-section-title">
              <ScatterIcon size={18} />
              Dispersion temporelle
            </h3>
          </div>
          <div className="chart-wrapper">
            <Scatter data={scatterData} options={chartOptions} />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header-section">
            <h3 className="chart-section-title">
              <Activity size={18} />
              Graphique à bulles
            </h3>
          </div>
          <div className="chart-wrapper">
            <Bubble data={bubbleData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;