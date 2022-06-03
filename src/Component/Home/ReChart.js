import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ReCharts.css';
const ReChart = () => {
    const data = [
        {
          name: '2001',
          Sales: 1000,
          Benefit: 400,
          amt: 2400,
        },
        {
          name: '2005',
          Sales: 1500,
          Benefit: 698,
          amt: 2210,
        },
        {
          name: '2010',
          Sales: 2000,
          Benefit: 800,
          amt: 2290,
        },
        {
          name: '2015',
          Sales: 2780,
          Benefit: 908,
          amt: 2000,
        },
        {
          name: '2020',
          Sales: 3890,
          Benefit: 1800,
          amt: 2181,
        },
        {
          name: '2022',
          Sales: 5390,
          Benefit: 2800,
          amt: 2500,
        },
      ];

    return (
        <div className='reCharts mx-auto'>
            <h4 className='text-primary text-decoration-underline fw-bold my-5 text-center'>Your Seals over the Year</h4>
            <ResponsiveContainer width="90%" height={250}>
            <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Benefit" stroke="#82ca9d" />
        </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReChart;