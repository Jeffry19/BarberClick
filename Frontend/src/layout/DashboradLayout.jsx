import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <i className="fas fa-cut"></i>
          <span>BarberAdmin</span>
        </div>

        <nav className="menu">
          <a href="/" className="active">
            <i className="fas fa-home"></i>
            <span>Inicio</span>
          </a>

          <a href="/rendimiento">
            <i className="fas fa-chart-line"></i>
            <span>Rendimiento</span>
          </a>

          <a href="/calendario">
            <i className="fas fa-calendar-alt"></i>
            <span>Calendario</span>
          </a>

          <a href="#">
            <i className="fas fa-users"></i>
            <span>Clientes</span>
          </a>
        </nav>

        <div className="logout">
          <a href="#">
            <i className="fas fa-sign-out-alt"></i>
            <span>Cerrar Sesión</span>
          </a>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Buscar clientes o citas..." />
          </div>

          <div className="user-profile">
            <span>Jeffry Medina Oconitrillo</span>
            <img src="https://via.placeholder.com/40" alt="Perfil" />
          </div>
        </header>

        <section className="content">{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
