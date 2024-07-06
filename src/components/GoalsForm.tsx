import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Goal {
  type: string;
  amount: string;
  year: string;
  frequency: string;
}

export default function GoalsForm() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = () => {
    setGoals([...goals, { type: '', amount: '', year: '', frequency: '' }]);
  };

  const updateGoal = (index: number, field: keyof Goal, value: string) => {
    const updatedGoals = [...goals];
    updatedGoals[index][field] = value;
    setGoals(updatedGoals);
  };

  return (
    <div className="space-y-4">
      {goals.map((goal, index) => (
        <div key={index} className="border p-4 rounded">
          <select
            value={goal.type}
            onChange={(e) => updateGoal(index, 'type', e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          >
            <option value="">Select goal type</option>
            <option value="education">Children's Education</option>
            <option value="marriage">Children's Marriage</option>
            <option value="asset">Asset Purchase</option>
            <option value="retirement">Retirement Planning</option>
          </select>
          <input
            type="number"
            value={goal.amount}
            onChange={(e) => updateGoal(index, 'amount', e.target.value)}
            placeholder="Desired spend"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="number"
            value={goal.year}
            onChange={(e) => updateGoal(index, 'year', e.target.value)}
            placeholder="Year of spend"
            className="w-full p-2 mb-2 border rounded"
          />
          <select
            value={goal.frequency}
            onChange={(e) => updateGoal(index, 'frequency', e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          >
            <option value="">Select frequency</option>
            <option value="once">One-time</option>
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      ))}
      <Button onClick={addGoal}>Add Goal</Button>
    </div>
  );
}