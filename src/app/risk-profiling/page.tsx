"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import RiskProfilingForm from '@/components/RiskProfilingForm';

export default function RiskProfiling() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Risk Profiling</h1>
      <RiskProfilingForm />
      <Link href="/goals" className="mt-4">
        <Button>Continue to Goals</Button>
      </Link>
    </div>
  );
}