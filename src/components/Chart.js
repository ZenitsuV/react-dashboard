import React from 'react';
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'Page A', uv: 100, pv: 2100, amt: 2100 },
  { name: 'Page B', uv: 200, pv: 2200, amt: 2200 },
  { name: 'Page C', uv: 300, pv: 2300, amt: 2300 },
  { name: 'Page D', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page E', uv: 500, pv: 2500, amt: 2500 },
  { name: 'Page F', uv: 600, pv: 2600, amt: 2600 },
];

const Chart = () => {
  return (
    <LineChart width={1600} height={550} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;
