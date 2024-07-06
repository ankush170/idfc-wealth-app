import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function RiskProfilingForm() {
  const [answers, setAnswers] = useState({
    timeHorizon: '',
    anxietyLevel: '',
    action: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block mb-2">When you make an investment, what is your typical time horizon?</label>
        <select name="timeHorizon" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select an option</option>
          <option value="less1">Less than 1 year</option>
          <option value="1to3">1-3 years</option>
          <option value="3to5">3-5 years</option>
          <option value="5plus">5 years+</option>
        </select>
      </div>
      <div>
        <label className="block mb-2">How would you react if your investment was to go down by 30%?</label>
        <select name="anxietyLevel" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select an option</option>
          <option value="veryAnxious">Very anxious</option>
          <option value="somewhatAnxious">Somewhat anxious</option>
          <option value="curious">Curious to learn the reasons</option>
          <option value="excited">Excited by the opportunity</option>
        </select>
      </div>
      <div>
        <label className="block mb-2">If your investment was to go down by 30%, what would you do?</label>
        <select name="action" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select an option</option>
          <option value="sell">Sell immediately</option>
          <option value="buy">Buy more</option>
          <option value="nothing">Do nothing</option>
        </select>
      </div>
    </form>
  );
}