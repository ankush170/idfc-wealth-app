import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', portfolio: 4000, market: 2400 },
  { name: 'Feb', portfolio: 3000, market: 1398 },
  { name: 'Mar', portfolio: 2000, market: 9800 },
  { name: 'Apr', portfolio: 2780, market: 3908 },
  { name: 'May', portfolio: 1890, market: 4800 },
  { name: 'Jun', portfolio: 2390, market: 3800 },
];

export default function PortfolioGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="portfolio" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="market" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}