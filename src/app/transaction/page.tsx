"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Transaction() {
  const [otp, setOtp] = useState('');
  const [executed, setExecuted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate OTP verification
    setExecuted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Execute Transaction</h1>
      {!executed ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="p-2 border rounded"
          />
          <Button type="submit">Verify OTP</Button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-4">Transaction executed successfully!</p>
          <p className="text-lg">
            Congratulations! You're on your way to fulfilling your financial goals!
          </p>
        </div>
      )}
    </div>
  );
}