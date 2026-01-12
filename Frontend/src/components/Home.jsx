import React from 'react';
import '../css/home.css';
import DashboardLayout from '../layout/DashboradLayout';

const Home = () => {
  return (
 
  <DashboardLayout>
    <div>
       <h1>Resumen general</h1>

      <div className="metrics-grid">
        <div className="card metric">
          <h3>Usuarios</h3>
          <p className="number">25</p>
        </div>

        <div className="card metric">
          <h3>Cortes realizados</h3>
          <p className="number">100</p>
        </div>

        <div className="card metric highlight">
          <h3>Citas hoy</h3>
          <p className="number">6</p>
        </div>
      </div>

      <div className="card ranking-container">
        <h2>Ranking de clientes frecuentes</h2>

        <table className="ranking-table">
          <thead>
            <tr>
              <th>Puesto</th>
              <th>Nombre</th>
              <th>Cortes Totales</th>
              <th>Última Cita</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Juan Pérez</td>
              <td>15</td>
              <td>24/01/2025</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>

  </DashboardLayout>

  );
};

export default Home;
