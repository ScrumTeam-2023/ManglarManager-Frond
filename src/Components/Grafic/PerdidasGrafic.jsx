import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerdidasGrafic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchComplaintCount();
  }, []);

  const fetchComplaintCount = async () => {
    try {
      const response = await axios.get('http://localhost:3000/comp/perdidas');
      setData([{ name: 'Complaints', count: response.data.countComplaints }]);
    } catch (error) {
      console.error('Error al obtener el contador de quejas:', error);
    }
  };

  const getArrowDirection = () => {
    if (data.length > 1 && data[0].count > data[1].count) {
      return 'down';
    }
    return 'up';
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill={getArrowDirection() === 'down' ? 'red' : 'green'} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PerdidasGrafic;
