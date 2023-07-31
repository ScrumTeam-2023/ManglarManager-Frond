import React from 'react';
import GraficaTask from '../../Components/Grafic/GraficaTask ';
import EmployeeGrafic  from '../../Components/Grafic/EmployeeGrafic ';
import PerdidasGrafic from '../../Components/Grafic/PerdidasGrafic';

export const GraficPage = () => {
  return (
    <div>
      <h1>Gráficas</h1>
      <h2>Tareas</h2>
      <GraficaTask />
      <h2>Empleados con más tareas completadas</h2>
      <EmployeeGrafic />
      <h2>Quejas</h2>
      <PerdidasGrafic />
    </div>
  );
};

