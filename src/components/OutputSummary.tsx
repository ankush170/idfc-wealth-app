import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Stocks', value: 400 },
  { name: 'Bonds', value: 300 },
  { name: 'Real Estate', value: 200 },
  { name: 'Cash', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function OutputSummary() {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Your Risk Profile: Moderate</h2>
      <div className="mb-4">
        <p>Current Corpus: $100,000</p>
        <p>Required Corpus: $150,000</p>
      </div>
      <h3 className="text-lg font-semibold mb-2">Recommended Portfolio</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center">
            <div
              className="w-4 h-4 mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span>{entry.name}: {entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}