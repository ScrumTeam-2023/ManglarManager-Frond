import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GraficaTask = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTaskCount();
  }, []);

  const fetchTaskCount = async () => {
  try {
    const response = await axios.get('http://localhost:3000/task/getTask');
    const countTareas = response.data.countTareas;

    // Asegurémonos de que los datos estén en el formato adecuado para Recharts
    const data = [
      {
        name: 'Total Tasks',
        count: countTareas,
      },
    ];

    setData(data);
  } catch (error) {
    console.error('Error al obtener el contador de tareas:', error);
  }
};


  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraficaTask;
