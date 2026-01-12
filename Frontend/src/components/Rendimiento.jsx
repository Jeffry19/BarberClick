import React from "react";
import DashboardLayout from "../layout/DashboradLayout.jsx";
import '../css/rendimiento.css';

const Rendimiento = () => {
  return (
    <DashboardLayout>
      
      <h1>Rendimiento</h1>

      {/* Grid de Análisis */}
      <div className="analytics-grid">

        {/* Gráfico de Promedio de Cortes (Bar) */}
        <div className="card chart-large">
          <div className="card-header">
            <h2>Promedio de cortes por día</h2>

            <select className="date-filter">
              <option>Esta semana</option>
              <option>Mes pasado</option>
            </select>
          </div>

          <div className="chart-placeholder bar-chart">
            <div className="bar" style={{ height: "60%" }}>
              <span>Lun</span>
            </div>
            <div className="bar" style={{ height: "80%" }}>
              <span>Mar</span>
            </div>
            <div className="bar highlight" style={{ height: "95%" }}>
              <span>Mie</span>
            </div>
            <div className="bar" style={{ height: "70%" }}>
              <span>Jue</span>
            </div>
            <div className="bar" style={{ height: "85%" }}>
              <span>Vie</span>
            </div>
            <div className="bar" style={{ height: "100%" }}>
              <span>Sab</span>
            </div>
          </div>
        </div>

        {/* Tarjeta de Ingresos Totales */}
        <div className="card income-summary">
          <h3>Ingresos totales</h3>
          <p className="income-value">$ 29 m</p>

          <span className="trend positive">
            <i className="fas fa-arrow-up"></i> +12% vs mes pasado
          </span>
        </div>

        {/* Gráfico de Ingresos por Periodo (Line) */}
        <div className="card chart-full">
          <h2>Ingresos por periodo</h2>

          <div className="chart-placeholder line-chart">
            <svg viewBox="0 0 500 100" className="svg-line">
              <polyline
                fill="none"
                stroke="#ec4899"
                strokeWidth="3"
                points="0,80 50,70 100,85 150,40 200,50 250,20 300,45 350,10 400,30 500,0"
              />
            </svg>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
};

export default Rendimiento;
