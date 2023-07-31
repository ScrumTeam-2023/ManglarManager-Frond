import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EmployeeGrafic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/task/EmployeeTask');
      setData(response.data.users);
    } catch (error) {
      console.error('Error al obtener los datos de empleados:', error);
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
        <Bar dataKey="completedTasks" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EmployeeGrafic;
